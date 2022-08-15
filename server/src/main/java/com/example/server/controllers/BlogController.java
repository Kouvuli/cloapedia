package com.example.server.controllers;


import com.example.server.models.Blog;
import com.example.server.models.Pagination;
import com.example.server.payloads.response.ResponseObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.BlogService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/post")
public class PostController {



    private final BlogService blogService;

    public PostController(BlogService blogService) {
        this.blogService = blogService;
    }



    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getPost(
            @RequestParam(required = false,name = "author_id") String authorId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10")int limit
    ){
        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find post","")
            );
        }
        Page<Blog> postPage= blogService.getBlog(authorId,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(postPage.getTotalPages(),postPage.hasNext(),page,limit),"ok","",postPage.getContent())
                );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getPostById(@PathVariable int id){
        Optional<Blog> post= blogService.getBlogById(id);

        return post.isPresent()?
             ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Query post succesfully",post)
            ):
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed","Cannot find post with id="+id,"")
            );
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertPost(@RequestBody Blog newBlog){
        int authorId = newBlog.getAuthor().getId();
        newBlog.setAuthor(blogService.getUserById(authorId));
        newBlog.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Insert post succesfully", blogService.addBlog(newBlog))
        );
    }

    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updatePost(@RequestBody Blog newBlog, @PathVariable int id){
        Blog updatedBlog = blogService.getBlogById(id)
                .map(post->{
                    post.setContent(newBlog.getContent());
                    post.setTitle(newBlog.getTitle());
                    post.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return blogService.addBlog(post);
                }).orElseGet(()->{
                    newBlog.setId(id);
                    return blogService.addBlog(newBlog);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Update Post successfully", blogService.addBlog(updatedBlog))
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deletePost(@PathVariable int id){
        boolean exists= blogService.ifBlogExists(id);
        if(exists){
            blogService.deleteBlogById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Deleted post succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find post to delete","")
        );
    }

}

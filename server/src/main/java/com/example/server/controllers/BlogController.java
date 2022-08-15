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
@RequestMapping(path = "api/v1/blog")
public class BlogController {



    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }



    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getBlog(
            @RequestParam(required = false,name = "author_id") String authorId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10")int limit
    ){
        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find blog","")
            );
        }
        Page<Blog> blogPage= blogService.getBlog(authorId,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(blogPage.getTotalPages(),blogPage.hasNext(),page,limit),"ok","",blogPage.getContent())
                );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getBlogById(@PathVariable int id){
        Optional<Blog> blog= blogService.getBlogById(id);

        return blog.isPresent()?
             ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Query blog succesfully",blog)
            ):
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed","Cannot find blog with id="+id,"")
            );
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertBlog(@RequestBody Blog newBlog){
        int authorId = newBlog.getAuthor().getId();
        newBlog.setAuthor(blogService.getUserById(authorId));
        newBlog.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Insert blog succesfully", blogService.addBlog(newBlog))
        );
    }

    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateBlog(@RequestBody Blog newBlog, @PathVariable int id){
        Blog updatedBlog = blogService.getBlogById(id)
                .map(blog->{
                    blog.setContent(newBlog.getContent());
                    blog.setHeadline(newBlog.getHeadline());
                    blog.setThumbnail(newBlog.getThumbnail());
                    blog.setTrailText(newBlog.getTrailText());
                    blog.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return blogService.addBlog(blog);
                }).orElseGet(()->{
                    newBlog.setId(id);
                    return blogService.addBlog(newBlog);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Update blog successfully", blogService.addBlog(updatedBlog))
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteBlog(@PathVariable int id){
        boolean exists= blogService.ifBlogExists(id);
        if(exists){
            blogService.deleteBlogById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Deleted blog succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find blog to delete","")
        );
    }

}

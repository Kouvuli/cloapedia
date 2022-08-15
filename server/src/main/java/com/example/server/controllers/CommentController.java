package com.example.server.controllers;

import com.example.server.models.Comment;
import com.example.server.models.Pagination;
import com.example.server.payloads.response.ResponseObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.CommentService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/comment")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getComment(
            @RequestParam(required = false,name = "blog_id") String blogId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10")int limit
    ){

        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find comment","")
            );
        }
        Page<Comment> commentPage=commentService.getComment(blogId,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(commentPage.getTotalPages(),commentPage.hasNext(),page,limit),"ok","",commentPage.getContent())
        );
    }


    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getCommentById(@PathVariable int id){
        Optional<Comment> comment=commentService.getCommentById(id);
        return comment.isPresent()?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("ok","Query comment successfully",comment)
                ):
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("failed","Cannot find comment with id="+id,"")
                );
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertComment(@RequestBody Comment newComment){
        newComment.setAuthor(commentService.getUserById(newComment.getAuthor().getId()));
//        if(newComment.getBlog()!=null){
//
//            newComment.setBlog(commentService.getBlogById(newComment.getBlog().getId()));
//        }

        newComment.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Insert comment succesfully",commentService.addComment(newComment))
        );
    }

    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateComment(@RequestBody Comment newComment, @PathVariable int id){
        Comment updatedComment= commentService.getCommentById(id)
                .map(comment->{
                    comment.setContent(newComment.getContent());
                    comment.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return commentService.addComment(comment);
                }).orElseGet(()->{
                    newComment.setId(id);
                    newComment.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return commentService.addComment(newComment);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Update comment successfully",commentService.addComment(updatedComment))
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteComment(@PathVariable int id){
        boolean exists=commentService.ifCommentExists(id);
        if(exists){
            commentService.deleteCommentById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Deleted comment succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find comment to delete","")
        );
    }
}

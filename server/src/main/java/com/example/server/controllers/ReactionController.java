package com.example.server.controllers;

import com.example.server.models.Reaction;
import com.example.server.payloads.response.ResponseObject;
import com.example.server.services.ReactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/reaction")
public class ReactionController {
    private final ReactionService reactionService;

    public ReactionController(ReactionService reactionService) {
        this.reactionService = reactionService;
    }


    @GetMapping("")
    ResponseEntity<ResponseObject> getReactionCount(
            @RequestParam(required = false,name = "blog_id") Integer blogId,
            @RequestParam(required = false,name = "comment_id") Integer commentId
    ){
        if(blogId ==null &&commentId==null){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","successfully get data",reactionService.getAllReaction())
            );
        }

//        long reactionCount=0;
        List<Reaction> foundReactions=new ArrayList<>();
        if(blogId !=null){
            foundReactions=reactionService.getReacionsByBlogId(blogId);
//            reactionCount=reactionService.getTargetCountByPostId(String.valueOf(postId));
        } else if (commentId!=null) {
            foundReactions=reactionService.getReacionsByCommentId(commentId);
//            reactionCount=reactionService.getTargetCountByCommentId(String.valueOf(commentId));
        }
        return ResponseEntity.status(HttpStatus.OK).body(
              new ResponseObject("ok","get reaction succesfully",foundReactions)
        );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getReactionById(@PathVariable int id){
        Optional<Reaction> blog=reactionService.getReactionById(id);
        return blog.isPresent()?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("ok","Query reaction succesfully",blog)
                ):
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("failed","Cannot find reaction with id="+id,"")
                );
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertReaction(@RequestBody Reaction newReaction){
//        if(newReaction.getBlog()!=null){
//
//            newReaction.setBlog(reactionService.getBlogById(newReaction.getBlog().getId()));
//        }
        if(newReaction.getComment()!=null){
            newReaction.setComment(reactionService.getCommentById(newReaction.getComment().getId()));
        }
        newReaction.setAuthor(reactionService.getUserById(newReaction.getAuthor().getId()));
        newReaction.setCreateAt(new Timestamp(System.currentTimeMillis()));

        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Insert reaction succesfully",reactionService.addReaction(newReaction))
        );
    }

    @DeleteMapping("")
    ResponseEntity<ResponseObject> deleteReaction(
            @RequestParam(required = false,name = "author_id") Integer authorId,
            @RequestParam(required = false,name = "blog_id") Integer blogId,
            @RequestParam(required = false,name = "comment_id") Integer commentId
    ){
//        boolean exists=reactionService.ifReactionExists(id);
        Integer reactionId=null;
        if(blogId !=null){

            reactionId=reactionService.getReactionIdByAuthorIdAndBlogId(String.valueOf(authorId),String.valueOf(blogId));
        }
        else{
            reactionId=reactionService.getReactionIdByAuthorIdAndCommentId(String.valueOf(authorId),String.valueOf(commentId));
        }
        if(reactionId!=null){
            reactionService.deleteReactionById(reactionId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Deleted reaction succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find reaction to delete","")
        );
    }
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseObject> deleteReaction(@PathVariable int id){
        boolean exists=reactionService.ifReactionExists(id);
        if(exists){
            reactionService.deleteReactionById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Deleted reaction succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed","Cannot find reaction to delete","")
        );
    }
}

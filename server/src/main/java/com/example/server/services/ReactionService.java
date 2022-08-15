package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.Blog;
import com.example.server.models.Reaction;
import com.example.server.models.User;
import com.example.server.repositories.ReactionCriteriaRepository;
import com.example.server.repositories.ReactionRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ReactionService {

    private ReactionRepository reactionRepository;
    private BlogService blogService;
    private CommentService commentService;

    private UserRepository userRepository;

    private ReactionCriteriaRepository reactionCriteriaRepository;

    public ReactionService(ReactionRepository reactionRepository, BlogService blogService, CommentService commentService, UserRepository userRepository, ReactionCriteriaRepository reactionCriteriaRepository) {
        this.reactionRepository = reactionRepository;
        this.blogService = blogService;
        this.commentService = commentService;
        this.userRepository = userRepository;
        this.reactionCriteriaRepository = reactionCriteriaRepository;
    }

    public Integer getReactionIdByAuthorIdAndBlogId(String authorId, String postId){

        return reactionCriteriaRepository.findReactionIdByAuthorIdAndBlogId(authorId,postId);
    }
    public List<Reaction> getReacionsByBlogId(int blogId){ return reactionRepository.findByBlogId(blogId);}
    public List<Reaction> getAllReaction(){
        return reactionRepository.findAll();
    }

    public Blog getBlogById(int id){
        return blogService.getBlogById(id).get();
    }
    public Comment getCommentById(int id){
        return commentService.getCommentById(id).get();
    }
    public User getUserById(int id){
        return userRepository.findById(id).get();
    }
    public Long getTargetCountByPostId(String postId){
        return reactionCriteriaRepository.getTargetCountByBlogId(postId);
    }

    public long getTargetCountByCommentId(String commentId){
        return reactionCriteriaRepository.getTargetCountByCommentId(commentId);
    }

    public Optional<Reaction> getReactionById(int id){
        return reactionRepository.findById(id);
    }

    public Reaction addReaction(Reaction newReaction){
        return reactionRepository.save(newReaction);
    }

    public void deleteReactionById(int id){
        reactionRepository.deleteById(id);
    }
    public boolean ifReactionExists(int id){
        return reactionRepository.existsById(id);
    }

    public boolean ifPostExistsById(Integer postId){
        if(postId==null){
            return false;
        }
        return blogService.getBlogById(postId).isPresent() ;

    }

    public boolean ifCommentExistsById(Integer commentId){
        if(commentId==null){
            return false;
        }
        return blogService.getBlogById(commentId).isPresent() ;

    }

    public List<Reaction> getReacionsByCommentId(Integer commentId) {
        return reactionRepository.findByCommentId(commentId);
    }

    public Integer getReactionIdByAuthorIdAndCommentId(String authorId, String commentId) {
        return reactionCriteriaRepository.findReactionIdByAuthorIdAndCommentId(authorId,commentId);
    }
}

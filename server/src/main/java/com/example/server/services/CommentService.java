package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.Blog;
import com.example.server.models.User;
import com.example.server.repositories.CommentCriteriaRepository;
import com.example.server.repositories.CommentRepository;
import com.example.server.repositories.BlogRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentService {

    private CommentRepository commentRepository;

    private  CommentCriteriaRepository commentCriteriaRepository;

    private UserRepository userRepository;

    private BlogRepository blogRepository;

    public CommentService(CommentRepository commentRepository, CommentCriteriaRepository commentCriteriaRepository, UserRepository userRepository, BlogRepository blogRepository) {
        this.commentRepository = commentRepository;
        this.commentCriteriaRepository = commentCriteriaRepository;
        this.userRepository = userRepository;
        this.blogRepository = blogRepository;
    }

    public Page<Comment> getComment(String blogId, int page, int limit){
        return commentCriteriaRepository.findCommentWithFilterPagination(blogId,page,limit);
    }

    public Page<Comment> getCommentByMalId(String malId,String type,int page,int limit){
        return commentCriteriaRepository.findCommentByMalIdWithFilterPagination(malId,type,page,limit);
    }

    public User getUserById(int id){
        return userRepository.findById(id).get();
    }

    public Blog getBlogById(int id){
        return blogRepository.findById(id).get();
    }



    public Optional<Comment> getCommentById(int id){
        return commentRepository.findById(id);
    }

    public Comment addComment(Comment newBlog){
        return commentRepository.save(newBlog);
    }

    public void deleteCommentById(int id){
        commentRepository.deleteById(id);
    }

    public boolean ifCommentExists(int id){
        return commentRepository.existsById(id);
    }
}

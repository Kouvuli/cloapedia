package com.example.server.services;

import com.example.server.models.Blog;
import com.example.server.models.User;
import com.example.server.repositories.BlogCriteriaRepository;
import com.example.server.repositories.BlogRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class BlogService {


    private BlogRepository blogRepository;

    private BlogCriteriaRepository blogCriteriaRepository;

    private UserRepository userRepository;

    public BlogService(BlogRepository blogRepository, BlogCriteriaRepository blogCriteriaRepository, UserRepository userRepository) {
        this.blogRepository = blogRepository;
        this.blogCriteriaRepository = blogCriteriaRepository;
        this.userRepository = userRepository;
    }

    public Page<Blog> getBlog(String authorId, int page, int limit){
        return blogCriteriaRepository.findBlogWithFilterPagination(authorId,page,limit);
    }

    public Optional<Blog> getBlogById(int id){
        return blogRepository.findById(id);
    }
    public User getUserById(int id){return userRepository.findById(id).get();}
    public Blog addBlog(Blog newBlog){
        return blogRepository.save(newBlog);
    }

    public void deleteBlogById(int id){
        blogRepository.deleteById(id);
    }

    public boolean ifBlogExists(int id){
        return blogRepository.existsById(id);
    }
}

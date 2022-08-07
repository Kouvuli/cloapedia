package com.example.server.repositories;

import com.example.server.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Integer> {



    List<Comment> findByAuthorId(Integer authorId);



}

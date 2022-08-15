package com.example.server.repositories;

import com.example.server.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog,Integer> {


    List<Blog> findByAuthorId(Integer authorId);
}

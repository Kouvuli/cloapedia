package com.example.server.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;


    @Column(name = "create_at")
    private Timestamp createAt;

    @OneToMany(mappedBy = "comment")
    @JsonIgnore
    private Set<Reaction> reactions=new HashSet<>();

//    @ManyToOne
//    @JoinColumn(name = "blog_id",referencedColumnName = "id")
//    private Blog blog;

    @Column(name = "blog_id")
    private String blogId;


    @ManyToOne
    @JoinColumn(name = "author_id",referencedColumnName = "id")
    private User author;

    public Comment(int id, String content, Timestamp createAt, String blogId, User author) {
        this.id = id;
        this.content = content;
        this.createAt = createAt;
        this.blogId = blogId;
        this.author = author;
    }

    public Comment() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }

    public String getBlogId() {
        return blogId;
    }

    public void setBlogId(String blogId) {
        this.blogId = blogId;
    }

    //    public Blog getBlog() {
//        return blog;
//    }
//
//    public void setBlog(Blog blog) {
//        this.blog = blog;
//    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Set<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(Set<Reaction> reactions) {
        this.reactions = reactions;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createAt=" + createAt +
                ", blogId='" + blogId + '\'' +
                ", author=" + author +
                '}';
    }
}

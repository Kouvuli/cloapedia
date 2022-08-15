package com.example.server.models;


import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "create_at")
    private Timestamp createAt;

    @ManyToOne
    @JoinColumn(name = "author_id",referencedColumnName = "id")
    private User author;

//    @ManyToOne
//    @JoinColumn(name = "blog_id",referencedColumnName = "id")
//    private Blog blog;

    @Column(name = "blog_id")
    private String blogId;
    @ManyToOne
    @JoinColumn(name = "comment_id",referencedColumnName = "id")
    private Comment comment;

    public Reaction() {
    }

    public Reaction(int id, Timestamp createAt, User author, String blogId, Comment comment) {
        this.id = id;
        this.createAt = createAt;
        this.author = author;
        this.blogId = blogId;
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
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

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "Reaction{" +
                "id=" + id +
                ", createAt=" + createAt +
                ", author=" + author +
                ", blogId='" + blogId + '\'' +
                ", comment=" + comment +
                '}';
    }
}

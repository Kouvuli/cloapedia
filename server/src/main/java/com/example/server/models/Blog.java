package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;

    @Column(name = "create_at")
    private Timestamp createAt;

//    @OneToMany(mappedBy = "blog")
//    @JsonIgnore
//    private Set<Comment> comments=new HashSet<>();

//    @OneToMany(mappedBy = "blog")
//    @JsonIgnore
//    private Set<Reaction> reactions=new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "author_id",referencedColumnName = "id")
    private User author;

    private String thumbnail;

    private String headline;

    private String trailText;

    public Blog(int id, String content, Timestamp createAt, User author, String thumbnail, String headline, String trailText) {
        this.id = id;
        this.content = content;
        this.createAt = createAt;
        this.author = author;
        this.thumbnail = thumbnail;
        this.headline = headline;
        this.trailText = trailText;
    }

    public Blog() {}

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
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


    public String getTrailText() {
        return trailText;
    }

    public void setTrailText(String trailText) {
        this.trailText = trailText;
    }

//    public Set<Comment> getComments() {
//        return comments;
//    }
//
//    public void setComments(Set<Comment> comments) {
//        this.comments = comments;
//    }

//    public Set<Reaction> getReactions() {
//        return reactions;
//    }
//
//    public void setReactions(Set<Reaction> reactions) {
//        this.reactions = reactions;
//    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createAt=" + createAt +
                ", author=" + author +
                ", thumbnail='" + thumbnail + '\'' +
                ", headline='" + headline + '\'' +
                ", trailText='" + trailText + '\'' +
                '}';
    }
}

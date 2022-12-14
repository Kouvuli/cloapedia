package com.example.server.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(schema = "public")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Blog> blogs =new HashSet<>();

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Comment> comments=new HashSet<>();

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Reaction> reactions=new HashSet<>();



    private String fullname;

    private String dob;

    private String username;

    private String job;

    private String address;
    @JsonIgnore
    private String password;

    @Column(name = "is_admin")
    private boolean isAdmin;

    public User() {
    }

    public User(String fullname, String dob, String username, String password, boolean isAdmin) {
        this.fullname = fullname;
        this.dob = dob;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public User(String fullname, String dob, String username, String job, String address, String password, boolean isAdmin) {
        this.fullname = fullname;
        this.dob = dob;
        this.username = username;
        this.job = job;
        this.address = address;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public Set<Blog> getBlogs() {
        return blogs;
    }

    public void setBlogs(Set<Blog> blogs) {
        this.blogs = blogs;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public Set<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(Set<Reaction> reactions) {
        this.reactions = reactions;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", fullname='" + fullname + '\'' +
                ", dob='" + dob + '\'' +
                ", username='" + username + '\'' +
                ", job='" + job + '\'' +
                ", address='" + address + '\'' +
                ", password='" + password + '\'' +
                ", isAdmin=" + isAdmin +
                '}';
    }
}

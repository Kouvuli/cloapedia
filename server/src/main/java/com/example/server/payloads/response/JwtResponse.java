package com.example.server.payloads.response;

import java.util.Date;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private int id;
    private String username;

    private Date expiredDate;
//    private List<String> roles;

    public JwtResponse(Date expiredDate,String accessToken, int id, String username) {
        this.expiredDate=expiredDate;
        this.token = accessToken;
        this.id = id;

        this.username = username;
//        this.roles = roles;
    }

    public Date getExpiredDate() {
        return expiredDate;
    }

    public void setExpiredDate(Date expiredDate) {
        this.expiredDate = expiredDate;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

//    public List<String> getRoles() {
//        return roles;
//    }
}

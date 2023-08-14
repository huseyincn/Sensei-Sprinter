package com.flyntra.senseisprintter.data.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="accesstoken")
public class AccessToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @PrimaryKeyJoinColumn(name="userid", referencedColumnName = "id")
    private User userid;
    @Column(nullable = false, unique = true)
    private String token;
    @Column(nullable = false, unique = true)
    private Date expireDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUserid() {
        return userid;
    }

    public void setUserid(User userid) {
        this.userid = userid;
    }


    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }
}

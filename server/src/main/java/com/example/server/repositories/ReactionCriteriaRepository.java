package com.example.server.repositories;


import com.example.server.models.Reaction;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ReactionCriteriaRepository {

    private final EntityManager entityManager;
    private final CriteriaBuilder cb;

    public ReactionCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        cb=entityManager.getCriteriaBuilder();
    }

    public Long getTargetCountByBlogId(String blogId){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Reaction>  countRoot=countQuery.from(Reaction.class);
        Predicate predicate=cb.equal(countRoot.get("blog").get("id"),blogId);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();

    }
    public long getTargetCountByCommentId(String commentId){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Reaction>  countRoot=countQuery.from(Reaction.class);
        Predicate predicate=cb.equal(countRoot.get("comment").get("id"),commentId);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();


    }
    public Integer findReactionIdByAuthorIdAndBlogId(String authorId, String blogId){
        CriteriaQuery<Integer> query=cb.createQuery(Integer.class);
        Root<Reaction> root= query.from(Reaction.class);
        List<Predicate> predicates=new ArrayList<>();
        if(authorId!=null){
            predicates.add(cb.equal(root.get("author").get("id"),authorId));
        }
        if(blogId!=null){
            predicates.add(cb.equal(root.get("blog").get("id"),blogId));
        }
        Predicate predicate=cb.and(predicates.toArray(new Predicate[0]));
        query.where(predicate);
        query.select(root.get("id"));
        Integer result=entityManager.createQuery(query).getSingleResult();


        return result;

    }

    public Integer findReactionIdByAuthorIdAndCommentId(String authorId, String commentId) {
        CriteriaQuery<Integer> query=cb.createQuery(Integer.class);
        Root<Reaction> root= query.from(Reaction.class);
        List<Predicate> predicates=new ArrayList<>();
        if(authorId!=null){
            predicates.add(cb.equal(root.get("author").get("id"),authorId));
        }
        if(commentId!=null){
            predicates.add(cb.equal(root.get("comment").get("id"),commentId));
        }
        Predicate predicate=cb.and(predicates.toArray(new Predicate[0]));
        query.where(predicate);
        query.select(root.get("id"));
        Integer result=entityManager.createQuery(query).getSingleResult();


        return result;
    }
}

package com.example.server.repositories;

import com.example.server.models.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PostCriteriaRepository {

    private final EntityManager entityManager;
    private final CriteriaBuilder cb;



    public PostCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.cb = entityManager.getCriteriaBuilder();
    }

    public Page<Blog> findPostWithFilterPagination(String authorId, int page, int limit){
        CriteriaQuery<Blog> query=cb.createQuery(Blog.class);

        Root<Blog> root=query.from(Blog.class);
        List<Predicate> predicates=new ArrayList<>();
        if(authorId!=null){
            predicates.add(cb.equal(root.get("author").get("id"),authorId));
        }


        Predicate predicate=cb.and(predicates.toArray(new Predicate[0]));
        query.orderBy(cb.desc(root.get("createAt")));
        query.where(predicate);

        TypedQuery<Blog> typedQuery=entityManager.createQuery(query);
        typedQuery.setFirstResult((page-1)*limit);
        typedQuery.setMaxResults(limit);


        Pageable pageable= PageRequest.of(page-1,limit);

        long postCount=getPostCount(predicate);
        return new PageImpl<>(typedQuery.getResultList(),pageable,postCount);
    }

    private long getPostCount(Predicate predicate){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Blog>  countRoot=countQuery.from(Blog.class);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}

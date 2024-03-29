package consolelog.post.domain;

import consolelog.comment.domain.Comment;
import consolelog.like.domain.PostLike;
import consolelog.member.domain.Member;
import consolelog.global.config.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.ArrayList;
import java.util.List;


@Entity
@AllArgsConstructor
@EntityListeners(value = {AuditingEntityListener.class})
public class Post extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    @Lob
    private String content;

    @Column
    @Getter
    @Setter
    private String mainImageUrl;

    private int viewCount = 0;

    private int likeCount = 0;

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<PostLike> postLikes = new ArrayList<>();

    //    @Column(name = "deleted")
    @SQLDelete(sql = "UPDATE post SET deleted = true WHERE id=?")
    @Where(clause = "deleted = false")
    private Boolean deleted = Boolean.FALSE;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    protected Post() {
    }

    @Builder
    public Post(String title, String content, String mainImageUrl, Member member,
                List<Comment> comments, List<PostLike> postLikes) {
        this.title = title;
        this.content = content;
        this.mainImageUrl = mainImageUrl;
        this.member = member;
        this.comments = comments;
        this.postLikes = postLikes;

    }

    // 수정 필요
    // Getter 사용 가능한 것은 사용할 것
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Member getMember() {
        return member;
    }

    public List<PostLike> getPostLikes() {
        return postLikes;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public int getCommentCount() {
        if (comments == null)
            return 0;
        return comments.size();
    }

    public void addPostLike(PostLike postLike) {
        postLikes.add(postLike);
    }

    public void deleteLike(PostLike postLike) {
        postLikes.remove(postLike);
        postLike.delete();
    }

    public void updateTitle(String title) {
        this.title = title;
    }

    public void updateContent(String content) {
        this.content = content;
    }

    public boolean isOwner(Long accessMemberId) {
        if (accessMemberId == null) {
            return false;
        }
        return member.getId().equals(accessMemberId);
    }

    public int getViewCount() {
        return viewCount;
    }


}
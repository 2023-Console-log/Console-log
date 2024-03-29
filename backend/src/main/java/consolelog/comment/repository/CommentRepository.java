package consolelog.comment.repository;

import consolelog.comment.domain.Comment;
import consolelog.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
//    @Query(value = "SELECT c.nickname FROM Comment c WHERE c.post = :post AND c.member = :member")
//    List<String> findNickNamesByPostAndMember(Post post, Member member);
////
//    @Query(value = "SELECT c.nickname FROM Comment c WHERE c.post.id = :postId")
//    List<String> findNicknamesByPostId(@Param("postId") Long postId);

    // 수정 필요
    // Param 을 2개 넘겨주고, (postId, null) 을 넘겨줘서 데이터를 가져 올 수 있을 것 같다
    // 최대한 Query 의 사용을 자제하라
    @Query(value = "SELECT c FROM Comment c WHERE c.post.id = :postId and c.parent.id is null")
    List<Comment> findCommentsByPostId(@Param("postId") Long postId);

//    List<Comment> findCommentsByPostId(Long postId);

    void deleteAllByPost(Post post);

    List<Comment> findRepliesByParent(Comment parent);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE comment SET like_count = like_count + 1 WHERE comment_id = :commentId", nativeQuery = true)
    void increaseLikeCount(Long commentId);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE comment SET like_count = like_count - 1 WHERE comment_id = :commentId", nativeQuery = true)
    void decreaseLikeCount(Long commentId);
}

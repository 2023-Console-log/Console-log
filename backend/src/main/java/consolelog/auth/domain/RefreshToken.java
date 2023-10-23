package consolelog.auth.domain;

import consolelog.support.token.InvalidRefreshTokenException;
import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;

@Entity
@Getter
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "refresh_token_id")
    private Long id;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "token")
    private String token;

    public RefreshToken(Long memberId, String token) {
        this.memberId = memberId;
        this.token = token;
    }

    public void validateSameToken(String token) {
        if (!this.token.equals(token))
            return new InvalidRefreshTokenException();
    }
}
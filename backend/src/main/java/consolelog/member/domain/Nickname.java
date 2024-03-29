package consolelog.member.domain;

import consolelog.member.exception.InvalidNicknameException;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.Objects;
import java.util.regex.Pattern;

@Getter
@Embeddable
public class Nickname {

    private static final Pattern PATTERN = Pattern.compile("^[0-9a-zA-Z가-힣]+(?:\\s+[0-9a-zA-Z가-힣]+)*$");
    private static final int MIN_LENGTH = 1;
    private static final int MAX_LENGTH = 16;

    @Column(name = "nickname", unique = true)
    private String value;

    protected Nickname() {
    }

    public Nickname(String value) {
        validate(value);
        this.value = value;
    }

    private void validate(String value) {
        // 수정 필요
        // Min lenght 를 선언하고 비교할 필요 없이, Empty 인지 체크하면 됨
        if (value.length() < MIN_LENGTH || value.length() > MAX_LENGTH
                || !PATTERN.matcher(value).matches()) {
            throw new InvalidNicknameException();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Nickname nickname = (Nickname) o;
        return getValue().equals(nickname.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getValue());
    }
}
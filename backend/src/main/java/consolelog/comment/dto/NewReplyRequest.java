package consolelog.comment.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class NewReplyRequest {

    @NotBlank(message = "대댓글을 입력해주세요.")
    private String content;

    public NewReplyRequest() {
    }

    public NewReplyRequest(String content) {
        this.content = content;
    }
}

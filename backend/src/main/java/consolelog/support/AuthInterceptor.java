package consolelog.support;

import consolelog.support.token.TokenManager;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Objects;

@Component
// @Slf4j   // logging
public class AuthInterceptor implements HandlerInterceptor {
    // private static final Logger LOGGER = LoggerFactory.getLogger(AuthInterceptor.class);
    private final TokenManager tokenManager;

    public AuthInterceptor(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (isGetMethodWithPostsUri(request))
            return true;

        if (CorsUtils.isPreFlightRequest(request))
            return true;

//        Logging Method
//        if (isGetMethod(request)) {
//            LOGGER.info("prometheus" + request.getRequestURI());
//            return true;
//        }

        if (notExistHeader(request)) {
//            LOGGER.info("no header" + request.getRequestURI());
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            return false;
        }
        String token = AuthorizationExtractor.extractAccessToken(request);
        if (isInvalidToken(token)) {
//            LOGGER.info("no token" + request.getRequestURI());
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            return false;
        }
        return true;
    }


    private boolean isGetMethodWithPostsUri(HttpServletRequest request) {
        return request.getMethod().equalsIgnoreCase("GET");
    }

    private boolean notExistHeader(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        return Objects.isNull(authorizationHeader);
    }

    private boolean isInvalidToken(String token) {
        return !tokenManager.isValid(token);
    }

}

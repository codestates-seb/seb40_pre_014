package com.iphone.server.user.config.jwt;

import com.iphone.server.user.domain.User;
import com.iphone.server.user.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    public static final String HEADER_KEY = "Authorization";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String requestTokenHeader = request.getHeader(HEADER_KEY);
        String userEmail = null;
        String jwtToken = null;

        // JWT 토큰은 "Beare token"에 있다. Bearer단어를 제거하고 토큰만 받는다.
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            userEmail = jwtTokenUtil.getUsernameFromToken(jwtToken);
        }

        // 토큰을 가져오면 검증을 한다.
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            User user = this.userRepository.findByEmail(userEmail).orElseThrow(() -> new IllegalArgumentException("올바르지 않은 사용자입니다."));

            // 토큰이 유효한 경우 수동으로 인증을 설정하도록 스프링 시큐리티를 구성한다.
            if (jwtTokenUtil.validateToken(jwtToken)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                        new UsernamePasswordAuthenticationToken(
                                user,
                                null,
                                null
                        );
                usernamePasswordAuthenticationToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                // 컨텍스트에 인증을 설정 한 후 현재 사용자가 인증되도록 지정한다.
                // 그래서 Spring Security 설정이 성공적으로 넘어간다.
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}

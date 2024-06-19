package com.ordem.interceptor;

import com.ordem.services.VisitorCountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class VisitorCountInterceptor implements HandlerInterceptor {

    @Autowired
    private VisitorCountService visitorCountService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        visitorCountService.incrementVisitorCount();
        return true;
    }
}

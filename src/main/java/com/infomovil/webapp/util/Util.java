package com.infomovil.webapp.util;

import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class Util {
	
	/***
	 * 
	 * @return usuario logueado con spring security
	 *
	 */
	public static Authentication getUserLogged() {
		
		Object principal = SecurityContextHolder.getContext().getAuthentication();

		if (principal instanceof Authentication) {
			return ((Authentication) principal);
		} else {
			return null;
		}
		
	}	

	/****
	 * 
	 * @return regresa la sesion actual
	 */
	public static HttpSession getCurrentSession() {
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.
				currentRequestAttributes();
		HttpSession session = attr.getRequest().getSession();
		return session;
	}	

}

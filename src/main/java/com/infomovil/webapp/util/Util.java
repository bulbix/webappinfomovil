package com.infomovil.webapp.util;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
	
	/**
	 * Loguea el usuario en spring security
	 * @param usuario
	 * @param password
	 */
	public static void loginUsuario(String usuario, String password){
		
		//getCurrentSession().invalidate();
		
		List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
		grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		Authentication auth1 = new UsernamePasswordAuthenticationToken (usuario, password, grantedAuths);
		SecurityContextHolder.getContext().setAuthentication(auth1);
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

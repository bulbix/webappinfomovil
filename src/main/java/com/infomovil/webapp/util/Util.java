package com.infomovil.webapp.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpSession;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class Util {
	
	public static String getProfile() {
		
		String result = null;		
		Properties prop = new Properties();
		InputStream input = null;
		input= Util.class.getClassLoader().getResourceAsStream("config.properties");
		try {
			prop.load(input);
			result = prop.getProperty("profile");
			
		} catch (IOException e) {
		}
		
		return result;
	}
	
	/***
	 * 
	 * @return usuario logueado con spring security
	 *
	 */
	public static User getUserLogged() {
		Authentication authenticate = SecurityContextHolder.getContext().getAuthentication();

		if(authenticate.getPrincipal() instanceof User){
			User user = (User)authenticate.getPrincipal();
			return user;
		}
		else if(authenticate.getPrincipal() instanceof String) {
			List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
			grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
			return new User(authenticate.getPrincipal().toString(), authenticate.getCredentials().toString(), grantedAuths);
		}
		else{
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
	
	public static void main(String[] args) {
		System.out.println("Perfil " + getProfile());
	}
	
public static InputStream getFileAmazon(String bucketName, String key){
		
		InputStream result = null;
		try{
			AmazonS3 s3 = new AmazonS3Client(new BasicAWSCredentials(KEY_AMAZON_S3,SECRET_AMAZON_S3));
			Region usWest2 = Region.getRegion(Regions.US_WEST_2);
			s3.setRegion(usWest2);
			S3Object object = s3.getObject(new GetObjectRequest(bucketName, key));
			return object.getObjectContent();
		}
		catch(Exception e){
			logger.error("getFileAmazon",e);
		}
		
		return result;
		
	}
	
	public static final String KEY_AMAZON_S3 = "AKIAJFSG7G2SQDTWMMYA";
	public static final String SECRET_AMAZON_S3 = "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";
	private static final Logger logger = Logger.getLogger(Util.class);
	

}

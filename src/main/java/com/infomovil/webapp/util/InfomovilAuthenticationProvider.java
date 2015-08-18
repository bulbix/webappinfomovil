package com.infomovil.webapp.util;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;

public class InfomovilAuthenticationProvider implements AuthenticationProvider {	
	
	private static final Logger log = Logger .getLogger(InfomovilAuthenticationProvider.class);
	
	@Autowired
	private MessageSource messageSource;	
	
	@Override
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {	
		
		String email = authentication.getName();
		String password = authentication.getCredentials().toString();
		
		ClientWsInfomovil clientWsInfomovil = new ClientWsInfomovil();
		int codeError  = Integer.parseInt(clientWsInfomovil.
				crearSitioLogin(email, password).getCodeError());
		
		if(codeError == 0){//Exito

			List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
			grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
			log.info("Login correcto " + email);
			return new UsernamePasswordAuthenticationToken(email, password, grantedAuths);
		}
		else{
			throw new BadCredentialsException("Credenciales Incorrectas");
			//throw new BadCredentialsException(messageSource.getMessage("error.loginFailed",null,null));
		}	
		
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}

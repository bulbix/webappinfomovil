package com.infomovil.webapp.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;

public class InfomovilUserDetailsService implements UserDetailsService {

	@Override
	public UserDetails loadUserByUsername(String email)
			throws UsernameNotFoundException {
		ClientWsInfomovil clientWsInfomovil = new ClientWsInfomovil();
		RespuestaVO respGetWebHash = clientWsInfomovil.crearSitioGetWebHash(email);
		List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
		grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));

		if(respGetWebHash.getCodeError().equals("0")){
			User user = new User(email,respGetWebHash.getResultado(),grantedAuths);
			return user;
		}
		else{
			throw new UsernameNotFoundException(email);
		}
	}

}

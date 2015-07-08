package com.infomovil.webapp;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.infomovil.webapp.util.Util;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/home/client", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		Authentication auth = Util.getUserLogged();
		
		logger.info("usuario " +  auth.getName().toString());
		logger.info("password " + auth.getCredentials().toString());
		
		model.addAttribute("usuario", auth.getName().toString());
		model.addAttribute("password", auth.getCredentials().toString());
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	@RequestMapping(value = "/home/luis", method = RequestMethod.GET)
	
	public String luis(Model model) {
		Util.loginUsuario("luis@mail.com", "garbage1");
		Authentication auth = Util.getUserLogged();
		model.addAttribute("usuario", auth.getName().toString());
		model.addAttribute("password", auth.getCredentials().toString());
		return "home";
	}
	
}

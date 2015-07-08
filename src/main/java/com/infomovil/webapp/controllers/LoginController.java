package com.infomovil.webapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;

@Controller
public class LoginController {

	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String login(ModelMap model) 
	{
		return "login";
	}
	
	@RequestMapping(value="/loginfailed", method = RequestMethod.GET)
	public String loginerror(ModelMap model) { 
		model.addAttribute("error", "true");
		return "login"; 
	}
	
	@RequestMapping(value="/resetpassword", method = RequestMethod.GET)
	public String resetPassword(ModelMap model) {
		return "Webapp/restablecerPass"; 
	}

	
	@RequestMapping(value="/executeResetPassword", method = RequestMethod.POST)
	public String resetPasswordSubmit(@RequestParam String email, ModelMap model) {	
				
		if (!email.isEmpty()) {
			ClientWsInfomovil ws = new ClientWsInfomovil();
			ws.crearSitioResetPassword(email);			
			model.addAttribute("mensaje", "Se envió un correo para restablecer tu contraseña");
		}
			
		return "Webapp/restablecerPass"; 
	}

}


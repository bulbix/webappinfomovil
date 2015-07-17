package com.infomovil.webapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;

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
			RespuestaVO resp = ws.crearSitioResetPassword(email);		
			String mensaje;
			
			if(resp.getCodeError().equals("0")){
				mensaje = "Se envió un correo para restablecer tu contraseña.";
			}
			else if(resp.getCodeError().equals("-1000")){
				mensaje = "El correo no existe en Infomovil.";
			}
			else{
				mensaje = "Ocurrio un error al enviar el correo, Intente más tarde.";
			}
			
			model.addAttribute("mensaje", mensaje);
			
			
		}
			
		return "Webapp/restablecerPass"; 
	}

}


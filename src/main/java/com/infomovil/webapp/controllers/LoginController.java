package com.infomovil.webapp.controllers;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;

@Controller
public class LoginController {

	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String login(@CookieValue(value = "editarSitioInfomovil", defaultValue = "") String editarSitioInfomovil) 
	{
		if(StringUtils.isEmpty(editarSitioInfomovil)){
			return "login";
		}
		else{
			return "redirect:/infomovil/editarSitio";
		}
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
	public String resetPasswordSubmit(@RequestParam String email, ModelMap model, RedirectAttributes redirectAttributes) {	
		
		String mensaje;
		String correo = email.toLowerCase();
		
		if (!email.isEmpty()) {
			ClientWsInfomovil ws = new ClientWsInfomovil();
			RespuestaVO resp = ws.crearSitioResetPassword(correo);	
			
			if(resp.getCodeError().equals("0")){
				mensaje = "Se envió un correo a %s para restablecer tu contraseña.";
				redirectAttributes.addFlashAttribute("ctaCorreo", email);
				redirectAttributes.addFlashAttribute("errorCta", String.format(mensaje, correo));
				return "redirect:/login"; 
			}
			else if(resp.getCodeError().equals("-1000")){
				mensaje = "El correo %s no existe en Infomovil.";
				redirectAttributes.addFlashAttribute("mensaje", String.format(mensaje, correo));
				return "redirect:/resetpassword"; 
			}
			else{
				mensaje = "Ocurrio un error al enviar el correo, Intente más tarde.";
				redirectAttributes.addFlashAttribute("mensaje", mensaje);
				return "redirect:/resetpassword"; 
			}
		}
		else{
			mensaje = "El correo esta vacio";
			redirectAttributes.addFlashAttribute("mensaje", mensaje);
			return "redirect:/resetpassword"; 
		}
		
	}

}


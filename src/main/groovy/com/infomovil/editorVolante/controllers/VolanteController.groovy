package com.infomovil.editorVolante.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

import com.infomovil.webapp.util.Util;
import com.infomovil.webapp.util.Codificacion;

@Controller
class VolanteController {

	/**
	 * 
	 * @return hashUser
	 */
	@RequestMapping(value = "/infomovil/getFecha", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	def getFecha() {
		try {
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			String hashUsuario = Codificacion.encrypt(correo + ";" + password);
			return ['hashUsuario' : hashUsuario]
		}
		catch(Exception e)  {
			return ['hashUsuario' : '']
		}
	}
	
	@RequestMapping(value = "/infomovil/getPerfil", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	def getPerfil(){
		
		def perfiles = 
		[DEV:"http://localhost:8080/", QA:"http://infodev.mobileinfo.io/ServiceInfomovil/", PROD:"http://www.infomovil.com/ServiceInfomovil/"]
		
		[perfil: perfiles[Util.getProfile()]]
		
	}

	@RequestMapping(value = "/infomovil/misVolantes", method = RequestMethod.GET, produces = "application/json")
	def misVolantes() {		
		return "redirect:/infomovil/misPromociones"
	}
	
	@RequestMapping(value = "/infomovil/estiloVolante", method = RequestMethod.GET, produces = "application/json")
	def estiloVolante() {
		return "WebApp/estiloVolante"
	}
}

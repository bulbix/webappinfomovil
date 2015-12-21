package com.infomovil.editorVolante.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

import com.infomovil.webapp.util.Util;
import com.infomovil.webapp.util.Codificacion;

@Controller
class VolanteController {

	@RequestMapping(value = "/infomovil/borrarContacto", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	def borraContacto() {
		
		String hashUsuario = "hola";
		String correo = "";
		String password = "";
		
		try
		{
			correo = Util.getUserLogged().getUsername();
			password = Util.getUserLogged().getPassword();
			hashUsuario = Codificacion.encrypt(correo + ";" + password);
			[hashUsuario : hashUsuario]
		}
		catch(Exception e) 
		{
			
		}
		
		return hashUsuario
	}

  

		@RequestMapping(value = "/infomovil/misVolantes", method = RequestMethod.GET, produces = "application/json")
		@ResponseBody
		def misVolantes() {
			
			
			
			return "Webapp/misPromociones"
		}


}
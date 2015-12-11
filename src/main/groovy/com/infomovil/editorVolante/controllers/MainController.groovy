package com.infomovil.editorVolante.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@Controller
class MainController {
	
	@RequestMapping(value = "/infomovil/jimbo", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	def jimbo(){
		[param1:'hola', param2:'rock']
	}

}

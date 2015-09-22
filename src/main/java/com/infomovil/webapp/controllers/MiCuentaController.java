package com.infomovil.webapp.controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MiCuentaController {
	
	@RequestMapping(value = "/infomovil/aceptacionPago", method = RequestMethod.GET)
	public String aceptacionPago(Model model){
		return "Webapp/aceptacionPago";
	}
	
	@RequestMapping(value = "/infomovil/envioDatosPaypal", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public ModelAndView envioDatosPaypal(String cliente, RedirectAttributes redirectAttributes){
		// Proceso
		redirectAttributes.addFlashAttribute("var12", "Hey tu redireccion");
		ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/aceptacionPago");
		return modelAndView;
		
	}

	/*
	@RequestMapping(value = "/infomovil/miCuenta", method = RequestMethod.GET)
	public String miCuenta(Model model){
		return "Webapp/miCuenta";
	}
	*/
	
}

package com.infomovil.editorVolante.controllers

import java.util.Map;

import com.infomovil.webapp.util.Util;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*

@Controller
class MultiproductoController 
{

	@RequestMapping(value = "/infomovil/multiproducto", method = RequestMethod.GET)
	def multiProducto() {
		
		def vista = "Webapp/multiproducto";
		def tabla = "multiproducto_dev";
		
		if(Util.getProfile().equals("PROD"))
			tabla = "multiproducto";
		
		def correo = Util.getUserLogged().getUsername();
		def seleccion = Util.getItemsDynamo(tabla, correo);
		
		if(seleccion != null)
		{
			vista = "misPromociones"
			
			if (seleccion["seleccion"] == "web")
				vista = "editarSitio"
				
			vista = "redirect:/infomovil/" + vista
		}
	 print("ue3 p2 con esta cosa!!!");
		return vista
	}
	
	@RequestMapping(value = "/infomovil/actualizaProducto", method = RequestMethod.POST, produces="application/json")
	@ResponseBody
	def actualizaProducto(String tableName, String producto) {

		def correo = Util.getUserLogged().getUsername();
		def resultado = Util.guardarItemsTableDynamo(tableName, correo, [seleccion : producto]);
		return [resultado : resultado]
	}
	
	@RequestMapping(value = "/infomovil/getItemsDynamo", method = RequestMethod.POST, produces="application/json")
	@ResponseBody
	def getItemsDynamo(String tableName) {

		def correo = Util.getUserLogged().getUsername();
		def resultado = Util.getItemsDynamo(tableName, correo);
		
		return [resultado : resultado]
	}

	
	@RequestMapping(value = "/infomovil/multiproductoMiCuenta", method = RequestMethod.GET)
	@ResponseBody
	def multiproductoMiCuenta() {
		
		def vista = "Webapp/multiproducto";
		def tabla = "multiproducto_dev";
		
		if(Util.getProfile().equals("PROD"))
			tabla = "multiproducto";
		
		def correo = Util.getUserLogged().getUsername();
		def seleccion = Util.getItemsDynamo(tabla, correo);
		
		if(seleccion != null)
		{
			vista = "misPromociones"
			
			if (seleccion["seleccion"] == "web")
				vista = "editarSitio"
				
			vista = "redirect:/infomovil/" + vista
		}
	
		return vista
	}
	
	
	
}









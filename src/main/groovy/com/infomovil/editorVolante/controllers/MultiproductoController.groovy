package com.infomovil.editorVolante.controllers

import java.util.Locale;
import java.util.Map

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse;

import com.infomovil.webapp.util.Util;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.*;

@Controller
class MultiproductoController
{
	@RequestMapping(value = "/infomovil/multiproducto", method = RequestMethod.GET)
		
		def multiProducto(HttpServletRequest request, HttpServletResponse response,Locale locale) {
			//Locale locale = RequestContextUtils.getLocale(request);
			System.out.println ("el locale reviene: :: . : : : : :" + locale);
			String lc = locale;
			String ln = "en";
			if (lc.compareTo(ln) == 0){
				System.out.println ("Ehh yupix a festejar: :: . : : : : :" + locale);
				return "redirect:/infomovil/misPromociones";
			}
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

		return vista;
	}
	
	@RequestMapping(value = "/infomovil/actualizaProducto", method = RequestMethod.POST, produces="application/json")
	@ResponseBody
	def actualizaProducto(String tableName, String producto) {

		def correo = Util.getUserLogged().getUsername();
		def resultado = Util.guardarItemsTableDynamo(tableName, correo, [seleccion : producto]);
		return [resultado : resultado]
	}
	
	@RequestMapping(value = "/infomovil/getItemsDynamo", method = RequestMethod.GET, produces="application/json")
	@ResponseBody
	def getItemsDynamo(String tableName) {

		def correo = Util.getUserLogged().getUsername();
		def resultado = Util.getItemsDynamo(tableName, correo);
		print "tableName: " + tableName
		return [resultado : resultado]
	}

	@RequestMapping(value = "/infomovil/getProducto", method = RequestMethod.GET, produces="application/json")
	@ResponseBody
	def getProducto() {
		
		def vista = "multiproducto";
		def tabla = "multiproducto_dev";
		
		if(Util.getProfile().equals("PROD"))
			tabla = "multiproducto";
		
		def correo = Util.getUserLogged().getUsername();
		def seleccion = Util.getItemsDynamo(tabla, correo);
		
		if(seleccion != null)
		{
			vista = "misPromociones";
			
			if (seleccion["seleccion"] == "web")
				vista = "editarSitio";
		}

		return [vista : vista]
	}
	
	@RequestMapping(value = "/infomovil/registro", method = RequestMethod.GET)
	def registro(String producto) {

		def vista = "misPromociones"
		def tabla = "multiproducto_dev"
		def productos = ["web", "volante"]
		def correo = Util.getUserLogged().getUsername();
		def seleccion = Util.getItemsDynamo(tabla, correo);
		
		if(Util.getProfile().equals("PROD"))
			tabla = "multiproducto";
		
		if (producto == null)
			return "redirect:/infomovil/multiproducto"
		
		Util.getCurrentSession().setAttribute("productoUsuario", producto);
			
		if(seleccion != null)
		{
			def result = productos.find { it == producto }

			if (result != null)
			{
				if (seleccion != producto)
				{
					def actualiza = Util.guardarItemsTableDynamo(tabla, correo, [seleccion : producto]);
					
					if (actualiza)
						if (result == "web")
							vista = "editarSitio"
				}
			}
			else
			{
				return "redirect:/registrar"
			}
		}
		
		return "redirect:/infomovil/" + vista
	}
}
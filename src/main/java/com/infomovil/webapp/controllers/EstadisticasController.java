package com.infomovil.webapp.controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.Transformer;
import org.apache.log4j.Logger;
import org.json.simple.JSONArray;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.infomovil.webapp.clientWsInfomovil.AnyTypeArray;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.util.Util;

@Controller
public class EstadisticasController {
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger logger = Logger.getLogger(EstadisticasController.class);
	private SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	@RequestMapping(value = "/infomovil/estadisticas", method = {RequestMethod.GET})
	public String estadisticas(Model model){
		model.addAttribute("today", sdf.format(new Date()));
		return  "Webapp/estadisticas";
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/infomovil/getDatosEstadistica", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public JSONArray getDatosEstadistica(
			@RequestParam String fechaInicial,
			@RequestParam String fechaFinal,
			@RequestParam String cual)  {		
		JSONArray list = new JSONArray();
		
		try {	
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			List<AnyTypeArray> datos =  wsCliente.crearSitioReporteUsuario(correo, password, cual, fechaInicial, fechaFinal).getListVisitas();
			
			
			List<List<Object>> lista = new ArrayList<List<Object>>();
			
			for(AnyTypeArray dato: datos){
				lista.add(dato.getItem());
			}
			
			list.addAll(lista);
		}		
		catch (Exception e)  {
			logger.error("getDatosEstadistica:::::", e);
		}	

		return list;
	}	
	
	public static void main(String[] args) {
		JSONArray list = new JSONArray();
		List<String[]> lista = new ArrayList<String[]>();
		String[] dato1 = {"2008-08-12","4"};
		String[] dato2 = {"2008-08-15","10"};
		lista.add(dato1); lista.add(dato2);
		list.addAll(lista);
		
		System.out.println(list.toJSONString());
		
		
	}
	
	

}

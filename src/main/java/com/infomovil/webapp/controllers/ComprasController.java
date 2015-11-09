package com.infomovil.webapp.controllers;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazonaws.util.IOUtils;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.util.Util;

@Controller
public class ComprasController 
{

	@RequestMapping(value = "/infomovil/crearSitioIntentoPago", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> crearSitioIntentoPago(@RequestParam String tipoPlan, @RequestParam String titulo, @RequestParam String tipoCompra, 
			@RequestParam String nombre, @RequestParam String direccion, @RequestParam String pais)
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		String medioPago = "PAY PAL";
		
		try
		{
			wsRespuesta = wsCliente.crearSitioIntentoPago(correo, password, tipoPlan, medioPago, titulo, tipoCompra, nombre, direccion, pais);
			                                           //(correo, password, "DOMINIO TEL", "PAY PAL", "TEL", "tel",nombre,direccion,pais);
			resultMap.put("resultado", wsRespuesta.getIdPago());
		}		
		catch (Exception e) 
		{
			logger.error("existeDominio:::::", e);
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/infomovil/generaCodigoMoviliza", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> generaCodigoMoviliza()
	{
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		String scriptMoviliza = "";
		
		try
		{
			String correo = Util.getUserLogged().getUsername();		
			wsRespuesta = wsCliente.crearSitioGeneraCodMoviliza(correo);
			
			if (!wsRespuesta.getResultado().equals("SIN_HASH"))
			{
				scriptMoviliza = wsRespuesta.getScriptMovilizaSitio();
				scriptMoviliza = scriptMoviliza.replaceAll("<", "&lt;");
				scriptMoviliza = scriptMoviliza.replaceAll(">", "&gt;");
				
	         	if(!Util.getProfile().equals("PROD"))
	         		scriptMoviliza = scriptMoviliza.replaceAll("infomovil.com", "infodev.mobileinfo.io");
	         	
				resultMap.put("hashMoviliza", wsRespuesta.getResultado());
				resultMap.put("scriptMoviliza", scriptMoviliza);
			}
			else
			{
				resultMap.put("scriptMoviliza", "SinScript");
				resultMap.put("hashMoviliza", "SIN_HASH");
			}

		}
		catch (Exception e) 
		{
			logger.error("generaCodigoMoviliza:::::", e);
			resultMap.put("scriptMoviliza", "SinScript");
			resultMap.put("hashMoviliza", "SIN_HASH");
		}	
		
		return resultMap;
	}
	
	
	@RequestMapping(value = "/infomovil/getHTMLPromocion", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> getHTMLPromocion()
	{
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
	
		String elHtmlDePromocion = "";
		
		try
		{
			String correo = Util.getUserLogged().getUsername();		
			wsRespuesta = wsCliente.crearSitioGeneraCodMoviliza(correo);
			
			if (!wsRespuesta.getResultado().equals("SIN_HASH"))
			{
				elHtmlDePromocion = IOUtils.toString(Util.getFileAmazon("promodev.mobileinfo.io", "is_alx20.html"));
				
				elHtmlDePromocion = elHtmlDePromocion.replaceAll("llaveMoviliza", wsRespuesta.getResultado());
				
	         	if(!Util.getProfile().equals("PROD"))
	         	{
	         		
	         		elHtmlDePromocion = elHtmlDePromocion.replaceAll("promo.mobileinfo.io", "promodev.mobileinfo.io");
	         	}
	         	
	         	elHtmlDePromocion = new String(elHtmlDePromocion.getBytes("UTF-8"), "UTF-8");
				resultMap.put("elHtmlDePromocion", elHtmlDePromocion);
				logger.info("elHtmlDePromocion: " + elHtmlDePromocion);
			}
			else
			{
				resultMap.put("elHtmlDePromocion", "SIN_PROMOCION");
			}

		}
		catch (Exception e) 
		{
			logger.error("generaHTMLdePromocion:::::", e);
			resultMap.put("elHtmlDePromocion", "SIN_PROMOCION");
		}	
		
		return resultMap;
	}
	
	
	
	
	
	
	
	
	private static final Logger logger = Logger.getLogger(ComprasController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
}

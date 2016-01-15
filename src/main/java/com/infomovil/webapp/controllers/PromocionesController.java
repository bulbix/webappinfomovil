package com.infomovil.webapp.controllers;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.amazonaws.util.IOUtils;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.OffertRecordVO;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.model.ModeloWebApp;
import com.infomovil.webapp.util.Util;

@Controller
public class PromocionesController
{
	
	@Autowired
	private MessageSource messageSource;
	
	
	@RequestMapping(value = "/infomovil/misPromociones", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView misPromociones(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes , Locale locale)
	{
		
		System.out.println("Mensaje desde controller*****" + messageSource.getMessage("error.loginServer", null, locale) + "*****");
		
		
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRpta = new RespuestaVO();
		String nombreUsuario = "";
		String template = "Coverpage1azul";
		String claseCss = "inverse";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String nombreSitio = "";
		String banderaCanal = "0";
		String sitioWeb = "";
		String planPro = "";
		
		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
		
			if (Util.getCurrentSession().getAttribute("canal") != null)
			{
				if (Util.getCurrentSession().getAttribute("canal").toString().startsWith("BAZ"))
				{
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
				}
			}
			
         	if (Util.getCurrentSession().getAttribute("nombreUsuario") != null)
         	{
         		if (!(EmailValidator.getInstance().isValid(Util.getCurrentSession().getAttribute("nombreUsuario").toString())))
         			nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario").toString();
         	}
         	
         	if (Util.getCurrentSession().getAttribute("template") != null)
         		template = Util.getCurrentSession().getAttribute("template").toString();

         	if (Util.getCurrentSession().getAttribute("nombreSitio") == null ||
         			Util.getCurrentSession().getAttribute("banderaCanal") == null)
         	{
         		wsRpta = wsCliente.crearSitioCargar(correo, password);
      
         		sitioWeb = wsRpta.getDominioCreaSitio().getSitioWeb();
         		nombreSitio = Util.getNombreSitio(sitioWeb);
         		
         		if (wsRpta.getDominioCreaSitio().getCanal().startsWith("BAZ"))
         			banderaCanal = "1";
         		
    		    Util.getCurrentSession().setAttribute("nombreSitio", nombreSitio);
    		    Util.getCurrentSession().setAttribute("banderaCanal", banderaCanal);
         	}
         	else
         	{
         		nombreSitio = Util.getCurrentSession().getAttribute("nombreSitio").toString();
         		banderaCanal = Util.getCurrentSession().getAttribute("banderaCanal").toString();
         	}
         	
         	planPro = Util.esPlanPro();
         	
			model.put("claseCss", claseCss);
			model.put("colorTexto", colorTexto);
			model.put("extensionImg", extensionImg);
			model.put("nombreUsuario", nombreUsuario);
			model.put("template", template);
			model.put("correoElectronico", correo);
			model.put("nombreSitio", nombreSitio);
			model.put("banderaCanal", banderaCanal);
			model.put("planPro", planPro);
		}		
		catch (Exception e) 
		{
			logger.error("misPromociones:::::", e);
			return null;
		}			

		return new ModelAndView("Webapp/promociones", model);
	}

	@RequestMapping(value = "/infomovil/guardarPromocion", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
	@ResponseBody
	public Map<String, String> guardarPromocion(@RequestParam String titulo, @RequestParam String descripcion,
			@RequestParam String fechaVigencia, String base64Imagen, @RequestParam String redimir,
			@RequestParam String terminos, @RequestParam String templatePromo, @RequestParam String idPromocion,
			@RequestParam String empresa,@RequestParam String nombreVolante, Model model, Locale locale) {	
		
		int l_idPromocion = !StringUtils.isEmpty(idPromocion)?Integer.parseInt(idPromocion):0;
		
		RespuestaVO respVO = new RespuestaVO();
		Map<String, String> resultado = new HashMap<String, String>();

		try {		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			respVO = wsCliente.crearSitioGuardarPromocion(correo, password, descripcion, fechaVigencia, redimir, terminos, titulo,
					base64Imagen, l_idPromocion, templatePromo, empresa, nombreVolante, locale.getLanguage());
			resultado.put("codeError", respVO.getCodeError());
			resultado.put("descEror", respVO.getMsgError());
			
			respVO = wsCliente.crearSitioGetPromociones(correo, password);
			for (OffertRecordVO promocion : respVO.getListPromocion()) {
				resultado.put("idOffer", promocion.getIdOffer());
				resultado.put("urlPromocion", promocion.getUrlPromocion());
			}
		}		
		catch (Exception e)  {
			logger.error("guardarPromocion:::::", e);
			resultado.put("codeError", respVO.getCodeError());
			resultado.put("descEror", respVO.getMsgError());
			resultado.put("nombreSitio", Util.getCurrentSession().getAttribute("nombreSitio").toString());
			resultado.put("banderaCanal", Util.getCurrentSession().getAttribute("banderaCanal").toString());
			return null;
		}			

		try
		{
//			resultado.put("nombreSitio", Util.getCurrentSession().getAttribute("nombreSitio").toString());
//			resultado.put("banderaCanal", Util.getCurrentSession().getAttribute("banderaCanal").toString());
		}
		catch(Exception e)
		{
			logger.error("guardarPromocion:::::", e);
		}
		
		return resultado;
	}
	
	@RequestMapping(value = "/infomovil/eliminarPromocion", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
	@ResponseBody
	public Map<String, String> eliminarPromocion(@RequestParam int idPromocion, String nombreVolante)
	{		
		RespuestaVO respVO = new RespuestaVO();
		Map<String, String> resultado = new HashMap<String, String>();

		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			respVO = wsCliente.crearSitioGuardarPromocion(correo, password, "", "", "", "", "", "", idPromocion, "", "", nombreVolante, "");
			resultado.put("codeError", respVO.getCodeError());
			resultado.put("descEror", respVO.getMsgError());
		}		
		catch (Exception e) 
		{
			logger.error("getPromociones:::::", e);
			resultado.put("codeError", "-1");
			resultado.put("descEror", "errorEliminarPromocion");
			resultado.put("nombreSitio", Util.getCurrentSession().getAttribute("nombreSitio").toString());
			resultado.put("banderaCanal", Util.getCurrentSession().getAttribute("banderaCanal").toString());
			return null;
		}			

		resultado.put("nombreSitio", Util.getCurrentSession().getAttribute("nombreSitio").toString());
		resultado.put("banderaCanal", Util.getCurrentSession().getAttribute("banderaCanal").toString());
		
		return resultado;
	}	
	
	@RequestMapping(value = "/infomovil/refrescarPromocion", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> refrescarPromocion(Locale locale) {	
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		wsCliente.crearSitioRefrescarPromocion(correo, password, locale.getLanguage());
		Map<String, String> resultado = new HashMap<String, String>();
		resultado.put("codeError", "0");
		return resultado;
	}
		
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/infomovil/getPromociones", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
	@ResponseBody
	public JSONArray getPromociones()throws UnsupportedEncodingException
	{		
		RespuestaVO respVO = new RespuestaVO();
		RespuestaVO wsRpta = new RespuestaVO();
		JSONArray list = new JSONArray();
		String nombreSitio = "";
		String banderaCanal = "0";
		String sitioWeb = "";
		
		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			
			respVO =  wsCliente.crearSitioGetPromociones(correo, password);
			list.addAll(respVO.getListPromocion());

         	if (Util.getCurrentSession().getAttribute("nombreSitio") == null ||
         			Util.getCurrentSession().getAttribute("banderaCanal") == null)
         	{
         		wsRpta = wsCliente.crearSitioCargar(correo, password);
      
         		sitioWeb = wsRpta.getDominioCreaSitio().getSitioWeb();
         		nombreSitio = Util.getNombreSitio(sitioWeb);
         		
         		if (wsRpta.getDominioCreaSitio().getCanal().startsWith("BAZ"))
         			banderaCanal = "1";
         		
    		    Util.getCurrentSession().setAttribute("nombreSitio", nombreSitio);
    		    Util.getCurrentSession().setAttribute("banderaCanal", banderaCanal);
         	}
         	else
         	{
         		nombreSitio = Util.getCurrentSession().getAttribute("nombreSitio").toString();
         		banderaCanal = Util.getCurrentSession().getAttribute("banderaCanal").toString();
         	}
		}		
		catch (Exception e) 
		{
			logger.error("getPromociones:::::", e);
			return null;
		}			
		
		return list;
	}
	
	@RequestMapping(value = "/infomovil/verPromo", method = { RequestMethod.GET , RequestMethod.POST }, produces = "application/json")
	@ResponseBody
	public Map<String, String> verPromo(int idDominio, String titulo, String descripcion, String fechaVigencia, String base64Imagen, 
			String redimir, String terminos, String templatePromo, String empresa, Locale locale )
	{
		RespuestaVO respVO = new RespuestaVO();
		Map<String, String> resultado = new HashMap<String, String>();

		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			
			if (idDominio == 0) /*Vista previa*/
				respVO = wsCliente.crearSitioPrevisualizarPromocion(correo, password, descripcion, fechaVigencia, redimir, 
						terminos, titulo, base64Imagen, templatePromo, empresa, locale.getLanguage());
			else /*Ver promo guardada*/
				respVO = wsCliente.crearSitioGuardarPromocion(correo, password, descripcion, fechaVigencia, redimir, 
						terminos, titulo, base64Imagen, idDominio, templatePromo, empresa, "", locale.getLanguage());
			
			resultado.put("codeError", respVO.getCodeError());
			resultado.put("descEror", respVO.getMsgError());
			resultado.put("urlVistaPreviaPromo", respVO.getUrlPromocion());
//			resultado.put("idOffer", respVO.geti);
			logger.info("UrlPromocion: " + respVO.getUrlPromocion());
		}		
		catch (Exception e) 
		{
			logger.error("verPromo:::::", e);
			resultado.put("codeError", respVO.getCodeError());
			resultado.put("descEror", respVO.getMsgError());
			resultado.put("urlVistaPreviaPromo", "");
			return null;
		}			
		
		return resultado;
	}
	
	@RequestMapping(value = "/infomovil/getHTMLPromocion", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> getHTMLPromocion(String nombrePromocion)
	{
		Map<String, String> resultMap = new HashMap<String, String>();
		String elHtmlDePromocion = "";
		
		try
		{				
	     	if(!Util.getProfile().equals("PROD"))
	     	{	
	     		elHtmlDePromocion = IOUtils.toString(Util.getFileAmazon("promodev.mobileinfo.io", nombrePromocion));
	     		elHtmlDePromocion = elHtmlDePromocion.replaceAll("promo.mobileinfo.io", "promodev.mobileinfo.io");
	     	}
	     	else
	     	{
	     		elHtmlDePromocion = IOUtils.toString(Util.getFileAmazon("promo.mobileinfo.io", nombrePromocion));	
	     	}
	     	
	     	elHtmlDePromocion = new String(elHtmlDePromocion.getBytes("UTF-8"), "UTF-8");
			resultMap.put("elHtmlDePromocion", elHtmlDePromocion);
			logger.info("elHtmlDePromocion: " + elHtmlDePromocion);
		}
		catch (Exception e) 
		{
			logger.error("generaHTMLdePromocion:::::", e);
			resultMap.put("elHtmlDePromocion", "SIN_PROMOCION");
		}	
		
		return resultMap;
	}
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger logger = Logger.getLogger(WebappController.class);
}

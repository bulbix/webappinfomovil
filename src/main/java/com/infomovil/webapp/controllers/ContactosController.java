package com.infomovil.webapp.controllers;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RecordNaptrVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.clientWsInfomovil.StatusDomainVO;
import com.infomovil.webapp.model.ModeloWebApp;
import com.infomovil.webapp.util.Util;

@Controller
public class ContactosController
{
	@Autowired
	ModeloWebApp modeloWebApp;
	
	@RequestMapping(value = "/infomovil/misContactos", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public ModelAndView misContactos()
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRpta = new RespuestaVO();
		String template = "Coverpage1azul";
		String claseCss = "inverse";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String contacto = "";
		String downgrade = "";
		String nombreUsuario = "";
		
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
         
         	if (Util.getCurrentSession().getAttribute("contacto") == null ||
         			Util.getCurrentSession().getAttribute("downgrade") == null)
         	{
         		wsRpta = wsCliente.crearSitioCargar(correo, password);
         		downgrade = wsRpta.getDowngrade();
         		modeloWebApp.setItemsUsuario(wsRpta.getListStatusDomainGratisVO());
         		
         		StatusDomainVO itemDomainVO = null;
         		itemDomainVO = modeloWebApp.getCantidadItem("CONTACTO");
				
				if (itemDomainVO != null) 
					contacto = itemDomainVO.getStatus();
				
			    Util.getCurrentSession().setAttribute("contacto", contacto);
			    Util.getCurrentSession().setAttribute("downgrade", downgrade);
         	}
         	else
         	{
         		contacto = Util.getCurrentSession().getAttribute("contacto").toString();
         		downgrade = Util.getCurrentSession().getAttribute("downgrade").toString();
         	}
			
         	
			model.put("claseCss", claseCss);
			model.put("colorTexto", colorTexto);
			model.put("extensionImg", extensionImg);
			model.put("template", template);
			model.put("downgrade", downgrade);
			model.put("contacto", contacto);
			model.put("nombreUsuario", nombreUsuario);
		}		
		catch (Exception e) 
		{
			logger.error("misContactos:::::", e);
			return null;
		}

		return new ModelAndView("Webapp/misContactos", model);
	}
		
	@RequestMapping(value = "/infomovil/guardarContacto", method = { RequestMethod.GET, RequestMethod.POST })
	@ResponseBody
	public Map<String, String> guardarContacto(@RequestParam String descripcionContacto, @RequestParam String numeroEmailRedSocial, @RequestParam String constanteContacto, 
			@RequestParam String redSocialWebSecure, @RequestParam String tipoContacto, @RequestParam String codigoPais, String expRegular, @RequestParam String protocolo) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		String regExp = "!^.*$!" + protocolo + tipoContacto + codigoPais;
		descripcionContacto = new String(descripcionContacto.getBytes("ISO-8859-1"), "UTF-8");
		numeroEmailRedSocial = new String(numeroEmailRedSocial.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			RecordNaptrVO contacto = new RecordNaptrVO();
			contacto.setClaveContacto("");
			contacto.setLongLabelNaptr(descripcionContacto);
			contacto.setRegExp(regExp + numeroEmailRedSocial + "!");
			contacto.setServicesNaptr(constanteContacto);
			contacto.setSubCategory(redSocialWebSecure);// Solo si es red social
			contacto.setVisible("1");
			RespuestaVO wsRespuesta =  wsCliente.crearSitioGuardarContacto(correo, password, contacto);
			
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("guardarContacto:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;

	}
	
	@RequestMapping(value = "/infomovil/eliminarContacto", method = { RequestMethod.GET, RequestMethod.POST })
	@ResponseBody
	public Map<String, String> eliminarContacto(@RequestParam String claveDeContacto) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
				
		try
		{
			
			RecordNaptrVO contacto = new RecordNaptrVO();
			contacto.setClaveContacto(claveDeContacto);
			contacto.setLongLabelNaptr("");
			contacto.setRegExp("");
			contacto.setServicesNaptr("");
			contacto.setSubCategory("");// Solo si es red social
			contacto.setVisible("0");
			RespuestaVO wsRespuesta =  wsCliente.crearSitioGuardarContacto(correo, password, contacto);
			
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("eliminarContacto:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/actualizarContacto", method = { RequestMethod.GET, RequestMethod.POST })
	@ResponseBody
	public Map<String, String> actualizarContacto(@RequestParam String claveDeContacto, @RequestParam String descripcionContacto,  
			@RequestParam String numeroEmailRedSocial, @RequestParam String constanteContacto, @RequestParam String redSocialWebSecure, 
			@RequestParam String visible, @RequestParam String tipoContacto, @RequestParam String codigoPais) 
					throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		String regExp = "!^.*$!" + tipoContacto + codigoPais;
		//descripcionContacto = new String(descripcionContacto.getBytes("ISO-8859-1"), "UTF-8");
		//numeroEmailRedSocial = new String(numeroEmailRedSocial.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{			
			RecordNaptrVO contacto = new RecordNaptrVO();
			contacto.setClaveContacto(claveDeContacto);
			contacto.setLongLabelNaptr(descripcionContacto);
			contacto.setRegExp(regExp + numeroEmailRedSocial + "!");
			contacto.setServicesNaptr(constanteContacto);
			contacto.setSubCategory(redSocialWebSecure);// Solo si es red social
			contacto.setVisible(visible);
			contacto.setPreference("100");
			RespuestaVO wsRespuesta =  wsCliente.crearSitioGuardarContacto(correo, password, contacto);
			
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("guardarContacto:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/infomovil/getContactos", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public JSONArray getContactos() 
			throws UnsupportedEncodingException
	{		
		JSONArray list = new JSONArray();
		List<RecordNaptrVO> wsRespuesta = null;
		
		try
		{	
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			wsRespuesta = wsCliente.crearSitioGetContactos(correo, password).getListContactos();
			list.addAll(wsRespuesta);
			logger.info(list);
			
		}		
		catch (Exception e) 
		{
			logger.error("getContactos:::::", e);
		}	

		return list;
	}	
	
	@RequestMapping(value = "/infomovil/setOrderContacts", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public Map<String, String> setOrderContacts(@RequestParam String xml) 
			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		logger.info(xml);
		try
		{	
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			RespuestaVO resp = wsCliente.crearSitioOrdenarImagenesContactos(correo, password, xml, "CONTACTO");
			resultMap.put("codeError", resp.getCodeError());
						
		}		
		catch (Exception e) 
		{
			logger.error("getContactos:::::", e);
			resultMap.put("codeError", "-1");
		}	
		
		return resultMap;
	}
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	
}
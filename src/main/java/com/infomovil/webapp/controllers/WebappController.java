package com.infomovil.webapp.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.infomovil.webapp.clientWsInfomovil.Catalogo;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.util.Util;

@Controller
public class WebappController 
{
	
	@RequestMapping(value = "/infomovil/guardarInformacion", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> guardarInformacion(@RequestParam String nombreEmpresa, 
			@RequestParam String descripcionCorta, @RequestParam String correoElectronico, 
			@RequestParam String telefono)
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		try
		{
			correo = Util.getUserLogged().getPrincipal().toString();
			password = Util.getUserLogged().getCredentials().toString();
			
			String nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
			
			wsRespuesta = wsCliente.crearSitioGuardar(correo, password, 
					nombreUsuario, nombreEmpresa, descripcionCorta, 
					correoElectronico, telefono, "Coverpage1azul");
			
			
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("guardarInformacion:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/infomovil/publicarSitio", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> publicarSitio(@RequestParam String nombreDominio, @RequestParam String tipoDominio, 
			@RequestParam int idCatTipoRecurso)
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		try
		{
			correo = Util.getUserLogged().getPrincipal().toString();
			password = Util.getUserLogged().getCredentials().toString();	
			nombrePersona = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
					
			wsRespuesta = wsCliente.crearSitioPublicar(correo, password, nombrePersona, "Mexico", nombreDominio, tipoDominio, idCatTipoRecurso);
			resultMap.put("", wsRespuesta.getResultado());
		}		
		catch (Exception e) 
		{
			logger.error("publicarSitio:::::", e);	
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/registrarUsuario", method = RequestMethod.GET)
	public ModelAndView registrarUsuario(String nombre, String codigo, String correo, HttpServletRequest request) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		ModelAndView modeloVista = null;
		//Util.getCurrentSession().invalidate();
		
		vista = "Webapp/registrar";
		
		if (nombre == null || correo == null || codigo == null)
			return validaURL("Webapp/validaUrl");
		else
		{
			wsRespuesta = wsCliente.crearSitioRegistrar(correo, passwordDefault, nombre, codigo);
			codigoError = wsRespuesta.getCodeError();
			descripcionError = wsRespuesta.getMsgError();
			
			model.put("nombre", nombre);
			model.put("codigo", codigo);
			model.put("correo", correo);
			model.put("codigoError", codigoError);
			model.put("descripcionError", descripcionError);
			
			if (codigoError.equals("0"))
			{
				Util.loginUsuario(correo, passwordDefault);
				modeloVista = editarSitio();
			}
			else if (codigoError.equals("-1"))
				vista = "Webapp/registrar";
			else if (codigoError.equals("-3"))
				vista = "Webapp/login";
			
			if (modeloVista != null)
				return modeloVista;
			
			return new ModelAndView(vista, model);
		}
	}

	@RequestMapping(value = "/registra", method = RequestMethod.GET)
	public String registra() 
	{
		return "Webapp/registrar";
	}
	
	private ModelAndView validaURL(String vista)
	{
		HashMap<String, Object> model = new HashMap<String, Object>();		
		model.put("name", "");		

		return new ModelAndView(vista, model);
	}

	@RequestMapping(value = "/infomovil/editarSitio", method = RequestMethod.GET)
	public ModelAndView editarSitio()
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		sitioWeb = "SIN_PUBLICAR";
		
		try
		{
			password = Util.getUserLogged().getCredentials().toString();
			correo = Util.getUserLogged().getPrincipal().toString();
			
			wsRespuesta = wsCliente.crearSitioCargar(correo, password);
			
			if (wsRespuesta.getCodeError().equals("0"))
			{
				
				Util.getCurrentSession().setAttribute("nombreUsuario", 
				wsRespuesta.getDominioCreaSitio().getNombreUsuario());
				
				model.put("usuarioLogueado", correo);
				model.put("nombreUsuario", wsRespuesta.getDominioCreaSitio().getNombreUsuario().trim());
				model.put("nombreEmpresa", wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim());
				model.put("descripcionCorta", wsRespuesta.getDominioCreaSitio().getDescripcionCorta().trim());
				model.put("correoElectronico", wsRespuesta.getDominioCreaSitio().getCorreoElectronico().trim());
				model.put("telefonoUsuario", wsRespuesta.getDominioCreaSitio().getTelefono().trim());			
				model.put("template", wsRespuesta.getDominioCreaSitio().getTemplate());
				model.put("vistaPrevia", wsRespuesta.getDominioCreaSitio().getUrlVistaPrevia());				
				model.put("dominios", obtenerDominios());
				
				if (wsRespuesta.getDominioCreaSitio().getCanal().equals("BAZ(1)"))
					canal = "BAZ";
				
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb()))
					sitioWeb = wsRespuesta.getDominioCreaSitio().getSitioWeb();
				
				if (sitioWeb.indexOf("tel") != -1)
				{
					fechaIni = wsRespuesta.getFTelNamesIni();
					fechaFin = wsRespuesta.getFTelNamesFin();
				}
					
				model.put("sitioWeb", sitioWeb); 
				model.put("fechaIniTel", fechaIni);
				model.put("fechaFinTel", fechaFin);
				model.put("canalUsuario", canal);
			}
			
			return new ModelAndView("Webapp/editorSitio", model);
		}		
		catch (Exception e) 
		{
			logger.error("cargarInformacion:::::", e);
			return null;
		}	
	}
	
	@RequestMapping(value = "/infomovil/obtenerDominios", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public HashMap<String, Object> obtenerDominios()
	{		
		try
		{
			wsCatalogo = wsCliente.catalogoDominios();
			
			for (Catalogo catalogo : wsCatalogo)
			{
				dominios.put(String.valueOf(catalogo.getId()), catalogo.getDescripcion()) ;
			}
		}		
		catch (Exception e) 
		{
			logger.error("obtenerDominios:::::", e);
		}	
		
		return dominios;
	}
	
	@RequestMapping(value = "/infomovil/existeDominio", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> existeDominio(@RequestParam String nombreDominio, @RequestParam String tipoDominio)
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		try
		{
			wsRespuesta = wsCliente.crearSitioExisteDominio(nombreDominio, tipoDominio);
			resultMap.put("resultado", wsRespuesta.getResultado());
		}		
		catch (Exception e) 
		{
			logger.error("existeDominio:::::", e);
		}	
		
		return resultMap;
	}
	
	private String passwordDefault = "banco1";
	private String nombrePersona;
	private String codigoError;
	private String descripcionError;
	private String vista;
	private String fechaIni = "SIN_FECHA";
	private String fechaFin = "SIN_FECHA";
	private String sitioWeb = "SIN_PUBLICAR";
	private String canal = "NO_TIENE";
	private String password;
	private String correo;
	private Map<String, Object> cargarInfo;
	private HashMap<String, Object> dominios = new HashMap<String, Object>();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private RespuestaVO wsRespuesta = new RespuestaVO();
	private List<Catalogo> wsCatalogo;
}

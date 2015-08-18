
package com.infomovil.webapp.controllers;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.Predicate;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.infomovil.webapp.clientWsInfomovil.Catalogo;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.model.ModeloWebApp;
import com.infomovil.webapp.util.Util;

@Controller
public class WebappController 
{
	@Autowired
	TokenBasedRememberMeServices remember;
	@Autowired
	ModeloWebApp modeloWebApp;
	
	@RequestMapping(value = "/infomovil/guardarInformacion", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> guardarInformacion(@RequestParam String nombreEmpresa, 
			@RequestParam String descripcionCorta, @RequestParam String correoElectronico, 
			@RequestParam String telefono, @RequestParam String plantilla) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		nombreEmpresa = new String(nombreEmpresa.getBytes("ISO-8859-1"), "UTF-8");
		descripcionCorta = new String(descripcionCorta.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			
			String nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
			
			RespuestaVO wsRespuesta = wsCliente.crearSitioGuardar(correo, password, 
					nombreUsuario, nombreEmpresa, descripcionCorta, 
					EmailValidator.getInstance().isValid(correoElectronico)?correoElectronico:"",
							telefono, plantilla);
			
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("guardarInformacion:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/infomovil/actualizaPlantilla", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> actualizaPlantilla(@RequestParam String nombreEmpresa, 
			@RequestParam String descripcionCorta, @RequestParam String correoElectronico, 
			@RequestParam String telefono, @RequestParam String plantilla) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		nombreEmpresa = new String(nombreEmpresa.getBytes("ISO-8859-1"), "UTF-8");
		descripcionCorta = new String(descripcionCorta.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			
			String nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
			
			wsRespuesta = wsCliente.crearSitioGuardar(correo, password, 
					nombreUsuario, nombreEmpresa, descripcionCorta, 
					EmailValidator.getInstance().isValid(correoElectronico)?correoElectronico:"",
							telefono, plantilla);
		}		
		catch (Exception e) 
		{
			logger.error("guardarInformacion:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		resultMap.put("actualizaTemplate", wsRespuesta.getCodeError());
		
		return resultMap;
	}

	@RequestMapping(value = "/infomovil/actualizaMapa", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> actualizaMapa(@RequestParam String longitud, @RequestParam String latitud, @RequestParam String direccion) 
			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		direccion = new String(direccion.getBytes("ISO-8859-1"), "UTF-8");
		logger.info("longitud: " + longitud + ", latitud: " + latitud + ", direccion: " + direccion);
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();			
			wsRespuesta = wsCliente.crearSitioGuardarUbicacion(correo, password, latitud, longitud, direccion);
		}		
		catch (Exception e) 
		{
			logger.error("actualizaMapa:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		resultMap.put("actualizaMapa", wsRespuesta.getCodeError());
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/actualizaVideo", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> actualizaVideo(@RequestParam String urlVideo) 
			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();			
			wsRespuesta = wsCliente.crearSitioGuardarVideo(correo, password, urlVideo);
		}		
		catch (Exception e) 
		{
			logger.error("actualizaVideo:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		resultMap.put("actualizaVideo", wsRespuesta.getCodeError());
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/publicarSitio", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView publicarSitio(@RequestParam String nombreDominio, @RequestParam String tipoDominio, 
			@RequestParam int idCatTipoRecurso, HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAtt)
	{		
		String resultadoPublicacion = "-1";
		
		ModelAndView modeloVista = null;
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		RedirectAttributes redirectAttributes = null;
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();	
			String nombrePersona = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
		
			wsRespuesta = wsCliente.crearSitioCargar(correo, password);
			
			boolean isBAZ = false, tieneTel = false;
			
			if(wsRespuesta.getCodeError().equals("0")){
				isBAZ = wsRespuesta.getDominioCreaSitio().getCanal().startsWith("BAZ");
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb())){
					tieneTel = wsRespuesta.getDominioCreaSitio().getSitioWeb().indexOf(".tel") > 0;
				}
			}

			modeloVista = editarSitio(request, response, redirectAtt);
			modeloVista.setViewName("redirect:/infomovil/editarSitio");
			
			if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb()))
			{			
				ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/editarSitio");
				redirectAtt.addFlashAttribute("msgPublicacion", "Ya tienes publicado un dominio");
				redirectAtt.addFlashAttribute("resultadoPublicacion", "NO");
				return modelAndView;
			}
			
			if(!isBAZ && tipoDominio.equals("tel"))
			{			
				ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/editarSitio");
				redirectAtt.addFlashAttribute("msgPublicacion", "No eres usuario de BAZ, no puedes publicar .tel");
				redirectAtt.addFlashAttribute("resultadoPublicacion", "NO");
				return modelAndView;
			}
			
			if(tieneTel)
			{				
				ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/editarSitio");
				redirectAtt.addFlashAttribute("msgPublicacion", "Tu ya tienes asignado un dominio .tel");
				redirectAtt.addFlashAttribute("resultadoPublicacion", "NO");
				return modelAndView;
			}
			
			wsRespuesta = null;
			wsRespuesta = wsCliente.crearSitioPublicar(correo, password, nombrePersona, "Mexico", nombreDominio, tipoDominio, idCatTipoRecurso);
			resultadoPublicacion = wsRespuesta.getCodeError();
			resultMap.put("resultadoPub", wsRespuesta.getResultado());
			modeloVista = editarSitio(request,response, redirectAttributes);
			
			if (modeloVista != null)
			{
				if (resultadoPublicacion.equals("0"))
				{
					ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/editarSitio");
					redirectAtt.addFlashAttribute("resultadoPublicacion", "SI");
					return modelAndView;
				}
				else
				{				
					ModelAndView modelAndView =  new ModelAndView("redirect:/infomovil/editarSitio");
					redirectAtt.addFlashAttribute("msgPublicacion", "No se ha podido completar la publicación de tu sitio");
					redirectAtt.addFlashAttribute("resultadoPublicacion", "NO");
					return modelAndView;
				}				
				
			}			
		}	
		catch (Exception e) 
		{
			logger.error("publicarSitio:::::", e);	
		}	
		
		return modeloVista;
	}

	@RequestMapping(value = "/registrarUsuario", method = RequestMethod.GET)
	public ModelAndView registrarUsuario(String nombre, String codigo, String correo, HttpServletRequest request,
			HttpServletResponse response, RedirectAttributes redirectAttributes) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		String codigoError = "", descripcionError = "";
		String vista = "Webapp/registrar";
		
		if (nombre == null || correo == null || codigo == null)
			return validaURL("Webapp/validarURL");
		else
		{
			logoutInfomovil(request, response);
			
			wsRespuesta = wsCliente.crearSitioRegistrar(correo, passwordDefault, nombre, codigo.toLowerCase());
			codigoError = wsRespuesta.getCodeError();
			descripcionError = wsRespuesta.getMsgError();
			
			if (codigoError.equals("0"))
			{
				Util.loginUsuario(correo, passwordDefault);
				remember.onLoginSuccess(request, response, SecurityContextHolder.getContext().getAuthentication());
				
				vista = "redirect:/infomovil/editarSitio";
				redirectAttributes.addFlashAttribute("registroExitoso", "SI");
			}
			else
			{
				logoutInfomovil(request, response);
				
				model.put("ctaCorreo", correo);
				model.put("errorCta", descripcionError);
				ModelAndView modelAndView =  new ModelAndView("redirect:/login");
				redirectAttributes.addFlashAttribute("ctaCorreo", correo);
				redirectAttributes.addFlashAttribute("errorCta", descripcionError);
				redirectAttributes.addFlashAttribute("registroExitoso", "NO");
				
				return modelAndView;
			}
			
			return new ModelAndView(vista, model);
		}
	}
	
	private void logoutInfomovil(HttpServletRequest request, HttpServletResponse response){
		//logout
		Authentication authenticate = SecurityContextHolder.getContext().getAuthentication();
		if (authenticate != null){    
		    new SecurityContextLogoutHandler().logout(request, response, authenticate);
		    remember.logout(request, response, authenticate);
		}
	}

	@RequestMapping(value = "/registrar", method = RequestMethod.POST)
	public ModelAndView registrar(String codigo, String correo, String contrasenia, HttpServletRequest request, 
			HttpServletResponse response, RedirectAttributes redirectAttributes) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		String codigoError = "", descripcionError = "", vista="";
		
		wsRespuesta = wsCliente.crearSitioRegistrar(correo, contrasenia, correo, codigo.toLowerCase());
		codigoError = wsRespuesta.getCodeError();
		descripcionError = wsRespuesta.getMsgError();
		
		if (codigoError.equals("0"))
		{
			Util.loginUsuario(correo, contrasenia);
			remember.onLoginSuccess(request, response, SecurityContextHolder.getContext().getAuthentication());
			vista = "redirect:/infomovil/editarSitio";
			redirectAttributes.addFlashAttribute("registroExitoso", "SI");
		}
		else
		{
			model.put("ctaCorreo", correo);
			model.put("errorCta", descripcionError);
			ModelAndView modelAndView =  new ModelAndView("redirect:/login");
			redirectAttributes.addFlashAttribute("ctaCorreo", correo);
			redirectAttributes.addFlashAttribute("errorCta", descripcionError);
			redirectAttributes.addFlashAttribute("registroExitoso", "NO");
			
			return modelAndView;
		}
		
		return new ModelAndView(vista, model);
	}
	
	@RequestMapping(value = "/registrar", method = RequestMethod.GET)
	public String registra(@CookieValue(value = "editarSitioInfomovil", defaultValue = "") String editarSitioInfomovil) 
	{
		if(StringUtils.isEmpty(editarSitioInfomovil)){
			return "Webapp/registrar";
		}
		else{
			return "redirect:/infomovil/editarSitio";
		}
		
	}
	
	private ModelAndView validaURL(String vista)
	{
		HashMap<String, Object> model = new HashMap<String, Object>();		
		model.put("name", "");		

		return new ModelAndView(vista, model);
	}
	
	@RequestMapping(value = "/infomovil/editarSitio", method = RequestMethod.GET)
	public ModelAndView editarSitio(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes)
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRespuesta = new RespuestaVO();
	    String template = "Coverpage1azul";
		String sitioWeb = "SIN_PUBLICAR";
		String canal = "NO_TIENE";
		String claseCss = "default";
		String campania = "basica";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String fechaIni = "";
		String fechaFin = "";
		String status = "";
		String esquemaProducto = "";
		String tipoPublica = "";
		String planPro = "";
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();

		    wsRespuesta = wsCliente.crearSitioCargar(correo, password);
			
			if (wsRespuesta.getCodeError().equals("0"))
			{
				Util.getCurrentSession().setAttribute("nombreUsuario", 
				wsRespuesta.getDominioCreaSitio().getNombreUsuario());				
				campania = wsRespuesta.getDominioCreaSitio().getCampania().toLowerCase();
				
				if (wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim().equals("TÃtulo"))
					model.put("nombreEmpresa", "");
				
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb()))
					sitioWeb = wsRespuesta.getDominioCreaSitio().getSitioWeb();

				if (wsRespuesta.getDominioCreaSitio().getSitioWeb().indexOf("@") != -1)
					sitioWeb = "SIN_PUBLICAR";
				
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getTemplate()))
					template = wsRespuesta.getDominioCreaSitio().getTemplate();

				if (template.equals("Moderno") || template.equals("Creativo") || template.equals("Clasico") 
						|| template.equals("Divertido") || template.equals("Estandar1"))
					template = "Coverpage1azul";
				
				if (sitioWeb.indexOf("tel") != -1)
				{
					fechaIni = wsRespuesta.getFTelNamesIni();
					fechaFin = wsRespuesta.getFTelNamesFin();
				}

				/*Ajuste para trabajar con la lista de productos*/

				if (wsRespuesta.getDominioCreaSitio().getCanal().startsWith("BAZ"))
				{
					canal = "BAZ";
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
					tipoPublica = "tel";
					planPro = "SI";
				}
				else
				{
					model.put("dominios", obtenerDominios());
					canal = wsRespuesta.getDominioCreaSitio().getCanal();
					claseCss = "inverse";
					colorTexto = "textWhite";
					extensionImg = "";
					tipoPublica = "recurso";
					planPro = "NO";
				}
				
				esquemaProducto = wsRespuesta.getEsquemaProducto();
				modeloWebApp.setListaProductos(wsRespuesta.getListProductoUsuarioVO());
				
				if (esquemaProducto.equals("NEW"))
				{
					tipoPublica = "recurso";
					
					ProductoUsuarioVO productoVO = null;
					productoVO = modeloWebApp.getProducto("tel");
					
					if (productoVO != null) /*Tipo de dominio a publicar*/
						tipoPublica = "tel";
					
					planPro = "NO";
					productoVO = null;
					productoVO = modeloWebApp.getProducto("pp", "pi");
					
					if (productoVO != null) /*Busca si en los productos tiene un plan pro*/
						planPro = "SI";
				}

				/*End ajuste para trabajar con la lista de productos*/
				
				model.put("usuarioLogueado", correo);
				model.put("nombreUsuario", wsRespuesta.getDominioCreaSitio().getNombreUsuario().trim());				
				model.put("nombreEmpresa", wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim());
				model.put("descripcionCorta", wsRespuesta.getDominioCreaSitio().getDescripcionCorta().trim());
				model.put("correoElectronico", wsRespuesta.getDominioCreaSitio().getCorreoElectronico().trim());
				model.put("telefonoUsuario", wsRespuesta.getDominioCreaSitio().getTelefono().trim());			
				model.put("vistaPrevia", wsRespuesta.getDominioCreaSitio().getUrlVistaPrevia());	
				model.put("urlVideo", wsRespuesta.getDominioCreaSitio().getVideoUrl());
				model.put("latitud", wsRespuesta.getDominioCreaSitio().getLatitudeMap());
				model.put("longitud", wsRespuesta.getDominioCreaSitio().getLongitudeMap());
				model.put("direccionMap", wsRespuesta.getDominioCreaSitio().getDireccionMap());
				model.put("statusCuenta", wsRespuesta.getDominioCreaSitio().getTipoCuenta().toLowerCase());
				model.put("template", template);
				model.put("sitioWeb", sitioWeb); 
				model.put("fechaIniTel", fechaIni);
				model.put("fechaFinTel", fechaFin);
				model.put("canalUsuario", canal);
				model.put("claseCss", claseCss);
				model.put("colorTexto", colorTexto);
				model.put("extensionImg", extensionImg);		
				model.put("tipoPublica", tipoPublica);
				model.put("planPro", planPro);
			}
			else 
			{
				logoutInfomovil(request, response);
				
				if (wsRespuesta.getCodeError().equals("-3")){
					redirectAttributes.addFlashAttribute("errorCta", "Si ya tienes Plan Pro. Inicia sesión");
					redirectAttributes.addFlashAttribute("ctaCorreo", correo);
				}
				
				ModelAndView modelAndView =  new ModelAndView("redirect:/login");
				return modelAndView;
			}

		//	return new ModelAndView("redirect:/infomovil/editarSitio", model);
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
		HashMap<String, Object> dominios = new HashMap<String, Object>();
		
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

	@RequestMapping(value = "/getDominios", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public HashMap<String, Object> getDominios()
	{	
		HashMap<String, Object> dominios = new HashMap<String, Object>();
		
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
		RespuestaVO wsRespuesta = new RespuestaVO();
		
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
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(){
		logger.info("redirect:/infomovil/editarSitio");
		return "redirect:/infomovil/editarSitio";
	}
	
	final private String passwordDefault = "banco1";
	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private List<Catalogo> wsCatalogo;
}

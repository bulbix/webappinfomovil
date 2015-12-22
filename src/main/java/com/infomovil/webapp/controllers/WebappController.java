
package com.infomovil.webapp.controllers;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.json.simple.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.infomovil.webapp.clientWsInfomovil.Catalogo;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.ImagenVO;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.clientWsInfomovil.StatusDomainVO;
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
		//nombreEmpresa = new String(nombreEmpresa.getBytes("ISO-8859-1"), "UTF-8");
		//descripcionCorta = new String(descripcionCorta.getBytes("ISO-8859-1"), "UTF-8");
		
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
		//direccion = new String(direccion.getBytes("ISO-8859-1"), "UTF-8");
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
	
	@RequestMapping(value = "/infomovil/guardarImagen", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String, String> guardarImagen(@RequestParam String baseImagen, 
												@RequestParam String tipoImagen,
												@RequestParam String domainId,
												@RequestParam String descImagen,
												@RequestParam String rotacion) 

			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		//String desc = new String(descImagen.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{	
			wsRespuesta = wsCliente.crearSitioGuardaImage(domainId, baseImagen, tipoImagen, descImagen, rotacion) ;
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("guardarImagen:::::", e);	
			resultMap.put("codeError", wsRespuesta.getCodeError());
			resultMap.put("descError", wsRespuesta.getMsgError());
		}	
		
		return resultMap;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/infomovil/getImagenes", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public JSONArray getImagenes(@RequestParam int domainId) 
			throws UnsupportedEncodingException
	{		
		JSONArray list = new JSONArray();
		List<ImagenVO> wsRespuesta = null;
		try
		{	
			String correo = Util.getUserLogged().getUsername();		
			wsRespuesta = wsCliente.crearSitioGetImagenes(correo, domainId, "android", "3.0.3");			
			list.addAll(wsRespuesta);
			logger.info(list);
			
		}		
		catch (Exception e) 
		{
			logger.error("getImagenes:::::", e);
		}	

		return list;
	}
	
	@RequestMapping(value = "/infomovil/borrarImagen", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> borrarImagen(@RequestParam String domainId, @RequestParam String imageId) 
			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		
		try
		{				
			wsRespuesta = wsCliente.crearSitioEliminaImage(domainId, imageId);
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("borrarImagen:::::", e);	
			resultMap.put("codeError", wsRespuesta.getCodeError());
			resultMap.put("descError", wsRespuesta.getMsgError());
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/infomovil/actualizarImagen", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, String> actualizarImagen(@RequestParam String domainId, @RequestParam String imageId, @RequestParam String baseImagen, String descImagen) 
			throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		
		//String desc = new String(descImagen.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			wsRespuesta = wsCliente.crearSitioUpdateImage(domainId, imageId, baseImagen, descImagen);
			resultMap.put("codeError", wsRespuesta.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("borrarImagen:::::", e);	
			resultMap.put("codeError", wsRespuesta.getCodeError());
			resultMap.put("descError", wsRespuesta.getMsgError());
		}	
				
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
			
			if(wsRespuesta.getCodeError().equals("0"))
			{
				isBAZ = wsRespuesta.getDominioCreaSitio().getCanal().startsWith("BAZ");
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb()))
				{
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
			correo = correo.toLowerCase();
			wsRespuesta = wsCliente.crearSitioRegistrar(correo, passwordDefault, nombre, codigo.toLowerCase(), "automatico");
			codigoError = wsRespuesta.getCodeError();
			descripcionError = wsRespuesta.getMsgError();
			
			if (codigoError.equals("0"))
			{
				Util.loginUsuario(correo, passwordDefault);
				remember.onLoginSuccess(request, response, SecurityContextHolder.getContext().getAuthentication());
				
				vista = "redirect:/infomovil/multiproducto";
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
		correo = correo.toLowerCase();
		wsRespuesta = wsCliente.crearSitioRegistrar(correo, contrasenia, correo, codigo.toLowerCase(), "formulario");
		codigoError = wsRespuesta.getCodeError();
		descripcionError = wsRespuesta.getMsgError();
		
		if (codigoError.equals("0"))
		{			
			Util.loginUsuario(correo, contrasenia);
			remember.onLoginSuccess(request, response, SecurityContextHolder.getContext().getAuthentication());
			vista = "redirect:/infomovil/multiproducto";
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
	public String registra(@CookieValue(value = "editarSitioInfomovil", defaultValue = "") 
		String editarSitioInfomovil, Model model) 
	{
		if(StringUtils.isEmpty(editarSitioInfomovil)){
			return "Webapp/registrar";
		}
		else{
			return "redirect:/infomovil/multiproducto";
		}
		
	}

	private ModelAndView validaURL(String vista)
	{
		HashMap<String, Object> model = new HashMap<String, Object>();		
		model.put("name", "");		

		return new ModelAndView(vista, model);
	}
	
	
	@RequestMapping(value = "/infomovil/miCuenta", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView miCuenta(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes, 
			String payment_status)
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		HashMap<String, String> productos = new HashMap<String, String>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		RespuestaVO wsStatus = new RespuestaVO();
		ProductoUsuarioVO productoVO = null;
		
		String claseProductos = "'col-xs-12 col-sm-6 col-md-6 col-lg-6 dBlock col-sm-offset-3'";
		String claseCss = "inverse";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String urlPaypal = "";
		String urlReturn = "";
		String nombreUsuario = "";
		String status = "";
		String planPro = "NO";
		int totProductos = 0;

		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();		
			wsRespuesta = wsCliente.crearSitioGetProductosUsuario(correo, password);
			totProductos = wsRespuesta.getListProductoUsuarioVO().size();
			modeloWebApp.setListaProductos(wsRespuesta.getListProductoUsuarioVO());
			
			if (totProductos > 1)
				claseProductos = "'col-xs-12 col-sm-6 col-md-6 col-lg-6 dBlock'";
		
			if (Util.getCurrentSession().getAttribute("canal") != null)
			{
				if (Util.getCurrentSession().getAttribute("canal").toString().startsWith("BAZ"))
				{
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
				}
			}

			if (Util.getCurrentSession().getAttribute("statusCta") == null)
			{
				wsStatus = wsCliente.crearSitioCargar(correo, password);
				Util.getCurrentSession().setAttribute("statusCta", wsStatus.getDominioCreaSitio().getEstatusCuenta());
			}
			
			/*URL para paypal*/
         	if(Util.getProfile().equals("PROD"))
         	{
         		urlPaypal = new String("https://www.paypal.com/cgi-bin/webscr");
         		urlReturn = new String("http://www.infomovil.com/infomovil/miCuenta");
         		productos.put("TEL", "JCLPR45ZL73CU");
         		productos.put("PP1", "EHZXCWQ55K7FJ");
         		productos.put("PP12", "4N89BBTUYR79U");	
         	}
         	else
         	{
         		urlPaypal = new String("https://www.sandbox.paypal.com/cgi-bin/webscr");
         		urlReturn = new String("http://webapp-qa.mobileinfo.io/infomovil/miCuenta");
         		productos.put("TEL", "GVM5RUC45WKJS");
         		productos.put("PP1", "GJ87DBKRZ956A");
         		productos.put("PP12", "BFAWPP8D27FAY");
         	}
         	
         	if (Util.getProfile().equals("DEV"))
         		urlReturn = new String("http://localhost:10100/WebAppInfomovil/infomovil/miCuenta");
         	
         	/*URL para paypal*/
         	
         	if (Util.getCurrentSession().getAttribute("nombreUsuario") != null)
         	{
         		if (!(EmailValidator.getInstance().isValid(Util.getCurrentSession().getAttribute("nombreUsuario").toString())))
         			nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario").toString();
         	}

			productoVO = modeloWebApp.getProducto("pp", "pi");
			
			if (productoVO != null)
				planPro = "SI";		
	
			if (planPro.equals("NO"))
			{
				status = Util.getCurrentSession().getAttribute("statusCta").toString();
				if (modeloWebApp.getStatus(status))
					planPro = "SI";
			}
		
			model.put("claseProductos", claseProductos);
			model.put("claseCss", claseCss);
			model.put("colorTexto", colorTexto);
			model.put("extensionImg", extensionImg);
			model.put("totProductos", totProductos);
			model.put("productos", wsRespuesta.getListProductoUsuarioVO());
			model.put("correoElectronico", correo);
			model.put("paymentStatus", payment_status);
			model.put("urlPaypal", urlPaypal);
			model.put("nombreUsuario", nombreUsuario);
			model.put("urlReturn", urlReturn);
			model.put("planPro", planPro);
			model.put("productosInfo", productos);
		}		
		catch (Exception e) 
		{
			logger.error("miCuenta:::::", e);
			return null;
		}			
		return new ModelAndView("Webapp/miCta", model);
	}

	@RequestMapping(value = "/infomovil/editarSitio", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView editarSitio(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes)
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		
	    String template = "Coverpage1azul";
		String sitioWeb = "SIN_PUBLICAR";
		String canal = "NO_TIENE";
		String claseCss = "default";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String fechaIni = "";
		String fechaFin = "";
		String status = "";
		String esquemaProducto = "";
		String tipoPublica = "";
		String planPro = "";
		String urlEjemploSitio = "";
		String visibleRecurso = "";
		String visibleTel = "";
		String idDominio = "";
		String downgrade = "";
		String galeriaImagenes = "";
		String contacto = "";
		String tipoPlan = "";
		String infoAdicional = "";
		String item = "";
		
		try
		{
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();

		    wsRespuesta = wsCliente.crearSitioCargar(correo, password);
		    
			if (wsRespuesta.getCodeError().equals("0"))
			{
				Util.getCurrentSession().setAttribute("nombreUsuario", 
				wsRespuesta.getDominioCreaSitio().getNombreUsuario());	
				idDominio = wsRespuesta.getIdDominio();
				downgrade = wsRespuesta.getDowngrade();
				tipoPlan = wsRespuesta.getDominioCreaSitio().getTipoCuenta();
				
				for (StatusDomainVO stat : wsRespuesta.getListStatusDomainGratisVO())
				{
					item = stat.getDescripcionItem();
					
					switch(item)
					{
						case "GALERIA DE IMAGENES" :
							galeriaImagenes = stat.getStatus();
							break;
						case "CONTACTO" :
							contacto = stat.getStatus();
							break;
						case "INFORMACION ADICIONAL" :
							infoAdicional = stat.getStatus();
							break;
					}
				}
				
				if (wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim().equals("TÃtulo"))
					model.put("nombreEmpresa", "");
				
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getSitioWeb()))
					sitioWeb = wsRespuesta.getDominioCreaSitio().getSitioWeb();

				if (wsRespuesta.getDominioCreaSitio().getSitioWeb().indexOf("@") != -1)
					sitioWeb = "SIN_PUBLICAR";
				
				if (!StringUtils.isEmpty(wsRespuesta.getDominioCreaSitio().getTemplate()))
					template = wsRespuesta.getDominioCreaSitio().getTemplate().trim();

				if (template.equals("Moderno") || template.equals("Creativo") || template.equals("Clasico") 
						|| template.equals("Divertido") || template.equals("Estandar1") || template.isEmpty())
					template = "Coverpage1azul";
				
				if (sitioWeb.indexOf("tel") != -1)
				{
					fechaIni = wsRespuesta.getFTelNamesIni();
					fechaFin = wsRespuesta.getFTelNamesFin();
				}

				if (wsRespuesta.getDominioCreaSitio().getCanal().startsWith("BAZ"))
				{
					canal = "BAZ";
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
					tipoPublica = "tel";
					planPro = "SI";
					visibleTel = "display:block;";
					visibleRecurso = "display:none";
					urlEjemploSitio = "www.misitio.tel";
				}
				else
				{
					model.put("dominios", obtenerDominios());
					canal = wsRespuesta.getDominioCreaSitio().getCanal();
					claseCss = "inverse";
					colorTexto = "textWhite";
					extensionImg = "";
					tipoPublica = "recurso";
					visibleRecurso = "display:block;";
					visibleTel = "display:none";
					urlEjemploSitio = "";
					planPro = "NO";
				}
				
				esquemaProducto = wsRespuesta.getEsquemaProducto();
				modeloWebApp.setListaProductos(wsRespuesta.getListProductoUsuarioVO());
				
				if (esquemaProducto.equals("NEW"))
				{
					tipoPublica = "recurso";
					visibleRecurso = "display:block;";
					visibleTel = "display:none";
					urlEjemploSitio = "";
					ProductoUsuarioVO productoVO = null;
					productoVO = modeloWebApp.getProducto("tel");
					
					if (productoVO != null) 
					{
						tipoPublica = "tel";
						visibleTel = "display:block;";
						visibleRecurso = "display:none";
						urlEjemploSitio = "www.misitio.tel";
					}
					
					planPro = "NO";
					productoVO = null;
					productoVO = modeloWebApp.getProducto("pp", "pi");
					
					if (productoVO != null)
						planPro = "SI";
				}
			
				if (planPro.equals("NO"))
				{
					status = wsRespuesta.getDominioCreaSitio().getEstatusCuenta();
					if (modeloWebApp.getStatus(status))
						planPro = "SI";
				}
             	
				model.put("usuarioLogueado", correo);
				model.put("nombreUsuario", wsRespuesta.getDominioCreaSitio().getNombreUsuario().trim());				
				model.put("nombreEmpresa", wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim());
				model.put("descripcionCorta", wsRespuesta.getDominioCreaSitio().getDescripcionCorta().trim());
				model.put("correoElectronico", correo);
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
				model.put("urlEjemploSitio", urlEjemploSitio);
				model.put("visibleRecurso", visibleRecurso);
				model.put("visibleTel", visibleTel);
				model.put("idDominio", idDominio);
				model.put("downgrade", downgrade);
				model.put("galeriaImagenes", galeriaImagenes);
				model.put("contacto", contacto);
				model.put("infoAdicional", infoAdicional);
				model.put("tipoPlan", tipoPlan);

				 Util.getCurrentSession().setAttribute("planPro", planPro);
			    Util.getCurrentSession().setAttribute("canal", canal);
			    Util.getCurrentSession().setAttribute("template", template);
			    Util.getCurrentSession().setAttribute("statusCta", status);
			    Util.getCurrentSession().setAttribute("contacto", contacto);
			    Util.getCurrentSession().setAttribute("downgrade", downgrade);
			    Util.getCurrentSession().setAttribute("template", template);
			    Util.getCurrentSession().setAttribute("tipoPlan", tipoPlan); 
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
	public String index() {
		return "redirect:/infomovil/multiproducto";
	}
	
	final private String passwordDefault = "banco1";
	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private List<Catalogo> wsCatalogo;

}
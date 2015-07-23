
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
			@RequestParam String telefono, @RequestParam String plantilla) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		nombreEmpresa = new String(nombreEmpresa.getBytes("ISO-8859-1"), "UTF-8");
		descripcionCorta = new String(descripcionCorta.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			correo = Util.getUserLogged().getUsername();
			password = Util.getUserLogged().getPassword();
			
			String nombreUsuario = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
			
			wsRespuesta = wsCliente.crearSitioGuardar(correo, password, 
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
		nombreEmpresa = new String(nombreEmpresa.getBytes("ISO-8859-1"), "UTF-8");
		descripcionCorta = new String(descripcionCorta.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			correo = Util.getUserLogged().getUsername();
			password = Util.getUserLogged().getPassword();
			
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
	
	@RequestMapping(value = "/infomovil/publicarSitio", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView publicarSitio(@RequestParam String nombreDominio, @RequestParam String tipoDominio, 
			@RequestParam int idCatTipoRecurso, RedirectAttributes redirectAtt)
	{		
		String resultadoPublicacion = "-1";
		ModelAndView modeloVista = null;
		Map<String, String> resultMap = new HashMap<String, String>();
		RedirectAttributes redirectAttributes = null;
		
		try
		{
			correo = Util.getUserLogged().getUsername();
			password = Util.getUserLogged().getPassword();	
			nombrePersona = Util.getCurrentSession().getAttribute("nombreUsuario")!=null?
					Util.getCurrentSession().getAttribute("nombreUsuario").toString():" ";
		
			RespuestaVO respCargarSitio = wsCliente.crearSitioCargar(correo, password);
			
			boolean isBAZ = false, tieneTel = false;
			
			if(respCargarSitio.getCodeError().equals("0")){
				isBAZ = respCargarSitio.getDominioCreaSitio().getCanal().startsWith("BAZ");
				if (!StringUtils.isEmpty(respCargarSitio.getDominioCreaSitio().getSitioWeb())){
					tieneTel = respCargarSitio.getDominioCreaSitio().getSitioWeb().indexOf(".tel") > 0;
				}
			}

			modeloVista = editarSitio(redirectAtt);
			modeloVista.setViewName("redirect:/infomovil/editarSitio");
			
			if (!StringUtils.isEmpty(respCargarSitio.getDominioCreaSitio().getSitioWeb()))
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
			
			wsRespuesta = wsCliente.crearSitioPublicar(correo, password, nombrePersona, "Mexico", nombreDominio, tipoDominio, idCatTipoRecurso);
			resultadoPublicacion = wsRespuesta.getCodeError();
			resultMap.put("resultadoPub", wsRespuesta.getResultado());
			modeloVista = editarSitio(redirectAttributes);
			
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
	public ModelAndView registrarUsuario(String nombre, String codigo, String correo, HttpServletRequest request, RedirectAttributes redirectAttributes) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		vista = "Webapp/registrar";
		
		if (nombre == null || correo == null || codigo == null)
			return validaURL("Webapp/validarURL");
		else
		{
			wsRespuesta = wsCliente.crearSitioRegistrar(correo, passwordDefault, nombre, codigo.toLowerCase());
			codigoError = wsRespuesta.getCodeError();
			descripcionError = wsRespuesta.getMsgError();
			
			if (codigoError.equals("0"))
			{
				Util.loginUsuario(correo, passwordDefault);
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
	}

	@RequestMapping(value = "/registrar", method = RequestMethod.POST)
	public ModelAndView registrar(String codigo, String correo, String contrasenia, HttpServletRequest request, RedirectAttributes redirectAttributes) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();

		wsRespuesta = wsCliente.crearSitioRegistrar(correo, contrasenia, correo, codigo.toLowerCase());
		codigoError = wsRespuesta.getCodeError();
		descripcionError = wsRespuesta.getMsgError();
		
		if (codigoError.equals("0"))
		{
			Util.loginUsuario(correo, contrasenia);
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
	public ModelAndView editarSitio(RedirectAttributes redirectAttributes)
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
	    template = "Coverpage1azul";
		sitioWeb = "SIN_PUBLICAR";
		canal = "NO_TIENE";
		claseCss = "default";
		
		try
		{
			correo = Util.getUserLogged().getUsername();
			password = Util.getUserLogged().getPassword();
			
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

				if (wsRespuesta.getDominioCreaSitio().getCanal().startsWith("BAZ") && 
						!(campania.contains("basica") || campania.contains("basico")))
				{
					canal = "BAZ";
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
				}
				else
				{
					model.put("dominios", obtenerDominios());
					claseCss = "inverse";
					colorTexto = "textWhite";
					extensionImg = "";
				}
				
				model.put("usuarioLogueado", correo);
				model.put("nombreUsuario", wsRespuesta.getDominioCreaSitio().getNombreUsuario().trim());				
				model.put("nombreEmpresa", wsRespuesta.getDominioCreaSitio().getNombreEmpresa().trim());
				model.put("descripcionCorta", wsRespuesta.getDominioCreaSitio().getDescripcionCorta().trim());
				model.put("correoElectronico", wsRespuesta.getDominioCreaSitio().getCorreoElectronico().trim());
				model.put("telefonoUsuario", wsRespuesta.getDominioCreaSitio().getTelefono().trim());			
				model.put("vistaPrevia", wsRespuesta.getDominioCreaSitio().getUrlVistaPrevia());				
				model.put("template", template);
				model.put("sitioWeb", sitioWeb); 
				model.put("fechaIniTel", fechaIni);
				model.put("fechaFinTel", fechaFin);
				model.put("canalUsuario", canal);
				model.put("claseCss", claseCss);
				model.put("colorTexto", colorTexto);
				model.put("extensionImg", extensionImg);
			}
			else if (wsRespuesta.getCodeError().equals("-3"))
			{
				ModelAndView modelAndView =  new ModelAndView("redirect:/login");
				redirectAttributes.addFlashAttribute("errorCta", "Tu Plan Pro ya está activo. Inicia sesión");
				redirectAttributes.addFlashAttribute("ctaCorreo", correo);
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
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(){
		return "redirect:/infomovil/editarSitio";
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
//	private String tipoUsuario = "normal";
	private String campania = "basica";
	private String claseCss = "default";
	private String colorTexto = "textWhite";
	private String extensionImg;
	private String template ;
	private String password;
	private String correo;
	private HashMap<String, Object> dominios = new HashMap<String, Object>();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private RespuestaVO wsRespuesta = new RespuestaVO();
	private List<Catalogo> wsCatalogo;
}

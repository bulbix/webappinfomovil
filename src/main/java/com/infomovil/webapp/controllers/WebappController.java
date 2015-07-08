package com.infomovil.webapp.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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

@Controller
public class WebappController 
{
	
	@RequestMapping(value = "/guardarInformacion", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> guardarInformacion(@RequestParam String email, @RequestParam String password, @RequestParam String nombreUsuario, @RequestParam String nombreEmpresa, 
			@RequestParam String descripcionCorta, @RequestParam String correoElectronico, @RequestParam String telefono, @RequestParam String template, Model model)
	{		
		try
		{
			wsRespuesta = wsCliente.crearSitioGuardar(email, password, nombreUsuario, nombreEmpresa, descripcionCorta, correoElectronico, telefono, template);
		}		
		catch (Exception e) 
		{
			logger.error("guardarInformacion:::::", e);	
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/publicarSitio", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> publicarSitio(@RequestParam String email, @RequestParam String password, @RequestParam String nombrePersona, @RequestParam String direccionPersona, 
			@RequestParam String nombreDominio, @RequestParam String tipoDominio, @RequestParam int idCatTipoRecurso, @RequestParam String tipo, Model model)
	{		
		try
		{
			wsRespuesta = wsCliente.crearSitioPublicar(email, password, nombrePersona, direccionPersona, nombreDominio, tipoDominio, idCatTipoRecurso);
		}		
		catch (Exception e) 
		{
			logger.error("publicarSitio:::::", e);	
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/registrarUsuario", method = RequestMethod.GET)
	public ModelAndView registrarUsuario(String nombre, String codigo, String email, HttpServletRequest request) 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		
		if (nombre == null || email == null)
		{
			// validar url con vista 
			return validaURL("");
		}
		else
		{
			wsRespuesta = wsCliente.crearSitioRegistrar(email, passwordDefault, nombre, codigo);

			model.put("nombre", nombre);
			model.put("codigo", codigo);
			model.put("email", email);

			return new ModelAndView("Webapp/registrar", model);
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
	
	@RequestMapping(value = "/ingresar", method = RequestMethod.GET)
	public ModelAndView ingresar() 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		model.put("name", "");
		
		return new ModelAndView("Webapp/ingresar", model);
	}

	@RequestMapping(value = "/password", method = RequestMethod.GET)
	public ModelAndView password() 
	{
		HashMap<String, Object> model = new HashMap<String, Object>();
		model.put("name", "");
		
		return new ModelAndView("Webapp/restablecerPass", model);
	}
	
	@RequestMapping(value = "/registrarUsuario", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> registrarUsuario(@RequestParam String email, @RequestParam String password, @RequestParam String codigo, @RequestParam String nombreUsuario, Model model)
	{		
		try
		{
			wsRespuesta = wsCliente.crearSitioRegistrar(email, password, nombreUsuario, codigo);
		}		
		catch (Exception e) 
		{
			logger.error("registrarUsuario:::::", e);
		}	
		
		return resultMap;
	}

	@RequestMapping(value = "/cargarInformacion", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> cargarInformacion(@RequestParam String email, @RequestParam String password, Model model)
	{		
		try
		{
			wsRespuesta = wsCliente.crearSitioCargar(email, password);
		}		
		catch (Exception e) 
		{
			logger.error("cargarInformacion:::::", e);
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/obtenerDominios", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> obtenerDominios()
	{		
		try
		{
			wsCatalogo = wsCliente.catalogoDominios();
		}		
		catch (Exception e) 
		{
			logger.error("obtenerDominios:::::", e);
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/existeDominio", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> existeDominio(@RequestParam String nombreDominio, @RequestParam String tipoDominio)
	{		
		try
		{
			wsRespuesta = wsCliente.crearSitioExisteDominio(nombreDominio, tipoDominio);
		}		
		catch (Exception e) 
		{
			logger.error("existeDominio:::::", e);
		}	
		
		return resultMap;
	}
	
	private String passwordDefault = "banco1";
	private Map<String, Object> resultMap = new HashMap<String, Object>();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private RespuestaVO wsRespuesta = new RespuestaVO();
	private List<Catalogo> wsCatalogo;
}

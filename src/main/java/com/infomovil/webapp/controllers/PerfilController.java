
package com.infomovil.webapp.controllers;

import static org.junit.Assert.assertTrue;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
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
import com.infomovil.webapp.clientWsInfomovil.HorarioVO;
import com.infomovil.webapp.clientWsInfomovil.ImagenVO;
import com.infomovil.webapp.clientWsInfomovil.KeywordVO;
import com.infomovil.webapp.clientWsInfomovil.OffertRecordVO;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.clientWsInfomovil.StatusDomainVO;
import com.infomovil.webapp.model.ModeloWebApp;
import com.infomovil.webapp.util.Util;


@Controller
public class PerfilController 
{
	@Autowired
	TokenBasedRememberMeServices remember;
	@Autowired
	ModeloWebApp modeloWebApp;
	
	@RequestMapping(value = "/infomovil/guardarHorarios", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public Map<String, String> guardarHorarios(@RequestParam List<String> dias) 
			throws UnsupportedEncodingException
	{		
		
		Map<String, String> resultMap = new HashMap<String, String>();
		List<HorarioVO> listaHorarios = new ArrayList<HorarioVO>();
		listaHorarios.add(new HorarioVO("Lun", dias.get(0), dias.get(1)));
		listaHorarios.add(new HorarioVO("Mar", dias.get(2), dias.get(3)));
		listaHorarios.add(new HorarioVO("Mié", dias.get(4), dias.get(5)));
		listaHorarios.add(new HorarioVO("Jue", dias.get(6), dias.get(7)));
		listaHorarios.add(new HorarioVO("Vie", dias.get(8), dias.get(9)));
		listaHorarios.add(new HorarioVO("Sáb", dias.get(10),dias.get(11)));
		listaHorarios.add(new HorarioVO("Dom", dias.get(12), dias.get(13)));
		
		try
		{	
			RespuestaVO respConsulta;
			RespuestaVO resp;
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();	
			respConsulta = wsCliente.crearSitioGetHorarios(correo, password);
			
			if(respConsulta.getKeyword() == null){
				System.out.println("El error es1: " + respConsulta.getCodeError());
				resp = wsCliente.crearSitioHorarios(correo, password,
						new KeywordVO(),listaHorarios,"insert");
			}else{
				System.out.println("El error es2: " +respConsulta.getCodeError());
				resp = wsCliente.crearSitioHorarios(correo, password,
						respConsulta.getKeyword(),listaHorarios,"update");
			}
			resultMap.put("codeError", resp.getCodeError());			
		}		
		catch (Exception e) 
		{
			logger.error("guardarHorarios:::::", e);
			resultMap.put("codeError", "-1");
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/getHorarios", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public Map<String, Object> getHorarios()
	{		
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
	
		try
		{	
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();	
			RespuestaVO resp = wsCliente.crearSitioGetHorarios(correo,password);
			
			if(resp.getListHorarios().size() > 0){
				resultMap.put("codeError", resp.getCodeError());
				resultMap.put("keyword", resp.getKeyword());
				resultMap.put("listaHorario", resp.getListHorarios());
				
			}else{
				resultMap.put("codeError", "-100");
			}			
			
		}		
		catch (Exception e) 
		{
			logger.error("guardarHorarios:::::", e);
			resultMap.put("codeError", "-1");
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/eliminarHorarios", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public Map<String, Object> eliminarHorarios()
	{		
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
	
		try
		{	
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();	
			RespuestaVO resp = wsCliente.crearSitioGetHorarios(correo,password);
			
			resp.getKeyword().setKeywordValue("");
			resp.getKeyword().setKeywordField("");			
			resp = wsCliente.crearSitioHorarios(correo,password,resp.getKeyword(),null,"delete");
			resultMap.put("codeError", resp.getCodeError());
		}		
		catch (Exception e) 
		{
			logger.error("eliminarHorario:::::", e);
			resultMap.put("codeError", "-1");
		}	
		
		return resultMap;
	}
	
	

	private static final Logger logger = Logger.getLogger(WebappController.class);
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private List<Catalogo> wsCatalogo;

}
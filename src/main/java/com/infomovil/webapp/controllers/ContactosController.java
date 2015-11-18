package com.infomovil.webapp.controllers;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.OffertRecordVO;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RecordNaptrVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.util.Util;

@Controller
public class ContactosController {

	
	@RequestMapping(value = "/infomovil/misContactos", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public ModelAndView misContactos()
	{		
		HashMap<String, Object> model = new HashMap<String, Object>();
		RespuestaVO wsRespuesta = new RespuestaVO();
		RespuestaVO wsRespuestaContacto = new RespuestaVO();
		
		String nombreUsuario = "";
		String template = "Coverpage1azul";
		String claseCss = "inverse";
		String colorTexto = "textWhite";
		String extensionImg = "";
		/*
		String nombreSitio = "";
		String banderaCanal = "0";
		String sitioWeb = "";
		*/
		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			
			wsRespuesta = wsCliente.crearSitioGetPromociones(correo, password);
         	
			for (OffertRecordVO promocion : wsRespuesta.getListPromocion())
			{
				model.put("titleOffer", promocion.getTitleOffer());
				model.put("descOffer", promocion.getDescOffer());
				model.put("termsOffer", promocion.getTermsOffer());
				model.put("imageClobOffer", promocion.getImageClobOffer());
				model.put("endDateOffer", promocion.getEndDateOffer());
				model.put("promoCodeOffer", promocion.getPromoCodeOffer());
				model.put("discountOffer", promocion.getDiscountOffer());
				model.put("redeemOffer", promocion.getRedeemOffer());
				model.put("idOffer", promocion.getIdOffer());
				model.put("urlImage", promocion.getUrlImage());
				model.put("urlPromocion", promocion.getUrlPromocion());
			}	
			
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
         
			model.put("claseCss", claseCss);
			model.put("colorTexto", colorTexto);
			model.put("extensionImg", extensionImg);
			model.put("nombreUsuario", nombreUsuario);
			model.put("template", template);
			model.put("correoElectronico", correo);
			
			
			wsRespuestaContacto = wsCliente.crearSitioGetContactos(correo, password);
			for (RecordNaptrVO contactos : wsRespuestaContacto.getListContactos())
			{
				model.put("longLabel", contactos.getLongLabelNaptr());
				
				// TEigues!/
				model.put("categoryContacto", contactos.getCategoryNaptr());       // Sepa su madre!
				model.put("descripcionContacto", contactos.getLongLabelNaptr() ); // DEscripcion
				model.put("datoContacto", contactos.getRegExp() );                // Expresion + pais + n umero !(tel-sms)(Celular +521) 
				model.put("tipoContacto", contactos.getServicesNaptr() );    	 // Tipo de contacto
				model.put("redSocialContacto", contactos.getSubCategory() );   	//  Linkedin-Twitter-Facebook-Google-Skype-SecureWebsite
				model.put("visibleContacto", contactos.getVisible() );          // 1 o 0
				model.put("claveContacto", contactos.getClaveContacto());       // clave del contacto
			}
			
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
	public Map<String, String> guardarContacto(@RequestParam String descripcionContacto,  @RequestParam String numeroEmailRedSocial,  @RequestParam String constanteContacto,@RequestParam String redSocialWebSecure) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		
		
		descripcionContacto = new String(descripcionContacto.getBytes("ISO-8859-1"), "UTF-8");
		numeroEmailRedSocial = new String(numeroEmailRedSocial.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			
			RecordNaptrVO contacto = new RecordNaptrVO();
			contacto.setClaveContacto("");
			contacto.setLongLabelNaptr(descripcionContacto);
			contacto.setRegExp(numeroEmailRedSocial);
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
			logger.error("guardarContacto:::::", e);	
			resultMap.put("codeError", "-100");
		}	
		
		return resultMap;
	}
	
	@RequestMapping(value = "/infomovil/actualizarContacto", method = { RequestMethod.GET, RequestMethod.POST })
	@ResponseBody
	public Map<String, String> actualizarContacto(@RequestParam String claveDeContacto, @RequestParam String descripcionContacto,  @RequestParam String numeroEmailRedSocial,  @RequestParam String constanteContacto,@RequestParam String redSocialWebSecure) throws UnsupportedEncodingException
	{		
		Map<String, String> resultMap = new HashMap<String, String>();
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();
		
		descripcionContacto = new String(descripcionContacto.getBytes("ISO-8859-1"), "UTF-8");
		numeroEmailRedSocial = new String(numeroEmailRedSocial.getBytes("ISO-8859-1"), "UTF-8");
		
		try
		{
			
			RecordNaptrVO contacto = new RecordNaptrVO();
			contacto.setClaveContacto(claveDeContacto);
			contacto.setLongLabelNaptr(descripcionContacto);
			contacto.setRegExp(numeroEmailRedSocial);
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
	
	
	
	
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	
}

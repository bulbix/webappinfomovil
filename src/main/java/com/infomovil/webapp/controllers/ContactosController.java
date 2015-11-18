package com.infomovil.webapp.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
				
			}
			
		}		
		catch (Exception e) 
		{
			logger.error("misContactos:::::", e);
			return null;
		}
		
		
		
		
		
		return new ModelAndView("Webapp/misContactos", model);
	}
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger logger = Logger.getLogger(WebappController.class);
	
}

package com.infomovil.webapp.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.validator.routines.EmailValidator;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
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
		RespuestaVO wsRespuestaContacto = new RespuestaVO();
		RespuestaVO wsRpta = new RespuestaVO();
		
		String nombreUsuario = "";
		String template = "Coverpage1azul";
		String claseCss = "inverse";
		String colorTexto = "textWhite";
		String extensionImg = "";
		String contacto = "";
		String downgrade = "";
		
		try
		{		
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();

			wsRespuestaContacto = wsCliente.crearSitioGetContactos(correo, password);
			
			if (wsRespuestaContacto.getCodeError().equals("0"))
				model.put("listaContactos", wsRespuestaContacto.getListContactos());
			
			/*for (RecordNaptrVO contactos : wsRespuestaContacto.getListContactos())
			{
				model.put("longLabel", contactos.getLongLabelNaptr());
				model.put("categoryContacto", contactos.getCategoryNaptr());       // Sepa su madre!
				model.put("descripcionContacto", contactos.getLongLabelNaptr()); // DEscripcion
				model.put("datoContacto", contactos.getRegExp());              // Expresion + pais + n umero !(tel-sms)(Celular +521) 
				model.put("tipoContacto", contactos.getServicesNaptr());    	 // Tipo de contacto
				model.put("redSocialContacto", contactos.getSubCategory());   	//  Linkedin-Twitter-Facebook-Google-Skype-SecureWebsite
				model.put("visibleContacto", contactos.getVisible());          // 1 o 0				
			}*/
			
			if (Util.getCurrentSession().getAttribute("canal") != null)
			{
				if (Util.getCurrentSession().getAttribute("canal").toString().startsWith("BAZ"))
				{
					claseCss = "default";
					colorTexto = "textBlack";
					extensionImg = "-bk";
				}
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
			model.put("nombreUsuario", nombreUsuario);
			model.put("template", template);
			model.put("downgrade", downgrade);
			model.put("contacto", contacto);
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

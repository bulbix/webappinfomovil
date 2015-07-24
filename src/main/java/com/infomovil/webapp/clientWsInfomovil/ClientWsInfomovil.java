package com.infomovil.webapp.clientWsInfomovil;

import java.net.URL;
import java.util.List;

import javax.xml.namespace.QName;

import org.apache.log4j.Logger;

public class ClientWsInfomovil {

	private static final Logger log = Logger.getLogger(ClientWsInfomovil.class);

	private static final QName SERVICE_NAME = new QName("http://ws.webservice.infomovil.org/", "WsInfomovilDomainService");
	URL wsdlURL = WsInfomovilDomainService.WSDL_LOCATION;
	WsInfomovilDomain port;

	public ClientWsInfomovil(){
		WsInfomovilDomainService ss = new WsInfomovilDomainService(wsdlURL, SERVICE_NAME);
		port = ss.getWsInfomovilDomainPort();  
	}

	public RespuestaVO crearSitioLogin(String email, String password){
		//log.info("Invoking crearSitioLogin...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioLogin _crearSitioLogin_parameters = new CrearSitioLogin();
		_crearSitioLogin_parameters.email = email;
		_crearSitioLogin_parameters.password = password;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioLoginResponse _crearSitioLogin__return = port.crearSitioLogin(_crearSitioLogin_parameters);
		//log.info("crearSitioLogin.result=" + _crearSitioLogin__return.respuestaVO.codeError);
		return _crearSitioLogin__return.getRespuestaVO();
	}

	public RespuestaVO crearSitioRegistrar(String email, String password, String nombreUsuario, String codigo){

		//log.info("Invoking crearSitioRegistrar...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioRegistrar _crearSitioRegistrar_parameters = new CrearSitioRegistrar();
		_crearSitioRegistrar_parameters.email = email;
		_crearSitioRegistrar_parameters.password = password;
		_crearSitioRegistrar_parameters.nombreUsuario = nombreUsuario;
		_crearSitioRegistrar_parameters.codigo = codigo;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioRegistrarResponse _crearSitioRegistrar__return = port.crearSitioRegistrar(_crearSitioRegistrar_parameters);
		//log.info("crearSitioRegistrar.result=" + _crearSitioRegistrar__return.respuestaVO.codeError);
		return _crearSitioRegistrar__return.respuestaVO;
	}

	public RespuestaVO crearSitioGuardar(String email, String password, String nombreUsuario, 
			String nombreEmpresa, String descripcionCorta, String correoElectronico, String telefono, String template){
		//log.info("Invoking crearSitioGuardar...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardar _crearSitioGuardar_parameters = new CrearSitioGuardar();
		_crearSitioGuardar_parameters.email = email;
		_crearSitioGuardar_parameters.password = password;
		_crearSitioGuardar_parameters.nombreUsuario = nombreUsuario;
		_crearSitioGuardar_parameters.nombreEmpresa = nombreEmpresa;
		_crearSitioGuardar_parameters.descripcionCorta = descripcionCorta;
		_crearSitioGuardar_parameters.correoElectronico = correoElectronico;
		_crearSitioGuardar_parameters.telefono = telefono;
		_crearSitioGuardar_parameters.template = template;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarResponse _crearSitioGuardar__return = port.crearSitioGuardar(_crearSitioGuardar_parameters);
		//log.info("crearSitioGuardar.result=" + _crearSitioGuardar__return.respuestaVO.codeError);
		return _crearSitioGuardar__return.respuestaVO;
	}

	public RespuestaVO crearSitioCargar(String email, String password){
		//log.info("Invoking crearSitioCargar...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioCargar _crearSitioCargar_parameters = new CrearSitioCargar();
		_crearSitioCargar_parameters.email = email;
		_crearSitioCargar_parameters.password = password;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioCargarResponse _crearSitioCargar__return = port.crearSitioCargar(_crearSitioCargar_parameters);
		//log.info("crearSitioCargar.result=" + _crearSitioCargar__return.respuestaVO.codeError);
		return _crearSitioCargar__return.respuestaVO;
	}

	public RespuestaVO crearSitioPublicar(String email, String password, String nombrePresona, String direccionPersona,
			String nombreDominio, String tipoDominio, int idCatTipoRecurso){

		//log.info("Invoking crearSitioPublicar...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioPublicar _crearSitioPublicar_parameters = new CrearSitioPublicar();
		_crearSitioPublicar_parameters.email = email;
		_crearSitioPublicar_parameters.password = password;
		_crearSitioPublicar_parameters.nombrePersona = nombrePresona;
		_crearSitioPublicar_parameters.direccionPersona = direccionPersona;
		_crearSitioPublicar_parameters.nombreDominio = nombreDominio;
		_crearSitioPublicar_parameters.tipoDominio = tipoDominio;
		_crearSitioPublicar_parameters.idCatTipoRecurso = idCatTipoRecurso;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioPublicarResponse _crearSitioPublicar__return = port.crearSitioPublicar(_crearSitioPublicar_parameters);
		//log.info("crearSitioPublicar.result=" + _crearSitioPublicar__return.respuestaVO.codeError);

		return _crearSitioPublicar__return.respuestaVO;
	}

	public RespuestaVO crearSitioExisteDominio(String nombreDominio, String tipoDominio){
		//log.info("Invoking crearSitioExisteDominio...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioExisteDominio _crearSitioExisteDominio_parameters = new CrearSitioExisteDominio();
		_crearSitioExisteDominio_parameters.nombreDominio = nombreDominio;
		_crearSitioExisteDominio_parameters.tipoDominio = tipoDominio;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioExisteDominioResponse _crearSitioExisteDominio__return = port.crearSitioExisteDominio(_crearSitioExisteDominio_parameters);
		//log.info("crearSitioExisteDominio.result=" + _crearSitioExisteDominio__return.respuestaVO.codeError);
		return _crearSitioExisteDominio__return.respuestaVO;

	}

	public RespuestaVO crearSitioResetPassword(String email){
		//log.info("Invoking crearSitioResetPassword...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioResetPassword _crearSitioResetPassword_parameters = new CrearSitioResetPassword();
		_crearSitioResetPassword_parameters.email = email;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioResetPasswordResponse _crearSitioResetPassword__return = port.crearSitioResetPassword(_crearSitioResetPassword_parameters);
		//log.info("crearSitioResetPassword.result=" + _crearSitioResetPassword__return.respuestaVO.codeError);
		return _crearSitioResetPassword__return.respuestaVO;

	}

	public List<Catalogo> catalogoDominios(){
		//log.info("Invoking catalogoDominios...");
		java.util.List<Catalogo> _catalogoDominios__return = port.catalogoDominios();
		//log.info("catalogoDominios.result=" + _catalogoDominios__return);
		return _catalogoDominios__return;

	}
	
	public RespuestaVO crearSitioGetWebHash(String email){
		//log.info("Invoking crearSitioGetWebHash...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetWebHash _crearSitioGetWebHash_parameters = new CrearSitioGetWebHash();
		_crearSitioGetWebHash_parameters.email = email;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetWebHashResponse _crearSitioGetWebHash__return = 
				port.crearSitioGetWebHash(_crearSitioGetWebHash_parameters);
		//log.info("crearSitioGetWebHash.result=" + _crearSitioGetWebHash__return.respuestaVO.codeError);
		return _crearSitioGetWebHash__return.respuestaVO;
		
	}




}

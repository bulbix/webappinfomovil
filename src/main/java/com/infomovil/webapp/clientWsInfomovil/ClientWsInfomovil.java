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

	public RespuestaVO crearSitioRegistrar(String email, String password, String nombreUsuario, String codigo, String tipoRegistro){

		//log.info("Invoking crearSitioRegistrar...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioRegistrar _crearSitioRegistrar_parameters = new CrearSitioRegistrar();
		_crearSitioRegistrar_parameters.email = email;
		_crearSitioRegistrar_parameters.password = password;
		_crearSitioRegistrar_parameters.nombreUsuario = nombreUsuario;
		_crearSitioRegistrar_parameters.codigo = codigo;
		_crearSitioRegistrar_parameters.tipoRegistro = tipoRegistro;
		
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
	
	public RespuestaVO crearSitioGuardarUbicacion(String email, String password, String latitudeMap, String longitudeMap, String direccionMap){
		log.info("Invoking crearSitioGuardarUbicacion...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarUbicacion _crearSitioGuardarUbicacion_parameters = new CrearSitioGuardarUbicacion();
		_crearSitioGuardarUbicacion_parameters.email = email;
		_crearSitioGuardarUbicacion_parameters.password = password;
		_crearSitioGuardarUbicacion_parameters.latitudeMap = latitudeMap;
		_crearSitioGuardarUbicacion_parameters.longitudeMap = longitudeMap;
		_crearSitioGuardarUbicacion_parameters.direccionMap = direccionMap;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarUbicacionResponse _crearSitioGuardarUbicacion__return = port.crearSitioGuardarUbicacion(_crearSitioGuardarUbicacion_parameters);
		log.info("crearSitioGuardarUbicacion.result=" + _crearSitioGuardarUbicacion__return.respuestaVO.codeError);
		return _crearSitioGuardarUbicacion__return.respuestaVO;
	}

	public RespuestaVO crearSitioGuardarVideo(String email, String password, String urlVideo){
		log.info("Invoking crearSitioGuardarVideo...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarVideo _crearSitioGuardarVideo_parameters = new CrearSitioGuardarVideo();
		_crearSitioGuardarVideo_parameters.email = email;
		_crearSitioGuardarVideo_parameters.password = password;
		_crearSitioGuardarVideo_parameters.urlVideo = urlVideo;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarVideoResponse _crearSitioGuardarVideo__return = port.crearSitioGuardarVideo(_crearSitioGuardarVideo_parameters);
		log.info("crearSitioGuardarVideo.result=" + _crearSitioGuardarVideo__return.respuestaVO.codeError);
		return _crearSitioGuardarVideo__return.respuestaVO;
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

	public RespuestaVO crearSitioGuardaImage(String domainId, String baseImagen, String tipoImagen, String descImagen, String rotacion)
	{
		log.info("Invoking crearSitioInsertImage...");
	    com.infomovil.webapp.clientWsInfomovil.CrearSitioInsertImage _crearSitioInsertImage_parameters = new CrearSitioInsertImage();
	    _crearSitioInsertImage_parameters.domainId = domainId;
	    _crearSitioInsertImage_parameters.baseImagen = baseImagen;
	    _crearSitioInsertImage_parameters.tipoImagen = tipoImagen;
	    _crearSitioInsertImage_parameters.descImagen = descImagen;
	    _crearSitioInsertImage_parameters.rotacion = rotacion;
	    com.infomovil.webapp.clientWsInfomovil.CrearSitioInsertImageResponse _crearSitioInsertImage__return = port.crearSitioInsertImage(_crearSitioInsertImage_parameters);
	    log.info("crearSitioInsertImage.result=" + _crearSitioInsertImage__return);
	    return _crearSitioInsertImage__return.respuestaVO;
    }

	public RespuestaVO crearSitioEliminaImage(String domainId, String imageId)
	{
		log.info("Invoking crearSitioDeleteImage...");
        com.infomovil.webapp.clientWsInfomovil.CrearSitioDeleteImage _crearSitioDeleteImage_parameters = new CrearSitioDeleteImage();
        _crearSitioDeleteImage_parameters.domainId = domainId;
        _crearSitioDeleteImage_parameters.imageId = imageId;
        com.infomovil.webapp.clientWsInfomovil.CrearSitioDeleteImageResponse _crearSitioDeleteImage__return = port.crearSitioDeleteImage(_crearSitioDeleteImage_parameters);
        log.info("crearSitioDeleteImage.result=" + _crearSitioDeleteImage__return);
        
        return _crearSitioDeleteImage__return.respuestaVO;
	}

	public List<ImagenVO> crearSitioGetImagenes(String email, Integer domainId,String sistema,String versionSistema)
	{
        log.info("Invoking getImagenes en clientwsinfomovol...");
        java.lang.String _getImagenes_email = email;
        java.lang.Integer _getImagenes_domainId = domainId;
        java.lang.String _getImagenes_sistema = sistema;
        java.lang.String _getImagenes_versionSistema = versionSistema;
        java.util.List<com.infomovil.webapp.clientWsInfomovil.ImagenVO> _getImagenes__return = port.getImagenes(_getImagenes_email, _getImagenes_domainId, _getImagenes_sistema, _getImagenes_versionSistema);
        log.info("getImagenes.result=" + _getImagenes__return);
        return _getImagenes__return;

    }
	
	public RespuestaVO crearSitioUpdateImage(String domainId, String imageId, String baseImagen, String descImagen)
	{
	    log.info("Invoking crearSitioUpdateImage...");
	    com.infomovil.webapp.clientWsInfomovil.CrearSitioUpdateImage _crearSitioUpdateImage_parameters = new CrearSitioUpdateImage();
	    _crearSitioUpdateImage_parameters.domainId = domainId;
	    _crearSitioUpdateImage_parameters.imageId = imageId;
	    _crearSitioUpdateImage_parameters.baseImagen = baseImagen;
	    _crearSitioUpdateImage_parameters.descImagen = descImagen;    
	    com.infomovil.webapp.clientWsInfomovil.CrearSitioUpdateImageResponse _crearSitioUpdateImage__return = port.crearSitioUpdateImage(_crearSitioUpdateImage_parameters);
	    log.info("crearSitioUpdateImage.result=" + _crearSitioUpdateImage__return);
	    return _crearSitioUpdateImage__return.respuestaVO;
    }
	
	
	public RespuestaVO crearSitioIntentoPago(String email, String password, String tipoPlan, 
			String medioPago, String titulo, String tipoCompra, String nombreCliente, String direccionCliente, String pais)
	{
		log.info("Invoking crearSitioIntentoPago...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioIntentoPago _crearSitioIntentoPago_parameters = new CrearSitioIntentoPago();
		_crearSitioIntentoPago_parameters.setEmail(email);
		_crearSitioIntentoPago_parameters.setPassword(password);
		_crearSitioIntentoPago_parameters.setTipoPlan(tipoPlan);
		_crearSitioIntentoPago_parameters.setMedioPago(medioPago);
		_crearSitioIntentoPago_parameters.setTitulo(titulo);
		_crearSitioIntentoPago_parameters.setTipoCompra(tipoCompra);
		_crearSitioIntentoPago_parameters.setNombreCliente(nombreCliente);
		_crearSitioIntentoPago_parameters.setDireccionCliente(direccionCliente);
		_crearSitioIntentoPago_parameters.setPais(pais);
		com.infomovil.webapp.clientWsInfomovil.CrearSitioIntentoPagoResponse _crearSitioIntentoPago__return = port.crearSitioIntentoPago(_crearSitioIntentoPago_parameters);
		log.info("crearSitioIntentoPago.result=" + _crearSitioIntentoPago__return);
		return _crearSitioIntentoPago__return.respuestaVO;
	}
	
	public RespuestaVO crearSitioGetProductosUsuario(String email, String password)
	{
		log.info("Invoking crearSitioGetProductosUsuario...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetProductosUsuario _crearSitioGetProductosUsuario_parameters = new CrearSitioGetProductosUsuario();
		_crearSitioGetProductosUsuario_parameters.setEmail(email);
		_crearSitioGetProductosUsuario_parameters.setPassword(password);
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetProductosUsuarioResponse _crearSitioGetProductosUsuario__return = port.crearSitioGetProductosUsuario(_crearSitioGetProductosUsuario_parameters);
		log.info("crearSitioGetProductosUsuario.result=" + _crearSitioGetProductosUsuario__return);
		return _crearSitioGetProductosUsuario__return.respuestaVO;
	}
	
	public RespuestaVO crearSitioGuardarPromocion(String email, String password, String descripcion, String fechaVigencia,
			String redimir, String terminos, String titulo, String base64Imagen, Integer idPromocion)
	{
		log.info("Invoking crearSitioGuardarPromocion...");
        com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarPromocion _crearSitioGuardarPromocion_parameters = new CrearSitioGuardarPromocion();
        _crearSitioGuardarPromocion_parameters.email = email;
        _crearSitioGuardarPromocion_parameters.password = password;
        _crearSitioGuardarPromocion_parameters.descripcion = descripcion;
        _crearSitioGuardarPromocion_parameters.fechaVigencia = fechaVigencia;
        _crearSitioGuardarPromocion_parameters.redimir = redimir;
        _crearSitioGuardarPromocion_parameters.terminos = terminos;
        _crearSitioGuardarPromocion_parameters.titulo = titulo;
        _crearSitioGuardarPromocion_parameters.base64Imagen = base64Imagen;
        _crearSitioGuardarPromocion_parameters.idPromocion = idPromocion;
        com.infomovil.webapp.clientWsInfomovil.CrearSitioGuardarPromocionResponse _crearSitioGuardarPromocion__return = port.crearSitioGuardarPromocion(_crearSitioGuardarPromocion_parameters);
        log.info("crearSitioGuardarPromocion.result=" + _crearSitioGuardarPromocion__return);
		return _crearSitioGuardarPromocion__return.respuestaVO;
	}
	
	public RespuestaVO crearSitioGetPromociones(String email, String password)
	{
		log.info("Invoking crearSitioGetPromociones...");
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetPromociones _crearSitioGetPromociones_parameters = new CrearSitioGetPromociones();
		_crearSitioGetPromociones_parameters.email = email;
		_crearSitioGetPromociones_parameters.password = password;
		com.infomovil.webapp.clientWsInfomovil.CrearSitioGetPromocionesResponse _crearSitioGetPromociones__return = port
				.crearSitioGetPromociones(_crearSitioGetPromociones_parameters);
		log.info("crearSitioGetPromociones.result=" + _crearSitioGetPromociones__return);
		return _crearSitioGetPromociones__return.respuestaVO;
	}
	
	public RespuestaVO crearSitioPrevisualizarPromocion(String email, String password, String descripcion, String fechaVigencia,
			String redimir, String terminos, String titulo, String base64Imagen)
	{
		log.info("Invoking crearSitioPrevisualizarPromocion...");
        com.infomovil.webapp.clientWsInfomovil.CrearSitioPrevisualizarPromocion _crearSitioPrevisualizarPromocion_parameters = new CrearSitioPrevisualizarPromocion();
        _crearSitioPrevisualizarPromocion_parameters.email = email;
        _crearSitioPrevisualizarPromocion_parameters.password = password;
        _crearSitioPrevisualizarPromocion_parameters.descripcion = descripcion;
        _crearSitioPrevisualizarPromocion_parameters.fechaVigencia = fechaVigencia;
        _crearSitioPrevisualizarPromocion_parameters.redimir = redimir;
        _crearSitioPrevisualizarPromocion_parameters.terminos = terminos;
        _crearSitioPrevisualizarPromocion_parameters.titulo = titulo;
        _crearSitioPrevisualizarPromocion_parameters.base64Imagen = base64Imagen;
        com.infomovil.webapp.clientWsInfomovil.CrearSitioPrevisualizarPromocionResponse _crearSitioPrevisualizarPromocion__return = port.crearSitioPrevisualizarPromocion(_crearSitioPrevisualizarPromocion_parameters);
        log.info("crearSitioPrevisualizarPromocion.result=" + _crearSitioPrevisualizarPromocion__return);
		return _crearSitioPrevisualizarPromocion__return.respuestaVO;
	}
	
	
	
}

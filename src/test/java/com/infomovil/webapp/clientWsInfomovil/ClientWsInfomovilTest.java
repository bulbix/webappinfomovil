package com.infomovil.webapp.clientWsInfomovil;

import static org.junit.Assert.*;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections4.Closure;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;


public class ClientWsInfomovilTest {
	
	static ClientWsInfomovil clientWsInfomovil;
	String correoPrueba = "marte@mail.com";
	String nombrePrueba = "garbage1";

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		clientWsInfomovil = new ClientWsInfomovil();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	
	@Test
	public void testCrearSitioRegistrar() {
		RespuestaVO resp = clientWsInfomovil.crearSitioRegistrar(correoPrueba, "garbage1", nombrePrueba, "", "formulario","es");
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioLogin() {
		RespuestaVO resp = clientWsInfomovil.crearSitioLogin("luisproducto@mail.com", "garbage1");
		assertNotNull(resp);
		System.out.println(resp.getListProductoUsuarioVO().size());
		//assertEquals(2, resp.getListProductoUsuarioVO().size());
		System.out.println(resp.getListProductoUsuarioVO());
	}


	@Test
	public void testCrearSitioGuardar() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardar(correoPrueba, "garbage1","xxxx","yyy","zzz","luis@mail.com","33333","divertido" );
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioGuardarUbicacion() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardarUbicacion(correoPrueba, "garbage1","6.7","8.9","aza");
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioGuardarVideo() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardarVideo(correoPrueba, "garbage1","zoso");
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioCargar() {
		RespuestaVO resp = clientWsInfomovil.crearSitioCargar("wallie7@mail.com", "joseluis1");
	//	System.out.println(resp.dominioCreaSitio);
		System.out.println(resp.getEsquemaProducto());
		//System.out.println(resp.getListProductoUsuarioVO());
		System.out.println(resp.getDowngrade());
		System.out.println(resp.getListStatusDomainGratisVO());
		System.out.println(resp.getListStatusDomainVO());
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioPublicarRecurso() {
		RespuestaVO resp = clientWsInfomovil.crearSitioPublicar(correoPrueba, "garbage1", "Luis", "Vieyra", nombrePrueba, "recurso", 1);
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioPublicarTel() {
		RespuestaVO resp = clientWsInfomovil.crearSitioPublicar(correoPrueba, "garbage1", "Luis", "Vieyra", nombrePrueba, "tel", 1);
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioExisteDominioExiste() {
		RespuestaVO resp = clientWsInfomovil.crearSitioExisteDominio("luis", "recurso");
		System.out.println(resp.resultado);
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioExisteDominioNoExiste() {
		RespuestaVO resp = clientWsInfomovil.crearSitioExisteDominio("dfdsf", "recurso");
		System.out.println(resp.resultado);
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioResetPassword() {
		RespuestaVO resp = clientWsInfomovil.crearSitioResetPassword("lfpradof@gmail.com","es");
		assertNotNull(resp);
	}

	@Test
	public void testCatalogoDominios() {
		List<Catalogo> dominios = clientWsInfomovil.catalogoDominios();
		assertEquals(2, dominios.size());
	}
	
	@Test
	public void testCrearSitioGetWebHash() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGetWebHash("wallie6@mail.com");
		System.out.println(resp.resultado);
		System.out.println(resp.scriptMovilizaSitio);
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioGuardarImage() {
		String base64Imagen = "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";
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardaImage("3705", base64Imagen, "IMAGEN", "descImagenTest","CW_90");
		System.out.println(resp);
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioEliminarImage() {
		RespuestaVO resp = clientWsInfomovil.crearSitioEliminaImage("1124", "2023");
		System.out.println(resp);
		assertNotNull(resp);
	}
	
	
	@Test
	public void testCrearSitioIntentoPago() {
		RespuestaVO resp = clientWsInfomovil.crearSitioIntentoPago("rambo1@mail.com", 
				"garbage1", "DOMINIO TEL", "PAY PAL", "TEL", "DOMINIO_TEL","Luisxxx","RANDEMxxx","MXX");
		assertNotNull(resp);
		System.out.println(resp.idPago);
	}
	
	@Test
	public void testGetProductosUsuario() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGetProductosUsuario("rambo1@mail.com", "garbage1");
		assertNotNull(resp);
		System.out.println("Tamanio de lista " + resp.getListProductoUsuarioVO().size());
	}
	
	@Test
	public void testGuardarPromocion() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardarPromocion("docker6@mail.com", 
		"garbage1","desc","01/01/2015","redimir","terminos","tituloaaaaa","",0, "" , "La empresa de JOselito", "juniorgay","es");
		assertNotNull(resp);
		assertTrue(resp.getCodeError().equalsIgnoreCase("0"));
	}
	
	@Test
	public void testGetPromociones() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGetPromociones("promociones@mail.com", "joseluis1");
		assertNotNull(resp);
		assertTrue(resp.getCodeError().equalsIgnoreCase("0"));
		assertTrue(resp.getListPromocion().size() > 0);
		System.out.println("urlPromo: " + resp.getListPromocion().get(0).getUrlPromocion());
	}
	
	@Test
	public void testBorrarPromocion() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardarPromocion("test@test.com", 
		"rosas111","","","","","","",787, "","","","");
		assertNotNull(resp);
		assertTrue(resp.getCodeError().equalsIgnoreCase("0"));
	}
	
	
	@Test
	public void testPrevisualizarPromocion() {
		RespuestaVO resp = clientWsInfomovil.crearSitioPrevisualizarPromocion("pollo1@mail.com", 
		"garbage1","desc","01/01/2015","redimir","terminos","titulozzzzzzz","", "","","es");
		assertNotNull(resp);
		assertTrue(resp.getCodeError().equalsIgnoreCase("0"));
		System.out.println(resp.getUrlPromocion());
	}
	
	
	//Prueba de contactos horarios y perfiles
	
	
	@Test
	public void testCrearSitioGuardarContacto() {
		RecordNaptrVO contacto = new RecordNaptrVO();
		contacto.setClaveContacto("");
		contacto.setLongLabelNaptr("");
		contacto.setRegExp("!^.*$!mailto:" + "roni@mail.com!");
		//contacto.setRegExp("");
		contacto.setServicesNaptr("E2U+email:mailto");
		contacto.setSubCategory("");
		contacto.setVisible("1");
		clientWsInfomovil.crearSitioGuardarContacto("docker6@mail.com", "garbage1", contacto);
		
	}

	@Test
	public void testCrearSitioActualizarContacto()
	{
		String regExp = "!^.*$!";
		String numeroEmailRedSocial = "numeroEmailRedSocial!";
		
		RecordNaptrVO contacto = new RecordNaptrVO();
		contacto.setClaveContacto("8002");
		contacto.setLongLabelNaptr("adfedfggrgdsvdsvdsgdrwerw");
		contacto.setRegExp(regExp + numeroEmailRedSocial);
		contacto.setServicesNaptr("numeroEmailRedSocial");
		contacto.setSubCategory("");// Solo si es red social
		contacto.setVisible("0");
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardarContacto("amylee@mail.com", "joseluis1", contacto);
		System.out.println("resultado actualizar: " + resp.getMsgError() + ", " + resp.getCodeError());
	}
	
	@Test
	public void testCrearSitioOrdenarImagenesContactos() {
		String xml = "<l><f><i>6208</i><p>0</p></f><f><i>6692</i><p>1</p></f></l>";
		RespuestaVO resp = clientWsInfomovil.crearSitioOrdenarImagenesContactos("docker6@mail.com", "garbage1", xml, "CONTACTO");
		System.out.println(resp.getCodeError());
	}
	
	@Test
	public void testCrearSitioGetContactos() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGetContactos("docker6@mail.com", "garbage1");
		assertTrue(resp.getListContactos().size() > 0);
		System.out.println("Lista Contactos: " + resp.getListContactos().size());
		CollectionUtils.forAllDo(resp.getListContactos(), new Closure<RecordNaptrVO>(){

			@Override
			public void execute(RecordNaptrVO input) {
				System.out.println(input.getClaveContacto() + "--" +  input.getRegExp() + "--" + input.getPreference());
				
			}
			
		});
	}
	
	
	static List<HorarioVO> listaHorarios = new ArrayList<HorarioVO>();
	
	static{
	listaHorarios.add(new HorarioVO("Lun", "01:00", "08:00"));
	listaHorarios.add(new HorarioVO("Mar", "02:00", "09:00"));
	listaHorarios.add(new HorarioVO("Mié", "03:00", "09:00"));
	listaHorarios.add(new HorarioVO("Jue", "04:00", "09:00"));
	listaHorarios.add(new HorarioVO("Vie", "00:00", "00:00"));
	listaHorarios.add(new HorarioVO("Sáb", "00:00", "08:00"));
	listaHorarios.add(new HorarioVO("Dom", "00:00", "00:00"));
	}
	
	@Test
	public void testCrearSitioGetHorarios() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGetHorarios("is.rosas@yahoo.com.mx", "rosas111");
		
		if(resp.getListHorarios().size() > 0){
			System.out.println(resp.getListHorarios());
			System.out.println("El error es: " +resp.getCodeError());
		}
		System.out.println("El error es: " +resp.getCodeError());
		System.out.println("el keyword es: " +resp.getKeyword());
	}
	
	
	@Test
	public void testCrearSitioInsertHorarios() {
		RespuestaVO resp = clientWsInfomovil.crearSitioHorarios("is.rosas@yahoo.com.mx", "rosas111",
				new KeywordVO(),listaHorarios,"insert");
		System.out.println(resp.getCodeError());
	}
	
	@Test
	public void testCrearSitioUpdateHorarios() {
		RespuestaVO respConsulta = clientWsInfomovil.crearSitioGetHorarios("docker@mail.com", "garbage1");
		
		RespuestaVO resp = clientWsInfomovil.
		crearSitioHorarios("docker@mail.com", "garbage1", respConsulta.getKeyword() ,listaHorarios, "update");
		System.out.println(resp.getCodeError());
	}
	
	@Test
	public void testCrearSitioDeleteHorarios() {
		RespuestaVO respConsulta = clientWsInfomovil.crearSitioGetHorarios("is.rosas@yahoo.com.mx", "rosas111");
		respConsulta.getKeyword().setKeywordValue("");
		respConsulta.getKeyword().setKeywordField("");
		RespuestaVO resp = clientWsInfomovil.
		crearSitioHorarios("is.rosas@yahoo.com.mx", "rosas111",respConsulta.getKeyword(),listaHorarios,"delete");
		System.out.println(resp.getCodeError());
	}
	
	@Test
	public void testCrearSitioReporteUsuario() {
		RespuestaVO resp = clientWsInfomovil.crearSitioReporteUsuario("docker6@mail.com", "garbage1","1semana","02/12/2015","02/12/2015");
		System.out.println(resp.getListVisitas().size());
		System.out.println(resp.getListVisitas());
		System.out.println(resp.getCodeError());
	}
	
	@Test
	public void testEliminarImagenes() throws IOException {
		List<String> lineas = FileUtils.readLines(new File("/Users/BAZ/Desktop/salidaImagenes.csv"));
		for(String linea: lineas){
			String[] tokens = linea.split(",");
			String idDominio=tokens[0];
			String idImagen=tokens[1];
			String ruta = tokens[3];
			RespuestaVO resp = clientWsInfomovil.crearSitioEliminaImage(idDominio, idImagen);
			System.out.println(ruta + "--" + resp.getCodeError());
		}
	}
	
	@Test
	public void testCrearSitioRefrescarPromocion() {
		RespuestaVO resp = clientWsInfomovil.crearSitioRefrescarPromocion("docker6@mail.com", "garbage1","es");
		System.out.println(resp.getCodeError());
	}
	
	
}

package com.infomovil.webapp.clientWsInfomovil;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class ClientWsInfomovilTest {
	
	static ClientWsInfomovil clientWsInfomovil;
	String correoPrueba = "paquito1@mail.com";
	String nombrePrueba = "paquito1";

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
		RespuestaVO resp = clientWsInfomovil.crearSitioRegistrar(correoPrueba, "garbage1", nombrePrueba, "");
		assertNotNull(resp);
	}
	
	@Test
	public void testCrearSitioLogin() {
		RespuestaVO resp = clientWsInfomovil.crearSitioLogin(correoPrueba, "garbage1");
		assertNotNull(resp);
	}


	@Test
	public void testCrearSitioGuardar() {
		RespuestaVO resp = clientWsInfomovil.crearSitioGuardar(correoPrueba, "garbage1","xxxx","yyy","zzz","luis@mail.com","33333","divertido" );
		assertNotNull(resp);
	}

	@Test
	public void testCrearSitioCargar() {
		RespuestaVO resp = clientWsInfomovil.crearSitioCargar(correoPrueba, "garbage1");
		System.out.println(resp.dominioCreaSitio.nombreUsuario);
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
		RespuestaVO resp = clientWsInfomovil.crearSitioResetPassword("lfpradof@gmail.com");
		assertNotNull(resp);
	}

	@Test
	public void testCatalogoDominios() {
		List<Catalogo> dominios = clientWsInfomovil.catalogoDominios();
		assertEquals(2, dominios.size());
	}

}

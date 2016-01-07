package com.infomovil.webapp.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.QueryOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.spec.QuerySpec;
import com.amazonaws.services.dynamodbv2.document.utils.NameMap;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.controllers.WebappController;
import com.infomovil.webapp.model.ModeloWebApp;

public class Util {
	
	public static String getProfile() {
		
		String result = null;		
		Properties prop = new Properties();
		InputStream input = null;
		input= Util.class.getClassLoader().getResourceAsStream("config.properties");
		try {
			prop.load(input);
			result = prop.getProperty("profile");
			
		} catch (IOException e) {
		}
		
		return result;
	}
	
	/***
	 * 
	 * @return usuario logueado con spring security
	 *
	 */
	public static User getUserLogged() {
		Authentication authenticate = SecurityContextHolder.getContext().getAuthentication();

		if(authenticate.getPrincipal() instanceof User){
			User user = (User)authenticate.getPrincipal();
			return user;
		}
		else if(authenticate.getPrincipal() instanceof String) {
			List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
			grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
			return new User(authenticate.getPrincipal().toString(), authenticate.getCredentials().toString(), grantedAuths);
		}
		else{
			return null;
		}
		
	}
	
	/**
	 * Loguea el usuario en spring security
	 * @param usuario
	 * @param password
	 */
	public static void loginUsuario(String usuario, String password){
		
		//getCurrentSession().invalidate();
		
		List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
		grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		Authentication auth1 = new UsernamePasswordAuthenticationToken (usuario, password, grantedAuths);
		SecurityContextHolder.getContext().setAuthentication(auth1);
	}

	/****
	 * 
	 * @return regresa la sesion actual
	 */
	public static HttpSession getCurrentSession() {
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.
				currentRequestAttributes();
		HttpSession session = attr.getRequest().getSession();
		return session;
	}
	
	public static InputStream getFileAmazon(String bucketName, String key){
		
		InputStream result = null;
		try{
			AmazonS3 s3 = new AmazonS3Client(new BasicAWSCredentials(KEY_AMAZON_S3,SECRET_AMAZON_S3));
			Region usWest2 = Region.getRegion(Regions.US_WEST_2);
			s3.setRegion(usWest2);
			S3Object object = s3.getObject(new GetObjectRequest(bucketName, key));
			return object.getObjectContent();
		}
		catch(Exception e){
			logger.error("getFileAmazon",e);
		}
		
		return result;
		
	}
	
	public static String getNombreSitio(String sitioWeb)
	{
		String sitio = "";
		int posWww = 0;
		sitioWeb = sitioWeb.toLowerCase();
		
		if (sitioWeb.indexOf('/') != -1)
			sitio = sitioWeb.substring(sitioWeb.indexOf('/') + 1, sitioWeb.length());
		else if (sitioWeb.indexOf(".tel") != -1)
		{
			posWww = sitioWeb.indexOf("www.");
			
			if (posWww != -1) 
				sitio = sitioWeb.substring(posWww + 4, sitioWeb.indexOf(".tel"));
			else
				sitio = sitioWeb.substring(0, sitioWeb.indexOf(".tel"));
		}
		
		return sitio;
	}
	
	/***
	 * Guardar items en la tabla correspondiente
	 * @param tableName
	 * @param email
	 * @param items
	 * @return
	 */
	public static boolean guardarItemsTableDynamo(String tableName, String email, Map<String,Object> items){
		try{
			AmazonDynamoDBClient client = new AmazonDynamoDBClient(new BasicAWSCredentials(KEY_AMAZON_S3,SECRET_AMAZON_S3));
			Region usWest2 = Region.getRegion(Regions.US_WEST_2);
			client.setRegion(usWest2);
			DynamoDB dynamoDB = new DynamoDB(client);
			Table table = dynamoDB.getTable(tableName);
			Item item = new Item();
			item.withPrimaryKey("email", email);
			
			for(String key: items.keySet()){
				item.with(key, items.get(key));
			}
			
			table.putItem(item);
			return true;
		}
		catch(Exception e){
			logger.error("", e);
			return false;
		}
	}
	
	public static Map<String,Object> getItemsDynamo(String tableName, String email) {
		
		try
		{
			Item item = null;
			AmazonDynamoDBClient client = new AmazonDynamoDBClient(
					new BasicAWSCredentials(KEY_AMAZON_S3,SECRET_AMAZON_S3));
			Region usWest2 = Region.getRegion(Regions.US_WEST_2);
			client.setRegion(usWest2);
			DynamoDB dynamoDB = new DynamoDB(client);
			Table table = dynamoDB.getTable(tableName);

			HashMap<String, Object> valueMap = new HashMap<String, Object>();
	        valueMap.put(":email", email);
	        
	        QuerySpec querySpec = new QuerySpec()
	            .withKeyConditionExpression("#email = :email")
	            .withNameMap(new NameMap().with("#email", "email"))
	            .withValueMap(valueMap);

	        ItemCollection<QueryOutcome> items = table.query(querySpec);
	        item = items.iterator().next();
	        
	        return item.asMap();
		}
        catch(Exception e){
			logger.error(e);
			return null;
		}
		
	}

	
	public static String esPlanPro()
	{
		ClientWsInfomovil wsCliente = new ClientWsInfomovil();
		RespuestaVO wsRespuesta = new RespuestaVO();
		
		ModeloWebApp modeloWebApp = new ModeloWebApp();
		
		String planPro = "NO";
		String downgrade = "";
		String tipoPlan = "";
		String status = "";
		String esquemaProducto = "";
		
		String correo = Util.getUserLogged().getUsername();
		String password = Util.getUserLogged().getPassword();

	    wsRespuesta = wsCliente.crearSitioCargar(correo, password);

		downgrade = wsRespuesta.getDowngrade();
		
		if (downgrade.equals("DOWNGRADE"))
			return "NO";
		
		tipoPlan = wsRespuesta.getDominioCreaSitio().getTipoCuenta();

		esquemaProducto = wsRespuesta.getEsquemaProducto();
		modeloWebApp.setListaProductos(wsRespuesta.getListProductoUsuarioVO());
		
		if (esquemaProducto.equals("NEW"))
		{
			ProductoUsuarioVO productoVO = null;
			
			planPro = "NO";
			productoVO = modeloWebApp.getProducto("pp", "pi");
			
			if (productoVO != null)
				planPro = "SI";
		}
	
		if (planPro.equals("NO"))
		{
			status = wsRespuesta.getDominioCreaSitio().getEstatusCuenta();
			if (modeloWebApp.getStatus(status))
				planPro = "SI";
		}

		return planPro;
	}
	
	public static void main(String[] args) {
		//Map<String,Object> items = new HashMap<String,Object>();
		//items.put("seleccion", "web");
		//System.out.println(guardarItemsTableDynamo("multiproducto_dev", "luis560@mail.com", items));
		System.out.println(getItemsDynamo("multiproducto_dev", "luis560@mail.com"));
	
	}

	public static final String KEY_AMAZON_S3 = "AKIAJFSG7G2SQDTWMMYA";
	public static final String SECRET_AMAZON_S3 = "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";
	private static final Logger logger = Logger.getLogger(Util.class);
}

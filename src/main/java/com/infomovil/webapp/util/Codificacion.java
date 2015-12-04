package com.infomovil.webapp.util;

import java.security.Key;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class Codificacion {

	private static final String ALGO = "AES";
	private static final byte[] keyValue = 
			new byte[] { 'S', '3', 'c', 'r', 'E', 't', 'P','I', 'N', 'F', '0', 'M', 'I', 'V', '1', 'l' };

	public static String encrypt(String Data) throws Exception {
		Key key = generateKey();
		Cipher c = Cipher.getInstance(ALGO);
		c.init(Cipher.ENCRYPT_MODE, key);
		byte[] encVal = c.doFinal(Data.getBytes());
		String encryptedValue = new BASE64Encoder().encode(encVal);
		return encryptedValue;
	}

	public static String decrypt(String encryptedData) throws Exception {
		Key key = generateKey();
		Cipher c = Cipher.getInstance(ALGO);
		c.init(Cipher.DECRYPT_MODE, key);
		byte[] decordedValue = new BASE64Decoder().decodeBuffer(encryptedData);
		byte[] decValue = c.doFinal(decordedValue);
		String decryptedValue = new String(decValue);
		return decryptedValue;
	}
	private static Key generateKey() throws Exception {
		Key key = new SecretKeySpec(keyValue, ALGO);
		return key;
	}

	public static void main(String[] args) throws Exception {//jdbc:oracle:thin:@10.203.24.203:1521:telhosting 
//		String password ="jdbc:oracle:thin:@172.17.7.31:1521:telhosting";
//		String passwordEnc = Codificacion.encrypt(password);  
//		System.out.println("passwordEnc:::" + passwordEnc);
		//      System.out.println("Plain Text : " + password);
		System.out.println("Conn: " + Codificacion.decrypt("ZXIcx/YLfP6YMhwkNMqh/w=="));
		//        System.out.println("Perfil QA");
		//        System.out.println("Conn QA:"+ Codificacion.encrypt("jdbc:oracle:thin:@172.24.20.104:1521:IFBDQA")); 
		//       System.out.println("Pass: "+Codificacion.encrypt("jdbc:oracle:thin:@172.17.3.196:1521:telhosting"));
		//        System.out.println(Codificacion.encrypt("StrQsW68d3"));
	}

}


package com.infomovil.webapp.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.Predicate;

import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;
import com.infomovil.webapp.clientWsInfomovil.StatusDomainVO;


public class ModeloWebApp 
{
	private List<ProductoUsuarioVO> listaProductos;
	private List<StatusDomainVO> itemsUsuario;
	private String esquemaProducto;
	
	private def erroresRegistro = [:]
	
	public ModeloWebApp(){
		erroresRegistro["El código ingresado no esta asociado a ninguna campaña."] = "REGISTROER0016"
		erroresRegistro["El código ingresado ya caducó. La fecha límite para su activación fue:"] = "REGISTROER0017"
		erroresRegistro["La campaña que utiliza el código "] = "REGISTROER0018"
		erroresRegistro["El código proporcionado está disponible a partir de la fecha "] = "REGISTROER0019"
		erroresRegistro["Este correo ya cuenta con un Plan Pro"] = "REGISTROER0022"
		erroresRegistro["El ID del producto asociado a la campaña, no existe o se encuentra dado de baja."] = "REGISTROER0023";
		erroresRegistro["Esta cuenta ya activó un código"] = "REGISTROER0021";
		erroresRegistro["El total de cuentas disponibles que tiene el patrocinador"] = "REGISTROER0024";
		erroresRegistro["EL USUARIO: '"] = "REGISTROER0026"
	}
	
	
	public List<ProductoUsuarioVO> getListaProductos() {
		return listaProductos;
	}

	public List<StatusDomainVO> getItemsUsuario() {
		return itemsUsuario;
	}

	public void setItemsUsuario(List<StatusDomainVO> itemsUsuario) {
		this.itemsUsuario = itemsUsuario;
	}

	public void setListaProductos(List<ProductoUsuarioVO> listaProductos) {
		this.listaProductos = listaProductos;
	}

	public String getEsquemaProducto() {
		return esquemaProducto;
	}

	public void setEsquemaProducto(String esquemaProducto) {
		this.esquemaProducto = esquemaProducto;
	} 

	public ProductoUsuarioVO getProducto(final String... llaves)
	{
		return CollectionUtils.find(getListaProductos(), new Predicate<ProductoUsuarioVO>() {
			@Override
			public boolean evaluate(ProductoUsuarioVO object) {
				
				boolean busqueda = false;
				
				for (String llave : llaves)
					busqueda = busqueda || object.getClaveComercial().toLowerCase().contains(llave);
				
				return busqueda;
			}
		});
	}

	public StatusDomainVO getCantidadItem(final String... llaves)
	{
		return CollectionUtils.find(getItemsUsuario(), new Predicate<StatusDomainVO>() {
			@Override
			public boolean evaluate(StatusDomainVO object) {
				
				boolean busqueda = false;
				
				for (String llave : llaves)
					busqueda = busqueda || object.getDescripcionItem().equals(llave);
				
				return busqueda;
			}
		});
	}
	
	public boolean getStatus(final String status)
	{
		String statusPP  = ["4", "14", "18", "19"];
		boolean busqueda = false;
		
		for (String s : statusPP)
			if (s.equals(status))
			{
				busqueda = true;
				break;
			}
		
		return busqueda;
	}
	
	public String codeErrorRegistro(String descError){
		def result = erroresRegistro.find{ descError.startsWith(it.key)}.value
		println result
		return result
	}
	
	
}

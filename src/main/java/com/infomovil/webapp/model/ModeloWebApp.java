package com.infomovil.webapp.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.Predicate;

import com.infomovil.webapp.clientWsInfomovil.ProductoUsuarioVO;;


public class ModeloWebApp 
{
	private List<ProductoUsuarioVO> listaProductos;
	private String esquemaProducto;
	
	public List<ProductoUsuarioVO> getListaProductos() {
		return listaProductos;
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
	
	public boolean getStatus(final String status)
	{
		String statusPP [] = {"4", "14", "18", "19"};
		boolean busqueda = false;
		
		for (String s : statusPP)
			if (s.equals(status))
			{
				busqueda = true;
				break;
			}
		
		return busqueda;
	}
}

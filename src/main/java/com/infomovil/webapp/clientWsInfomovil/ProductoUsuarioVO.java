
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para productoUsuarioVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="productoUsuarioVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="userId" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="productoId" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="claveComercial" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descripcion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="abc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaInicio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="referencia" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "productoUsuarioVO", propOrder = {
    "email",
    "userId",
    "productoId",
    "claveComercial",
    "descripcion",
    "abc",
    "fechaInicio",
    "fechaFin",
    "referencia"
})
public class ProductoUsuarioVO {

    protected String email;
    protected long userId;
    protected long productoId;
    protected String claveComercial;
    protected String descripcion;
    protected String abc;
    protected String fechaInicio;
    protected String fechaFin;
    protected String referencia;

    /**
     * Obtiene el valor de la propiedad email.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * Define el valor de la propiedad email.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

    /**
     * Obtiene el valor de la propiedad userId.
     * 
     */
    public long getUserId() {
        return userId;
    }

    /**
     * Define el valor de la propiedad userId.
     * 
     */
    public void setUserId(long value) {
        this.userId = value;
    }

    /**
     * Obtiene el valor de la propiedad productoId.
     * 
     */
    public long getProductoId() {
        return productoId;
    }

    /**
     * Define el valor de la propiedad productoId.
     * 
     */
    public void setProductoId(long value) {
        this.productoId = value;
    }

    /**
     * Obtiene el valor de la propiedad claveComercial.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClaveComercial() {
        return claveComercial;
    }

    /**
     * Define el valor de la propiedad claveComercial.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClaveComercial(String value) {
        this.claveComercial = value;
    }

    /**
     * Obtiene el valor de la propiedad descripcion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Define el valor de la propiedad descripcion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcion(String value) {
        this.descripcion = value;
    }

    /**
     * Obtiene el valor de la propiedad abc.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAbc() {
        return abc;
    }

    /**
     * Define el valor de la propiedad abc.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAbc(String value) {
        this.abc = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaInicio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaInicio() {
        return fechaInicio;
    }

    /**
     * Define el valor de la propiedad fechaInicio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaInicio(String value) {
        this.fechaInicio = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaFin.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaFin() {
        return fechaFin;
    }

    /**
     * Define el valor de la propiedad fechaFin.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaFin(String value) {
        this.fechaFin = value;
    }

    /**
     * Obtiene el valor de la propiedad referencia.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReferencia() {
        return referencia;
    }

    /**
     * Define el valor de la propiedad referencia.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReferencia(String value) {
        this.referencia = value;
    }

	@Override
	public String toString() {
		return "ProductoUsuarioVO [email=" + email + ", userId=" + userId
				+ ", productoId=" + productoId + ", claveComercial="
				+ claveComercial + ", descripcion=" + descripcion + ", abc="
				+ abc + ", fechaInicio=" + fechaInicio + ", fechaFin="
				+ fechaFin + ", referencia=" + referencia + "]";
	}
    
    

}

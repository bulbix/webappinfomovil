
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_guardarUbicacion complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_guardarUbicacion">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="longitudeMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="latitudeMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="direccionMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_guardarUbicacion", propOrder = {
    "email",
    "password",
    "longitudeMap",
    "latitudeMap",
    "direccionMap"
})
public class CrearSitioGuardarUbicacion {

    @XmlElement(required = true)
    protected String email;
    protected String password;
    protected String longitudeMap;
    protected String latitudeMap;
    protected String direccionMap;

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
     * Obtiene el valor de la propiedad password.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPassword() {
        return password;
    }

    /**
     * Define el valor de la propiedad password.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPassword(String value) {
        this.password = value;
    }

    /**
     * Obtiene el valor de la propiedad longitudeMap.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLongitudeMap() {
        return longitudeMap;
    }

    /**
     * Define el valor de la propiedad longitudeMap.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLongitudeMap(String value) {
        this.longitudeMap = value;
    }

    /**
     * Obtiene el valor de la propiedad latitudeMap.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLatitudeMap() {
        return latitudeMap;
    }

    /**
     * Define el valor de la propiedad latitudeMap.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLatitudeMap(String value) {
        this.latitudeMap = value;
    }

    /**
     * Obtiene el valor de la propiedad direccionMap.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDireccionMap() {
        return direccionMap;
    }

    /**
     * Define el valor de la propiedad direccionMap.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDireccionMap(String value) {
        this.direccionMap = value;
    }

}

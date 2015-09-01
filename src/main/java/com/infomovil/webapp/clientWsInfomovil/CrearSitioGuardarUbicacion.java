
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for crearSitio_guardarUbicacion complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the email property.
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
     * Sets the value of the email property.
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
     * Gets the value of the password property.
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
     * Sets the value of the password property.
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
     * Gets the value of the longitudeMap property.
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
     * Sets the value of the longitudeMap property.
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
     * Gets the value of the latitudeMap property.
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
     * Sets the value of the latitudeMap property.
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
     * Gets the value of the direccionMap property.
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
     * Sets the value of the direccionMap property.
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

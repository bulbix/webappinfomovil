
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for crearSitio_publicar complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_publicar">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nombrePersona" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="direccionPersona" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nombreDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idCatTipoRecurso" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_publicar", propOrder = {
    "email",
    "password",
    "nombrePersona",
    "direccionPersona",
    "nombreDominio",
    "tipoDominio",
    "idCatTipoRecurso"
})
public class CrearSitioPublicar {

    @XmlElement(required = true)
    protected String email;
    protected String password;
    protected String nombrePersona;
    protected String direccionPersona;
    protected String nombreDominio;
    protected String tipoDominio;
    protected Integer idCatTipoRecurso;

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
     * Gets the value of the nombrePersona property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombrePersona() {
        return nombrePersona;
    }

    /**
     * Sets the value of the nombrePersona property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombrePersona(String value) {
        this.nombrePersona = value;
    }

    /**
     * Gets the value of the direccionPersona property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDireccionPersona() {
        return direccionPersona;
    }

    /**
     * Sets the value of the direccionPersona property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDireccionPersona(String value) {
        this.direccionPersona = value;
    }

    /**
     * Gets the value of the nombreDominio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombreDominio() {
        return nombreDominio;
    }

    /**
     * Sets the value of the nombreDominio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombreDominio(String value) {
        this.nombreDominio = value;
    }

    /**
     * Gets the value of the tipoDominio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoDominio() {
        return tipoDominio;
    }

    /**
     * Sets the value of the tipoDominio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoDominio(String value) {
        this.tipoDominio = value;
    }

    /**
     * Gets the value of the idCatTipoRecurso property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdCatTipoRecurso() {
        return idCatTipoRecurso;
    }

    /**
     * Sets the value of the idCatTipoRecurso property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdCatTipoRecurso(Integer value) {
        this.idCatTipoRecurso = value;
    }

}

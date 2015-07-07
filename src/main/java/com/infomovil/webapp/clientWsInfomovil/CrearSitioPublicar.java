
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_publicar complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad nombrePersona.
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
     * Define el valor de la propiedad nombrePersona.
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
     * Obtiene el valor de la propiedad direccionPersona.
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
     * Define el valor de la propiedad direccionPersona.
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
     * Obtiene el valor de la propiedad nombreDominio.
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
     * Define el valor de la propiedad nombreDominio.
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
     * Obtiene el valor de la propiedad tipoDominio.
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
     * Define el valor de la propiedad tipoDominio.
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
     * Obtiene el valor de la propiedad idCatTipoRecurso.
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
     * Define el valor de la propiedad idCatTipoRecurso.
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

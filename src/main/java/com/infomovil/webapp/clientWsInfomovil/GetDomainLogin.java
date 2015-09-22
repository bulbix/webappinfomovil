
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para getDomainLogin complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="getDomainLogin">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoDispositivo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sistema" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="notificacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="redSocial" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="suscrito" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoPlan" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="medioPago" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="versionSistema" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getDomainLogin", propOrder = {
    "email",
    "password",
    "tipoDispositivo",
    "sistema",
    "notificacion",
    "redSocial",
    "suscrito",
    "tipoPlan",
    "medioPago",
    "versionSistema"
})
public class GetDomainLogin {

    protected String email;
    protected String password;
    protected String tipoDispositivo;
    protected String sistema;
    protected String notificacion;
    protected String redSocial;
    protected String suscrito;
    protected String tipoPlan;
    protected String medioPago;
    protected String versionSistema;

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
     * Obtiene el valor de la propiedad tipoDispositivo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoDispositivo() {
        return tipoDispositivo;
    }

    /**
     * Define el valor de la propiedad tipoDispositivo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoDispositivo(String value) {
        this.tipoDispositivo = value;
    }

    /**
     * Obtiene el valor de la propiedad sistema.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSistema() {
        return sistema;
    }

    /**
     * Define el valor de la propiedad sistema.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSistema(String value) {
        this.sistema = value;
    }

    /**
     * Obtiene el valor de la propiedad notificacion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNotificacion() {
        return notificacion;
    }

    /**
     * Define el valor de la propiedad notificacion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNotificacion(String value) {
        this.notificacion = value;
    }

    /**
     * Obtiene el valor de la propiedad redSocial.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRedSocial() {
        return redSocial;
    }

    /**
     * Define el valor de la propiedad redSocial.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRedSocial(String value) {
        this.redSocial = value;
    }

    /**
     * Obtiene el valor de la propiedad suscrito.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSuscrito() {
        return suscrito;
    }

    /**
     * Define el valor de la propiedad suscrito.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSuscrito(String value) {
        this.suscrito = value;
    }

    /**
     * Obtiene el valor de la propiedad tipoPlan.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoPlan() {
        return tipoPlan;
    }

    /**
     * Define el valor de la propiedad tipoPlan.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoPlan(String value) {
        this.tipoPlan = value;
    }

    /**
     * Obtiene el valor de la propiedad medioPago.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMedioPago() {
        return medioPago;
    }

    /**
     * Define el valor de la propiedad medioPago.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMedioPago(String value) {
        this.medioPago = value;
    }

    /**
     * Obtiene el valor de la propiedad versionSistema.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVersionSistema() {
        return versionSistema;
    }

    /**
     * Define el valor de la propiedad versionSistema.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVersionSistema(String value) {
        this.versionSistema = value;
    }

}

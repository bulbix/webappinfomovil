
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for getDomainLogin complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the tipoDispositivo property.
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
     * Sets the value of the tipoDispositivo property.
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
     * Gets the value of the sistema property.
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
     * Sets the value of the sistema property.
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
     * Gets the value of the notificacion property.
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
     * Sets the value of the notificacion property.
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
     * Gets the value of the redSocial property.
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
     * Sets the value of the redSocial property.
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
     * Gets the value of the suscrito property.
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
     * Sets the value of the suscrito property.
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
     * Gets the value of the tipoPlan property.
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
     * Sets the value of the tipoPlan property.
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
     * Gets the value of the medioPago property.
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
     * Sets the value of the medioPago property.
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
     * Gets the value of the versionSistema property.
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
     * Sets the value of the versionSistema property.
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

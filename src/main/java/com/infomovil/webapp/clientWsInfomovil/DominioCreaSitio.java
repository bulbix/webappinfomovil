
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for dominioCreaSitio complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="dominioCreaSitio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="nombreUsuario" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nombreEmpresa" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descripcionCorta" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="correoElectronico" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="telefono" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sitioWeb" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="canal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="campania" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="template" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlVistaPrevia" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="latitudeMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="longitudeMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="direccionMap" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="videoUrl" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="estatusCuenta" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoCuenta" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "dominioCreaSitio", propOrder = {
    "nombreUsuario",
    "nombreEmpresa",
    "descripcionCorta",
    "correoElectronico",
    "telefono",
    "sitioWeb",
    "canal",
    "campania",
    "template",
    "urlVistaPrevia",
    "latitudeMap",
    "longitudeMap",
    "direccionMap",
    "videoUrl",
    "estatusCuenta",
    "tipoCuenta"
})
public class DominioCreaSitio {

    protected String nombreUsuario;
    protected String nombreEmpresa;
    protected String descripcionCorta;
    protected String correoElectronico;
    protected String telefono;
    protected String sitioWeb;
    protected String canal;
    protected String campania;
    protected String template;
    protected String urlVistaPrevia;
    protected String latitudeMap;
    protected String longitudeMap;
    protected String direccionMap;
    protected String videoUrl;
    protected String estatusCuenta;
    protected String tipoCuenta;

    /**
     * Gets the value of the nombreUsuario property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombreUsuario() {
        return nombreUsuario;
    }

    /**
     * Sets the value of the nombreUsuario property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombreUsuario(String value) {
        this.nombreUsuario = value;
    }

    /**
     * Gets the value of the nombreEmpresa property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombreEmpresa() {
        return nombreEmpresa;
    }

    /**
     * Sets the value of the nombreEmpresa property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombreEmpresa(String value) {
        this.nombreEmpresa = value;
    }

    /**
     * Gets the value of the descripcionCorta property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcionCorta() {
        return descripcionCorta;
    }

    /**
     * Sets the value of the descripcionCorta property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcionCorta(String value) {
        this.descripcionCorta = value;
    }

    /**
     * Gets the value of the correoElectronico property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorreoElectronico() {
        return correoElectronico;
    }

    /**
     * Sets the value of the correoElectronico property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorreoElectronico(String value) {
        this.correoElectronico = value;
    }

    /**
     * Gets the value of the telefono property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * Sets the value of the telefono property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTelefono(String value) {
        this.telefono = value;
    }

    /**
     * Gets the value of the sitioWeb property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSitioWeb() {
        return sitioWeb;
    }

    /**
     * Sets the value of the sitioWeb property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSitioWeb(String value) {
        this.sitioWeb = value;
    }

    /**
     * Gets the value of the canal property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCanal() {
        return canal;
    }

    /**
     * Sets the value of the canal property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCanal(String value) {
        this.canal = value;
    }

    /**
     * Gets the value of the campania property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCampania() {
        return campania;
    }

    /**
     * Sets the value of the campania property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCampania(String value) {
        this.campania = value;
    }

    /**
     * Gets the value of the template property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTemplate() {
        return template;
    }

    /**
     * Sets the value of the template property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTemplate(String value) {
        this.template = value;
    }

    /**
     * Gets the value of the urlVistaPrevia property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlVistaPrevia() {
        return urlVistaPrevia;
    }

    /**
     * Sets the value of the urlVistaPrevia property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlVistaPrevia(String value) {
        this.urlVistaPrevia = value;
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

    /**
     * Gets the value of the videoUrl property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVideoUrl() {
        return videoUrl;
    }

    /**
     * Sets the value of the videoUrl property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVideoUrl(String value) {
        this.videoUrl = value;
    }

    /**
     * Gets the value of the estatusCuenta property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEstatusCuenta() {
        return estatusCuenta;
    }

    /**
     * Sets the value of the estatusCuenta property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEstatusCuenta(String value) {
        this.estatusCuenta = value;
    }

    /**
     * Gets the value of the tipoCuenta property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoCuenta() {
        return tipoCuenta;
    }

    /**
     * Sets the value of the tipoCuenta property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoCuenta(String value) {
        this.tipoCuenta = value;
    }

}

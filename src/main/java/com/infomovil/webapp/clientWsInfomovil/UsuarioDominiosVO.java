
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para usuarioDominiosVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="usuarioDominiosVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idDomain" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idCtrlDomain" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="domainCtrlName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="domainType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="statusCtrlDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="statusVisible" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaCtrlIni" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaCtrlFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="vigente" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlSitio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "usuarioDominiosVO", propOrder = {
    "idDomain",
    "idCtrlDomain",
    "domainCtrlName",
    "domainType",
    "statusCtrlDominio",
    "statusVisible",
    "fechaCtrlIni",
    "fechaCtrlFin",
    "vigente",
    "urlSitio"
})
public class UsuarioDominiosVO {

    protected String idDomain;
    protected String idCtrlDomain;
    protected String domainCtrlName;
    protected String domainType;
    protected String statusCtrlDominio;
    protected String statusVisible;
    protected String fechaCtrlIni;
    protected String fechaCtrlFin;
    protected String vigente;
    protected String urlSitio;

    /**
     * Obtiene el valor de la propiedad idDomain.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdDomain() {
        return idDomain;
    }

    /**
     * Define el valor de la propiedad idDomain.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdDomain(String value) {
        this.idDomain = value;
    }

    /**
     * Obtiene el valor de la propiedad idCtrlDomain.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdCtrlDomain() {
        return idCtrlDomain;
    }

    /**
     * Define el valor de la propiedad idCtrlDomain.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdCtrlDomain(String value) {
        this.idCtrlDomain = value;
    }

    /**
     * Obtiene el valor de la propiedad domainCtrlName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainCtrlName() {
        return domainCtrlName;
    }

    /**
     * Define el valor de la propiedad domainCtrlName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainCtrlName(String value) {
        this.domainCtrlName = value;
    }

    /**
     * Obtiene el valor de la propiedad domainType.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainType() {
        return domainType;
    }

    /**
     * Define el valor de la propiedad domainType.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainType(String value) {
        this.domainType = value;
    }

    /**
     * Obtiene el valor de la propiedad statusCtrlDominio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStatusCtrlDominio() {
        return statusCtrlDominio;
    }

    /**
     * Define el valor de la propiedad statusCtrlDominio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStatusCtrlDominio(String value) {
        this.statusCtrlDominio = value;
    }

    /**
     * Obtiene el valor de la propiedad statusVisible.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStatusVisible() {
        return statusVisible;
    }

    /**
     * Define el valor de la propiedad statusVisible.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStatusVisible(String value) {
        this.statusVisible = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaCtrlIni.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaCtrlIni() {
        return fechaCtrlIni;
    }

    /**
     * Define el valor de la propiedad fechaCtrlIni.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaCtrlIni(String value) {
        this.fechaCtrlIni = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaCtrlFin.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaCtrlFin() {
        return fechaCtrlFin;
    }

    /**
     * Define el valor de la propiedad fechaCtrlFin.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaCtrlFin(String value) {
        this.fechaCtrlFin = value;
    }

    /**
     * Obtiene el valor de la propiedad vigente.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVigente() {
        return vigente;
    }

    /**
     * Define el valor de la propiedad vigente.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVigente(String value) {
        this.vigente = value;
    }

    /**
     * Obtiene el valor de la propiedad urlSitio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlSitio() {
        return urlSitio;
    }

    /**
     * Define el valor de la propiedad urlSitio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlSitio(String value) {
        this.urlSitio = value;
    }

}

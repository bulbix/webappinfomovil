
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for usuarioDominiosVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the idDomain property.
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
     * Sets the value of the idDomain property.
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
     * Gets the value of the idCtrlDomain property.
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
     * Sets the value of the idCtrlDomain property.
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
     * Gets the value of the domainCtrlName property.
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
     * Sets the value of the domainCtrlName property.
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
     * Gets the value of the domainType property.
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
     * Sets the value of the domainType property.
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
     * Gets the value of the statusCtrlDominio property.
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
     * Sets the value of the statusCtrlDominio property.
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
     * Gets the value of the statusVisible property.
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
     * Sets the value of the statusVisible property.
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
     * Gets the value of the fechaCtrlIni property.
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
     * Sets the value of the fechaCtrlIni property.
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
     * Gets the value of the fechaCtrlFin property.
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
     * Sets the value of the fechaCtrlFin property.
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
     * Gets the value of the vigente property.
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
     * Sets the value of the vigente property.
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
     * Gets the value of the urlSitio property.
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
     * Sets the value of the urlSitio property.
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

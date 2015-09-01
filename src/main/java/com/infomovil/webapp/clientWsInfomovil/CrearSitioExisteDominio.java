
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for crearSitio_existeDominio complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_existeDominio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="nombreDominio" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="tipoDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_existeDominio", propOrder = {
    "nombreDominio",
    "tipoDominio"
})
public class CrearSitioExisteDominio {

    @XmlElement(required = true)
    protected String nombreDominio;
    protected String tipoDominio;

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

}


package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for crearSitio_insertImage complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_insertImage">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="domainId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="baseImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_insertImage", propOrder = {
    "domainId",
    "baseImagen",
    "tipoImagen",
    "descImagen"
})
public class CrearSitioInsertImage {

    protected String domainId;
    protected String baseImagen;
    protected String tipoImagen;
    protected String descImagen;

    /**
     * Gets the value of the domainId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainId() {
        return domainId;
    }

    /**
     * Sets the value of the domainId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainId(String value) {
        this.domainId = value;
    }

    /**
     * Gets the value of the baseImagen property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBaseImagen() {
        return baseImagen;
    }

    /**
     * Sets the value of the baseImagen property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBaseImagen(String value) {
        this.baseImagen = value;
    }

    /**
     * Gets the value of the tipoImagen property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoImagen() {
        return tipoImagen;
    }

    /**
     * Sets the value of the tipoImagen property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoImagen(String value) {
        this.tipoImagen = value;
    }

    /**
     * Gets the value of the descImagen property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescImagen() {
        return descImagen;
    }

    /**
     * Sets the value of the descImagen property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescImagen(String value) {
        this.descImagen = value;
    }

}

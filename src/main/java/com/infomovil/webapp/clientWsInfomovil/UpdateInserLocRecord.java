
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateInserLocRecord complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateInserLocRecord">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="domainId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}localizacionVO" minOccurs="0"/>
 *         &lt;element name="token" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "updateInserLocRecord", propOrder = {
    "domainId",
    "localizacionVO",
    "token"
})
public class UpdateInserLocRecord {

    protected String domainId;
    @XmlElement(namespace = "http://ws.webservice.infomovil.org/")
    protected LocalizacionVO localizacionVO;
    protected String token;

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
     * Gets the value of the localizacionVO property.
     * 
     * @return
     *     possible object is
     *     {@link LocalizacionVO }
     *     
     */
    public LocalizacionVO getLocalizacionVO() {
        return localizacionVO;
    }

    /**
     * Sets the value of the localizacionVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link LocalizacionVO }
     *     
     */
    public void setLocalizacionVO(LocalizacionVO value) {
        this.localizacionVO = value;
    }

    /**
     * Gets the value of the token property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToken() {
        return token;
    }

    /**
     * Sets the value of the token property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToken(String value) {
        this.token = value;
    }

}


package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateTemplate complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateTemplate">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}DomainVO" minOccurs="0"/>
 *         &lt;element name="idDomain" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
@XmlType(name = "updateTemplate", propOrder = {
    "domainVO",
    "idDomain",
    "token"
})
public class UpdateTemplate {

    @XmlElement(name = "DomainVO", namespace = "http://ws.webservice.infomovil.org/")
    protected DomainVO domainVO;
    protected String idDomain;
    protected String token;

    /**
     * Gets the value of the domainVO property.
     * 
     * @return
     *     possible object is
     *     {@link DomainVO }
     *     
     */
    public DomainVO getDomainVO() {
        return domainVO;
    }

    /**
     * Sets the value of the domainVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link DomainVO }
     *     
     */
    public void setDomainVO(DomainVO value) {
        this.domainVO = value;
    }

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

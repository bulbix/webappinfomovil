
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateinsertOfferRecord complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateinsertOfferRecord">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="domainid" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}OffertRecordVO" minOccurs="0"/>
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
@XmlType(name = "updateinsertOfferRecord", propOrder = {
    "domainid",
    "offertRecordVO",
    "token"
})
public class UpdateinsertOfferRecord {

    protected String domainid;
    @XmlElement(name = "OffertRecordVO", namespace = "http://ws.webservice.infomovil.org/")
    protected OffertRecordVO offertRecordVO;
    protected String token;

    /**
     * Gets the value of the domainid property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainid() {
        return domainid;
    }

    /**
     * Sets the value of the domainid property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainid(String value) {
        this.domainid = value;
    }

    /**
     * Gets the value of the offertRecordVO property.
     * 
     * @return
     *     possible object is
     *     {@link OffertRecordVO }
     *     
     */
    public OffertRecordVO getOffertRecordVO() {
        return offertRecordVO;
    }

    /**
     * Sets the value of the offertRecordVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link OffertRecordVO }
     *     
     */
    public void setOffertRecordVO(OffertRecordVO value) {
        this.offertRecordVO = value;
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

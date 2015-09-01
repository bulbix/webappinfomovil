
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for deleteRecordNaptr complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deleteRecordNaptr">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idDomain" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="naptrId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
@XmlType(name = "deleteRecordNaptr", propOrder = {
    "idDomain",
    "naptrId",
    "token"
})
public class DeleteRecordNaptr {

    protected String idDomain;
    protected String naptrId;
    protected String token;

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
     * Gets the value of the naptrId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNaptrId() {
        return naptrId;
    }

    /**
     * Sets the value of the naptrId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNaptrId(String value) {
        this.naptrId = value;
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

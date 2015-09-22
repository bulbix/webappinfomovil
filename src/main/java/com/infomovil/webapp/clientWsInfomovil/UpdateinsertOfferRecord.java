
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para updateinsertOfferRecord complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad domainid.
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
     * Define el valor de la propiedad domainid.
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
     * Obtiene el valor de la propiedad offertRecordVO.
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
     * Define el valor de la propiedad offertRecordVO.
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
     * Obtiene el valor de la propiedad token.
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
     * Define el valor de la propiedad token.
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

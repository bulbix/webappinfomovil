
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for extDominioVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="extDominioVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idTipodom" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="extDesc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="extStatus" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "extDominioVO", propOrder = {
    "idTipodom",
    "extDesc",
    "extStatus"
})
public class ExtDominioVO {

    protected Integer idTipodom;
    protected String extDesc;
    protected String extStatus;

    /**
     * Gets the value of the idTipodom property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdTipodom() {
        return idTipodom;
    }

    /**
     * Sets the value of the idTipodom property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdTipodom(Integer value) {
        this.idTipodom = value;
    }

    /**
     * Gets the value of the extDesc property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExtDesc() {
        return extDesc;
    }

    /**
     * Sets the value of the extDesc property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExtDesc(String value) {
        this.extDesc = value;
    }

    /**
     * Gets the value of the extStatus property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExtStatus() {
        return extStatus;
    }

    /**
     * Sets the value of the extStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExtStatus(String value) {
        this.extStatus = value;
    }

}

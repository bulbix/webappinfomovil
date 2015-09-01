
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for compraDominioResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="compraDominioResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}DominioVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "compraDominioResponse", propOrder = {
    "dominioVO"
})
public class CompraDominioResponse {

    @XmlElement(name = "DominioVO", namespace = "http://ws.webservice.infomovil.org/")
    protected DominioVO dominioVO;

    /**
     * Gets the value of the dominioVO property.
     * 
     * @return
     *     possible object is
     *     {@link DominioVO }
     *     
     */
    public DominioVO getDominioVO() {
        return dominioVO;
    }

    /**
     * Sets the value of the dominioVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link DominioVO }
     *     
     */
    public void setDominioVO(DominioVO value) {
        this.dominioVO = value;
    }

}

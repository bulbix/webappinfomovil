
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateRecordNaptrResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateRecordNaptrResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RespuestaVO" type="{http://ws.webservice.infomovil.org/}dominioVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "updateRecordNaptrResponse", propOrder = {
    "respuestaVO"
})
public class UpdateRecordNaptrResponse {

    @XmlElement(name = "RespuestaVO")
    protected DominioVO respuestaVO;

    /**
     * Gets the value of the respuestaVO property.
     * 
     * @return
     *     possible object is
     *     {@link DominioVO }
     *     
     */
    public DominioVO getRespuestaVO() {
        return respuestaVO;
    }

    /**
     * Sets the value of the respuestaVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link DominioVO }
     *     
     */
    public void setRespuestaVO(DominioVO value) {
        this.respuestaVO = value;
    }

}

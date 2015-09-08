
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for crearSitio_insertImageResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_insertImageResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}RespuestaVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_insertImageResponse", propOrder = {
    "respuestaVO"
})
public class CrearSitioInsertImageResponse {

    @XmlElement(name = "RespuestaVO")
    protected RespuestaVO respuestaVO;

    /**
     * Gets the value of the respuestaVO property.
     * 
     * @return
     *     possible object is
     *     {@link RespuestaVO }
     *     
     */
    public RespuestaVO getRespuestaVO() {
        return respuestaVO;
    }

    /**
     * Sets the value of the respuestaVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link RespuestaVO }
     *     
     */
    public void setRespuestaVO(RespuestaVO value) {
        this.respuestaVO = value;
    }

}
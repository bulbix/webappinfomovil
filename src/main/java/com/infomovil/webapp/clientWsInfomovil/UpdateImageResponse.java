
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for updateImageResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="updateImageResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ImagenVO" type="{http://ws.webservice.infomovil.org/}dominioVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "updateImageResponse", propOrder = {
    "imagenVO"
})
public class UpdateImageResponse {

    @XmlElement(name = "ImagenVO")
    protected DominioVO imagenVO;

    /**
     * Gets the value of the imagenVO property.
     * 
     * @return
     *     possible object is
     *     {@link DominioVO }
     *     
     */
    public DominioVO getImagenVO() {
        return imagenVO;
    }

    /**
     * Sets the value of the imagenVO property.
     * 
     * @param value
     *     allowed object is
     *     {@link DominioVO }
     *     
     */
    public void setImagenVO(DominioVO value) {
        this.imagenVO = value;
    }

}

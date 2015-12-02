
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_borarImagenesHuerfanasResponse complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_borarImagenesHuerfanasResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RespuestaVO" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_borarImagenesHuerfanasResponse", propOrder = {
    "respuestaVO"
})
public class CrearSitioBorarImagenesHuerfanasResponse {

    @XmlElement(name = "RespuestaVO")
    protected String respuestaVO;

    /**
     * Obtiene el valor de la propiedad respuestaVO.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRespuestaVO() {
        return respuestaVO;
    }

    /**
     * Define el valor de la propiedad respuestaVO.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRespuestaVO(String value) {
        this.respuestaVO = value;
    }

}

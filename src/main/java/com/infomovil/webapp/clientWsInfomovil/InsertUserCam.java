
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para insertUserCam complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="insertUserCam">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}UserDomainVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "insertUserCam", propOrder = {
    "userDomainVO"
})
public class InsertUserCam {

    @XmlElement(name = "UserDomainVO", namespace = "http://ws.webservice.infomovil.org/")
    protected UserDomainVO userDomainVO;

    /**
     * Obtiene el valor de la propiedad userDomainVO.
     * 
     * @return
     *     possible object is
     *     {@link UserDomainVO }
     *     
     */
    public UserDomainVO getUserDomainVO() {
        return userDomainVO;
    }

    /**
     * Define el valor de la propiedad userDomainVO.
     * 
     * @param value
     *     allowed object is
     *     {@link UserDomainVO }
     *     
     */
    public void setUserDomainVO(UserDomainVO value) {
        this.userDomainVO = value;
    }

}

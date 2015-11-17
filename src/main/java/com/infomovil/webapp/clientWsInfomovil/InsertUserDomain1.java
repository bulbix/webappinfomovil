
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para insertUserDomain1 complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="insertUserDomain1">
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
@XmlType(name = "insertUserDomain1", propOrder = {
    "userDomainVO"
})
public class InsertUserDomain1 {

    @XmlElement(name = "UserDomainVO")
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

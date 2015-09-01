
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for insertUserCam complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the userDomainVO property.
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
     * Sets the value of the userDomainVO property.
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

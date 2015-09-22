
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para getDomainResponse complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="getDomainResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Domain" type="{http://ws.webservice.infomovil.org/}dominioVO" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getDomainResponse", propOrder = {
    "domain"
})
public class GetDomainResponse {

    @XmlElement(name = "Domain")
    protected DominioVO domain;

    /**
     * Obtiene el valor de la propiedad domain.
     * 
     * @return
     *     possible object is
     *     {@link DominioVO }
     *     
     */
    public DominioVO getDomain() {
        return domain;
    }

    /**
     * Define el valor de la propiedad domain.
     * 
     * @param value
     *     allowed object is
     *     {@link DominioVO }
     *     
     */
    public void setDomain(DominioVO value) {
        this.domain = value;
    }

}

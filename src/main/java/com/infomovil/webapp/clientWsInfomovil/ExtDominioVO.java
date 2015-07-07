
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para extDominioVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad idTipodom.
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
     * Define el valor de la propiedad idTipodom.
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
     * Obtiene el valor de la propiedad extDesc.
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
     * Define el valor de la propiedad extDesc.
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
     * Obtiene el valor de la propiedad extStatus.
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
     * Define el valor de la propiedad extStatus.
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

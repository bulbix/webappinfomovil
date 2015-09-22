
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para domainVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="domainVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="backGroundImage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="colour" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="displayString" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="textRecord" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="domainName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="textDomain" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="template" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "domainVO", propOrder = {
    "backGroundImage",
    "colour",
    "displayString",
    "textRecord",
    "domainName",
    "textDomain",
    "template"
})
public class DomainVO {

    protected String backGroundImage;
    @XmlElement(required = true)
    protected String colour;
    @XmlElement(required = true)
    protected String displayString;
    @XmlElement(required = true)
    protected String textRecord;
    @XmlElement(required = true)
    protected String domainName;
    @XmlElement(required = true)
    protected String textDomain;
    @XmlElement(required = true)
    protected String template;

    /**
     * Obtiene el valor de la propiedad backGroundImage.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBackGroundImage() {
        return backGroundImage;
    }

    /**
     * Define el valor de la propiedad backGroundImage.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBackGroundImage(String value) {
        this.backGroundImage = value;
    }

    /**
     * Obtiene el valor de la propiedad colour.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getColour() {
        return colour;
    }

    /**
     * Define el valor de la propiedad colour.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setColour(String value) {
        this.colour = value;
    }

    /**
     * Obtiene el valor de la propiedad displayString.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDisplayString() {
        return displayString;
    }

    /**
     * Define el valor de la propiedad displayString.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDisplayString(String value) {
        this.displayString = value;
    }

    /**
     * Obtiene el valor de la propiedad textRecord.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTextRecord() {
        return textRecord;
    }

    /**
     * Define el valor de la propiedad textRecord.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTextRecord(String value) {
        this.textRecord = value;
    }

    /**
     * Obtiene el valor de la propiedad domainName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainName() {
        return domainName;
    }

    /**
     * Define el valor de la propiedad domainName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainName(String value) {
        this.domainName = value;
    }

    /**
     * Obtiene el valor de la propiedad textDomain.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTextDomain() {
        return textDomain;
    }

    /**
     * Define el valor de la propiedad textDomain.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTextDomain(String value) {
        this.textDomain = value;
    }

    /**
     * Obtiene el valor de la propiedad template.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTemplate() {
        return template;
    }

    /**
     * Define el valor de la propiedad template.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTemplate(String value) {
        this.template = value;
    }

}

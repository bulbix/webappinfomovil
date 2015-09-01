
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for domainVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the backGroundImage property.
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
     * Sets the value of the backGroundImage property.
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
     * Gets the value of the colour property.
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
     * Sets the value of the colour property.
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
     * Gets the value of the displayString property.
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
     * Sets the value of the displayString property.
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
     * Gets the value of the textRecord property.
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
     * Sets the value of the textRecord property.
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
     * Gets the value of the domainName property.
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
     * Sets the value of the domainName property.
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
     * Gets the value of the textDomain property.
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
     * Sets the value of the textDomain property.
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
     * Gets the value of the template property.
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
     * Sets the value of the template property.
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

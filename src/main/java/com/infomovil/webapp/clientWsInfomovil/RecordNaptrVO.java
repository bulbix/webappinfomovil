
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for recordNaptrVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="recordNaptrVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="categoryNaptr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="longLabelNaptr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="regExp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="servicesNaptr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="subCategory" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="claveContacto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="preference" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="visible" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "recordNaptrVO", propOrder = {
    "categoryNaptr",
    "longLabelNaptr",
    "regExp",
    "servicesNaptr",
    "subCategory",
    "claveContacto",
    "preference",
    "visible"
})
public class RecordNaptrVO {

    protected String categoryNaptr;
    protected String longLabelNaptr;
    protected String regExp;
    protected String servicesNaptr;
    protected String subCategory;
    protected String claveContacto;
    protected String preference;
    protected String visible;

    /**
     * Gets the value of the categoryNaptr property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCategoryNaptr() {
        return categoryNaptr;
    }

    /**
     * Sets the value of the categoryNaptr property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCategoryNaptr(String value) {
        this.categoryNaptr = value;
    }

    /**
     * Gets the value of the longLabelNaptr property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLongLabelNaptr() {
        return longLabelNaptr;
    }

    /**
     * Sets the value of the longLabelNaptr property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLongLabelNaptr(String value) {
        this.longLabelNaptr = value;
    }

    /**
     * Gets the value of the regExp property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRegExp() {
        return regExp;
    }

    /**
     * Sets the value of the regExp property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRegExp(String value) {
        this.regExp = value;
    }

    /**
     * Gets the value of the servicesNaptr property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServicesNaptr() {
        return servicesNaptr;
    }

    /**
     * Sets the value of the servicesNaptr property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServicesNaptr(String value) {
        this.servicesNaptr = value;
    }

    /**
     * Gets the value of the subCategory property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubCategory() {
        return subCategory;
    }

    /**
     * Sets the value of the subCategory property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubCategory(String value) {
        this.subCategory = value;
    }

    /**
     * Gets the value of the claveContacto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClaveContacto() {
        return claveContacto;
    }

    /**
     * Sets the value of the claveContacto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClaveContacto(String value) {
        this.claveContacto = value;
    }

    /**
     * Gets the value of the preference property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreference() {
        return preference;
    }

    /**
     * Sets the value of the preference property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreference(String value) {
        this.preference = value;
    }

    /**
     * Gets the value of the visible property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVisible() {
        return visible;
    }

    /**
     * Sets the value of the visible property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVisible(String value) {
        this.visible = value;
    }

}

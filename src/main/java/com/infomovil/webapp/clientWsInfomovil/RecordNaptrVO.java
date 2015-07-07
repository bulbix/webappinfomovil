
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para recordNaptrVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad categoryNaptr.
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
     * Define el valor de la propiedad categoryNaptr.
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
     * Obtiene el valor de la propiedad longLabelNaptr.
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
     * Define el valor de la propiedad longLabelNaptr.
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
     * Obtiene el valor de la propiedad regExp.
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
     * Define el valor de la propiedad regExp.
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
     * Obtiene el valor de la propiedad servicesNaptr.
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
     * Define el valor de la propiedad servicesNaptr.
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
     * Obtiene el valor de la propiedad subCategory.
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
     * Define el valor de la propiedad subCategory.
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
     * Obtiene el valor de la propiedad claveContacto.
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
     * Define el valor de la propiedad claveContacto.
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
     * Obtiene el valor de la propiedad preference.
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
     * Define el valor de la propiedad preference.
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
     * Obtiene el valor de la propiedad visible.
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
     * Define el valor de la propiedad visible.
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


package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for imagenVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="imagenVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="typeImage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="descripcionImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="imagenClobGaleria" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="path" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="url" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="preference" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "imagenVO", propOrder = {
    "typeImage",
    "descripcionImagen",
    "idImagen",
    "imagenClobGaleria",
    "path",
    "url",
    "preference"
})
public class ImagenVO {

    @XmlElement(required = true)
    protected String typeImage;
    protected String descripcionImagen;
    protected String idImagen;
    protected String imagenClobGaleria;
    protected String path;
    protected String url;
    protected String preference;

    /**
     * Gets the value of the typeImage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTypeImage() {
        return typeImage;
    }

    /**
     * Sets the value of the typeImage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTypeImage(String value) {
        this.typeImage = value;
    }

    /**
     * Gets the value of the descripcionImagen property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcionImagen() {
        return descripcionImagen;
    }

    /**
     * Sets the value of the descripcionImagen property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcionImagen(String value) {
        this.descripcionImagen = value;
    }

    /**
     * Gets the value of the idImagen property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdImagen() {
        return idImagen;
    }

    /**
     * Sets the value of the idImagen property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdImagen(String value) {
        this.idImagen = value;
    }

    /**
     * Gets the value of the imagenClobGaleria property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getImagenClobGaleria() {
        return imagenClobGaleria;
    }

    /**
     * Sets the value of the imagenClobGaleria property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setImagenClobGaleria(String value) {
        this.imagenClobGaleria = value;
    }

    /**
     * Gets the value of the path property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPath() {
        return path;
    }

    /**
     * Sets the value of the path property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPath(String value) {
        this.path = value;
    }

    /**
     * Gets the value of the url property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrl() {
        return url;
    }

    /**
     * Sets the value of the url property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrl(String value) {
        this.url = value;
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

}

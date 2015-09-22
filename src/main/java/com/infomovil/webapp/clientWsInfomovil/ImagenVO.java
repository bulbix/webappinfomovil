
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para imagenVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad typeImage.
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
     * Define el valor de la propiedad typeImage.
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
     * Obtiene el valor de la propiedad descripcionImagen.
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
     * Define el valor de la propiedad descripcionImagen.
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
     * Obtiene el valor de la propiedad idImagen.
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
     * Define el valor de la propiedad idImagen.
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
     * Obtiene el valor de la propiedad imagenClobGaleria.
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
     * Define el valor de la propiedad imagenClobGaleria.
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
     * Obtiene el valor de la propiedad path.
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
     * Define el valor de la propiedad path.
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
     * Obtiene el valor de la propiedad url.
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
     * Define el valor de la propiedad url.
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

}

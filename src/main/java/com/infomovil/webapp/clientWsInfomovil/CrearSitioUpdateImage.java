
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_updateImage complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_updateImage">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="domainId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="imageId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="baseImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_updateImage", propOrder = {
    "domainId",
    "imageId",
    "baseImagen",
    "descImagen"
})
public class CrearSitioUpdateImage {

    protected String domainId;
    protected String imageId;
    protected String baseImagen;
    protected String descImagen;

    /**
     * Obtiene el valor de la propiedad domainId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainId() {
        return domainId;
    }

    /**
     * Define el valor de la propiedad domainId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainId(String value) {
        this.domainId = value;
    }

    /**
     * Obtiene el valor de la propiedad imageId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getImageId() {
        return imageId;
    }

    /**
     * Define el valor de la propiedad imageId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setImageId(String value) {
        this.imageId = value;
    }

    /**
     * Obtiene el valor de la propiedad baseImagen.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBaseImagen() {
        return baseImagen;
    }

    /**
     * Define el valor de la propiedad baseImagen.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBaseImagen(String value) {
        this.baseImagen = value;
    }

    /**
     * Obtiene el valor de la propiedad descImagen.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescImagen() {
        return descImagen;
    }

    /**
     * Define el valor de la propiedad descImagen.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescImagen(String value) {
        this.descImagen = value;
    }

}

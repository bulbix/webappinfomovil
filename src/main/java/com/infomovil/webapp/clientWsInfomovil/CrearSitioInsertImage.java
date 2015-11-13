
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_insertImage complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_insertImage">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="domainId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="baseImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="rotacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_insertImage", propOrder = {
    "domainId",
    "baseImagen",
    "tipoImagen",
    "descImagen",
    "rotacion"
})
public class CrearSitioInsertImage {

    protected String domainId;
    protected String baseImagen;
    protected String tipoImagen;
    protected String descImagen;
    protected String rotacion;

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
     * Obtiene el valor de la propiedad tipoImagen.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoImagen() {
        return tipoImagen;
    }

    /**
     * Define el valor de la propiedad tipoImagen.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoImagen(String value) {
        this.tipoImagen = value;
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

    /**
     * Obtiene el valor de la propiedad rotacion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRotacion() {
        return rotacion;
    }

    /**
     * Define el valor de la propiedad rotacion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRotacion(String value) {
        this.rotacion = value;
    }

}


package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_existeDominio complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_existeDominio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="nombreDominio" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="tipoDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_existeDominio", propOrder = {
    "nombreDominio",
    "tipoDominio"
})
public class CrearSitioExisteDominio {

    @XmlElement(required = true)
    protected String nombreDominio;
    protected String tipoDominio;

    /**
     * Obtiene el valor de la propiedad nombreDominio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombreDominio() {
        return nombreDominio;
    }

    /**
     * Define el valor de la propiedad nombreDominio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombreDominio(String value) {
        this.nombreDominio = value;
    }

    /**
     * Obtiene el valor de la propiedad tipoDominio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoDominio() {
        return tipoDominio;
    }

    /**
     * Define el valor de la propiedad tipoDominio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoDominio(String value) {
        this.tipoDominio = value;
    }

}

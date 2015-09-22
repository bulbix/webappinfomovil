
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para localizacionVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="localizacionVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idLocalizacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="latitudeLoc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="longitudeLoc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "localizacionVO", propOrder = {
    "idLocalizacion",
    "latitudeLoc",
    "longitudeLoc"
})
public class LocalizacionVO {

    protected String idLocalizacion;
    protected String latitudeLoc;
    protected String longitudeLoc;

    /**
     * Obtiene el valor de la propiedad idLocalizacion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdLocalizacion() {
        return idLocalizacion;
    }

    /**
     * Define el valor de la propiedad idLocalizacion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdLocalizacion(String value) {
        this.idLocalizacion = value;
    }

    /**
     * Obtiene el valor de la propiedad latitudeLoc.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLatitudeLoc() {
        return latitudeLoc;
    }

    /**
     * Define el valor de la propiedad latitudeLoc.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLatitudeLoc(String value) {
        this.latitudeLoc = value;
    }

    /**
     * Obtiene el valor de la propiedad longitudeLoc.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLongitudeLoc() {
        return longitudeLoc;
    }

    /**
     * Define el valor de la propiedad longitudeLoc.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLongitudeLoc(String value) {
        this.longitudeLoc = value;
    }

}

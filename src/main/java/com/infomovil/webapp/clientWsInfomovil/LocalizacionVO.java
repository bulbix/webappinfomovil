
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for localizacionVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the idLocalizacion property.
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
     * Sets the value of the idLocalizacion property.
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
     * Gets the value of the latitudeLoc property.
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
     * Sets the value of the latitudeLoc property.
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
     * Gets the value of the longitudeLoc property.
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
     * Sets the value of the longitudeLoc property.
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

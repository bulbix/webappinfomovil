
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for catalogoDominiosResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="catalogoDominiosResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoDominios" type="{http://ws.webservice.infomovil.org/}catalogo" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "catalogoDominiosResponse", propOrder = {
    "catalogoDominios"
})
public class CatalogoDominiosResponse {

    @XmlElement(name = "CatalogoDominios")
    protected List<Catalogo> catalogoDominios;

    /**
     * Gets the value of the catalogoDominios property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoDominios property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoDominios().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Catalogo }
     * 
     * 
     */
    public List<Catalogo> getCatalogoDominios() {
        if (catalogoDominios == null) {
            catalogoDominios = new ArrayList<Catalogo>();
        }
        return this.catalogoDominios;
    }

}

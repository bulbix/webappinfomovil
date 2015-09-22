
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para getEstadisticasResponse complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="getEstadisticasResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}VisitasVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getEstadisticasResponse", propOrder = {
    "visitasVO"
})
public class GetEstadisticasResponse {

    @XmlElement(name = "VisitasVO", namespace = "http://ws.webservice.infomovil.org/")
    protected List<VisitasVO> visitasVO;

    /**
     * Gets the value of the visitasVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the visitasVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getVisitasVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link VisitasVO }
     * 
     * 
     */
    public List<VisitasVO> getVisitasVO() {
        if (visitasVO == null) {
            visitasVO = new ArrayList<VisitasVO>();
        }
        return this.visitasVO;
    }

}

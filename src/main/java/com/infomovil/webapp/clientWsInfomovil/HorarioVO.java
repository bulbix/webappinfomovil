
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para horarioVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="horarioVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="dia" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="inicio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cierre" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "horarioVO", propOrder = {
    "dia",
    "inicio",
    "cierre"
})
public class HorarioVO {

    protected String dia;
    protected String inicio;
    protected String cierre;
    
    public HorarioVO(){
    	
    }
    
    

    public HorarioVO(String dia, String inicio, String cierre) {
		super();
		this.dia = dia;
		this.inicio = inicio;
		this.cierre = cierre;
	}



	/**
     * Obtiene el valor de la propiedad dia.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDia() {
        return dia;
    }

    /**
     * Define el valor de la propiedad dia.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDia(String value) {
        this.dia = value;
    }

    /**
     * Obtiene el valor de la propiedad inicio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInicio() {
        return inicio;
    }

    /**
     * Define el valor de la propiedad inicio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInicio(String value) {
        this.inicio = value;
    }

    /**
     * Obtiene el valor de la propiedad cierre.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCierre() {
        return cierre;
    }

    /**
     * Define el valor de la propiedad cierre.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCierre(String value) {
        this.cierre = value;
    }



	@Override
	public String toString() {
		return "HorarioVO [dia=" + dia + ", inicio=" + inicio + ", cierre=" + cierre + "]";
	}
    
    

}

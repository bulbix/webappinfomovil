
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para crearSitio_horarios complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="crearSitio_horarios">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="keyword" type="{http://ws.webservice.infomovil.org/}keywordVO" minOccurs="0"/>
 *         &lt;element name="horarios" type="{http://ws.webservice.infomovil.org/}horarioVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="operacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "crearSitio_horarios", propOrder = {
    "email",
    "password",
    "keyword",
    "horarios",
    "operacion"
})
public class CrearSitioHorarios {

    @XmlElement(required = true)
    protected String email;
    protected String password;
    protected KeywordVO keyword;
    protected List<HorarioVO> horarios;
    protected String operacion;

    /**
     * Obtiene el valor de la propiedad email.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * Define el valor de la propiedad email.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

    /**
     * Obtiene el valor de la propiedad password.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPassword() {
        return password;
    }

    /**
     * Define el valor de la propiedad password.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPassword(String value) {
        this.password = value;
    }

    /**
     * Obtiene el valor de la propiedad keyword.
     * 
     * @return
     *     possible object is
     *     {@link KeywordVO }
     *     
     */
    public KeywordVO getKeyword() {
        return keyword;
    }

    /**
     * Define el valor de la propiedad keyword.
     * 
     * @param value
     *     allowed object is
     *     {@link KeywordVO }
     *     
     */
    public void setKeyword(KeywordVO value) {
        this.keyword = value;
    }

    /**
     * Gets the value of the horarios property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the horarios property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getHorarios().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link HorarioVO }
     * 
     * 
     */
    public List<HorarioVO> getHorarios() {
        if (horarios == null) {
            horarios = new ArrayList<HorarioVO>();
        }
        return this.horarios;
    }

    /**
     * Obtiene el valor de la propiedad operacion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOperacion() {
        return operacion;
    }

    /**
     * Define el valor de la propiedad operacion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOperacion(String value) {
        this.operacion = value;
    }

}

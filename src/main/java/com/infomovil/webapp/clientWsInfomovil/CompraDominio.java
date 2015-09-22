
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para compraDominio complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="compraDominio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="usuario" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="dominio" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="plan" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="medioPago" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="titulo" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="comision" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="montoB" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="PagoId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="statusPago" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="codigoCobro" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="tipoCompra" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "compraDominio", propOrder = {
    "usuario",
    "dominio",
    "plan",
    "medioPago",
    "titulo",
    "comision",
    "montoB",
    "pagoId",
    "statusPago",
    "codigoCobro",
    "tipoCompra"
})
public class CompraDominio {

    @XmlElement(required = true)
    protected String usuario;
    @XmlElement(required = true)
    protected String dominio;
    @XmlElement(required = true)
    protected String plan;
    @XmlElement(required = true)
    protected String medioPago;
    @XmlElement(required = true)
    protected String titulo;
    @XmlElement(required = true)
    protected String comision;
    @XmlElement(required = true)
    protected String montoB;
    @XmlElement(name = "PagoId", required = true)
    protected String pagoId;
    @XmlElement(required = true)
    protected String statusPago;
    @XmlElement(required = true)
    protected String codigoCobro;
    @XmlElement(required = true)
    protected String tipoCompra;

    /**
     * Obtiene el valor de la propiedad usuario.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUsuario() {
        return usuario;
    }

    /**
     * Define el valor de la propiedad usuario.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUsuario(String value) {
        this.usuario = value;
    }

    /**
     * Obtiene el valor de la propiedad dominio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDominio() {
        return dominio;
    }

    /**
     * Define el valor de la propiedad dominio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDominio(String value) {
        this.dominio = value;
    }

    /**
     * Obtiene el valor de la propiedad plan.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPlan() {
        return plan;
    }

    /**
     * Define el valor de la propiedad plan.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPlan(String value) {
        this.plan = value;
    }

    /**
     * Obtiene el valor de la propiedad medioPago.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMedioPago() {
        return medioPago;
    }

    /**
     * Define el valor de la propiedad medioPago.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMedioPago(String value) {
        this.medioPago = value;
    }

    /**
     * Obtiene el valor de la propiedad titulo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTitulo() {
        return titulo;
    }

    /**
     * Define el valor de la propiedad titulo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTitulo(String value) {
        this.titulo = value;
    }

    /**
     * Obtiene el valor de la propiedad comision.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getComision() {
        return comision;
    }

    /**
     * Define el valor de la propiedad comision.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setComision(String value) {
        this.comision = value;
    }

    /**
     * Obtiene el valor de la propiedad montoB.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMontoB() {
        return montoB;
    }

    /**
     * Define el valor de la propiedad montoB.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMontoB(String value) {
        this.montoB = value;
    }

    /**
     * Obtiene el valor de la propiedad pagoId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPagoId() {
        return pagoId;
    }

    /**
     * Define el valor de la propiedad pagoId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPagoId(String value) {
        this.pagoId = value;
    }

    /**
     * Obtiene el valor de la propiedad statusPago.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStatusPago() {
        return statusPago;
    }

    /**
     * Define el valor de la propiedad statusPago.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStatusPago(String value) {
        this.statusPago = value;
    }

    /**
     * Obtiene el valor de la propiedad codigoCobro.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodigoCobro() {
        return codigoCobro;
    }

    /**
     * Define el valor de la propiedad codigoCobro.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodigoCobro(String value) {
        this.codigoCobro = value;
    }

    /**
     * Obtiene el valor de la propiedad tipoCompra.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoCompra() {
        return tipoCompra;
    }

    /**
     * Define el valor de la propiedad tipoCompra.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoCompra(String value) {
        this.tipoCompra = value;
    }

}

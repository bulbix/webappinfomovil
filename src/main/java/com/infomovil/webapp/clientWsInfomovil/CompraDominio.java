
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for compraDominio complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
     * Gets the value of the usuario property.
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
     * Sets the value of the usuario property.
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
     * Gets the value of the dominio property.
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
     * Sets the value of the dominio property.
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
     * Gets the value of the plan property.
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
     * Sets the value of the plan property.
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
     * Gets the value of the medioPago property.
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
     * Sets the value of the medioPago property.
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
     * Gets the value of the titulo property.
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
     * Sets the value of the titulo property.
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
     * Gets the value of the comision property.
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
     * Sets the value of the comision property.
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
     * Gets the value of the montoB property.
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
     * Sets the value of the montoB property.
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
     * Gets the value of the pagoId property.
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
     * Sets the value of the pagoId property.
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
     * Gets the value of the statusPago property.
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
     * Sets the value of the statusPago property.
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
     * Gets the value of the codigoCobro property.
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
     * Sets the value of the codigoCobro property.
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
     * Gets the value of the tipoCompra property.
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
     * Sets the value of the tipoCompra property.
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

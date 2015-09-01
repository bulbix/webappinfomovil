
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for userDomainVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="userDomainVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="phone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="domainName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="status" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="sistema" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="typoDispositivo" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="notificacion" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="tipoAction" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="pais" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="canal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sucursal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="folio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nPais" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nombre" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="direccion1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="direccion2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codigoCamp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="domainType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idRecurso" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="emailTel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idCatDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "userDomainVO", propOrder = {
    "email",
    "phone",
    "password",
    "domainName",
    "status",
    "sistema",
    "typoDispositivo",
    "notificacion",
    "tipoAction",
    "pais",
    "canal",
    "sucursal",
    "folio",
    "nPais",
    "nombre",
    "direccion1",
    "direccion2",
    "codigoCamp",
    "domainType",
    "idDominio",
    "idRecurso",
    "emailTel",
    "idCatDominio"
})
public class UserDomainVO {

    @XmlElement(required = true)
    protected String email;
    protected String phone;
    @XmlElement(required = true)
    protected String password;
    protected String domainName;
    @XmlElement(required = true)
    protected String status;
    @XmlElement(required = true)
    protected String sistema;
    @XmlElement(required = true)
    protected String typoDispositivo;
    @XmlElement(required = true)
    protected String notificacion;
    protected String tipoAction;
    protected String pais;
    protected String canal;
    protected String sucursal;
    protected String folio;
    protected String nPais;
    protected String nombre;
    protected String direccion1;
    protected String direccion2;
    protected String codigoCamp;
    protected String domainType;
    protected String idDominio;
    protected String idRecurso;
    protected String emailTel;
    protected String idCatDominio;

    /**
     * Gets the value of the email property.
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
     * Sets the value of the email property.
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
     * Gets the value of the phone property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Sets the value of the phone property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhone(String value) {
        this.phone = value;
    }

    /**
     * Gets the value of the password property.
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
     * Sets the value of the password property.
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
     * Gets the value of the domainName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainName() {
        return domainName;
    }

    /**
     * Sets the value of the domainName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainName(String value) {
        this.domainName = value;
    }

    /**
     * Gets the value of the status property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStatus() {
        return status;
    }

    /**
     * Sets the value of the status property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStatus(String value) {
        this.status = value;
    }

    /**
     * Gets the value of the sistema property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSistema() {
        return sistema;
    }

    /**
     * Sets the value of the sistema property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSistema(String value) {
        this.sistema = value;
    }

    /**
     * Gets the value of the typoDispositivo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTypoDispositivo() {
        return typoDispositivo;
    }

    /**
     * Sets the value of the typoDispositivo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTypoDispositivo(String value) {
        this.typoDispositivo = value;
    }

    /**
     * Gets the value of the notificacion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNotificacion() {
        return notificacion;
    }

    /**
     * Sets the value of the notificacion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNotificacion(String value) {
        this.notificacion = value;
    }

    /**
     * Gets the value of the tipoAction property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoAction() {
        return tipoAction;
    }

    /**
     * Sets the value of the tipoAction property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoAction(String value) {
        this.tipoAction = value;
    }

    /**
     * Gets the value of the pais property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPais() {
        return pais;
    }

    /**
     * Sets the value of the pais property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPais(String value) {
        this.pais = value;
    }

    /**
     * Gets the value of the canal property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCanal() {
        return canal;
    }

    /**
     * Sets the value of the canal property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCanal(String value) {
        this.canal = value;
    }

    /**
     * Gets the value of the sucursal property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSucursal() {
        return sucursal;
    }

    /**
     * Sets the value of the sucursal property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSucursal(String value) {
        this.sucursal = value;
    }

    /**
     * Gets the value of the folio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFolio() {
        return folio;
    }

    /**
     * Sets the value of the folio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFolio(String value) {
        this.folio = value;
    }

    /**
     * Gets the value of the nPais property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNPais() {
        return nPais;
    }

    /**
     * Sets the value of the nPais property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNPais(String value) {
        this.nPais = value;
    }

    /**
     * Gets the value of the nombre property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Sets the value of the nombre property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNombre(String value) {
        this.nombre = value;
    }

    /**
     * Gets the value of the direccion1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDireccion1() {
        return direccion1;
    }

    /**
     * Sets the value of the direccion1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDireccion1(String value) {
        this.direccion1 = value;
    }

    /**
     * Gets the value of the direccion2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDireccion2() {
        return direccion2;
    }

    /**
     * Sets the value of the direccion2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDireccion2(String value) {
        this.direccion2 = value;
    }

    /**
     * Gets the value of the codigoCamp property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodigoCamp() {
        return codigoCamp;
    }

    /**
     * Sets the value of the codigoCamp property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodigoCamp(String value) {
        this.codigoCamp = value;
    }

    /**
     * Gets the value of the domainType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainType() {
        return domainType;
    }

    /**
     * Sets the value of the domainType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainType(String value) {
        this.domainType = value;
    }

    /**
     * Gets the value of the idDominio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdDominio() {
        return idDominio;
    }

    /**
     * Sets the value of the idDominio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdDominio(String value) {
        this.idDominio = value;
    }

    /**
     * Gets the value of the idRecurso property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdRecurso() {
        return idRecurso;
    }

    /**
     * Sets the value of the idRecurso property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdRecurso(String value) {
        this.idRecurso = value;
    }

    /**
     * Gets the value of the emailTel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmailTel() {
        return emailTel;
    }

    /**
     * Sets the value of the emailTel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmailTel(String value) {
        this.emailTel = value;
    }

    /**
     * Gets the value of the idCatDominio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdCatDominio() {
        return idCatDominio;
    }

    /**
     * Sets the value of the idCatDominio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdCatDominio(String value) {
        this.idCatDominio = value;
    }

}

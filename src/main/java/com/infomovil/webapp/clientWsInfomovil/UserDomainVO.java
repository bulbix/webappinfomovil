
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para userDomainVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad phone.
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
     * Define el valor de la propiedad phone.
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
     * Obtiene el valor de la propiedad domainName.
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
     * Define el valor de la propiedad domainName.
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
     * Obtiene el valor de la propiedad status.
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
     * Define el valor de la propiedad status.
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
     * Obtiene el valor de la propiedad sistema.
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
     * Define el valor de la propiedad sistema.
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
     * Obtiene el valor de la propiedad typoDispositivo.
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
     * Define el valor de la propiedad typoDispositivo.
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
     * Obtiene el valor de la propiedad notificacion.
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
     * Define el valor de la propiedad notificacion.
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
     * Obtiene el valor de la propiedad tipoAction.
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
     * Define el valor de la propiedad tipoAction.
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
     * Obtiene el valor de la propiedad pais.
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
     * Define el valor de la propiedad pais.
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
     * Obtiene el valor de la propiedad canal.
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
     * Define el valor de la propiedad canal.
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
     * Obtiene el valor de la propiedad sucursal.
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
     * Define el valor de la propiedad sucursal.
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
     * Obtiene el valor de la propiedad folio.
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
     * Define el valor de la propiedad folio.
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
     * Obtiene el valor de la propiedad nPais.
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
     * Define el valor de la propiedad nPais.
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
     * Obtiene el valor de la propiedad nombre.
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
     * Define el valor de la propiedad nombre.
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
     * Obtiene el valor de la propiedad direccion1.
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
     * Define el valor de la propiedad direccion1.
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
     * Obtiene el valor de la propiedad direccion2.
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
     * Define el valor de la propiedad direccion2.
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
     * Obtiene el valor de la propiedad codigoCamp.
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
     * Define el valor de la propiedad codigoCamp.
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
     * Obtiene el valor de la propiedad domainType.
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
     * Define el valor de la propiedad domainType.
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
     * Obtiene el valor de la propiedad idDominio.
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
     * Define el valor de la propiedad idDominio.
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
     * Obtiene el valor de la propiedad idRecurso.
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
     * Define el valor de la propiedad idRecurso.
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
     * Obtiene el valor de la propiedad emailTel.
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
     * Define el valor de la propiedad emailTel.
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
     * Obtiene el valor de la propiedad idCatDominio.
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
     * Define el valor de la propiedad idCatDominio.
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


package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para respuestaVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="respuestaVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="resultado" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="token" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaIni" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fTelNamesIni" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fTelNamesFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codeError" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="msgError" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="statusDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codeCamp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlImagen" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="scriptMovilizaSitio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="canal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="campania" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="esquemaProducto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="listProductoUsuarioVO" type="{http://ws.webservice.infomovil.org/}productoUsuarioVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listUsuarioDominiosVO" type="{http://ws.webservice.infomovil.org/}usuarioDominiosVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="dominioCreaSitio" type="{http://ws.webservice.infomovil.org/}dominioCreaSitio" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "respuestaVO", propOrder = {
    "resultado",
    "token",
    "fechaIni",
    "fechaFin",
    "fTelNamesIni",
    "fTelNamesFin",
    "codeError",
    "msgError",
    "statusDominio",
    "codeCamp",
    "urlImagen",
    "scriptMovilizaSitio",
    "canal",
    "campania",
    "esquemaProducto",
    "listProductoUsuarioVO",
    "listStatusDomainVO",
    "listUsuarioDominiosVO",
    "dominioCreaSitio"
})
public class RespuestaVO {

    protected String resultado;
    protected String token;
    protected String fechaIni;
    protected String fechaFin;
    protected String fTelNamesIni;
    protected String fTelNamesFin;
    protected String codeError;
    protected String msgError;
    protected String statusDominio;
    protected String codeCamp;
    protected String urlImagen;
    protected String scriptMovilizaSitio;
    protected String canal;
    protected String campania;
    protected String esquemaProducto;
    protected List<ProductoUsuarioVO> listProductoUsuarioVO;
    protected List<StatusDomainVO> listStatusDomainVO;
    protected List<UsuarioDominiosVO> listUsuarioDominiosVO;
    protected DominioCreaSitio dominioCreaSitio;

    /**
     * Obtiene el valor de la propiedad resultado.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResultado() {
        return resultado;
    }

    /**
     * Define el valor de la propiedad resultado.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResultado(String value) {
        this.resultado = value;
    }

    /**
     * Obtiene el valor de la propiedad token.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToken() {
        return token;
    }

    /**
     * Define el valor de la propiedad token.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToken(String value) {
        this.token = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaIni.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaIni() {
        return fechaIni;
    }

    /**
     * Define el valor de la propiedad fechaIni.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaIni(String value) {
        this.fechaIni = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaFin.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaFin() {
        return fechaFin;
    }

    /**
     * Define el valor de la propiedad fechaFin.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaFin(String value) {
        this.fechaFin = value;
    }

    /**
     * Obtiene el valor de la propiedad fTelNamesIni.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFTelNamesIni() {
        return fTelNamesIni;
    }

    /**
     * Define el valor de la propiedad fTelNamesIni.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFTelNamesIni(String value) {
        this.fTelNamesIni = value;
    }

    /**
     * Obtiene el valor de la propiedad fTelNamesFin.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFTelNamesFin() {
        return fTelNamesFin;
    }

    /**
     * Define el valor de la propiedad fTelNamesFin.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFTelNamesFin(String value) {
        this.fTelNamesFin = value;
    }

    /**
     * Obtiene el valor de la propiedad codeError.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodeError() {
        return codeError;
    }

    /**
     * Define el valor de la propiedad codeError.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodeError(String value) {
        this.codeError = value;
    }

    /**
     * Obtiene el valor de la propiedad msgError.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMsgError() {
        return msgError;
    }

    /**
     * Define el valor de la propiedad msgError.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMsgError(String value) {
        this.msgError = value;
    }

    /**
     * Obtiene el valor de la propiedad statusDominio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStatusDominio() {
        return statusDominio;
    }

    /**
     * Define el valor de la propiedad statusDominio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStatusDominio(String value) {
        this.statusDominio = value;
    }

    /**
     * Obtiene el valor de la propiedad codeCamp.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodeCamp() {
        return codeCamp;
    }

    /**
     * Define el valor de la propiedad codeCamp.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodeCamp(String value) {
        this.codeCamp = value;
    }

    /**
     * Obtiene el valor de la propiedad urlImagen.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlImagen() {
        return urlImagen;
    }

    /**
     * Define el valor de la propiedad urlImagen.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlImagen(String value) {
        this.urlImagen = value;
    }

    /**
     * Obtiene el valor de la propiedad scriptMovilizaSitio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getScriptMovilizaSitio() {
        return scriptMovilizaSitio;
    }

    /**
     * Define el valor de la propiedad scriptMovilizaSitio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setScriptMovilizaSitio(String value) {
        this.scriptMovilizaSitio = value;
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
     * Obtiene el valor de la propiedad campania.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCampania() {
        return campania;
    }

    /**
     * Define el valor de la propiedad campania.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCampania(String value) {
        this.campania = value;
    }

    /**
     * Obtiene el valor de la propiedad esquemaProducto.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEsquemaProducto() {
        return esquemaProducto;
    }

    /**
     * Define el valor de la propiedad esquemaProducto.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEsquemaProducto(String value) {
        this.esquemaProducto = value;
    }

    /**
     * Gets the value of the listProductoUsuarioVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listProductoUsuarioVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListProductoUsuarioVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ProductoUsuarioVO }
     * 
     * 
     */
    public List<ProductoUsuarioVO> getListProductoUsuarioVO() {
        if (listProductoUsuarioVO == null) {
            listProductoUsuarioVO = new ArrayList<ProductoUsuarioVO>();
        }
        return this.listProductoUsuarioVO;
    }

    /**
     * Gets the value of the listStatusDomainVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listStatusDomainVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListStatusDomainVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link StatusDomainVO }
     * 
     * 
     */
    public List<StatusDomainVO> getListStatusDomainVO() {
        if (listStatusDomainVO == null) {
            listStatusDomainVO = new ArrayList<StatusDomainVO>();
        }
        return this.listStatusDomainVO;
    }

    /**
     * Gets the value of the listUsuarioDominiosVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listUsuarioDominiosVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListUsuarioDominiosVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link UsuarioDominiosVO }
     * 
     * 
     */
    public List<UsuarioDominiosVO> getListUsuarioDominiosVO() {
        if (listUsuarioDominiosVO == null) {
            listUsuarioDominiosVO = new ArrayList<UsuarioDominiosVO>();
        }
        return this.listUsuarioDominiosVO;
    }

    /**
     * Obtiene el valor de la propiedad dominioCreaSitio.
     * 
     * @return
     *     possible object is
     *     {@link DominioCreaSitio }
     *     
     */
    public DominioCreaSitio getDominioCreaSitio() {
        return dominioCreaSitio;
    }

    /**
     * Define el valor de la propiedad dominioCreaSitio.
     * 
     * @param value
     *     allowed object is
     *     {@link DominioCreaSitio }
     *     
     */
    public void setDominioCreaSitio(DominioCreaSitio value) {
        this.dominioCreaSitio = value;
    }

}

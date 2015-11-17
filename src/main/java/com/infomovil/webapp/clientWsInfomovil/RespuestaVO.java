
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
 *         &lt;element name="idDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idPago" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="downgrade" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlPromocion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="keyword" type="{http://ws.webservice.infomovil.org/}keywordVO" minOccurs="0"/>
 *         &lt;element name="listProductoUsuarioVO" type="{http://ws.webservice.infomovil.org/}productoUsuarioVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listUsuarioDominiosVO" type="{http://ws.webservice.infomovil.org/}usuarioDominiosVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="dominioCreaSitio" type="{http://ws.webservice.infomovil.org/}dominioCreaSitio" minOccurs="0"/>
 *         &lt;element name="listImagenVO" type="{http://ws.webservice.infomovil.org/}imagenVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainGratisVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listPromocion" type="{http://ws.webservice.infomovil.org/}offertRecordVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listContactos" type="{http://ws.webservice.infomovil.org/}recordNaptrVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listHorarios" type="{http://ws.webservice.infomovil.org/}horarioVO" maxOccurs="unbounded" minOccurs="0"/>
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
    "idDominio",
    "idPago",
    "downgrade",
    "urlPromocion",
    "keyword",
    "listProductoUsuarioVO",
    "listStatusDomainVO",
    "listUsuarioDominiosVO",
    "dominioCreaSitio",
    "listImagenVO",
    "listStatusDomainGratisVO",
    "listPromocion",
    "listContactos",
    "listHorarios"
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
    protected String idDominio;
    protected String idPago;
    protected String downgrade;
    protected String urlPromocion;
    protected KeywordVO keyword;
    protected List<ProductoUsuarioVO> listProductoUsuarioVO;
    protected List<StatusDomainVO> listStatusDomainVO;
    protected List<UsuarioDominiosVO> listUsuarioDominiosVO;
    protected DominioCreaSitio dominioCreaSitio;
    protected List<ImagenVO> listImagenVO;
    protected List<StatusDomainVO> listStatusDomainGratisVO;
    protected List<OffertRecordVO> listPromocion;
    protected List<RecordNaptrVO> listContactos;
    protected List<HorarioVO> listHorarios;

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
     * Obtiene el valor de la propiedad idPago.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdPago() {
        return idPago;
    }

    /**
     * Define el valor de la propiedad idPago.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdPago(String value) {
        this.idPago = value;
    }

    /**
     * Obtiene el valor de la propiedad downgrade.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDowngrade() {
        return downgrade;
    }

    /**
     * Define el valor de la propiedad downgrade.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDowngrade(String value) {
        this.downgrade = value;
    }

    /**
     * Obtiene el valor de la propiedad urlPromocion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlPromocion() {
        return urlPromocion;
    }

    /**
     * Define el valor de la propiedad urlPromocion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlPromocion(String value) {
        this.urlPromocion = value;
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

    /**
     * Gets the value of the listImagenVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listImagenVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListImagenVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ImagenVO }
     * 
     * 
     */
    public List<ImagenVO> getListImagenVO() {
        if (listImagenVO == null) {
            listImagenVO = new ArrayList<ImagenVO>();
        }
        return this.listImagenVO;
    }

    /**
     * Gets the value of the listStatusDomainGratisVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listStatusDomainGratisVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListStatusDomainGratisVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link StatusDomainVO }
     * 
     * 
     */
    public List<StatusDomainVO> getListStatusDomainGratisVO() {
        if (listStatusDomainGratisVO == null) {
            listStatusDomainGratisVO = new ArrayList<StatusDomainVO>();
        }
        return this.listStatusDomainGratisVO;
    }

    /**
     * Gets the value of the listPromocion property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listPromocion property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListPromocion().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link OffertRecordVO }
     * 
     * 
     */
    public List<OffertRecordVO> getListPromocion() {
        if (listPromocion == null) {
            listPromocion = new ArrayList<OffertRecordVO>();
        }
        return this.listPromocion;
    }

    /**
     * Gets the value of the listContactos property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listContactos property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListContactos().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RecordNaptrVO }
     * 
     * 
     */
    public List<RecordNaptrVO> getListContactos() {
        if (listContactos == null) {
            listContactos = new ArrayList<RecordNaptrVO>();
        }
        return this.listContactos;
    }

    /**
     * Gets the value of the listHorarios property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listHorarios property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListHorarios().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link HorarioVO }
     * 
     * 
     */
    public List<HorarioVO> getListHorarios() {
        if (listHorarios == null) {
            listHorarios = new ArrayList<HorarioVO>();
        }
        return this.listHorarios;
    }

}

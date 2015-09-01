
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for dominioVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="dominioVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idDomain" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="video" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="token" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="referencia" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="statusDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaIni" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fTelNamesIni" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fTelNamesFin" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="resultado" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codeError" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codeCamp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descripcionDominio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="displayString" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="domainName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="template" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaExpiracion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="status" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descripcionItem" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idLocalizacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="latitudeLoc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="longitudeLoc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idVideo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlVideo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="texto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="canal" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="campania" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="tipoUsuario" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="movilizaSitioHashUser" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="listRecordNaptrVo" type="{http://ws.webservice.infomovil.org/}recordNaptrVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listKeywordVO" type="{http://ws.webservice.infomovil.org/}keywordVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listDominioVO" type="{http://ws.webservice.infomovil.org/}domainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listLatitud" type="{http://ws.webservice.infomovil.org/}localizacionVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listOffertRecordVO" type="{http://ws.webservice.infomovil.org/}offertRecordVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listImagenVO" type="{http://ws.webservice.infomovil.org/}imagenVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listInfoUsuarioVO" type="{http://ws.webservice.infomovil.org/}infoUsuarioVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainGratisVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listUsuarioDominiosVO" type="{http://ws.webservice.infomovil.org/}usuarioDominiosVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listExtDominioVO" type="{http://ws.webservice.infomovil.org/}extDominioVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "dominioVO", propOrder = {
    "idDomain",
    "video",
    "token",
    "referencia",
    "statusDominio",
    "fechaIni",
    "fechaFin",
    "fTelNamesIni",
    "fTelNamesFin",
    "resultado",
    "codeError",
    "codeCamp",
    "descripcionDominio",
    "displayString",
    "domainName",
    "template",
    "fechaExpiracion",
    "status",
    "descripcionItem",
    "idLocalizacion",
    "latitudeLoc",
    "longitudeLoc",
    "idVideo",
    "urlVideo",
    "texto",
    "canal",
    "campania",
    "tipoUsuario",
    "movilizaSitioHashUser",
    "listRecordNaptrVo",
    "listKeywordVO",
    "listDominioVO",
    "listLatitud",
    "listOffertRecordVO",
    "listImagenVO",
    "listInfoUsuarioVO",
    "listStatusDomainVO",
    "listStatusDomainGratisVO",
    "listUsuarioDominiosVO",
    "listExtDominioVO"
})
public class DominioVO {

    @XmlElement(required = true)
    protected String idDomain;
    protected String video;
    protected String token;
    protected String referencia;
    protected String statusDominio;
    protected String fechaIni;
    protected String fechaFin;
    protected String fTelNamesIni;
    protected String fTelNamesFin;
    protected String resultado;
    protected String codeError;
    protected String codeCamp;
    protected String descripcionDominio;
    protected String displayString;
    protected String domainName;
    protected String template;
    protected String fechaExpiracion;
    protected String status;
    protected String descripcionItem;
    protected String idLocalizacion;
    protected String latitudeLoc;
    protected String longitudeLoc;
    protected String idVideo;
    protected String urlVideo;
    protected String texto;
    protected String canal;
    protected String campania;
    protected String tipoUsuario;
    protected String movilizaSitioHashUser;
    protected List<RecordNaptrVO> listRecordNaptrVo;
    protected List<KeywordVO> listKeywordVO;
    protected List<DomainVO> listDominioVO;
    protected List<LocalizacionVO> listLatitud;
    protected List<OffertRecordVO> listOffertRecordVO;
    protected List<ImagenVO> listImagenVO;
    protected List<InfoUsuarioVO> listInfoUsuarioVO;
    protected List<StatusDomainVO> listStatusDomainVO;
    protected List<StatusDomainVO> listStatusDomainGratisVO;
    protected List<UsuarioDominiosVO> listUsuarioDominiosVO;
    protected List<ExtDominioVO> listExtDominioVO;

    /**
     * Gets the value of the idDomain property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdDomain() {
        return idDomain;
    }

    /**
     * Sets the value of the idDomain property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdDomain(String value) {
        this.idDomain = value;
    }

    /**
     * Gets the value of the video property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVideo() {
        return video;
    }

    /**
     * Sets the value of the video property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVideo(String value) {
        this.video = value;
    }

    /**
     * Gets the value of the token property.
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
     * Sets the value of the token property.
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
     * Gets the value of the referencia property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReferencia() {
        return referencia;
    }

    /**
     * Sets the value of the referencia property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReferencia(String value) {
        this.referencia = value;
    }

    /**
     * Gets the value of the statusDominio property.
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
     * Sets the value of the statusDominio property.
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
     * Gets the value of the fechaIni property.
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
     * Sets the value of the fechaIni property.
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
     * Gets the value of the fechaFin property.
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
     * Sets the value of the fechaFin property.
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
     * Gets the value of the fTelNamesIni property.
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
     * Sets the value of the fTelNamesIni property.
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
     * Gets the value of the fTelNamesFin property.
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
     * Sets the value of the fTelNamesFin property.
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
     * Gets the value of the resultado property.
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
     * Sets the value of the resultado property.
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
     * Gets the value of the codeError property.
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
     * Sets the value of the codeError property.
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
     * Gets the value of the codeCamp property.
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
     * Sets the value of the codeCamp property.
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
     * Gets the value of the descripcionDominio property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcionDominio() {
        return descripcionDominio;
    }

    /**
     * Sets the value of the descripcionDominio property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcionDominio(String value) {
        this.descripcionDominio = value;
    }

    /**
     * Gets the value of the displayString property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDisplayString() {
        return displayString;
    }

    /**
     * Sets the value of the displayString property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDisplayString(String value) {
        this.displayString = value;
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
     * Gets the value of the template property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTemplate() {
        return template;
    }

    /**
     * Sets the value of the template property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTemplate(String value) {
        this.template = value;
    }

    /**
     * Gets the value of the fechaExpiracion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFechaExpiracion() {
        return fechaExpiracion;
    }

    /**
     * Sets the value of the fechaExpiracion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFechaExpiracion(String value) {
        this.fechaExpiracion = value;
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
     * Gets the value of the descripcionItem property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcionItem() {
        return descripcionItem;
    }

    /**
     * Sets the value of the descripcionItem property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcionItem(String value) {
        this.descripcionItem = value;
    }

    /**
     * Gets the value of the idLocalizacion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdLocalizacion() {
        return idLocalizacion;
    }

    /**
     * Sets the value of the idLocalizacion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdLocalizacion(String value) {
        this.idLocalizacion = value;
    }

    /**
     * Gets the value of the latitudeLoc property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLatitudeLoc() {
        return latitudeLoc;
    }

    /**
     * Sets the value of the latitudeLoc property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLatitudeLoc(String value) {
        this.latitudeLoc = value;
    }

    /**
     * Gets the value of the longitudeLoc property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLongitudeLoc() {
        return longitudeLoc;
    }

    /**
     * Sets the value of the longitudeLoc property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLongitudeLoc(String value) {
        this.longitudeLoc = value;
    }

    /**
     * Gets the value of the idVideo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdVideo() {
        return idVideo;
    }

    /**
     * Sets the value of the idVideo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdVideo(String value) {
        this.idVideo = value;
    }

    /**
     * Gets the value of the urlVideo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlVideo() {
        return urlVideo;
    }

    /**
     * Sets the value of the urlVideo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlVideo(String value) {
        this.urlVideo = value;
    }

    /**
     * Gets the value of the texto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTexto() {
        return texto;
    }

    /**
     * Sets the value of the texto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTexto(String value) {
        this.texto = value;
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
     * Gets the value of the campania property.
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
     * Sets the value of the campania property.
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
     * Gets the value of the tipoUsuario property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTipoUsuario() {
        return tipoUsuario;
    }

    /**
     * Sets the value of the tipoUsuario property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTipoUsuario(String value) {
        this.tipoUsuario = value;
    }

    /**
     * Gets the value of the movilizaSitioHashUser property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMovilizaSitioHashUser() {
        return movilizaSitioHashUser;
    }

    /**
     * Sets the value of the movilizaSitioHashUser property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMovilizaSitioHashUser(String value) {
        this.movilizaSitioHashUser = value;
    }

    /**
     * Gets the value of the listRecordNaptrVo property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listRecordNaptrVo property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListRecordNaptrVo().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RecordNaptrVO }
     * 
     * 
     */
    public List<RecordNaptrVO> getListRecordNaptrVo() {
        if (listRecordNaptrVo == null) {
            listRecordNaptrVo = new ArrayList<RecordNaptrVO>();
        }
        return this.listRecordNaptrVo;
    }

    /**
     * Gets the value of the listKeywordVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listKeywordVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListKeywordVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link KeywordVO }
     * 
     * 
     */
    public List<KeywordVO> getListKeywordVO() {
        if (listKeywordVO == null) {
            listKeywordVO = new ArrayList<KeywordVO>();
        }
        return this.listKeywordVO;
    }

    /**
     * Gets the value of the listDominioVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listDominioVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListDominioVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DomainVO }
     * 
     * 
     */
    public List<DomainVO> getListDominioVO() {
        if (listDominioVO == null) {
            listDominioVO = new ArrayList<DomainVO>();
        }
        return this.listDominioVO;
    }

    /**
     * Gets the value of the listLatitud property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listLatitud property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListLatitud().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link LocalizacionVO }
     * 
     * 
     */
    public List<LocalizacionVO> getListLatitud() {
        if (listLatitud == null) {
            listLatitud = new ArrayList<LocalizacionVO>();
        }
        return this.listLatitud;
    }

    /**
     * Gets the value of the listOffertRecordVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listOffertRecordVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListOffertRecordVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link OffertRecordVO }
     * 
     * 
     */
    public List<OffertRecordVO> getListOffertRecordVO() {
        if (listOffertRecordVO == null) {
            listOffertRecordVO = new ArrayList<OffertRecordVO>();
        }
        return this.listOffertRecordVO;
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
     * Gets the value of the listInfoUsuarioVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listInfoUsuarioVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListInfoUsuarioVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link InfoUsuarioVO }
     * 
     * 
     */
    public List<InfoUsuarioVO> getListInfoUsuarioVO() {
        if (listInfoUsuarioVO == null) {
            listInfoUsuarioVO = new ArrayList<InfoUsuarioVO>();
        }
        return this.listInfoUsuarioVO;
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
     * Gets the value of the listExtDominioVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listExtDominioVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListExtDominioVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ExtDominioVO }
     * 
     * 
     */
    public List<ExtDominioVO> getListExtDominioVO() {
        if (listExtDominioVO == null) {
            listExtDominioVO = new ArrayList<ExtDominioVO>();
        }
        return this.listExtDominioVO;
    }

}

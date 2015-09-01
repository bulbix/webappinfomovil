
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for respuestaVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
 *         &lt;element name="listProductoUsuarioVO" type="{http://ws.webservice.infomovil.org/}productoUsuarioVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listStatusDomainVO" type="{http://ws.webservice.infomovil.org/}statusDomainVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="listUsuarioDominiosVO" type="{http://ws.webservice.infomovil.org/}usuarioDominiosVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="dominioCreaSitio" type="{http://ws.webservice.infomovil.org/}dominioCreaSitio" minOccurs="0"/>
 *         &lt;element name="listImagenVO" type="{http://ws.webservice.infomovil.org/}imagenVO" maxOccurs="unbounded" minOccurs="0"/>
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
    "listProductoUsuarioVO",
    "listStatusDomainVO",
    "listUsuarioDominiosVO",
    "dominioCreaSitio",
    "listImagenVO"
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
    protected List<ProductoUsuarioVO> listProductoUsuarioVO;
    protected List<StatusDomainVO> listStatusDomainVO;
    protected List<UsuarioDominiosVO> listUsuarioDominiosVO;
    protected DominioCreaSitio dominioCreaSitio;
    protected List<ImagenVO> listImagenVO;

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
     * Gets the value of the msgError property.
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
     * Sets the value of the msgError property.
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
     * Gets the value of the urlImagen property.
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
     * Sets the value of the urlImagen property.
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
     * Gets the value of the scriptMovilizaSitio property.
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
     * Sets the value of the scriptMovilizaSitio property.
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
     * Gets the value of the esquemaProducto property.
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
     * Sets the value of the esquemaProducto property.
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
     * Gets the value of the dominioCreaSitio property.
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
     * Sets the value of the dominioCreaSitio property.
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

	@Override
	public String toString() {
		return "RespuestaVO [resultado=" + resultado + ", token=" + token
				+ ", fechaIni=" + fechaIni + ", fechaFin=" + fechaFin
				+ ", fTelNamesIni=" + fTelNamesIni + ", fTelNamesFin="
				+ fTelNamesFin + ", codeError=" + codeError + ", msgError="
				+ msgError + ", statusDominio=" + statusDominio + ", codeCamp="
				+ codeCamp + ", urlImagen=" + urlImagen
				+ ", scriptMovilizaSitio=" + scriptMovilizaSitio + ", canal="
				+ canal + ", campania=" + campania + ", esquemaProducto="
				+ esquemaProducto + ", idDominio=" + idDominio
				+ ", listProductoUsuarioVO=" + listProductoUsuarioVO
				+ ", listStatusDomainVO=" + listStatusDomainVO
				+ ", listUsuarioDominiosVO=" + listUsuarioDominiosVO
				+ ", dominioCreaSitio=" + dominioCreaSitio + ", listImagenVO="
				+ listImagenVO + "]";
	}
    
    

}

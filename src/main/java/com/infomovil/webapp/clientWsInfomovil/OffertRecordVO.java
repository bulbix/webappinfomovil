
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para offertRecordVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="offertRecordVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="titleOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="descOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="termsOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="imageClobOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="linkOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="endDateOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="promoCodeOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="discountOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="redeemOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idOffer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlImage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="urlSitio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "offertRecordVO", propOrder = {
    "titleOffer",
    "descOffer",
    "termsOffer",
    "imageClobOffer",
    "linkOffer",
    "endDateOffer",
    "promoCodeOffer",
    "discountOffer",
    "redeemOffer",
    "idOffer",
    "urlImage",
    "urlSitio",
    "urlPromocion",
    "template"
})
public class OffertRecordVO {

    protected String titleOffer;
    protected String descOffer;
    protected String termsOffer;
    protected String imageClobOffer;
    protected String linkOffer;
    protected String endDateOffer;
    protected String promoCodeOffer;
    protected String discountOffer;
    protected String redeemOffer;
    protected String idOffer;
    protected String urlImage;
    protected String urlSitio;
    protected String urlPromocion;
    protected String template;
    
    public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	public String getUrlPromocion() {
		return urlPromocion;
	}

	public void setUrlPromocion(String urlPromocion) {
		this.urlPromocion = urlPromocion;
	}

	/**
     * Obtiene el valor de la propiedad titleOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTitleOffer() {
        return titleOffer;
    }

    /**
     * Define el valor de la propiedad titleOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTitleOffer(String value) {
        this.titleOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad descOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescOffer() {
        return descOffer;
    }

    /**
     * Define el valor de la propiedad descOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescOffer(String value) {
        this.descOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad termsOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTermsOffer() {
        return termsOffer;
    }

    /**
     * Define el valor de la propiedad termsOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTermsOffer(String value) {
        this.termsOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad imageClobOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getImageClobOffer() {
        return imageClobOffer;
    }

    /**
     * Define el valor de la propiedad imageClobOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setImageClobOffer(String value) {
        this.imageClobOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad linkOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLinkOffer() {
        return linkOffer;
    }

    /**
     * Define el valor de la propiedad linkOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLinkOffer(String value) {
        this.linkOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad endDateOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEndDateOffer() {
        return endDateOffer;
    }

    /**
     * Define el valor de la propiedad endDateOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEndDateOffer(String value) {
        this.endDateOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad promoCodeOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPromoCodeOffer() {
        return promoCodeOffer;
    }

    /**
     * Define el valor de la propiedad promoCodeOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPromoCodeOffer(String value) {
        this.promoCodeOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad discountOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDiscountOffer() {
        return discountOffer;
    }

    /**
     * Define el valor de la propiedad discountOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDiscountOffer(String value) {
        this.discountOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad redeemOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRedeemOffer() {
        return redeemOffer;
    }

    /**
     * Define el valor de la propiedad redeemOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRedeemOffer(String value) {
        this.redeemOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad idOffer.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdOffer() {
        return idOffer;
    }

    /**
     * Define el valor de la propiedad idOffer.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdOffer(String value) {
        this.idOffer = value;
    }

    /**
     * Obtiene el valor de la propiedad urlImage.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlImage() {
        return urlImage;
    }

    /**
     * Define el valor de la propiedad urlImage.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlImage(String value) {
        this.urlImage = value;
    }

    /**
     * Obtiene el valor de la propiedad urlSitio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUrlSitio() {
        return urlSitio;
    }

    /**
     * Define el valor de la propiedad urlSitio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlSitio(String value) {
        this.urlSitio = value;
    }

}

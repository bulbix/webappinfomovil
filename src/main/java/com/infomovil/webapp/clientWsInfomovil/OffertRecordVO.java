
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for offertRecordVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
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
    "urlImage"
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

    /**
     * Gets the value of the titleOffer property.
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
     * Sets the value of the titleOffer property.
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
     * Gets the value of the descOffer property.
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
     * Sets the value of the descOffer property.
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
     * Gets the value of the termsOffer property.
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
     * Sets the value of the termsOffer property.
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
     * Gets the value of the imageClobOffer property.
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
     * Sets the value of the imageClobOffer property.
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
     * Gets the value of the linkOffer property.
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
     * Sets the value of the linkOffer property.
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
     * Gets the value of the endDateOffer property.
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
     * Sets the value of the endDateOffer property.
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
     * Gets the value of the promoCodeOffer property.
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
     * Sets the value of the promoCodeOffer property.
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
     * Gets the value of the discountOffer property.
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
     * Sets the value of the discountOffer property.
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
     * Gets the value of the redeemOffer property.
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
     * Sets the value of the redeemOffer property.
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
     * Gets the value of the idOffer property.
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
     * Sets the value of the idOffer property.
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
     * Gets the value of the urlImage property.
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
     * Sets the value of the urlImage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUrlImage(String value) {
        this.urlImage = value;
    }

}

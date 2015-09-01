
package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for keywordVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="keywordVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="keywordField" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="keywordValue" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="keywordPos" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idKeyword" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="typeKeyword" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "keywordVO", propOrder = {
    "keywordField",
    "keywordValue",
    "keywordPos",
    "idKeyword",
    "typeKeyword"
})
public class KeywordVO {

    protected String keywordField;
    protected String keywordValue;
    protected String keywordPos;
    protected String idKeyword;
    protected String typeKeyword;

    /**
     * Gets the value of the keywordField property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKeywordField() {
        return keywordField;
    }

    /**
     * Sets the value of the keywordField property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKeywordField(String value) {
        this.keywordField = value;
    }

    /**
     * Gets the value of the keywordValue property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKeywordValue() {
        return keywordValue;
    }

    /**
     * Sets the value of the keywordValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKeywordValue(String value) {
        this.keywordValue = value;
    }

    /**
     * Gets the value of the keywordPos property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getKeywordPos() {
        return keywordPos;
    }

    /**
     * Sets the value of the keywordPos property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setKeywordPos(String value) {
        this.keywordPos = value;
    }

    /**
     * Gets the value of the idKeyword property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdKeyword() {
        return idKeyword;
    }

    /**
     * Sets the value of the idKeyword property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdKeyword(String value) {
        this.idKeyword = value;
    }

    /**
     * Gets the value of the typeKeyword property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTypeKeyword() {
        return typeKeyword;
    }

    /**
     * Sets the value of the typeKeyword property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTypeKeyword(String value) {
        this.typeKeyword = value;
    }

}


package com.infomovil.webapp.clientWsInfomovil;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para keywordVO complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
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
     * Obtiene el valor de la propiedad keywordField.
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
     * Define el valor de la propiedad keywordField.
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
     * Obtiene el valor de la propiedad keywordValue.
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
     * Define el valor de la propiedad keywordValue.
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
     * Obtiene el valor de la propiedad keywordPos.
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
     * Define el valor de la propiedad keywordPos.
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
     * Obtiene el valor de la propiedad idKeyword.
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
     * Define el valor de la propiedad idKeyword.
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
     * Obtiene el valor de la propiedad typeKeyword.
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
     * Define el valor de la propiedad typeKeyword.
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


package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for insertKeyWordData complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="insertKeyWordData">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://ws.webservice.infomovil.org/}KeywordVO" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="domainId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="token" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "insertKeyWordData", propOrder = {
    "keywordVO",
    "domainId",
    "token"
})
public class InsertKeyWordData {

    @XmlElement(name = "KeywordVO", namespace = "http://ws.webservice.infomovil.org/")
    protected List<KeywordVO> keywordVO;
    protected String domainId;
    protected String token;

    /**
     * Gets the value of the keywordVO property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the keywordVO property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getKeywordVO().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link KeywordVO }
     * 
     * 
     */
    public List<KeywordVO> getKeywordVO() {
        if (keywordVO == null) {
            keywordVO = new ArrayList<KeywordVO>();
        }
        return this.keywordVO;
    }

    /**
     * Gets the value of the domainId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomainId() {
        return domainId;
    }

    /**
     * Sets the value of the domainId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomainId(String value) {
        this.domainId = value;
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

}

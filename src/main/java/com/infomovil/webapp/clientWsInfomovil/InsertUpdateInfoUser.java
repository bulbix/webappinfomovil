
package com.infomovil.webapp.clientWsInfomovil;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for insertUpdateInfoUser complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="insertUpdateInfoUser">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ListInfoUser" type="{http://ws.webservice.infomovil.org/}infoUsuarioVO" maxOccurs="unbounded" minOccurs="0"/>
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
@XmlType(name = "insertUpdateInfoUser", propOrder = {
    "listInfoUser",
    "token"
})
public class InsertUpdateInfoUser {

    @XmlElement(name = "ListInfoUser")
    protected List<InfoUsuarioVO> listInfoUser;
    protected String token;

    /**
     * Gets the value of the listInfoUser property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listInfoUser property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListInfoUser().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link InfoUsuarioVO }
     * 
     * 
     */
    public List<InfoUsuarioVO> getListInfoUser() {
        if (listInfoUser == null) {
            listInfoUser = new ArrayList<InfoUsuarioVO>();
        }
        return this.listInfoUser;
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

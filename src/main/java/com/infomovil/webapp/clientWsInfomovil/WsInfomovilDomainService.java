package com.infomovil.webapp.clientWsInfomovil;

import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

import com.infomovil.webapp.util.Util;

/**
 * This class was generated by Apache CXF 2.7.16
 * 2015-07-07T15:35:39.405-05:00
 * Generated source version: 2.7.16
 * 
 */
@WebServiceClient(name = "WsInfomovilDomainService", 
                  wsdlLocation = "/var/folders/52/xttscp9j4n54ndmzy3sz_4rc0000gn/T/tempdir6239003104282830238.tmp/wsInfomovildomain_1.wsdl",
                  targetNamespace = "http://ws.webservice.infomovil.org/") 
public class WsInfomovilDomainService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://ws.webservice.infomovil.org/", "WsInfomovilDomainService");
    public final static QName WsInfomovilDomainPort = new QName("http://ws.webservice.infomovil.org/", "WsInfomovilDomainPort");
    static {
        URL url = null;//WsInfomovilDomainService.class.getResource("/var/folders/52/xttscp9j4n54ndmzy3sz_4rc0000gn/T/tempdir6239003104282830238.tmp/wsInfomovildomain_1.wsdl");
        if (url == null) {
            try {
            	if(Util.getProfile().equals("DEV")){
            		url = new URL("http://localhost:8080/WsInfomovil/wsInfomovildomain?wsdl");
            	}
            	else if(Util.getProfile().equals("QA")){
            		url = new URL("http://qa.mobileinfo.io/WsInfomovil/wsInfomovildomain?wsdl");
            	}
            	else if(Util.getProfile().equals("PROD")){
            		url = new URL("http://www.infomovil.com/WsInfomovil/wsInfomovildomain?wsdl");
            	}
				
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        } 
        if (url == null) {
            java.util.logging.Logger.getLogger(WsInfomovilDomainService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "/var/folders/52/xttscp9j4n54ndmzy3sz_4rc0000gn/T/tempdir6239003104282830238.tmp/wsInfomovildomain_1.wsdl");
        }       
        WSDL_LOCATION = url;
    }

    public WsInfomovilDomainService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public WsInfomovilDomainService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public WsInfomovilDomainService() {
        super(WSDL_LOCATION, SERVICE);
    }
    
//    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
//    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
//    //compliant code instead.
//    public WsInfomovilDomainService(WebServiceFeature ... features) {
//        super(WSDL_LOCATION, SERVICE, features);
//    }
//
//    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
//    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
//    //compliant code instead.
//    public WsInfomovilDomainService(URL wsdlLocation, WebServiceFeature ... features) {
//        super(wsdlLocation, SERVICE, features);
//    }
//
//    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
//    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
//    //compliant code instead.
//    public WsInfomovilDomainService(URL wsdlLocation, QName serviceName, WebServiceFeature ... features) {
//        super(wsdlLocation, serviceName, features);
//    }

    /**
     *
     * @return
     *     returns WsInfomovilDomain
     */
    @WebEndpoint(name = "WsInfomovilDomainPort")
    public WsInfomovilDomain getWsInfomovilDomainPort() {
        return super.getPort(WsInfomovilDomainPort, WsInfomovilDomain.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns WsInfomovilDomain
     */
    @WebEndpoint(name = "WsInfomovilDomainPort")
    public WsInfomovilDomain getWsInfomovilDomainPort(WebServiceFeature... features) {
        return super.getPort(WsInfomovilDomainPort, WsInfomovilDomain.class, features);
    }

}

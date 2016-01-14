function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function detectarIdioma(){
	console.log("Entro en detectar idioma!");
	var getParam = getUrlParameter('lang');
	var ln = window.navigator.language||navigator.browserLanguage;
	var getLeng = ln.toLowerCase();
	var url =  window.location.href;
	
	if(getParam != 'en' && getParam != 'es'){
		if(getLeng == 'en-us' && getParam != 'en')
			window.location.href = url +"?lang=en";
		else if(getLeng == 'es-mx' && getParam != 'es')
			window.location.href = url +"?lang=es";
		console.log("El valor del idioma es: " + getLeng + " y el lang="+ getParam);
	}
};

function cambiarIdioma(){
	var urlLocal =  window.location.href;
	$.ajax({
		url: contextPath + "/infomovil/getIdioma",
	    type: "POST",
	    dataType: "text",
	    success: function(data)
	    {
	       console.log("El idioma regresado es: "+ data);
	       var getParam = getUrlParameter('lang');
	       if(getParam == 'en' || getParam == 'es') {
			       if(data == "es")
			    	   window.location.href = urlLocal.replace("?lang=es", "?lang=en");
			       else if(data == "en")
			    	   window.location.href = urlLocal.replace("?lang=en", "?lang=es");
		    }else{
		    		if(data == "es")
		    		 	window.location.href = urlLocal +"?lang=en";
			        else if(data == "en")
			    	   window.location.href = urlLocal +"?lang=es"; 
		    }
	       
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	    	console.log("Ocurrio un error: " + jqXHR, textStatus, errorThrown);
	    }
	});

};

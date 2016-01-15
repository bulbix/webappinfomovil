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

function detectarIdioma(tipo){
	var getParam = getUrlParameter('lang');
	var ln = window.navigator.language||navigator.browserLanguage;
	var getLeng = ln.toLowerCase();
	var urlLocal =  window.location.href;
	if(tipo == "Login"){
			if(getParam != 'en' && getParam != 'es'){
				if(getLeng == 'en-us' && getParam != 'en')
					window.location.href = urlLocal +"?lang=en";
				else if(getLeng == 'es-mx' && getParam != 'es')
					window.location.href = urlLocal +"?lang=es";
			}
	}else{
		$.ajax({
			url: contextPath + "/infomovil/getIdioma",
		    type: "POST",
		    dataType: "text",
		    success: function(data)
		    {
		       console.log("El idioma regresado es: "+ data);
		       var getParam = getUrlParameter('lang');
		       if(getParam != 'en' && getParam != 'es') {
		    	   if(data == "es")
		    		 	window.location.href = urlLocal +"?lang=es";
			        else if(data == "en")
			    	   window.location.href = urlLocal +"?lang=en";
			    }
		       
		    },
		    error: function (jqXHR, textStatus, errorThrown)
		    {
		    	console.log("Ocurrio un error: " + jqXHR, textStatus, errorThrown);
		    }
		});
		
	}
};

function cambiarIdioma(){
	console.log("Entro en cambiar idioma de todos los demas");
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

function cambiarIdiomaLogin(){
	console.log("Entro en cambiar idioma Login");
	var getParam = getUrlParameter('lang');
	var ln = window.navigator.language||navigator.browserLanguage;
	var getLeng = ln.toLowerCase();
	var urlLocal =  window.location.href;
		 if(getParam == 'en' || getParam == 'es') {
		       if(getParam == "es"){
		    	   var urlLocalrep = urlLocal.replace("?lang=es", "?lang=en");
		    	   window.location.href = urlLocalrep;
		       		console.log("La urlx: " + urlLocal.replace("?lang=es", "?lang=en"));
		    	   }
		       else if(getParam == "en"){
		    	   var urlLocalrep = urlLocal.replace("?lang=en", "?lang=es");
		       
		    	   	window.location.href = urlLocalrep;
		       		console.log("La urlx: " + urlLocal.replace("?lang=en", "?lang=es"));
					}
		  }else{
			  if(getLeng == 'en-us' && getParam != 'en')
					window.location.href = urlLocal +"?lang=en";
				else if(getLeng == 'es-mx' && getParam != 'es')
					window.location.href = urlLocal +"?lang=es"; 
		  }
		
};
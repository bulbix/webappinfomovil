
	function PrintElem()
    {
		var oldstr = document.body.innerHTML;
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Generando código de impresión...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});
		
		$.ajax({
			type : "POST",
			
		    dataType: 'json',
		    headers: {"Access-Control-Allow-Origin": "*"},
			url : contextPath + "/infomovil/getHTMLPromocion",
			
				
			success : function(data) {
				var headstr = "<html><head><title></title></head><body>";
		        var footstr = "</body>";
				var cadena = data.elHtmlDePromocion;
				var posicion = cadena.search("<body>");
				var sinBody1 =  cadena.substring(posicion+6);
				var posicion2 = sinBody1.search("</body>");
				var sinBody2 = sinBody1.substring(0,posicion2);
				console.log("Solo imprime contenido del body" + sinBody2);
				
			    document.body.innerHTML = headstr+sinBody2+footstr;
			    window.print();
			    location.reload();
			    $(document.body).html(oldstr);
				$.unblockUI();
			},
			error : function(json) {
				console.log("Error descError: " + data.descError);
				$.unblockUI();
			}
		});	
		
        
        
        return false;
    }
	
	
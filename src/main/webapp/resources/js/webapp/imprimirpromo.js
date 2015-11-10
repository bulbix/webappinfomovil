
	function PrintElem()
    {
		
		var oldstrInner = document.documentElement.innerHTML;
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
		console.log("El valor enviado es: " + $("#tempNombrePromo").val() + '.html');
		var nombrePromocion = $("#tempNombrePromo").val() + '.html';
		$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/getHTMLPromocion",
			data : {nombrePromocion: nombrePromocion},
		
			success : function(data) {
				document.documentElement.innerHTML = data.elHtmlDePromocion;
				imprimirPromocion(data.elHtmlDePromocion);
				
			},
			error : function(json) {
				console.log("Error descError: " + data.descError);
				$.unblockUI();
			}
		});	
		
		var imprimirPromocion = function(datahtml){
				setTimeout(function () { window.print(); 
				window.focus();
				window.close();
				document.documentElement.innerHTML = oldstrInner;
			    $(document.body).html(oldstr);
				$.unblockUI();}, 2500);
		};
		
			
			
        
        return false;
    }
	
	
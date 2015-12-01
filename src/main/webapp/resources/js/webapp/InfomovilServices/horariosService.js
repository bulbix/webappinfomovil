app.factory('HorarioService', function($http,MensajesService) {
	
	function getHoras() {
    	 
    	 var horas =  '<option value="0">00:00</option>'+
    	 	 	 
    	   	 '<option value="1">00:15</option>'+
    		 '<option value="2">00:30</option>'+
    		 '<option value="3">00:45</option>'+
    		 '<option value="4">01:00</option>'+
    		 '<option value="5">01:15</option>'+
    		 '<option value="6">01:30</option>'+
    		 '<option value="7">01:45</option>'+
    		 '<option value="8">02:00</option>'+
    		 '<option value="9">02:15</option>'+
    		 '<option value="10">02:30</option>'+
    		 '<option value="11">02:45</option>'+
    		 '<option value="12">03:00</option>'+
    		 '<option value="13">03:15</option>'+
    		 '<option value="14">03:30</option>'+
    		 '<option value="15">03:45</option>'+
    		 '<option value="16">04:00</option>'+
    		 '<option value="17">04:15</option>'+
    		 '<option value="18">04:30</option>'+
    		 '<option value="19">04:45</option>'+
    		 '<option value="20">05:00</option>'+
    		 '<option value="21">05:15</option>'+
    		 '<option value="22">05:30</option>'+
    		 '<option value="23">05:45</option>'+
    		 '<option value="24">06:00</option>'+
    		 '<option value="25">06:15</option>'+
    		 '<option value="26">06:30</option>'+
    		 '<option value="27">06:45</option>'+
    		 '<option value="28">07:00</option>'+
    		 '<option value="29">07:15</option>'+
    		 '<option value="30">07:30</option>'+
    		 '<option value="31">07:45</option>'+
    		 '<option value="32">08:00</option>'+
    		 '<option value="33">08:15</option>'+
    		 '<option value="34">08:30</option>'+
    		 '<option value="35">08:45</option>'+
    		 '<option value="36">09:00</option>'+
    		 '<option value="37">09:15</option>'+
    		 '<option value="38">09:30</option>'+
    		 '<option value="39">09:45</option>'+
    		 '<option value="40">10:00</option>'+
    		 '<option value="41">10:15</option>'+
    		 '<option value="42">10:30</option>'+
    		 '<option value="43">10:45</option>'+
    		 '<option value="44">11:00</option>'+
    		 '<option value="45">11:15</option>'+
    		 '<option value="46">11:30</option>'+
    		 '<option value="47">11:45</option>'+
    		 '<option value="48">12:00</option>'+
    		 '<option value="49">12:15</option>'+
    		 '<option value="50">12:30</option>'+
    		 '<option value="51">12:45</option>'+
    		 '<option value="52">13:00</option>'+
    		 '<option value="53">13:15</option>'+
    		 '<option value="54">13:30</option>'+
    		 '<option value="55">13:45</option>'+
    		 '<option value="56">14:00</option>'+
    		 '<option value="57">14:15</option>'+
    		 '<option value="58">14:30</option>'+
    		 '<option value="59">14:45</option>'+
    		 '<option value="60">15:00</option>'+
    		 '<option value="61">15:15</option>'+
    		 '<option value="62">15:30</option>'+
    		 '<option value="63">15:45</option>'+
    		 '<option value="64">16:00</option>'+
    		 '<option value="65">16:15</option>'+
    		 '<option value="66">16:30</option>'+
    		 '<option value="67">16:45</option>'+
    		 '<option value="68">17:00</option>'+
    		 '<option value="69">17:15</option>'+
    		 '<option value="70">17:30</option>'+
    		 '<option value="71">17:45</option>'+
    		 '<option value="72">18:00</option>'+
    		 '<option value="73">18:15</option>'+
    		 '<option value="74">18:30</option>'+
    		 '<option value="75">18:45</option>'+
    		 '<option value="76">19:00</option>'+
    		 '<option value="77">19:15</option>'+
    		 '<option value="78">19:30</option>'+
    		 '<option value="79">19:45</option>'+
    		 '<option value="80">20:00</option>'+
    		 '<option value="81">20:15</option>'+
    		 '<option value="82">20:30</option>'+
    		 '<option value="83">20:45</option>'+
    		 '<option value="84">21:00</option>'+
    		 '<option value="85">21:15</option>'+
    		 '<option value="86">21:30</option>'+
    		 '<option value="87">21:45</option>'+
    		 '<option value="88">22:00</option>'+
    		 '<option value="89">22:15</option>'+
    		 '<option value="90">22:30</option>'+
    		 '<option value="91">22:45</option>'+
    		 '<option value="92">23:00</option>'+
    		 '<option value="93">23:15</option>'+
    		 '<option value="94">23:30</option>'+
    		 '<option value="95">23:45</option>';
    		 return horas;


    	};

    	function getHorarios() {
    	console.log("Se llamo a getHorarios");
    		$http({
    			method: 'POST',
    			url: contextPath + "/infomovil/getHorarios",
    			params: { 
    			}
    		}).then(function successCallback(response) {
    			console.log("Si fue y regreso y el codeError es: " +  response.data.codeError);
    			mensaje = "";
    			var option ="";
    			if(response.data.codeError == 0) {
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Lunes1 option:selected").remove(); $("#Lunes1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Lunes2 option:selected").remove(); $("#Lunes2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Martes1 option:selected").remove(); $("#Martes1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Martes2 option:selected").remove(); $("#Martes2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Miercoles1 option:selected").remove(); $("#Miercoles1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Miercoles2 option:selected").remove(); $("#Miercoles2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Jueves1 option:selected").remove(); $("#Jueves1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Jueves2 option:selected").remove(); $("#Jueves2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Viernes1 option:selected").remove(); $("#Viernes1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Viernes2 option:selected").remove(); $("#Viernes2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Sabado1 option:selected").remove(); $("#Sabado1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Sabado2 option:selected").remove(); $("#Sabado2").prepend(option);
    				
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].inicio);
    				$("#Domingo1 option:selected").remove(); $("#Domingo1").prepend(option);
    				option = $('<option selected="selected"></option>').attr("value", "default").text(response.data.listaHorario[0].cierre);
    				$("#Domingo2 option:selected").remove(); $("#Domingo2").prepend(option);
    				
    				    				
    			}else{
    				mensaje = "No se ha podido obtener el horario";
    				MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			}
    			$("#myModalHorarios").modal();
    			return response.data.codeError;
    			
    			
    		}, function errorCallback(response) {
    			
    			console.log("El error es: " + response , response.data.codeError);
    			mensaje = "No se ha podido obtener el horario";
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			$("#myModalHorarios").modal();
    			return response.data.codeError;
    		});
    		
    	};
    	
   
		return{
			 getHoras : getHoras,
			 getHorarios : getHorarios
			 
			   	
		}
});
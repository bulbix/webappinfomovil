package com.infomovil.webapp.controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.Transformer;
import org.apache.log4j.Logger;
import org.joda.time.LocalDate;
import org.json.simple.JSONArray;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.infomovil.webapp.clientWsInfomovil.ClientWsInfomovil;
import com.infomovil.webapp.clientWsInfomovil.RespuestaVO;
import com.infomovil.webapp.clientWsInfomovil.VisitasVO;
import com.infomovil.webapp.util.Util;

@Controller
public class EstadisticasController {
	
	private ClientWsInfomovil wsCliente = new ClientWsInfomovil();
	private static final Logger log = Logger.getLogger(EstadisticasController.class);
	
	@RequestMapping(value = "/infomovil/estadisticas", method = {RequestMethod.GET})
	public String estadisticas(Model model){
		model.addAttribute("fechaInicial", LocalDate.now().minusWeeks(1).toString("dd/MM/yyyy"));
		model.addAttribute("fechaFinal", LocalDate.now().toString("dd/MM/yyyy"));
		return  "Webapp/estadisticas";
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/infomovil/getDatosEstadistica", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> getDatosEstadistica(
			@RequestParam String fechaInicial,
			@RequestParam String fechaFinal,
			@RequestParam String cual)  {		
		Map<String,Object> result = new HashMap<String,Object>();
		JSONArray jsonArrayVisitas = new JSONArray();
		JSONArray jsonArrayVisitasUnicas = new JSONArray();
		
		try {
			
			SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
			
			String correo = Util.getUserLogged().getUsername();
			String password = Util.getUserLogged().getPassword();
			RespuestaVO resp = wsCliente.crearSitioReporteUsuario(correo, password, cual, fechaInicial, fechaFinal);
			List<VisitasVO> datos =  resp.getListVisitas();
			List<Object[]> listaVisitas = new ArrayList<Object[]>();
			List<Object[]> listaVisitasUnicas = new ArrayList<Object[]>();
			
			long maxVisita = Long.parseLong(datos.get(0).getVisitas());
			Date minFecha = sdf1.parse(datos.get(0).getFecha()), 
			maxFecha = sdf1.parse(datos.get(0).getFecha());
			fechaInicial = datos.get(0).getFechaInicial();
			fechaFinal = datos.get(0).getFechaFinal();
			long sumVisitasTotales=0, sumVisitasUnicas=0;
			
			for(int index = 0; index < datos.size(); index++){
				VisitasVO visita = datos.get(index);
				long visitaTotal = Long.parseLong(visita.getVisitas());
				long visitaUnica = Long.parseLong(visita.getVisitasUnicas());
				sumVisitasTotales+=visitaTotal;
				sumVisitasUnicas+=visitaUnica;
				
				if(visitaTotal > maxVisita){
					maxVisita = visitaTotal;
				}
				Date fechaVisita = sdf1.parse(visita.getFecha());
				if(fechaVisita.compareTo(minFecha)<0){
					minFecha = fechaVisita;
				}
				if(fechaVisita.compareTo(maxFecha)>0){
					maxFecha = fechaVisita;
				}
				
				listaVisitas.add(new Object[]{visita.getFecha(),visita.getVisitas()});
				listaVisitasUnicas.add(new Object[]{visita.getFecha(),visita.getVisitasUnicas()});
			}
			
			jsonArrayVisitas.addAll(listaVisitas);
			jsonArrayVisitasUnicas.addAll(listaVisitasUnicas);
			result.put("codeError", resp.getCodeError());
			result.put("msgError",resp.getMsgError());
			result.put("arrayVisitas", jsonArrayVisitas);
			result.put("arrayVisitasUnicas", jsonArrayVisitasUnicas);
			result.put("maxVisita", maxVisita + 2);
			LocalDate localDateMinFecha = new LocalDate(minFecha);
			result.put("minFecha", localDateMinFecha.minusDays(1).toString("yyyy-MM-dd"));
			log.debug("minFecha " + result.get("minFecha"));
			LocalDate localDateMaxFecha = new LocalDate(maxFecha);
			result.put("maxFecha",  localDateMaxFecha.plusDays(1).toString("yyyy-MM-dd"));
			result.put("fechaInicial", fechaInicial);
			result.put("fechaFinal", fechaFinal);
			result.put("sumVisitasTotales", sumVisitasTotales);
			result.put("sumVisitasUnicas", sumVisitasUnicas);
		}		
		catch (Exception e)  {
			log.error("getDatosEstadistica:::::", e);
		}	

		return result;
	}	
	
	public static void main(String[] args) {
		JSONArray list = new JSONArray();
		List<String[]> lista = new ArrayList<String[]>();
		String[] dato1 = {"2008-08-12","4"};
		String[] dato2 = {"2008-08-15","10"};
		lista.add(dato1); lista.add(dato2);
		list.addAll(lista);
		
		System.out.println(list.toJSONString());
		
		
	}
	
	

}

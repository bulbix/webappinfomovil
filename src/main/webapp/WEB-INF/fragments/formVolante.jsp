<div ng-hide="true" id="idPromocion"></div>
<div ng-hide="true" id="urlPromocion"></div>
<div  ng-hide="true" id="tempPromocion"></div>

<div class="col-xs-12 col-sm-6 col-md-6">
	<div class="form-group text-left textBlack">
		<label for="exampleInputEmpresa">Tu empresa:</label> <input type="text" class="form-control" id="nombreEmpresaPromo" value="">
	</div>
	<div class="divider"></div>
	<div class="form-group text-left textBlack">
		<label for="exampleInputEmail1">Nombre de la promoción:</label> <input type="text" class="form-control"	id="nombrePromo" value="">
	</div>
	<div class="divider"></div>
	<div class="form-group text-left textBlack">
		<label for="exampleInputPassword1" class="text-left">Descripción de la promoción:</label>
			<textarea rows="4" cols="50" name="descPromo" id="descPromo" class="form-control"></textarea>
	</div>
	<div class="divider"></div>
	<div class="form-group text-left textBlack">
		<label for="exampleInputEmail1" class="text-left">Información adicional:</label>
			<textarea rows="4" cols="50" class="form-control" name="infoadiPromo" id="infoadiPromo"></textarea>
	</div>
</div>

<div class="col-xs-12 col-sm-6">
	<div class="divider hidden-md hidden-lg"></div>
	<div class="form-group text-left textBlack col-xs-11 reset">
		<label for="exampleInputEmail1" class="text-left">Vigencia al:
			<md-content>
				<md-datepicker ng-model="volantesCtrl.fechaVigencia" md-placeholder="Vigencia" />
			</md-content>
		</label> 
	</div>
	
	<div class="clearfix"></div>
	<div class="divider"></div>
			
	<div class="form-group text-left textBlack">
		<div class="form-group text-left textBlack">
			<label for="exampleInputEmail1" class="text-left">Teléfono</label> 
			<input type="text" id="telContactoVolante" value="" class="textBlack form-control" placeholder="10 digitos"/>
		</div>
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div class="form-group text-left textBlack">
			<label for="exampleInputEmail1" class="text-left">Celular</label> 
			<input type="text" id="celContactoVolante" value="" class="textBlack form-control" placeholder="10 digitos"/>
		</div>
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div class="form-group text-left textBlack">
			<label for="exampleInputEmail1" class="text-left">E-mail</label> 
			<input type="text" id="emailContactoVolante" value="" class="textBlack form-control" placeholder="mail@mail.com"/>
		</div>		
	</div>		
	<div class="clearfix"></div>
	<div class="divider"></div>
	<div class="form-group text-left textBlack">
		<label class="text-left">¿Cómo redimir?:</label>
		<div class="radio">
			<div class="clear"></div>
			<label>
				<input type="radio" name="radioPromo" id="r1"
					value="No especificado" class="radioPromo"
					ng-checked="1==1">No especificado
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="radioPromo" id="r2" 
					value="Llámanos" class="radioPromo">Llámanos
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="radioPromo" id="r3"
					value="Envíanos un e-mail" class="radioPromo">Envíanos un e-mail
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="radioPromo" id="r4"
					value="Visítanos" class="radioPromo">Visítanos
			</label>
		</div>
	</div>					
</div>
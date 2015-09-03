<!-- Modal -->
 
	                    <div class="modal-header">
	                    <!--data-dismiss="modal"-->
	                      <button type="button" class="close"  aria-label="Close" id="closemyModalImagenes"><span aria-hidden="true">&times;</span></button>
	                      <!-- <h4 class="modal-title" id="myModalLabel">Galería de imágenes</h4>-->
	                      <input type="file" accept="image/*" onchange="picChange(event)" id="btnSeleccionaImagen"/>
	                      <button type="button" class="btn btn-default"  id="btnAlbumsDeFacebook">Face</button>
	                      <button type="button" class="btn btn-default"  id="btnGuardarImagen" onclick="guardarImagenesJQ()">Guardar</button>
	                    </div>
	            <div class="modal-body">  
                        <div id="galeriaVacia">
                          <p align="center">
                            ¡Agrega imágenes!
                          </p>

                        </div>
                        <div id="galeriaImagenes">
                            <ul id="listaImagenes" class="listNone"></ul>
                           
                        </div>    
                       
                        <div id="facebookDiv">
                                <div id= "primeroFB">
                                	<button type="button" id="regresarDeFace">Regresar</button>
                                      <ul id="albumsList" ></ul>
                                </div><!--Fin del div primero -->

                                <div id="segundoFB">
                                       <button type="button" id="idRegresarAlbum">Regresar</button>
                                       <ul id="photosList" ></ul>
                                </div><!--Fin del div segundo -->

                                <div id="terceroFB">
                                	<button type="button" id="regresarDeFotos">Regresar</button>
                                    <img src="" width="100" height="100" id="imgVistaPrevia"/>
                                    <form action="">
                                      Nombre de la imagen: <input type="text" name="fname" id="nombreDeImgn" maxlength="50"></input><br><br><br>
                                      <button type="button" class="btn btn-default"  id="btnGuardarImagen" onclick="guardarImagenesJQF()">Guardar</button>
                                    </form>
                                </div><!--Fin del div tercero -->
                         </div>    

                        <div id="imgSeleccionadaDeGaleria">
                              <button type="button" class="btn btn-default"  id="regresarSelecImg">Regresar</button>
                              <br>
                              <img src="" width="150" height="150" class="imgActualizar" id="fotoDeGaleria"/>
                              <div>Nombre de la imagen:</div>
                              <input type="text" value="" id="actualizarTextoFoto"></input>
                              
                        </div>

                    <div class="modal-footer">
                      <!-- No hay footer -->
                    </div>
          </div>
      
<!-- Placed at the end of the document so the pages load faster -->
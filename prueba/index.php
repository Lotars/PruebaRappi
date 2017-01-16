<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Tienda Rappi</title>
	<!-- Estilo principal de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
</head>
<body onload="mostrar();">
<header>

	<div id="myModal" class="modal">
	 <div class="col-md-4 col-md-offset-4">
	  <div class="modal-content">
	    <span class="close">&times;</span>
	        <form class="form-horizontal" role="form">
		        <fieldset>
		          <legend>Origen de datos</legend>
		          <div class="form-group">
		            <label class="col-sm-2 control-label" for="textinput">Url:</label>
		            <div class="col-sm-10">
		              <input id="urljson" type="text" placeholder="Url o Ubicacion" value="data/data.json" class="form-control">
		            </div>
		          </div>
    	           <div class="form-group">
		            <div class="col-sm-offset-2 col-sm-10">
		              <div class="pull-right">
		                <button type="submit" onclick="cerrarmodal()" class="btn btn-default">Cancelar</button>
		                <button type="submit" onclick="aceptarmodal()" class="btn btn-primary">Guardar</button>
		              </div>
		            </div>
		          </div>
		        </fieldset>
	        </form>
	        <p>Si cierra o cancela el dialogo se cargara datos de muestra</p>
	     </div>
	 </div>
	</div>

	<div class="container">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<div>
		    <div class="profile">
		        <img align="left" class="image-lg" src="img/rappi.png"/>
		    </div>
		</div> <!-- /container -->  
		<nav class="navbar navbar-default container-fluid">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			    </div>

			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav" id="menu">
			        <li class="active"><a href="p4.php">Home <span class="sr-only">(current)</span></a></li>
			        <li><a onclick="llenarcarrito()" data-toggle="modal" data-target="#prueba" href="">Carrito <span id="señal"></span></a></li>
			       <div class="navbar-form navbar-right">
				       <div class="form-group">
				         <input id="textob" type="text" class="form-control" placeholder="Buscar">
				       </div>
				       <button class="btn btn-default" onclick="buscartexto(tomartexto())">Buscar</button>
			       </div>
			        <ul class="nav navbar-nav pull-right">
			        <li class="dropdown ">
			          <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ordenar por:<span class="caret"></span></a>
			          <ul class="dropdown-menu">
			          	<li onclick="orden_nombre();"><a href="#">Nombre</a></li>
			            <li onclick="orden_precio('mayor');"><a>Mayor Precio</a></li>
			            <li onclick="orden_precio('menor');"><a>Menor Precio</a></li>
			            </ul>
			        </li>
			      </ul>
			        <ul class="nav navbar-nav pull-right">
			        <li class="dropdown ">
			          <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filtrar por:<span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li onclick="precio_30();"><a href="#">Precio > 30.000</a></li>
			            <li onclick="precio_10();"><a href="#">Precio < 10.000</a></li>
			            </ul>
			        </li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
	</div>
</header>
	<div id="principal" class="container">
		<div class="col-md-12">
			<div id ="menutab" class="col-xs-12 col-sm-12 col-md-12" style="float: left;">
     			 <div class="row">
					  <div class="process">
					   <div id="usuarios" class="process-row nav nav-tabs">
					    <div class="process-step">
					     <button type="button" class="btn btn-info btn-circle" data-toggle="tab" href="#todo"><i class="fa fa-asterisk fa-3x"></i></button>
					     <p><small>Todos</small></p>
					    </div>
					   </div>
					  </div>
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane fade in active" id="todo">
						<div class="row">
							<div id="productos"></div>
						</div>	
					</div>
					<div role="tabpanel" class="tab-pane fade" id="home">
						<div id="productos_2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 footerleft ">
        <h3>Prueba de Desarrollador UI Web </h3>
        <p><i class="fa fa-map-pin"></i> Calle los Mangos Maracay estado Aragua-Venezuela</p>
        <p><i class="fa fa-phone"></i> Phone (Venezuela) : +56 412 887 5651</p>
        <p><i class="fa fa-envelope"></i> E-mail : Torresjulioch@gmail.com</p>
        
      </div>
    </div>
  </div>
</footer>

<!-- Modal -->
<div class="modal fade" id="prueba" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Carrito de Compras</h4>
      </div>
      <div id="modalB" class="modal-body">
       <div class="col-sm-12 col-md-10 col-md-offset-1">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th class="text-center">Precio</th>
                        <th class="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody id="productos_carro">
                    
                </tbody>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>


<div class="copyright">
  <div class="container">
    <div class="col-md-6">
      <p>© 2017 - All Rights Julio Torres</p>
    </div>
  </div>
</div>
	<!-- Archivo jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 	<script src="js/jquerybase.js"></script>
 		<!-- Archivo js principal de bootstra -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      
</body>

</html>
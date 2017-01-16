		var idl= "";
		var form ="" ;
		var jsonlocation ="data/data.json";
		var modal = document.getElementById('myModal');
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		var contenedor = [0];
		var contador = 1;

		function aceptarmodal(){
			jsonlocation = document.getElementById("urljson").value;
			modal.style.display = "none";
		    mostrar();
		}

		function mostrarmodal() {
		    modal.style.display = "block";
		}

		span.onclick = function() {
		    cerrarmodal()
		}

		function cerrarmodal(){
			    modal.style.display = "none";
			    jsonlocation = "data/data.json"
			    mostrar();
		}

		window.onclick = function(event) {
		    if (event.target == modal) {
				cerrarmodal()
		    }
		}

		function inicio(){
			if (jsonlocation == "") {
				mostrarmodal();
			}
		}	

    	function mostrar(){
    		c = 1;
			$.getJSON(jsonlocation, function(datos) {
                $.each(datos["categories"], function(categori_id, name) {
                    c++;
                });
                    for(valores in datos.categories){
					   $("#usuarios").append("<div class='process-step'> <button id="+datos.categories[valores].categori_id+" onclick='products_specificos("+datos.categories[valores].categori_id+");' type='button' class='btn btn-default btn-circle' data-toggle='tab' href='#home'><i class='fa fa-minus fa-3x'></i></button> <p><small>"+datos.categories[valores].name.toUpperCase()+"</small></p></div>");
				}
				for(valores in datos.products){
					imprimir_consulta('#productos',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
				} 
            });
		}

		function imprimir_consulta(formu,id,bs,img,name,av,precio){

		$(formu).append("<div id='producto-" + id + "' class='col-md-3 column productbox thumbnail'>" + ( bs == true ? '<img src="img/top-seller2.png" class="img-responsive topseller">' :'') + "<img src='" + img +"' class='img-responsive'><div class='producttitle'>"+ name +"</div><div class='productprice'> " + (av == true ? '<div class="pull-right"><a class="btn btn-warning btn-sm" role="button" id="comprar" onclick="carrito('+id+',1);" >Comprar</a></div>' :'<div class="pull-right"><a href="#"" class="btn btn-danger btn-sm" role="button" disabled="disabled">Agotado</a></div>') + "<div class='pricetext'>"+ precio +"</div></div></div>");
		}

		function llenarcarrito(){
			total=0;
			if(contenedor.length < 2 ){
				$("#productos_carro").html("");
				$("#modalB").append("<label id='lbmensaje'>No hay productos en el carro de Compra</label>");
			} else {
				$("#productos_carro").html("");
				 $.getJSON(jsonlocation, function(datos) {
					$("#lbmensaje").html("");
					for(valores in datos.products){
						for (a = 1 ; a < contenedor.length; a++ ){
							if (datos.products[valores].id == contenedor[a]) {
								$("#productos_carro").append("<tr><td class='col-sm-8 col-md-6'><div class='media'></div>"+datos.products[valores].name.toUpperCase()+"</td><td class='col-sm-1 col-md-1' style='text-align: center'>1</td><td class='col-sm-1 col-md-1 text-center'><strong>"+datos.products[valores].price+"</strong></td><td class='col-sm-1 col-md-1 text-center'><strong>"+datos.products[valores].price+"</strong></td><td class='col-sm-1 col-md-1'><button id='"+contenedor[a]+"' onclick='eliminarcarro("+contenedor[a]+")' type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span> Eliminar</button></td></tr>");
								total += parseInt(currencyFormatDE(datos.products[valores].price));
							}
						}
					}
					$("#productos_carro").append("<tr><td></td><td></td><td></td><td><h3>Total</h3></td><td class='text-right'><h3><strong>"+total+"</strong></h3></td></tr>");
				}); 
			}
		}

		function eliminarcarro(id_pro){
			var index = contenedor.indexOf(id_pro);
			if (index > -1) {
 			   contenedor.splice(index, 1);
 			   llenarcarrito();
			}
			$("#señal").html("");
			$("#señal").append("<span id='span1' class='badge'>"+( contenedor.length -1) +"</span>");
		}

		function carrito(valor,cont){
			if (contenedor.indexOf(valor) < 0 ){
		   		contenedor.push(valor);
				$("#menu").attr("class", "nav navbar-nav nav-pills");
				$("#señal").html("");
				$("#señal").append("<span id='span1' class='badge'>"+( contenedor.length -1) +"</span>");
			}
		}
			
		function precio_10(valor){
			if (idl > 0) {form = "#productos_2"} else { form = "#productos"}
			$(form).html("");
				$.getJSON(jsonlocation, function(datos) {
					for(valores in datos.products){
						if (currencyFormatDE(datos.products[valores].price) < 10000 ) {
							if (idl > 0) {
								for (j = 0; j < datos.products[valores].categories.length; j++) { 
									if (datos.products[valores].categories[j] == idl) {
										imprimir_consulta('#productos_2',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
									}
								}
							} else {
							imprimir_consulta('#productos',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
							}
						}
					}
			});  
		}

		function precio_30(valor){
			if (idl > 0) {form = "#productos_2"} else { form = "#productos"}
			$(form).html("");
				$.getJSON(jsonlocation, function(datos) {
					for(valores in datos.products){
						if (currencyFormatDE(datos.products[valores].price) > 30000 ) {
							if (idl > 0) {
								for (j = 0; j < datos.products[valores].categories.length; j++) { 
									if (datos.products[valores].categories[j] == idl) {
										imprimir_consulta('#productos_2',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
									}
								}
							} else {
							imprimir_consulta('#productos',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
							}
						}
					}
			});  
		}

    	function buscartexto(texto){
			var str;
			var patt;
			var encontro;
			if (idl > 0) {form = "#productos_2"} else { form = "#productos"}
			$(form).html("");
				$.getJSON(jsonlocation, function(datos) {
					for(valores in datos.products){
						 str = datos.products[valores].name;
						 patt = new RegExp(texto);
						 encontro = patt.test(str);
						if (encontro) {
							if (idl > 0) {
								for (j = 0; j < datos.products[valores].categories.length; j++) { 
									if (datos.products[valores].categories[j] == idl) {
										imprimir_consulta('#productos_2',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
									}
								}
							} else {
								imprimir_consulta('#productos',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
							}
						}
					}
				}); 
		}

		function products_specificos(valor){
			idl=valor;
			$("#productos_2").html("");
			$.getJSON(jsonlocation, function(datos) {
				for(valores in datos.products){
					for (i = 0; i < datos.products[valores].categories.length; i++) { 
						if (datos.products[valores].categories[i] == valor) {
						imprimir_consulta('#productos_2',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
						}
					}
				}				
			});
		}

		function orden_nombre(){
			if (idl > 0) {form = "#productos_2"} else { form = "#productos"}
				$(form).html("");
				$.getJSON(jsonlocation, function(datos) {
					var ordenombre = []
					for(a =0; a < datos.products.length; a++){
						ordenombre[a] = datos.products[a].name.toLowerCase();
					}
					ordenombre.sort();
					for (var i = 0; i < ordenombre.length; i++){
						for(valores in datos.products){
							if (datos.products[valores].name.toLowerCase() == ordenombre[i] ) {
								if (idl > 0) {
									for (j = 0; j < datos.products[valores].categories.length; j++) { 
										if (datos.products[valores].categories[j] == idl) {
										imprimir_consulta('#productos_2',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
										}
									}
								} else {
								imprimir_consulta('#productos',datos.products[valores].id,(datos.products[valores].best_seller == true),datos.products[valores].img,datos.products[valores].name,(datos.products[valores].available == true),datos.products[valores].price);
							}
						}
					}
				}
				});  
		}

		function orden_precio(tipoo){
			$.getJSON(jsonlocation, function(datos) {
				var valores = [datos.products.length];
					if (tipoo=="mayor"){
						var ordemayor = []
						for(a =0; a < datos.products.length; a++){
						ordemayor[a] = currencyFormatDE(datos.products[a].price);
					}
					ordemayor.sort(function(a, b){return b - a});
					imprimir_consulta2(ordemayor,'');
					} else if (tipoo=="menor"){
						var ordemenor = []
						for(b =0; b < datos.products.length; b++){
							ordemenor[b] = currencyFormatDE(datos.products[b].price);
					}
					ordemenor.sort(function(a, b){return a - b});
					imprimir_consulta2(ordemenor,'');
					}
	            });
		}

		function imprimir_consulta2(orden,filtro){
			if (idl > 0) {form = "#productos_2"} else { form = "#productos"}
			$(form).html("");
				$.getJSON(jsonlocation, function(datos) {
				for (var i = 0; i < orden.length; i++){
					for(valores in datos.products){
						if (currencyFormatDE(datos.products[valores].price) == orden[i] ) {
							if (idl > 0) {
								for (j = 0; j < datos.products[valores].categories.length; j++) { 
									if (datos.products[valores].categories[j] == idl) {
										$(form).append("<div id='producto-" + datos.products[valores].id + "' class='col-md-3 column productbox thumbnail'>" + (datos.products[valores].best_seller == true ? '<img src="top-seller2.png" class="img-responsive topseller">' :'') + "<img src='" + datos.products[valores].img +"' class='img-responsive'><div class='producttitle'>"+datos.products[valores].name+"</div><div class='productprice'> " + (datos.products[valores].available == true ? '<div class="pull-right"><a href="#"" class="btn btn-warning btn-sm" role="button" onclick="carrito('+datos.products[valores].id+');">Comprar</a></div>' :'<div class="pull-right"><a href="#"" class="btn btn-danger btn-sm" role="button">Agotado</a></div>') + "<div class='pricetext'>"+datos.products[valores].price+"</div></div></div>");
									}
								}
							} else {
							$(form).append("<div id='producto-" + datos.products[valores].id + "' class='col-md-3 column productbox thumbnail'>" + (datos.products[valores].best_seller == true ? '<img src="top-seller2.png" class="img-responsive topseller">' :'') + "<img src='" + datos.products[valores].img +"' class='img-responsive'><div class='producttitle'>"+datos.products[valores].name+"</div><div class='productprice'> " + (datos.products[valores].available == true ? '<div class="pull-right"><a href="#"" class="btn btn-warning btn-sm" role="button" onclick="carrito('+datos.products[valores].id+');">Comprar</a></div>' :'<div class="pull-right"><a href="#"" class="btn btn-danger btn-sm" role="button">Agotado</a></div>') + "<div class='pricetext'>"+datos.products[valores].price+"</div></div></div>");
							}
						}
					}
				}				
			});    	
		}

		function currencyFormatDE (num) {
		    return num
		       .replace(".", "")
		}

		function tomartexto(){
    		return document.getElementById("textob").value;
       	}

		$(function(){
		 $('.btn-circle').on('click',function(){
		   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
		   $(this).addClass('btn-info').removeClass('btn-default').blur();
		   $(this).addClass('active').removeClass('btn-default').blur();
		 });
	});
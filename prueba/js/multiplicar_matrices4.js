// Definimos el array e inicializamos variables
    var myArr = new Array();
    var r = 0;
    var finarray = 0;
    var cant = 0;
    var cadena = [];

    function agregar(){
     if (validarinput()) {
      cant = parseInt(document.getElementById('numerot').value);
        for (var i = 1 ; i < cant + 1  ; i++) {
                $('#casos').append("<tr id='grupo_"+i+"'><td class='center'><label>Profundida de la matriz N°" + i + " (N)</label><input id='" + i + "' class='form-control' placeholder=''></td><td class='center'><label>Cantidad de Operaciones N°" + i + " (M)</label><input id='cantoper_" + i + "' class='form-control' placeholder=''></td><td></td></tr>");  
            }
             $('#casos').append("<tr><td></td><td></td><td><button id='btngene' class='btn btn-primary' onclick='generar_consulta()'>Generar Consultas</button></td></tr>");
             // $('#casos').append("<tr><td></td><td></td><td><button class='btn btn-primary invisible' onclick='generarmatriz()'>Generar Matriz</button></td></tr>") 
             $('#numerot').attr('readonly', true);
             $('#btnnrot').attr('disabled', 'disabled');
    }}

    function generar_consulta(){
        cant = parseInt(document.getElementById('numerot').value);
            for (var g = 1 ; g < cant + 1  ; g++) {
               if (validarnm(g)) { 
                  opera = parseInt(document.getElementById('cantoper_'+g).value);
                  for (var o = 1 ; o < opera + 1  ; o++) {
                  $('#casos').append("<tr id='grupo_"+g+"'><td> 1. UPDATE x y z W <br> 2. QUERY  x1 y1 z1 x2 y2 z2</td><td class='center'><label>Consulta N°" + o + " de Matriz N°"+g+"</label><input id='consulta_" + g + "_" + o+ "' class='form-control' placeholder=''></td><td></td></tr>");  
                }
               $("#"+g).attr('readonly', true);
               $('#cantoper_'+g).attr('readonly', true);
               $('#btngene').attr('disabled', 'disabled');
               $('#casos').append("<tr><td></td><td></td><td><button id='btnejec' class='btn btn-primary' onclick='generarmatriz()'>Ejecutar Consultas</button></td></tr>");
        } else {return;}
      }
    }

    function generarmatriz(){
        cant = parseInt(document.getElementById('numerot').value);
        for (var a = 1 ; a < cant + 1; a++) {
          finarray = parseInt(document.getElementById(a).value);
          for (var i = 1 ; i < finarray + 1; i++) {
            myArr[i] = new Array();
            myArr[i][i] = new Array()
            myArr[i][i][i] = 0;
            }

          $('#resultados').html("")
          $('#tablaresultados').removeClass('invisible');
          ejecutar(a) 
        }
    }

    function ejecutar(canto){
       opera = parseInt(document.getElementById('cantoper_'+canto).value);
       vuelta = parseInt(document.getElementById(canto).value);
       for (var o = 1 ; o < opera + 1  ; o++) {
           cadena = document.getElementById('consulta_'+canto+'_'+o).value.split(" ");
           if (cadena[0].toLowerCase() == "query"){
             if(parseInt(cadena[1]) > vuelta || parseInt(cadena[2]) > vuelta || parseInt(cadena[3]) > vuelta || parseInt(cadena[4]) > vuelta || parseInt(cadena[5]) > vuelta || parseInt(cadena[6]) > vuelta ){
                alert("valor de la consulta no puede ser mayor a la profundidad de la Matriz");
                return;
               } else { sumar_array(parseInt(cadena[1]),parseInt(cadena[4])); }
                  }else if (cadena[0].toLowerCase() == "update"){
            if(parseInt(cadena[1]) > vuelta || parseInt(cadena[2]) > vuelta || parseInt(cadena[3]) > vuelta || parseInt(cadena[4]) > Math.pow(10,9) || parseInt(cadena[4]) < Math.pow(-10,9)  ){
                alert("Error en la consulta");
                  return;
                       } else { actualizar_array(parseInt(cadena[1]),parseInt(cadena[2]),parseInt(cadena[3]),parseInt(cadena[4])); }
                    }
                 }
             }
    // funcion que suma los campos se pasan dos parametros el inico y el fin del ciclo 
    function sumar_array(inicio,fin) {
        r=0;
        for(var q = inicio ; q <= fin  ; q++) {
            if(typeof(myArr[q][q][q])=='number') {
                r+=myArr[q][q][q];
            } 
        } 
       $('#resultados').append("<tr><td><h4>Resultado QUERY "+inicio+inicio+inicio+" "+fin+fin+fin+" es: "+r+"</h4></td></tr>");  
    }
    // Funcion Actualizar campo se le da un valor al array requerido
    function actualizar_array(x,y,z,valor) {
        myArr[x][y][z] = valor;
    }

    function validarinput() {
        var t,n,m;
        t = document.getElementById("numerot").value;
        if (isNaN(t) || t < 1 || t > 50) {
            text = "Debe ser un numero entre 1 y 50";
            alert(text);
            return false;
            } else { return true; }
    }

    function validarnm(id) {
        var n,m;
        n = document.getElementById(id).value;
        m = document.getElementById("cantoper_"+id).value;
        if ((isNaN(n) || n < 1 || n > 100) || (isNaN(m) || m < 1 || m > 1000) ) {
            text = "Error (N) Debe ser entre 1 y 100 y (M) entre 1 y 1000";
            alert(text);
            return false;
            } else { return true; }
    }

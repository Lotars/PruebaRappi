<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Suma de Matriz 3D</title>
    <!-- Estilo principal de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/matriz.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/multiplicar_matrices4.js" language="javascript" type="text/javascript"></script>
    </head>
    <body>
        <div class="container">
            <div  class="row">
            <br>
                <div class="col-md-8 col-md-offset-2 varma">
                    <div class="panel panel-primary">
                      <div class="panel-heading">Suma de Matriz 3D</div>
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th></th>
                            <th class="center">Valores</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id="casos">
                          <tr>
                            <td class="center">Cantidad de casos de Prueba (T)</td>
                            <td ><input type="text" id="numerot" class="form-control" placeholder=""></td>
                            <td class="center"><button id="btnnrot" class="btn btn-primary" onclick="agregar()">Aceptar</button></td>
                          </tr>
                        </tbody>
                      </table>  
                    </div>
                </div>
                
                <div id="tablaresultados" class="col-md-8 col-md-offset-2 invisible">
                    <div class="panel panel-primary">
                      <div class="panel-heading">Resultados de la Matriz</div>
                      <table class="table table-bordered">
                        <tbody id="resultados">
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
document.getElementById('add').addEventListener("click", getDatos);
document.getElementById('add').addEventListener("click", conteo);
document.getElementById('resolver').addEventListener("click",mostrarRespuestas);
document.getElementById('resolver').addEventListener("click",mostrarEcuacion);
document.getElementById('resolver').addEventListener("click",mostrarFX);



//FUNCION QUE MUESTRA EL RESULTADO FINAL
function mostrarFX(){

  var numero=obtenerfx();

  if(numero.length==1){
    document.getElementById('resultado').innerHTML=`<b>f(x)</b>=${obtenerfx()}`;
  }
  else{
    document.getElementById('resultado').innerHTML=`<b>f(x)<sub>1</sub></b>= ${obtenerfx()[0]}<br>
    <b>f(x)<sub>2</sub></b>= ${obtenerfx()[1]}`;
  }
}
/**FUNCION QUE CUENTA EL NÚMERO DE INTERVALOS*/
function conteo(){
    var xRecive=document.getElementById('valorX').value;
    var yRecive=document.getElementById('valorY').value;
    document.getElementById('conteo').innerHTML=`${datos.length}`;
    
}

//FUNCION QUE MUESTRA LAS RESPUESTAS
function mostrarRespuestas(){

  document.getElementById('incognitas').innerHTML=`<b>c</b>= ${pronostico()[0]}<br>
  <b>b</b>= ${pronostico()[1]}<br><b>a</b>= ${pronostico()[2]} <br><br>`;
}


//FUNCION PARA MOSTRAR ECUACION
function mostrarEcuacion(){
  var ecuacion=obtenerEcuacion(); 
  //CX2+BX+C
  if(ecuacion[0]!=0 && ecuacion[1]!=0 && ecuacion[2]!=0 ){
    
    if(ecuacion[1]>0){
      if(ecuacion[2]>0){
        document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>+${ecuacion[1]}x+${ecuacion[2]}`;
      }
      else if(ecuacion[2]<0)
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>+${ecuacion[1]}x${ecuacion[2]}`;
    }
    
    else if(ecuacion[1]<0){
      if(ecuacion[2]>0){
        document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>${ecuacion[1]}x+${ecuacion[2]}`;
      }
      else if(ecuacion[2]<0){
        document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>${ecuacion[1]}x${ecuacion[2]}`;
      }
    }
  }

//BX+C
  if(ecuacion[0]==0){
    if(ecuacion[2]>0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[1]}x+${ecuacion[2]}`;
    }
    else if(ecuacion[2]<0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[1]}x${ecuacion[2]}`;
    }
  }

//CX2+C
  if(ecuacion[1]==0){
    if(ecuacion[2]>0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>+${ecuacion[2]}`;
    }
    else if(ecuacion[2]<0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>${ecuacion[2]}`;
    }
  }

//CX2+BX
  if(ecuacion[2]==0){
    if(ecuacion[1]>0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>+${ecuacion[1]}x`;
    }
    else if(ecuacion[1]<0){
      document.getElementById('respuestas').innerHTML=`<b>f(x)</b>= ${ecuacion[0]}x<sup>2</sup>${ecuacion[1]}x`;
    }
  }

}

/**FUNCIÓN QUE ALMACENA LOS DATOS EN UN ARRAY */
var datos=[];
var datosTabla=[];

function getDatos(xRecive,yRecive){
    var linea=[];
    var xRecive=document.getElementById('valorX').value;
    var yRecive=document.getElementById('valorY').value;
    var x=parseFloat(xRecive);
    var y=parseFloat(yRecive);

    var xy=x*y;
    var x2=x*x;
    var x4=x*x*x*x;
    var x2y=x*x*y;

    linea.push(x,y,xy,x2,x4,x2y);
    datos.push(linea);
    datosTabla.push(linea);  
    
    
}


//FUNCIÓN QUE GENERA LA TABLA
function genera_tabla() {

  var datosTabla=this.datosTabla;
  var sepa=["-----","-----","-----","-----","-----","-----"]
  var sumas=this.solucion();

  datosTabla.push(sepa,sumas);
    // Obtener la referencia del elemento body
    var body = document.getElementById("datosTabla");
   
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //CREACION DE TITULOS DE LA TABLA
    var x = document.createElement("th");
    var txtX = document.createTextNode("x");
    x.appendChild(txtX);
    tblBody.appendChild(x);

    var y = document.createElement("th");
    var txtY = document.createTextNode("y");
    y.appendChild(txtY);
    tblBody.appendChild(y);

    var xy = document.createElement("th");
    var txtXY = document.createTextNode("xy");
    xy.appendChild(txtXY);
    tblBody.appendChild(xy);

    var x2= document.createElement("th");
    x2.innerHTML='x<sup>2</sup>';
    tblBody.appendChild(x2);

    var x4= document.createElement("th");
    x4.innerHTML='x<sup>4</sup>';
    tblBody.appendChild(x4);

    var x2y= document.createElement("th");
    x2y.innerHTML='x<sup>2</sup>y';
    tblBody.appendChild(x2y);
    

   
    // Crea las celdas
    for (var i = 0; i < datosTabla.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
        
      for (var j = 0; j < 6; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(datosTabla[i][j]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }


    
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
   
}


//FUNCIÓN PARA OBTENER LAS SUMAS
function solucion(){
  
  var sumasTotal=[];

  var sumaX=datos.length;
  var sumaY=0;
    var sumaXY=0;
    var sumaX2=0;
    var sumaX4=0;
    var sumaX2Y=0;
  for(let i=0;i<this.datos.length;i++){     
          sumaY=sumaY+this.datos[i][1];
              sumaXY=sumaXY+this.datos[i][2];
              sumaX2=sumaX2+this.datos[i][3];
              sumaX4=sumaX4+this.datos[i][4];
              sumaX2Y=sumaX2Y+this.datos[i][5];
  } sumasTotal.push(sumaX,sumaY, sumaXY, sumaX2, sumaX4, sumaX2Y);
  return sumasTotal;
}


//FUNCION PARA OBTENER LAS INCÓGNITAS

function pronostico(){
  var sumas=this.solucion();
  var respuestas=[];
  
  var b=sumas[2]/sumas[3];
  var c=(sumas[0]*sumas[5]-sumas[1]*sumas[3])/(sumas[0]*sumas[4]-sumas[3]*sumas[3]);
  var a=(sumas[5]-c*sumas[4])/(sumas[2]);

  
  respuestas.push(c,b,a);

  return respuestas;
  
}

//FUNCIÓN PARA OBTENER LA ECUACIÓN
function obtenerEcuacion(){
  var ecuacion=[];

  var respuestas=this.pronostico();
  var c=respuestas[0];
  var b=respuestas[1];
  var a=respuestas[2];
  
  var c2;
  var b2;
  var a2; 

  if((c-Math.trunc(c))!=0){
    c2=c.toFixed(4);
  }
  else{
    c2=c;
  }

  if((b-Math.trunc(b))!=0){
    b2=b.toFixed(4);
  }
  else{
    b2=b;
  }

  if((a-Math.trunc(a))!=0){
    a2=a.toFixed(4);
  }
  else{
    a2=a;
  }

 ecuacion.push(c2,b2,a2);
 return ecuacion;
}


//Función para obtener F(X)


function obtenerfx(){

  var respuestas=[];

  var respuesta;
  var respuesta2;

  var incognita=obtenerEcuacion();

  var num=(incognita[1]*incognita[1])/(4*incognita[0]*incognita[2]);

  if(incognita[0]==0){  
    respuesta=(incognita[2]*-1)/incognita[1];

    respuestas.push(respuesta);
    return respuestas;
  }
  
  else if(incognita[1]==0){
    if(incognita[2]<0){
      respuesta=Math.sqrt((incognita[2]*-1)/incognita[0]);
    }
    else{
      respuesta=Math.sqrt(incognita[2]/incognita[0]);
    }
    respuestas.push(respuesta);

    return respuestas;
  }

  else{

    if(num>0){
      respuesta=((-1*incognita[1])+(Math.sqrt(num)))/(2*incognita[0]);
      respuesta2=((-1*incognita[1])-(Math.sqrt(num)))/(2*incognita[0]);
    }

    else {
      respuesta=((-1*incognita[1])+(Math.sqrt(num*-1)))/(2*incognita[0]);
      respuesta2=((-1*incognita[1])+(Math.sqrt(num*-1)))/(2*incognita[0]);
    }

    respuestas.push(respuesta, respuesta2);
    return respuestas;
  }

}


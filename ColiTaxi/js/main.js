
//PANEL DE REGISTRO O LOGIN
document.getElementById('botonUsuario').addEventListener("click", cajaUsuario);
document.getElementById('botonUsuario').addEventListener("click",conteo);

var conteo=0;
function conteo(){
   if(conteo==0){
       return conteo+=1;
   }
   else if (conteo==1){
       return conteo-=1;
   }

}

function cajaUsuario(){

    if (conteo==0){
        document.getElementById('cajaUsuario').innerHTML=`<div id="usuarioOpcion"></div>`
        document.getElementById('usuarioOpcion').innerHTML=`<br><a id="sesionLink" href="html/sesion.html">Iniciar Sesión</a>
        <br> <b>o</b> <br>
        <a id="usuarioLink" href="html/registro.html">Registrarse</a>`
    }

    else if(conteo==1){
        var padre=document.getElementById('cajaUsuario');
        var eliminar=document.getElementById('usuarioOpcion');

        padre.removeChild(eliminar);
    }

}
//
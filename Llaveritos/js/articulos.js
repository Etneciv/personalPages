var articulos = {
    "llaveros":[
        {"nombre":"llavero FLASH","precio":15, "png":"../img/plan.png"},
        {"nombre":"llavero DEADPOOL","precio":20},
        {"nombre":"llavero ONIGIRI","precio":15},
        {"nombre":"llavero SPIDERMAN","precio":20},
        {"nombre":"llavero ONIGIRI","precio":15},
        {"nombre":"llavero SPIDERMAN","precio":20},
        {"nombre":"llavero ONIGIRI","precio":15},
        {"nombre":"llavero SPIDERMAN","precio":20}
    ],

    "pulseras":[
        {"nombre":"pulsera mini PIZZA","precio":15},
        {"nombre":"pulsera mini GALLETA","precio":15}
    ],

    "collares":[
        {"nombre":"collar PIZZA","precio":20},
        {"nombre":"collar GALLETA","precio":20}
    ],

    "camisas":[
        {"nombre":"playera Boku no Hero Academia","precio":190},
        {"nombre":"playera Avatar - Katara","precio":200},
        {"nombre":"playera BATMAN","precio":250}
    ]

}


//INICIAR LLAVEROS C:

var divLlaveros=document.getElementById("divLlaveros");


for(let i=0; i<articulos.llaveros.length;i++){

    if(articulos.llaveros.length!=0){
        var caja=document.createElement("div");
        caja.className="artBox border col-lg-2 col-md-3  mx-3 p-2 rounded shadow" ;
        divLlaveros.appendChild(caja);

        var cajaSmall=document.createElement("div");
        cajaSmall.className="artBox border col-lg-2 col-md-3  mx-3 p-2 rounded shadow" ///HACER PARA DISPOSITIVOS PEUQEÑOS


        var img=document.createElement("img");
        img.src=`img/llavero2.jpg`
        img.className=`w-100 rounded`
        caja.appendChild(img);

        var titulo=document.createElement("h6");
        titulo.innerText=`${articulos.llaveros[i].nombre}`;
        titulo.className=` font-weight-bold mt-3 mx-auto`
        caja.appendChild(titulo)

        var infoArt=document.createElement("div");
        infoArt.className="col-12 float-left mx-auto row mt-3"
        caja.appendChild(infoArt);

        var precio=document.createElement("p");
        precio.innerText=`$${articulos.llaveros[i].precio}`;
        precio.className=`float-left`
        infoArt.appendChild(precio);

        var cantidad=document.createElement("input");
        cantidad.type="number";
        cantidad.className="cantidad float-right ";
        infoArt.appendChild(cantidad);

        var accionArt = document.createElement("div");
        accionArt.className=`col-12 float-left mx-auto row mt-3 mb-2`
        caja.appendChild(accionArt);

        var favButton=document.createElement("button");
        favButton.id=`favB${articulos.llaveros[i].nombre}`;
        favButton.className="btnFav float-left";
        accionArt.appendChild(favButton);

        var buyButton=document.createElement("button");
        buyButton.id=`buyB${articulos.llaveros[i].nombre}`
        buyButton.className="btnBuy float-right";
        accionArt.appendChild(buyButton);
    }
    else{
        console.log("No hay llaveros registrados");
    }
}

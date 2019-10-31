document.getElementById('menu').addEventListener("click", abrirMenu);

let clickMenu=0;
function abrirMenu(){

    if (clickMenu==0){
        document.getElementById('contenedorMenu').innerHTML=`<div id="mn" class="menu">
        <ul>
            <div class="cabezaMenu">
                <h2>MENU</h2>
            </div>
            
            <div id="imgM1"></div><li id="txtGym">Gimnasio</li>
            <div id="lineM"></div>
    
            <div id="imgM2"></div><li id="txtCross">Crossfit</li>
            <div id="lineM"></div>
    
            <div id="imgM3"></div><li id="txtNutri" >Nutrición</li>
            <div id="lineM"></div>
    
            <div id="imgM4"></div><li id="txtDef" >Defensa personal</li>
            <div id="lineM"></div>
    
            <div id="imgM5"></div><li id="txtAcerca" >Acerca de</li>
            <div id="lineM"></div>
    
            <div id="imgM6"></div><li id="txtPro" >¡Hazte pro!</li>
            <div id="lineM"></div>
        </ul>
    </div>`;

        clickMenu+=1;
    }

    else if(clickMenu==1){
        var padre=document.getElementById('contenedorMenu');
        var hijo=document.getElementById('mn');
    
        padre.removeChild(hijo);
        
        clickMenu-=1;
    }
    
}

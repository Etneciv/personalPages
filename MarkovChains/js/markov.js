
document.getElementById("btnAccept").addEventListener("click",showImg);



var diagram=0;
function showImg(){
    var numberEvents=document.getElementById("numberEv").value;
    var divDiagram=document.getElementById("divDiagram");

    if(numberEvents==2){
        if(diagram!=2){
            divDiagram.className="col-lg-4 col-sm-12 mt-4 mx-auto img-m2 "

            s1Send=document.createElement("input");
            s1Send.type="number";
            s1Send.className="s1-2";
            s1Send.id="s1-2";

            s1ToS2=document.createElement("input");
            s1ToS2.type="number";
            s1ToS2.className="s1ToS2";
            s1ToS2.id="s1ToS2";

            s2Send=document.createElement("input");
            s2Send.type="number";
            s2Send.className="s2-2";
            s2Send.id="s2-2";

            s2ToS1=document.createElement("input");
            s2ToS1.type="number";
            s2ToS1.className="s2ToS1";
            s2ToS1.id="s2ToS1";

            

            divDiagram.appendChild(s1Send);
            divDiagram.appendChild(s2Send);
            divDiagram.appendChild(s1ToS2);
            divDiagram.appendChild(s2ToS1);
            diagram=2;
        }
        else{
            alert("You have already created a diagram with 2 events!")
        }
    }
    else if(numberEvents==3){
        if(diagram!=3){
            divDiagram.className="col-lg-4 col-sm-12 mt-4 mx-auto img-m3"
            diagram=3;
        }
        else{
            alert("You have already created a diagram with 3 events!")
        }
    }
    else{
        console.log("an error in line 3 - Markov.js")
    }
    
}

var btnResult=document.getElementById("btnSolve").addEventListener("click", solveE);
function solveE(){

    var s1=document.getElementById('s1-2').value;
    var s2=document.getElementById('s2-2').value;
    var s1ToS2=document.getElementById("s1ToS2").value;
    var s2ToS1=document.getElementById("s2ToS1").value;

    var s1F=parseFloat(s1);
    var s2F=parseFloat(s2);
    var s1ToS2F=parseFloat(s1ToS2);
    var s2ToS1F=parseFloat(s2ToS1);

    var divResult=document.getElementById("divResult");
    
    var e1= s1ToS2F + s2ToS1F;
    var e2= s2ToS1F - s2ToS1F;
    var r= 0 + s2ToS1F;

    pA= (r / e1);
    pB= 1-pA;

    divResult.innerHTML=`${e1}p(A) = ${r} <br>
            p(A)=${pA} <br>
            p(B)=${pB}`
}
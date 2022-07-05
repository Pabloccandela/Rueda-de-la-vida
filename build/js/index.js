

//Valores del grafico
let valores= [1,1,1,1,1,1,1,1];
ActualizarGrafico(valores);


function ActualizarGrafico(valores){
    const c1 = document.querySelector("#c1");
    const c2 = document.querySelector("#c2");
    const c3 = document.querySelector("#c3");
    const c4 = document.querySelector("#c4");
    const c5 = document.querySelector("#c5");
    const c6 = document.querySelector("#c6");
    const c7 = document.querySelector("#c7");
    const c9 = document.querySelector("#c8");

    const listaCirculos = [c1, c2, c3, c4, c5, c6, c7, c8];

    for(let i = 0; i < 8 ; i++){
        
        lvAnterior = listaCirculos[i].classList.item(1);
        listaCirculos[i].classList.remove(lvAnterior);
        listaCirculos[i].classList.add("lv"+valores[i]);

    };
}

//inputs

const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const i3 = document.querySelector("#i3");
const i4 = document.querySelector("#i4");
const i5 = document.querySelector("#i5");
const i6 = document.querySelector("#i6");
const i7 = document.querySelector("#i7");
const i8 = document.querySelector("#i8");

let listaInputs = [i1,i2,i3,i4,i5,i6,i7,i8];

for(let i = 0; i < 8; i++) {
    listaInputs[i].addEventListener("change", function(e) {
        valores[i]=listaInputs[i].value;
        ActualizarGrafico(valores);
    });
}

//screenshot

/* const screenBtn = document.querySelector("#footer-btn");

screenBtn.addEventListener("click", ()=> {
    console.log("screenshot");
    html2canvas(header)
        .then(canvas=> {
            let enlace = document.createElement('a');
            enlace.download = "RuedaDeLaVida.png";
            // Convertir la imagen a Base64
            enlace.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            // Hacer click en él
            enlace.click();
            enlace.remove()
        });
}); */

//code function

const btnCrear = document.querySelector("#footer-btn-crear");
const btnInsertar = document.querySelector("#footer-btn-insertar");
const inputCode = document.querySelector("#footer-input-code");

btnCrear.addEventListener("click", () => {
    let code = ""
    listaInputs.forEach((input) => {
        code += input.value;
    })
    inputCode.value=code;
});

btnInsertar.addEventListener("click", () => {
    let code = inputCode.value;
    if(code.length < 8){
        inputCode.placeholder= "INVALIDO";
        inputCode.value="";
    }else{
        let caracter;
        let verif=false;

        for(let i = 0; i < 8; i++){
            caracter = parseInt(code[i]);
            if(isNaN(caracter)){
                verif=true;
            } else if(caracter > 5){
                verif=true;
            }
        }
        if (verif){
            inputCode.placeholder= "INVALIDO";
            inputCode.value="";

        }else{

            code = code.toString();
            for(let i=0; i<listaInputs.length; i++){
                listaInputs[i].value = code[i];
                valores [i] = parseInt(code[i]);
            }
    
            inputCode.value="";
            inputCode.placeholder="";
            ActualizarGrafico(valores);
        }
    }

});

let obtenerMsj = window.location.search;
let ObjetCodigo = new URLSearchParams(obtenerMsj);
let codigo = ObjetCodigo.get('codigo');
const listCodigo=[]
for (let i = 0; i < 8; i++){
    listCodigo.append(codigo[i]);
}
ActualizarGrafico(listCodigo);
inputCode.value = codigo;

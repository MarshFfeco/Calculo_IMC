/*====================FUNÇÃO PARA CALCULA O IMC====================*/
function DefinirImc() {
    const form = document.querySelector('#peso_Imc');
    
    /*==========NÃO DEIXA A PAGINA RECARREGAR==========*/
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        /*==========PEGA OS INPUT #PESO #ALTURA==========*/
        const inputPeso = event.target.querySelector("#peso");
        const inputAltura = event.target.querySelector("#altura");

        /*==========PEGA OS VALORES==========*/
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso && !altura) {
            /*==========CHAMA A FUNÇÃO PARA MOSTRAR OS RESULTADOS==========*/
            setResultado("PESO E ALTURA INVALIDO!", false);
            return;
        } else if(!altura) {
            /*==========CHAMA A FUNÇÃO PARA MOSTRAR OS RESULTADOS==========*/
            setResultado("ALTURA INVALIDO!", false);
            return;
        } else if(!peso) {
            /*==========CHAMA A FUNÇÃO PARA MOSTRAR OS RESULTADOS==========*/
            setResultado("PESO INVALIDO!", false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `SEU IMC É ${imc} (${nivelImc})`;

        setResultado(msg, true);

    });

    /*==========DEFINIR O NIVEL DO IMC==========*/
    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade garu 1', 'Obesidade grau 2', 'Obesidade grau3'];

        if(imc >= 39.9) {
            return nivel[5];
        }

        if(imc >= 34.9) {
            return nivel[4];
        }

        if(imc >= 29.9) {
            return nivel[3];
        }

        if(imc >= 24.9) {
            return nivel[2];
        }

        if(imc >= 18.5) {
            return nivel[1];
        }

        if(imc < 18.5) {
            return nivel[0];
        }
    }

    /*==========FUNÇÃO CALCULAR O IMC==========*/
    function getImc(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2);
    }

    /*==========FUNÇÃO PARA IMPRIMIR OS RESULTADOS==========*/
    function setResultado(msg, isValid) {
        const resultado = document.querySelector("#resultado");

        resultado.classList.add("container");
        resultado.innerHTML = "";
        
        var p = CreatP();

        if(isValid) {
            p.classList.add("resultado-content-true");
        } else {
            p.classList.add("resultado-content-false");
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
        
    }

    /*==========FUNÇÃO PARA CRIAR A TAG P==========*/
    function CreatP() {
        const p = document.createElement("p");
        return p;
    }
}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/*====================FUNÇÃO PARA MOSTRA A DATA====================*/ 
function mostraData() {
    const h1 = document.querySelector(".container h1")

    h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())
}


DefinirImc();
mostraData();

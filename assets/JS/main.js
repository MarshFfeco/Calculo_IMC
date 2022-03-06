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
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau3'];

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

/*====================FUNÇÃO PARA CRIAR TAGS COM LAÇO DE REPETIÇÃO====================*/
function criarTagFor() {
    const elementos = [
        {tag: 'p', text: 'Texto qualquer 1'},
        {tag: 'section', text: 'Texto qualquer 2'},
        {tag: 'footer', text: 'Texto qualquer 3'},
        {tag: 'main', text: 'Texto qualquer 4'},
    ];

    const body = document.querySelector("#body");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const pText = document.createTextNode("Esta div foi criada somente com JS");

    h2.appendChild(pText);
    div.appendChild(h2);
    h2.classList.add("textJS");

    for(let i = 0; i < elementos.length; i++) {
        let { tag, text } = elementos[i];
        let criarTag = document.createElement(tag);
        let  criarTexto = document.createTextNode(text);

        criarTag.appendChild(criarTexto);
        div.appendChild(criarTag);
    }

    body.appendChild(div);
    div.classList.add("container");


}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/*====================FUNÇÃO PARA CRIAR UM TIME====================*/ 
function relogio() {
    var hour = 0;
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    let cron;
    const contadores = document.querySelector(".contadores");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const secunds = document.querySelector("#secunds");
    const iniciar = document.querySelector(".iniciar");

    document.addEventListener('click', function(e) {
        console.log(e.target);
        const elemento = e.target;
        
        if(elemento.classList.contains("iniciar")) {
            iniciar.disabled = true; 
            cron = setInterval(() => { contador(); }, 1000);
            contadores.classList.remove("pausado");
        }
        
        if(elemento.classList.contains("pausar")) {
            iniciar.disabled = false;
            clearInterval(cron);
            contadores.classList.add("pausado");
        }
        if(elemento.classList.contains("zerar")) {
            iniciar.disabled = false;
            hour = 0;
            minute = 0;
            second = 0;
            millisecond = 0;

            hours.innerHTML = `00:`;
            minutes.innerHTML = `00:`;
            secunds.innerHTML = `00`;
            contadores.classList.remove("pausado");
        }
        
    });
    
    function contador() {
        /*
        if ((millisecond += 10) == 1000) {
            millisecond = 0;
            second++;
        }
        */
       second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    
            hours.innerHTML = hour > 10 ? `${hour}:` : `0${hour}:`; 
            minutes.innerHTML = minute > 10 ? `${minute}:` : `0${minute}:`;
            secunds.innerHTML = second > 10 ? `${second}` : `0${second}`;       
    }

}

/*==================== CHAMADA DE FUNÇÃO PRINCIPAL ====================*/
DefinirImc();
mostraData();
criarTagFor();
relogio();

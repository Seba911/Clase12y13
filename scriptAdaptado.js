function pushNewPlayerInTopFive() {
    if (jugadorNuevo[0].puntajeFinal >= arrayTopFive[0].puntajeFinal) {
        arrayTopFive.unshift(jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        newListOfLi_DOM();
        showDiv("divHeader");
        // showModalAlerts("Saliste 1ro! Sos el más simpsonmaniaco del Quizz!");
        Swal.fire({
            title: '🏆🥇Saliste 1°!🥇🏆 ',
            html:
                'Sos el más simpsonmaniaco del Quizz!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/primerLugar.gif',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[0].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[1].puntajeFinal) {
        arrayTopFive.splice(1, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        newListOfLi_DOM();
        showDiv("divHeader");
        // showModalAlerts("Saliste 2do! Por poco y salis primero!");
        Swal.fire({
            title: '🥈Saliste 2°!🥈',
            html:
                'Ese que salió primero sí que te bailo sabroso<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/segundoLugar.gif',
            imageAlt: 'segundoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        cargarLocalStorage(arrayTopFive)
    } else if (arrayTopFive[1].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[2].puntajeFinal) {
        arrayTopFive.splice(2, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        newListOfLi_DOM();
        showDiv("divHeader");
        // showModalAlerts("Saliste 3ro! Formas parte del ranking igual!");
        Swal.fire({
            title: '🥉Saliste 3°!🥉',
            html:
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/tercerLugar.gif',
            imageAlt: 'tercerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[2].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[3].puntajeFinal) {
        arrayTopFive.splice(3, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        newListOfLi_DOM();
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 4°!🎖  ',
            html:
                'No es verguenza caer ante el mejor<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/cuartoLugar.gif',
            imageAlt: 'cuartoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        cargarLocalStorage(arrayTopFive)

    } else if (arrayTopFive[3].puntajeFinal >= jugadorNuevo[0].puntajeFinal && jugadorNuevo[0].puntajeFinal >= arrayTopFive[4].puntajeFinal) {
        arrayTopFive.splice(4, 0, jugadorNuevo[0]);
        arrayTopFive.pop();
        mostrarTopFive(true);
        newListOfLi_DOM();
        showDiv("divHeader");
        Swal.fire({
            title: '🎖Saliste 5°!🎖  ',
            html:
                'Por lo menos no se puede caer más bajo..!<br />' +
                `Tu puntaje final fue <b>${puntaje} puntos</b>`,
            confirmButtonText:
                'YUHUU!',
            imageUrl: './images/quintoLugar.gif',
            imageAlt: 'quintoLugar',
            imageWidth: 300,
            imageHeight: 200,
        })
        cargarLocalStorage(arrayTopFive)

    } else (
        showDiv("divHeader"),
        Swal.fire({
            title: 'Oh no! ',
            html:
                `<b>${puntaje} puntos</b> no son suficientes para entrar en la cumbancha.<br />` +
                `<b>Gracias, vuelvan prontos!</b>`,
            confirmButtonText:
                'PERO..!',
            imageUrl: './images/graciasVuelvaPronto.jpg',
            imageAlt: 'primerLugar',
            imageWidth: 300,
            imageHeight: 200,
        })        
    )

}

function stackPuntaje(ultimoPuntaje, respuestaCorrecta, doble, tryingIntentos) {
    if (doble === false && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta)
    } else if (doble === true && tryingIntentos === 3) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2
    } else if (doble === true && tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (doble === true && tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) * 2 - 25
    } else if (tryingIntentos === 2) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 25
    } else if (tryingIntentos === 1) {
        ultimoPuntaje = (ultimoPuntaje + respuestaCorrecta) - 35
    } else if (tryingIntentos === 1 && ultimoPuntaje < 0) {
         ultimoPuntaje
    } else {
        ultimoPuntaje
    }

    puntaje = ultimoPuntaje // puntaje se guarda y cambia su valor
    jugadorNuevo[0].puntajeFinal = ultimoPuntaje
    duplicarPuntaje = false // duplicarPuntaje pasa a false en caso que una respuesta tenga el duplicarPuntaje en true
    intentos = tryingIntentos // intentos se guarda y cambia su valor a los intentos de fallo que tendria para las proximas preguntas
    console.log(tryingIntentos + " en StackPuntaje")
    console.log(jugadorNuevo[0])
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hideDiv(id_div) {
    document.getElementById(id_div).className = "d-none "
}

function showDiv(id_div) {
    document.getElementById(id_div).className = "d-flex justify-content-around text-center align-items-center bgGradientAlpha "
}

class newPlayer {
    constructor(nombreJugador, puntajeFinal) {
        this.nombreJugador = nombreJugador
        this.puntajeFinal = puntajeFinal
    }
}

const ArrPreguntasHomero = [
    {
        id: 1,
        nombre: "Homero",
        question: "¿Cuál es el apellido de Homero?",
        op_A_apellidoCorrecta: "SIMPSON",
        op_B_apellido: "THOMPSON",
        op_C_apellido: "FLIMPSON",
        op_D_apellido: "PATIÑO",
        duplicaAnswer: false,
    },
    {
        id: 2,
        nombre: "HOMERO",
        question: "¿Cuál es la edad de Homero?",
        op_A_edad: "37",
        op_B_edadCorrecta: "36",
        op_C_edad: "40",
        op_D_edad: "33",
        duplicaAnswer: true,
    },
    {
        id: 3,
        nombre: "HOMERO",
        question: "¿Cuál es la bebida favorita de Homero?",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "CERVEZA DUFF",
        op_C_bebida: "MANAOS",
        op_D_bebida: "CERVEZA BUZZ",
        duplicaAnswer: false,
    },
    {
        id: 4,
        nombre: "HOMERO",
        question: "¿Quíen es el mejor amigo Homero?",
        op_A_mejorAmigoCorrecta: "BARNEY",
        op_B_mejorAmigo: "MOE",
        op_C_mejorAmigo: "LENNY",
        op_D_mejorAmigo: "CARL",
        duplicaAnswer: true,
    },
]

const ArrPreguntasMilhouse = [
    {
        id: 1,
        nombre: "MILHOUSE",
        question: "¿Cuál es el apellido de Milhouse?",
        op_A_apellido: "MILHOUSE",
        op_B_apellidoCorrecta: "VAN HOUTEN",
        op_C_apellido: "VAN BUUREN",
        op_D_apellido: "BUBBIE",
        duplicaAnswer: false,
    },
    // Pregunta 2 Edad
    {
        id: 2,
        nombre: "MILHOUSE",
        question: "¿Cuál es la edad de Milhouse?",
        op_A_edad: "10",
        op_B_edad: "5",
        op_C_edad: "8",
        op_D_edadCorrecta: "11",
        duplicaAnswer: true,
    },
    // Pregunta 3 Bebida
    {
        id: 3,
        nombre: "MILHOUSE",
        question: "¿Cuál es la bebida favorita de Milhouse?",
        op_A_bebida: "BUZZ COLA",
        op_B_bebidaCorrecta: "LECHE DE RATA",
        op_C_bebida: "MALTEADAS KRUSTY",
        op_D_bebida: "MALTEADA CON EXTRA AZUCAR DE APU",
        duplicaAnswer: true,
    },
    // Pregunta 4 Amigos
    {
        id: 4,
        nombre: "MILHOUSE",
        question: "¿Quién el mejor amigo de Milhouse?",
        op_A_mejorAmigoCorrecta: "BART",
        op_B_mejorAmigo: "NELSON",
        op_C_mejorAmigo: "LISA",
        op_D_mejorAmigo: "RAFA",
        duplicaAnswer: false,
    },
]

const ArrPreguntasRandom = [
    {
        id: 1,
        nombre: "Random",
        question: "Comer una ________ es como llevar un buen matrimonio",
        op_A_frase: "sandía",
        op_B_fraseCorrecta: "naranja",
        op_C_frase: "hamburguesa",
        op_D_frase: "mandarina",
        duplicaAnswer: false,
    },
    {
        id: 2,
        nombre: "Random",
        question: "¡¿Robar?!? ¿¡Cómo pudiste?!? ¿¡No Aprendiste nada del que nos da los sarmones en la iglesia, ese...",
        op_A_frase: "Skinner?!",
        op_B_frase: "Ned Flanders?!",
        op_C_frase: "Reverendo Alegría?!",
        op_D_fraseCorrecta: "Capitán NoseQué?!",
        duplicaAnswer: false,
    },
    {
        id: 3,
        nombre: "Random",
        question: "Mi Homero no es comunista.. podrá ser mentiroso..",
        op_A_frase: "puerco, peronista, pero núnca una estrella de porno",
        op_B_frase: "puerco, idiota, comunista, pero núnca una estrella porno",
        op_C_fraseCorrecta: "puerco, idiota, comunista, pero núnca una estrella de porno",
        op_D_frase: "puerco, comunista, pero núnca una estrella de porno",
        duplicaAnswer: false,
    },
    {
        id: 4,
        nombre: "Random",
        question: "Nadie puede arruinar las vacaciones más que yo, y talvez...",
        op_A_frase: "Bart",
        op_B_fraseCorrecta: "El muchacho",
        op_C_frase: "Homero",
        op_D_frase: "El Barto",
        duplicaAnswer: true,
    }
]


const playerOneInTopFive = new newPlayer("Jorge", 590)
const playerTwoInTopFive = new newPlayer("Alejandra", 550)
const playerThreeInTopFive = new newPlayer("Mariana", 500)
const playerFourInTopFive = new newPlayer("Agustin", 400)
const playerFiveInTopFive = new newPlayer("Ramiro", 355)


function cargarLocalStorage(top5) {
    localStorage.setItem("jugadoresTop5", JSON.stringify(top5))
}

function mostrarTopFive(refreshTopFive) {
    if (refreshTopFive === true) {
        const oldLi = document.querySelector('#topFive');
        removeAllChildNodes(oldLi);
        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            // li.innerHTML = `<div class="row"><h4 class="bg-warning text-white">${positionTop}</h4>${top5.nombreJugador}: <span style="font-weight:700">${top5.puntajeFinal} puntos</span></div>`;
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} pts.`;
            li.style.display = "none"
            liTopFive.append(li)
        }
    } else {
        for (const top5 of arrayTopFive) {
            let li = document.createElement("li")
            // li.innerHTML = `<div class="row"><h4 class="bg-warning text-white">${positionTop}</h4>${top5.nombreJugador}: <span style="font-weight:700">${top5.puntajeFinal} puntos</span></div>`;
            li.innerHTML = `${top5.nombreJugador}: ${top5.puntajeFinal} pts.`;
            li.style.display = "none"
            liTopFive.append(li)

        }

    }

}

// Para poder agregarle n° posicion y los estilos q quiera al top 5 tuve que crear
// esta funcion para "pisar" los li ya creados en la funcion de mostrarEnTop5
function newListOfLi_DOM(){
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    li1.innerHTML = `<b class="bg-warning text-white px-2" style="font-size:14px; border-radius:50px">1°</b> ${liTopFive.children[0].innerText}🥇`
    li2.innerHTML = `<b class="text-white px-2" style="font-size:14px; border-radius:50px; background-color:gray">2°</b> ${liTopFive.children[1].innerText}🥈`
    li3.innerHTML = `<b class="text-white px-2" style="font-size:14px; border-radius:50px; background-color:orange">3°</b> ${liTopFive.children[2].innerText}🥉`
    li4.innerHTML = `<b class="px-2" style="font-size:14px; border-radius:50px; background-color:white">4°</b> ${liTopFive.children[3].innerText}`
    li5.innerHTML = `<b class="px-2" style="font-size:14px; border-radius:50px; background-color:white">5°</b> ${liTopFive.children[4].innerText}`

    liTopFive.append(li1)
    liTopFive.append(li2)
    liTopFive.append(li3)
    liTopFive.append(li4)
    liTopFive.append(li5)

}

function nuevoJugador() {
    let arrNuevoJugador

    let nuevoJugador = document.getElementById("nuevoJugador")
    if (nuevoJugador.value == null || nuevoJugador.value == "") {
        Swal.fire({
            title: 'Ingrese su nombre',
            text:'Sin nombre no nos iremos en la cumbancha',
            confirmButtonText:
                'DIJE...SU-BA!',
            imageUrl: './images/dijeSuba.webp',
            imageAlt: 'dijeSuba',
            imageWidth: 300,
            imageHeight: 200,
        })
        // showModalAlerts("Sin nombre no hay cumbancha")
    } else {
        hideDiv("divShowForm")
        hideDiv("divHeader")
        nuevoJugador = new newPlayer(nuevoJugador.value, puntaje)
        arrNuevoJugador = nuevoJugador
        jugadorNuevo.push(arrNuevoJugador)
    }


    console.log(jugadorNuevo)

    return arrNuevoJugador
}

let arrayTopFive = []
let listaEnLocalStorageTop5 = JSON.parse(localStorage.getItem("jugadoresTop5"))
let liTopFive = document.getElementById("topFive")

function localStorageOrNot() {
    if (listaEnLocalStorageTop5) {
        arrayTopFive = listaEnLocalStorageTop5
        mostrarTopFive(true)
        newListOfLi_DOM()
    } else {
        arrayTopFive.push(playerOneInTopFive, playerTwoInTopFive, playerThreeInTopFive, playerFourInTopFive, playerFiveInTopFive)
        mostrarTopFive(false)
        newListOfLi_DOM()
    }
}



let puntaje = 0
let intentos = 3
let respuestaCorrecta = 50
let duplicarPuntaje = false


const ingresarQuizz = document.querySelector("#ingresarQuizz")

const personaje1 = document.querySelector("#personaje1")
const personaje2 = document.querySelector("#personaje2")
// const personaje3 = document.querySelector("#personaje3")
const personaje4 = document.querySelector("#personaje4")

const jugadorNuevo = []
const arrPersonajeElegido = []

// Al iniciar el programa verifica si hay una lista de jugadores en el localStorage
// en caso que no haya, crea la lista por players que se crean por defecto 
localStorageOrNot()

// Es el form para ingresar nuevos jugadores a la base de datos local
ingresarQuizz.onclick = (e) => {
    e.preventDefault();
    let nombreJugador = document.getElementById("nombreJugador")
    let nameJugador = nuevoJugador()
    nameJugador == null || nameJugador == "" ? "" : showDiv("divElegirPersonaje");
    nombreJugador.innerHTML = `<h4>Hola ${nameJugador.nombreJugador}</h4>`

}

function elegirPersonaje(idPersonajeElegido) {
    let personajeElegido = document.getElementById(idPersonajeElegido)
    let personajeSelected = document.getElementById("personajeSelected")
    hideDiv("divElegirPersonaje")
    showDiv("divPersonajeSeleccionado")
    personajeSelected.innerHTML = `<h4>Elegiste a <span style="font-weight:700; color:rgba(255,209,0,1)">${personajeElegido.innerText}</span></h4>`
    arrPersonajeElegido.push(personajeElegido.innerText)
}

const personajeSelected = document.querySelector("#personajeSelected")
const cambiarPersonajeBoton = document.querySelector("#cambiarPersonaje")
const comenzarQuizz = document.querySelector("#comenzarQuizz")
const questionNumber_HTML = document.getElementById("questionNumber")
const question_HTML = document.getElementById("question")
const opcionA_HTML = document.getElementById("opcionA")
const opcionB_HTML = document.getElementById("opcionB")
const opcionC_HTML = document.getElementById("opcionC")
const opcionD_HTML = document.getElementById("opcionD")
const intentos_HTML = document.getElementById("intentos")
const puntaje_HTML = document.getElementById("puntaje")

personaje1.onclick = () => {
    elegirPersonaje("personaje1")
}

personaje2.onclick = () => {
    elegirPersonaje("personaje2")
}
// personaje3.onclick = () => {
//     elegirPersonaje("personaje3")
// }
personaje4.onclick = () => {
    elegirPersonaje("personaje4")
}

cambiarPersonajeBoton.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divElegirPersonaje")
    arrPersonajeElegido.pop()
}


function createButtonContainer(buttonType, buttonColor, option) {
    buttonType.className = `btn ${buttonColor} appearEffect`
    buttonType.style.padding = "15px 50px 15px 50px"
    buttonType.style.fontSize = "1.4em"
    buttonType.value = `${option}`
    buttonType.innerText = `${option}`
}

function removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber) {
    createButtonA.remove()
    createButtonB.remove()
    createButtonC.remove()
    createButtonD.remove()
    createQuestion.remove()
    questionNumber.remove()
}

// En esta funcion se pasan todos los parametros para validar las respuestas y tambien se crean los botones correspondientes a los que
// se les pasa por medio de los parametros varios de sus valores
function quizzForm(questionID, question, answer, opcionA, opcionB, opcionC, opcionD, duplica, arrayLength) {

    intentos_HTML.textContent = `Intentos: ${intentos}`
    puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`

    let createQuestion = document.createElement("h3")
    createQuestion.className = "appearEffect text-white"
    createQuestion.textContent = `${question}`

    let questionNumber = document.createElement("h6")
    questionNumber.textContent = `PREGUNTA ${questionID} DE ${arrayLength}`
    questionNumber.className = "text-white my-4"

    let createButtonA = document.createElement("button")
    createButtonContainer(createButtonA, "btn-primary", opcionA)

    let createButtonB = document.createElement("button")
    createButtonContainer(createButtonB, "btn-success", opcionB)

    let createButtonC = document.createElement("button")
    createButtonContainer(createButtonC, "btn-danger", opcionC)

    let createButtonD = document.createElement("button")
    createButtonContainer(createButtonD, "btn-warning", opcionD)

    let valueOpcionA = opcionA_HTML.appendChild(createButtonA)
    let valueOpcionB = opcionB_HTML.appendChild(createButtonB)
    let valueOpcionC = opcionC_HTML.appendChild(createButtonC)
    let valueOpcionD = opcionD_HTML.appendChild(createButtonD)
    question_HTML.appendChild(createQuestion)
    questionNumber_HTML.appendChild(questionNumber)


    valueOpcionA.onclick = () => {
        correctOrNot(answer, valueOpcionA.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionB.onclick = () => {
        correctOrNot(answer, valueOpcionB.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionC.onclick = () => {
        correctOrNot(answer, valueOpcionC.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }
    valueOpcionD.onclick = () => {
        correctOrNot(answer, valueOpcionD.value, duplica)
        intentos_HTML.textContent = `Intentos: ${intentos}`
        puntaje_HTML.textContent = `Puntaje: ${jugadorNuevo[0].puntajeFinal}`
        removeButtonsAndQuestion(createButtonA, createButtonB, createButtonC, createButtonD, createQuestion, questionNumber)
        goNextQuestion(questionID + 1)
    }

    console.log(valueOpcionA.value)

}

// Ésta funcion hace que pase de una pregunta a otra
function goNextQuestion(id) {
    if (arrPersonajeElegido[0] === "Homero") {
        if (id === 2) {
            // new swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[1].id,
                ArrPreguntasHomero[1].question,
                ArrPreguntasHomero[1].op_B_edadCorrecta,
                ArrPreguntasHomero[1].op_A_edad,
                ArrPreguntasHomero[1].op_B_edadCorrecta,
                ArrPreguntasHomero[1].op_C_edad,
                ArrPreguntasHomero[1].op_D_edad,
                ArrPreguntasHomero[1].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else if (id === 3) {
            // new swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[2].id,
                ArrPreguntasHomero[2].question,
                ArrPreguntasHomero[2].op_B_bebidaCorrecta,
                ArrPreguntasHomero[2].op_A_bebida,
                ArrPreguntasHomero[2].op_B_bebidaCorrecta,
                ArrPreguntasHomero[2].op_C_bebida,
                ArrPreguntasHomero[2].op_D_bebida,
                ArrPreguntasHomero[2].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else if (id === 4) {
            // new swal(`Pregunta ${id}`)
            quizzForm(
                ArrPreguntasHomero[3].id,
                ArrPreguntasHomero[3].question,
                ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasHomero[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasHomero[3].op_B_mejorAmigo,
                ArrPreguntasHomero[3].op_C_mejorAmigo,
                ArrPreguntasHomero[3].op_D_mejorAmigo,
                ArrPreguntasHomero[3].duplicaAnswer,
                ArrPreguntasHomero.length)
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        if (id === 2) {
            quizzForm(
                ArrPreguntasMilhouse[1].id,
                ArrPreguntasMilhouse[1].question,
                ArrPreguntasMilhouse[1].op_D_edadCorrecta,
                ArrPreguntasMilhouse[1].op_A_edad,
                ArrPreguntasMilhouse[1].op_B_edad,
                ArrPreguntasMilhouse[1].op_C_edad,
                ArrPreguntasMilhouse[1].op_D_edadCorrecta,
                ArrPreguntasMilhouse[1].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else if (id === 3) {
            quizzForm(
                ArrPreguntasMilhouse[2].id,
                ArrPreguntasMilhouse[2].question,
                ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                ArrPreguntasMilhouse[2].op_A_bebida,
                ArrPreguntasMilhouse[2].op_B_bebidaCorrecta,
                ArrPreguntasMilhouse[2].op_C_bebida,
                ArrPreguntasMilhouse[2].op_D_bebida,
                ArrPreguntasMilhouse[2].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else if (id === 4) {
            quizzForm(
                ArrPreguntasMilhouse[3].id,
                ArrPreguntasMilhouse[3].question,
                ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasMilhouse[3].op_A_mejorAmigoCorrecta,
                ArrPreguntasMilhouse[3].op_B_mejorAmigo,
                ArrPreguntasMilhouse[3].op_C_mejorAmigo,
                ArrPreguntasMilhouse[3].op_D_mejorAmigo,
                ArrPreguntasMilhouse[3].duplicaAnswer,
                ArrPreguntasMilhouse.length)
        } else {
            pushNewPlayerInTopFive()
        }

    } else if (arrPersonajeElegido[0] === "Random") {
        if (id === 2) {
            quizzForm(
                ArrPreguntasRandom[1].id,
                ArrPreguntasRandom[1].question,
                ArrPreguntasRandom[1].op_D_fraseCorrecta,
                ArrPreguntasRandom[1].op_A_frase,
                ArrPreguntasRandom[1].op_B_frase,
                ArrPreguntasRandom[1].op_C_frase,
                ArrPreguntasRandom[1].op_D_fraseCorrecta,
                ArrPreguntasRandom[1].duplicaAnswer,
                ArrPreguntasRandom.length
            )
        } else if (id === 3) {
            quizzForm(
                ArrPreguntasRandom[2].id,
                ArrPreguntasRandom[2].question,
                ArrPreguntasRandom[2].op_C_fraseCorrecta,
                ArrPreguntasRandom[2].op_A_frase,
                ArrPreguntasRandom[2].op_B_frase,
                ArrPreguntasRandom[2].op_C_fraseCorrecta,
                ArrPreguntasRandom[2].op_D_frase,
                ArrPreguntasRandom[2].duplicaAnswer,
                ArrPreguntasRandom.length
            )
        } else if (id === 4) {
            quizzForm(
                ArrPreguntasRandom[3].id,
                ArrPreguntasRandom[3].question,
                ArrPreguntasRandom[3].op_B_fraseCorrecta,
                ArrPreguntasRandom[3].op_A_frase,
                ArrPreguntasRandom[3].op_B_fraseCorrecta,
                ArrPreguntasRandom[3].op_C_frase,
                ArrPreguntasRandom[3].op_D_frase,
                ArrPreguntasRandom[3].duplicaAnswer,
                ArrPreguntasRandom.length
            )
        } else {
            pushNewPlayerInTopFive()
        }
    }
}

comenzarQuizz.onclick = () => {
    hideDiv("divPersonajeSeleccionado")
    showDiv("divPreguntas")
    showDiv("divIntentosPuntaje")
    showHearts(intentosHearts, heart1, heart2, heart3)
    console.log(arrPersonajeElegido)
    if (arrPersonajeElegido[0] === "Homero") {
        // swal(`Pregunta ${ArrPreguntasHomero[0].id}`)
        quizzForm(
            ArrPreguntasHomero[0].id,
            ArrPreguntasHomero[0].question,
            ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_A_apellidoCorrecta,
            ArrPreguntasHomero[0].op_B_apellido,
            ArrPreguntasHomero[0].op_C_apellido,
            ArrPreguntasHomero[0].op_D_apellido,
            ArrPreguntasHomero[0].duplicaAnswer,
            ArrPreguntasHomero.length
        )

    } else if (arrPersonajeElegido[0] === "Milhouse") {
        // swal(`Pregunta ${ArrPreguntasMilhouse[0].id}`)
        quizzForm(
            ArrPreguntasMilhouse[0].id,
            ArrPreguntasMilhouse[0].question,
            ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
            ArrPreguntasMilhouse[0].op_A_apellido,
            ArrPreguntasMilhouse[0].op_B_apellidoCorrecta,
            ArrPreguntasMilhouse[0].op_C_apellido,
            ArrPreguntasMilhouse[0].op_D_apellido,
            ArrPreguntasMilhouse[0].duplicaAnswer,
            ArrPreguntasMilhouse.length
        )

    } else if (arrPersonajeElegido[0] === "Random") {
        quizzForm(
            ArrPreguntasRandom[0].id,
            ArrPreguntasRandom[0].question,
            ArrPreguntasRandom[0].op_B_fraseCorrecta,
            ArrPreguntasRandom[0].op_A_frase,
            ArrPreguntasRandom[0].op_B_fraseCorrecta,
            ArrPreguntasRandom[0].op_C_frase,
            ArrPreguntasRandom[0].op_D_frase,
            ArrPreguntasRandom[0].duplicaAnswer,
            ArrPreguntasRandom.length
        )
    }
}

let heart1 = document.getElementById("heart1")
let heart2 = document.getElementById("heart2")
let heart3 = document.getElementById("heart3")
let intentosHearts = document.getElementById("intentosHearts")

function showHearts(intentosHearts, heart1, heart2, heart3) {
    heart1.style.display = "block"
    heart2.style.display = "block"
    heart3.style.display = "block"
    intentosHearts.style.display = "block"
}

function changeHeartColor(heart) {
    heart.style.color = "#eaeaea"
    heart.style.transition = ".5s ease"
}

function correctOrNot(answer, value, duplica) {
    console.log(answer)
    console.log(value)

    if (answer !== value) {
        intentos--
        if (intentos == 2) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
              

            changeHeartColor(heart3)

        } else if (intentos == 1) {
            Toastify({
                text: "❌DOH!❌",
                duration: 500,
                position:"center",
                gravity: "bottom",
                positionLeft: false,
              }).showToast();
            changeHeartColor(heart2)

        }
        console.log(intentos)
        if (intentos === 0) {
            Swal.fire({
                title: 'Has perdido!',
                html:
                    'Eres expulsado de la sociedad de simpsonmaniacos para siempre! <br />' +
                    'Y como humillacion final, tendrás que irte de quizz jalando tras de ti, la piedra de la verguenza! <br />' +
                    `Tu puntaje final fue <b>${puntaje} puntos</b> `,
                text: "",
                imageUrl: './images/gifPiedraVerguenza.gif',
                imageAlt: 'Custom image',
            })
            hideDiv("divPreguntas")
            hideDiv("divIntentosPuntaje")
            changeHeartColor(heart1)
        }

    } else {
        console.log("Correcto!")
        Toastify({
            text: "✔️YUHUU!✔️",
            duration: 500,
            position:"center",
            gravity: "bottom",
            positionLeft: false,
          }).showToast();
        duplicarPuntaje = duplica
        stackPuntaje(puntaje, respuestaCorrecta, duplicarPuntaje, intentos)
        jugadorNuevo[0].puntajeFinal = puntaje
        console.log(jugadorNuevo[0])
    }

    return intentos
}


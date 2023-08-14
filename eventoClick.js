const  h1 = document.getElementById("tituloPrincipal")
const card = document.querySelector('#cardColor')
const boton = document.getElementById("boton-1")
const boton2 = document.querySelector(".btn-success")
const boton3 = document.querySelector("#boton-3")
const inputColor = document.querySelector('#inputColor')
const visualizar = document.querySelector('#btn-visualizar')
const cardColor = document.querySelector('#cardColor')


boton.addEventListener('click', () => {
    h1.style.backgroundColor = "yellow"
}),

boton2.addEventListener('click', () => {
    h1.textContent = "Texto cambiado con JS"
})

boton3.addEventListener('click', () => {
    h1.style.color = "purple"
})

visualizar.addEventListener('click', () => {
    cardColor.style.backgroundColor = inputColor.value
    cardColor.style.color = "white"
})


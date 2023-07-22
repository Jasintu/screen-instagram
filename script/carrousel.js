"use strict"

//---------------------------------------------

$(document).ready(function () {
    setInterval(() => {
        $(".carrossel").replaceWith(`<img src="imagens/screenshot2.png" alt="" class="carrossel">`)
    }, 5000)
    setInterval(() => {
        $(".carrossel").replaceWith(`<img src="imagens/screenshot3.png" alt="" class="carrossel">`)
    }, 10000)
    setInterval(() => {
        $(".carrossel").replaceWith(`<img src="imagens/screenshot4.png" alt="" class="carrossel">`)
    }, 15000)
})
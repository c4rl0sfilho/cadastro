'use strict'

//3 var   -> Mutavel   ->Global
//2 let   -> Mutavel   ->Bloco
//1 const -> Imutavel  ->Bloco

function trocarTitulo () {
    const titulo = document.getElementById('titulo')
    const tituliDigitado = prompt('Digite um titulo')
    // titulo.textContent = tituliDigitado
    if( tituliDigitado == " "){
        tituli.textContent = 'SENAI'
    }else{
        titulo.textContent = tituliDigitado
        titulo.classList.add('verde')
    }
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)


function cadastrar () {
    const nome = document.getElementById('nome')
    const cidade = document.getElementById('cidade')
    const media = document.getElementById('media')

    const nomeDigitado = prompt('Digite seu nome')

    const cidadeDigitada = prompt('Qual a sua cidade')

    const mediaDigitada = prompt('Digite a sua media')
    
}

const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', nomeDigitado)
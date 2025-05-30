////////////* script do titulo //////////*
let titulo = document.querySelector("#tituloprincipal");

titulo.addEventListener("mouseover", mudaVerde);
titulo.addEventListener("mouseout", mudaVermelho);

function mudaVerde(){
    titulo.style.background="green";}
function mudaVermelho(){
    titulo.style.background="red";}

 /////////////* script do botão //////////*

function boasVindas() {
      const mensagem = "Fico feliz por ter você aqui no meu primeiro site. Aproveite o conteúdo e explore à vontade!!!"
      document.getElementById("mensagem").innerText = mensagem;
    }

const mensaje = document.getElementById('mensaje');
const mensajeEncriptado = document.getElementById('mensajeEncriptado');
const error = document.getElementById('error');

function encriptar(){

let aux=""


if (validarTexto()) {
    for (let i = 0; i < mensaje.value.length; i++) {
        const element = mensaje.value[i];
        switch(element) {
            case "a": 
            aux=  aux+"ai"
              break;
            case "e":
              aux=  aux+"enter"
              break;
              case "i": 
              aux=  aux+"imes"
              
                break;
                case "o": 
            aux=  aux+"ober"
            
              break;
              case "u": 
            aux=  aux+"ufat"
           
              break;
            default: 
            aux= aux +element 
          }
    }}else{
     
      error.innerHTML= `<b id="errorMsg" class=error>No se permiten paysculas, acentos o caracteres especiales</b>`
      setTimeout(function(){ document.getElementById("errorMsg").outerHTML="" 
      }, 4000);
    }
    mensajeEncriptado.value=aux
}
function desencriptar(){
  let aux=""
  if (validarTexto()) {
    for (let i = 0; i < mensaje.value.length; i++) {
      const element = mensaje.value[i];
      switch(element) {
          case "a": 
          mensaje.value=mensaje.value.replaceAll("ai", "a")
            break;
          case "e":
            mensaje.value=mensaje.value.replaceAll("enter", "e")
            break;
            case "i": 
            mensaje.value=mensaje.value.replaceAll("imes", "i")
           
              break;
              case "o": 
              mensaje.value=mensaje.value.replaceAll("ober", "o")
            break;
            case "u": 
            mensaje.value=mensaje.value.replaceAll("ufat", "u")
            break;
          default: 
           
        }
      
  }
  }
      mensajeEncriptado.value=mensaje.value
     
  }

  function copiar(){
    var content = document.getElementById('mensajeEncriptado');
    content.select();
    document.execCommand('copy');
  }
  
  function validarTexto(){
    var reg =/[A-ZÑÁáÉéÍíÓóÚúÜü!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/; 
    for (let i = 0; i < mensaje.value.length; i++) {
      if (mensaje.value.match(reg)) {
        return false
      }
    }
    return true
  }
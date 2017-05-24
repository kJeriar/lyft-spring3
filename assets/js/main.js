//alert("Proyecto final");
var digitos = /^[0-9]$/;
var letras = /^[A-Za-z]*$/;

var number = function() {
  var numeroTelefono=document.getElementById('id_delInputText');
  var expresionRegular1=/^([0-9]+){9}$/;//<--- con esto vamos a validar el numero
  var expresionRegular2=/\s/;//<--- con esto vamos a validar que no tenga espacios en blanco
 
  if(numeroTelefono.value=='')
     alert("campo es obligatorio");
  else if(expresionRegular2.test(numeroTelefono.value))
    alert("error existen espacios en blanco");
  else if(!expresionRegular1.test(numeroTelefono.value))
    alert("Numero de telefono incorrecto");
}


var validarJuego= function(){
    //valido los datos para poder jugar(que sea numero, q no sea vacio )
    var jugador1=document.getElementById("jugador1").value;
    if (jugador1==null||jugador1=="") {
        alert  ("el numero ingresado no es valido");     
    }else if(jugador1.length==1){
        console.log(jugador1 +"ingreso de datos correctos");
    }

    var auto02==document.getElementById("jugador2").value;
if (jugador2==null||jugador2=="") {
        alert  ("el numero ingresado no es valido");     
    }else if(jugador2.length==1){
        console.log(jugador2 +"ingreso de datos correctos");
    }

}

var tablero=function(){
[
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0]
        ]

}



   
addEventListener('load', inicio, false);
var publiclondres = '';
var publicatenas = '';
var publicparis = '';
var publicberlin = '';
var publicroma = '';
var publicviena = '';

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  //por defecto con un 1 guardamos un día: 24 * 60 * 60 * 1000
  // cambiado a 1 hora:
  d.setTime(d.getTime() + (exdays * 1 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function inicio() {
  // --------- --------- --------- --------- 
  // JAVASCRIPT EVENTOS LOAD
  // --------- --------- --------- --------- 

  var mlondres = getCookie("maletaLondres");
  var matenas = getCookie("maletaAtenas");
  var mparis = getCookie("maletaParis");
  var mberlin = getCookie("maletaBerlin");
  var mroma = getCookie("maletaRoma");
  var mviena = getCookie("maletaViena");

  if (mlondres != "") { publiclondres = mlondres; desbloquearAtenas(); }
  if (matenas != "") { publicatenas = matenas; desbloquearParis(); }
  if (mparis != "") { publicparis = mparis; desbloquearBerlin(); }
  if (mberlin != "") { publicberlin = mberlin; desbloquearRoma(); }
  if (mroma != "") { publicroma = mroma; desbloquearViena(); }
  if (mviena != "") { publicviena = mviena; ultimapista(); }


}

// Get the modal
var modal_ayuda = document.getElementById("ModalAyuda");


// Get the button that opens the modal
var btn = document.getElementById("abrirModayuda");

// Get the <span> element that closes the modal
var cerrarAyuda = document.getElementById("closeAyuda");

// When the user clicks the button, open the modal 
btn.onclick = function () { 
  parrafoAyuda.innerHTML = "Selecciona la última maleta activa e introduce el código de desbloqueo.";
  modal_ayuda.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
cerrarAyuda.onclick = function () {
  modal_ayuda.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_ayuda) {
    modal_ayuda.style.display = "none";
  }
}

//------------- londres--------------------------
 
btnLondres.onclick = function () {
  abrirModalLondres();
}

function abrirModalLondres(){
  if (publiclondres != "") {
    parrafoAyuda.innerHTML = "Hallaréis una carta importante en el legado de la tía.";
    modal_ayuda.style.display = "block";
  } else {
    ModalLondres.style.display = "block";
  }
}
buttonLondres.onclick = function () {
  var codigo = document.getElementById("txtlondres").value;
  console.log('cmdbuttonLondres', codigo);
  if (codigo == '0539') {
    setCookie("maletaLondres", codigo, 1);
    publiclondres = codigo;
    desbloquearAtenas();
    ModalLondres.style.display = "none";
    abrirModalLondres();
  }

}
closeLondres.onclick = function () {
  ModalLondres.style.display = "none";
}
//------------- atenas--------------------------
//var cmdbuttonatenas = document.getElementById("buttonatenas");
//var cmdcerraratenas = document.getElementById("closeatenas");


function desbloquearAtenas() {
  document.getElementById('atenas-1').style.color = 'white';
  document.getElementById('atenas-2').style.color = 'white';
}

btnatenas.onclick = function () {
  abrirModalAtenas();
}

function abrirModalAtenas(){
  if (publicatenas != "") {
    parrafoAyuda.innerHTML = "Buscar el carro viejo de la abuela de Irene, obtendrás una nueva pista";
    modal_ayuda.style.display = "block";
  } else {
    if (publiclondres != "") {
      modalatenas.style.display = "block";
    }
  }

}
buttonatenas.onclick = function () {
  var codigo = document.getElementById("txtatenas").value;
  // console.log('buttonatenas', codigo);
  if (codigo == '392') {
    setCookie("maletaAtenas", codigo, 1);
    publicatenas = codigo;
    desbloquearParis();
    modalatenas.style.display = "none";
    abrirModalAtenas();
  }

}
closeatenas.onclick = function () {
  modalatenas.style.display = "none";
}
//------------- paris--------------------------

function desbloquearParis() {
  document.getElementById('paris-1').style.color = 'white';
  document.getElementById('paris-2').style.color = 'white';
}

btnparis.onclick = function () {
  abrirModalParis();
}

function abrirModalParis(){
  if (publicparis != "") {
    parrafoAyuda.innerHTML = "En el Salón del Trono, localizar la caja de la curandera (bruja de la mopa), y hallaréis la siguiente pista.";
    modal_ayuda.style.display = "block";
  } else {
    if (publicatenas != "") {
      modalparis.style.display = "block";
    }
  }

}
buttonparis.onclick = function () {
  var codigo = document.getElementById("txtparis").value;
  console.log('buttonparis', codigo);
  if (codigo == '955') {
    setCookie("maletaParis", codigo, 1);
    publicparis = codigo;
    desbloquearBerlin();
    modalparis.style.display = "none";
    abrirModalParis();
  }

}
closeparis.onclick = function () {
  modalparis.style.display = "none";
}
//------------- berlin--------------------------


function desbloquearBerlin() {
  document.getElementById('berlin-1').style.color = 'white';
  document.getElementById('berlin-2').style.color = 'white';
}

btnberlin.onclick = function () {
  abrirModalBerlin();
}

function abrirModalBerlin(){
  if (publicberlin != "") {
    parrafoAyuda.innerHTML = "Encontrad el cofre de los objetos robados de la princesa Bella, encontraréis una nueva pista.";
    modal_ayuda.style.display = "block";
  } else {
    if (publicparis != "") {
      modalberlin.style.display = "block";
    }
  }

}
buttonberlin.onclick = function () {
  var codigo = document.getElementById("txtberlin").value;
  // console.log('buttonberlin', codigo);
  if (codigo == '195') {
    setCookie("maletaBerlin", codigo, 1);
    publicberlin = codigo;
    desbloquearRoma();
    modalberlin.style.display = "none";
    abrirModalBerlin();
  }

}
closeberlin.onclick = function () {
  modalberlin.style.display = "none";
}
//------------- roma--------------------------

function desbloquearRoma() {
  document.getElementById('roma-1').style.color = 'white';
  document.getElementById('roma-2').style.color = 'white';
}

btnroma.onclick = function () {
  abrirModalRoma();
}

function abrirModalRoma(){
  if (publicroma != "") {
    parrafoAyuda.innerHTML = "Entrad, si os atreveis a la cueva de las orcas, bajo el lecho de la Orca pequeña. Ya queda poco, moved el culo.";
    modal_ayuda.style.display = "block";
  } else {
    if (publicberlin != "") {
      modalroma.style.display = "block";
    }
  }

}
buttonroma.onclick = function () {
  var codigo = document.getElementById("txtroma").value;
  console.log('buttonroma', codigo);
  if (codigo == '644') {
    setCookie("maletaRoma", codigo, 1);
    publicroma = codigo;
    desbloquearViena();
    modalroma.style.display = "none";
    abrirModalRoma();
  }

}
closeroma.onclick = function () {
  modalroma.style.display = "none";
}
//------------- viena--------------------------

function desbloquearViena() {
  document.getElementById('viena-1').style.color = 'white';
  document.getElementById('viena-2').style.color = 'white';
}

btnviena.onclick = function () {
  abrirModalViena();
}

function abrirModalViena(){
  if (publicviena != "") {
    parrafoAyuda.innerHTML = "Subid al Torreón del Ogro de cuatro ojos, cajón de la mesa del color del mar, al abrir cuidado con las arañas, jijiji.";
    modal_ayuda.style.display = "block";
  } else {
    if (publicroma != "") {
      modalviena.style.display = "block";
    }
  }

}
buttonviena.onclick = function () {
  var codigo = document.getElementById("txtviena").value;
  console.log('buttonviena', codigo);
  if (codigo == '238') {
    setCookie("maletaViena", codigo, 1);
    publicviena = codigo;
    ultimapista();
    modalviena.style.display = "none";
    abrirModalViena();
  }

}
closeviena.onclick = function () {
  modalviena.style.display = "none";
}
//------------- ultima pista--------------------------

function ultimapista() {
  document.getElementById('paris-1').style.color = 'white';
  document.getElementById('paris-2').style.color = 'white';
} 


//funcion que valida la FORM
function validateForm() {

    // obtenemos los datos provenientes de la FORM
    var email = document.forms["myform"]["email"].value;
    var color = document.forms["myform"]["color"].value;
    var number = document.forms["myform"]["numero"].value;
  
     
    var message = document.getElementById('message');
    var success = document.getElementById('success');

    //limpia los divs
    message.innerHTML = ""; 
    success.innerHTML = ""; 

    success.classList.add("hide");
    
    // verificamos con REGEX el email
   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 
    var email_v= re.test(email);

      if (!email_v){
        document.getElementById('message').innerHTML += '<li>favor ingresar un email valido</li>';
        message.classList.remove("hide");
      }
      if (!number){
        document.getElementById('message').innerHTML += '<li>favor selecciona un numero</li>';
         message.classList.remove("hide");
      }
      if (!color){
        document.getElementById('message').innerHTML += '<li>favor selecciona un color</li>';
         message.classList.remove("hide");
      }

      if (email_v && number && color ){
        document.getElementById('success').innerHTML += '<li>datos enviados exitosamente!</li>';
         success.classList.remove("hide");
         message.classList.add("hide");
         sendPost("/user", email, color, number, responseDisplay);
         document.getElementById("submit-form").reset(); // reseteamos la FORM
        
      }

 
    return false;
}

// funcion que realiza POST request
function sendPost(url, email, color, number, callback){
  var xmlhttp = new XMLHttpRequest();
  var params = "email="+email+"&colores="+color+"&number="+number;

  xmlhttp.onload = function(){ // when the request is loaded
       callback(xmlhttp.responseText);// we're calling our method
    };
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(params);
  console.log(xmlhttp.responseText);
}

// funcion que maneja la respuesta en JSON
function responseDisplay(result){
   response = JSON.parse(result);
   document.getElementById('success').innerHTML += '<li>  respuesta del servidor: '+response.status+ '</li>';
}
 

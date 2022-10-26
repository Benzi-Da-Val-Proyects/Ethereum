function valida_envia(){
    //valido el nombre
    if (document.fvalida.email.value.length==0){
           alert("Tiene que escribir su nombre completo")
           document.fvalida.email.focus()
           return 0;
    }
    if (document.fvalida.celular.value.length==0){
       alert("Celular no válido")
       document.fvalida.celular.focus()
       return 0;
}
     if (document.fvalida.mensaje.value.length==0){
            alert("Escriba su mensaje")
            document.fvalida.mensaje.focus()
            return 0;
     }
         //el formulario se envia
         alert("Su mensaje ha sido enviado, muchas gracias.");
         document.fvalida.submit();
 }

 function myFunction() {
       const inpObj = document.getElementById("id1");
       if (!inpObj.checkValidity()) {
         document.getElementById("demo").innerHTML = "Lo sentimos, ese código no es válido";
       } else {
         document.getElementById("demo").innerHTML = "FELICITACIONES TIENES UN 15% DE DESCUENTO";
       } 
     }
function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const contrasena = document.getElementById("mensaje").value;
    
    if(!nombre) { alert("Ingrese campo nombre"); return false;}
    if(telefono == "") { alert("Ingrese campo teléfono"); return false;}
    if(email.length == 0) { alert("Ingrese campo email");return false;}
    if(direccion.length == 0) { alert("Ingrese campo direccion"); return false;}
    if(mensaje =="") { alert("Ingrese campo mensaje");return false;}   
        
    else{
        alert("Mensaje enviado");
        return true;
       
        
    }
    
    return true;
}

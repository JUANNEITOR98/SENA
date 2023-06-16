 
 function ValidationEvent() {
    // Storing Field Values In Variables
    var user = document.getElementById("usuario").value;
    var date = document.getElementById("date").value;
	var documento =document.getElementById("ndocumento").value;
        
    if (user != '') {
          
        if ( date != '' ) {   
			
			if (documento !=''){
			alert("Usuario Logeado.....!");
	window.location.assign("http://127.0.0.1:5500/Pagina%20completa/tablas.html")
			}
			else{
				alert ("Ingrese un Documento valido.....!");
			
			}
        } else{
			alert ("Ingrese una fecha valida.....!");
			
		      }
	}
	else {
        alert("Coloque Un Nombre de Usuario.....!");
         }

        event.preventDefault();
    
    }
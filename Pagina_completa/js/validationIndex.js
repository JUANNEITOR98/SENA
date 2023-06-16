
function ValidationEvent() {
    // Storing Field Values In Variables
    var user = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
        
    if (user == 'admin') {
          
        if ( pass == '12345' ) {
            alert("Usuario Logeado.....!");
            window.location.assign("..\tablas.html")

        }

        else {
            if (pass == '') {
                alert("Campo PassWord VACIO.....!");
                
                }
                else{
              alert("PassWord Invalido.....!");
              }
        }
    } 
    else {
        if (user == '') {
        alert("Campo Usuario VACIO.....!");
        }
        else{
            alert("Usuario Invalido.....!");
        }
    } 

        
    
    }
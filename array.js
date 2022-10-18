//Declaracion de variables
let estudiante;
let password;


//Declaracion de array
const estudiantes = [];


function validarString(){
    if(!estudiante.match("[A-Za-z]{3,10}")){
        do{
            alert("Ingrese un nombre y apellidos validos");
            estudiante = prompt("Ingrese nombre y apellido, solo caracteres alfabeticos:");
        }while(!estudiante.match("[A-Za-z]{3,10}"));
        return true;
    } else {
        return true;
    }
}

function validarestudiante(estudiante){
    if (estudiantes.some(estudianteA => estudianteA.estudianteB === estudiante)){
        return true;
    } else {
        return false;
    }
}

//pw de 8 caracteres o mas
function validarPassword(){
    if(password.length < 9){
        do{
            alert("Contraseña invalida");
            password = prompt("Ingrese una contraseña de 9 caracteres o más: ");
        }while(password.length < 9);
        return true;
    } else {
        return true;
    }
}

//Comparar y ordenar por orden alfabetico
function compare( a, b ) {
    if ( a.estudianteB < b.estudianteB){
        return -1;
    }
    if ( a.estudianteB > b.estudianteB){
        return 1;
    }
    return 0;
}  

do{
    //Menu alert
    opciones = prompt("Para registro de estudiante ingrese la letra: 'f'");
    switch(opciones){


        case 'r':
            estudiante = prompt("ingrese su nombre (Minimo 3 caracteres): ");
            validarString();
            password = prompt("ingrese su contraseña (8 caracteres o más): ");
            validarPassword();

            //Validacion para estudiante ya ingresado
            if(validarString() && validarPassword()){
                if(!validarestudiante(estudiante)) {
                    estudiante.push(new estudiante (estudiante,password));
                    alert("Alumno asignado correctamente");
                } else {
                    do{
                        alert("Alumno ya registrado");
                        estudiante = prompt("Ingrese su nombre: ");
                        validarString();
                    }while(validarestudiante(estudiante));

                    estudiantes.push(new estudiante(estudiante,password));
                    alert("Alumno asignado correctamente");
                    
                }

            }
            break;

        default:
            alert("ingrese una opcion valida!");
    }
}while(salir == false);
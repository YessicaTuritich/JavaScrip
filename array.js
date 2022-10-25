//Variables
let usuarioEstudiante;
let password;
let salir = false;
let opcion;

//Declaracion de constructor
class UsuarioEstudiante {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }

    saludo() {
        alert("Bienvenido de nuevo:" + this.user);
    }
}



//Array
const Usuarios = [];

//Validar usuario
function validarString() {
    if (!usuarioEstudiante.match("[A-Za-z]{3,10}")) {
        do {
            alert("Ingrese un usuario valido");
            usuarioEstudiante = prompt("Ingrese su nombre y apellido (Minimo 3 caracteres): ");
        } while (!usuarioEstudiante.match("[A-Za-z]{3,10}"));
        return true;
    } else {
        return true;
    }
}

//Valida al usuario dentro del array
function validarUser(usuarioEstudiante) {
    if (Usuarios.some(username => username.user === usuarioEstudiante)) {
        return true;
    } else {
        return false;
    }
}

function validarPassword() {
    if (password.length < 9) {
        do {
            alert("Ingrese una contraseña valida");
            password = prompt("Ingres de nuevo una contraseña de 9 caracteres como minimo: ");
        } while (password.length < 9);
        return true;
    } else {
        return true;
    }
}


function compare(a, b) {
    if (a.user < b.user) {
        return -1;
    }
    if (a.user > b.user) {
        return 1;
    }
    return 0;
}


do {
    //Menu alert
    opcion = prompt("Bienvenido de nuevo alumno por favor ingrese una opcion para continuar: \n i: Para iniciar sesion \n r: Para crear una cuenta \n s: para cerrar el menu");
    switch (opcion) {
        case 'i':
            usuarioEstudiante = prompt("ingrese su usuario: ");
            validarString();
            validarUser(usuarioEstudiante);
            password = prompt("ingrese su contraseña: ");
            validarPassword();

            if (validarUser(usuarioEstudiante) && validarPassword()) {

                for (const _Usuario of UsuarioEstudiante) {
                    if (usuarioEstudiante === UsuarioEstudiante.user) {
                        _Usuario.saludo();
                        break;
                    }
                }
            } else {
                alert("El estudiante no esta registrado");
            }

            break;

        case 'r':
            usuarioEstudiante = prompt("Ingrese su usuario (Nombre y Apellido): ");
            validarString();
            password = prompt("Ingrese su usuario (Nombre y Apellido): ");
            validarPassword();

            //Se valida que el estudiante que quiera registarse este disponible
            if (validarString() && validarPassword()) {
                if (!validarUser(usuarioEstudiante)) {
                    Usuarios.push(new UsuarioEstudiante(usuarioEstudiante, password));
                    alert("Estudiante correctamente registrado");
                } else {
                    do {
                        alert("Estudiante ya registrado");
                        usuarioEstudiante = prompt("ingrese su usuario: ");
                        validarString();
                    } while (validarUser(usuarioEstudiante));

                    Usuarios.push(new UsuarioEstudiante(usuarioEstudiante, password));
                    alert("Alumno registrado correctamente");

                }

            }

            break;



        case 's':
            salir = true;
            alert("Suerte y a estudiar!")

            break;
        default:
            alert("Opcion invalida, pruebe de nuevo");
    }
} while (salir == false);

//let usuario = prompt("Ingresar usuario");
//let clave = prompt("Ingresar clave");

//if(usuario == "yessituri" && clave == "riverplate"){
   // alert(`Bienvenida ${usuario}`);
//} else {
 //   alert("Acceso denegado");
//}


//function appTarea () {
   // for (let i=0 ; i<3 ; i++){
       // let nuevaTarea = prompt("esta es una app de tareas, quieres definir una nueva tarea? \n Ingrese si o no");
    //if(nuevaTarea == "si") {
       // let tarea = prompt("Ok, definamos la tarea: que tienes que hacer?");
        //alert("Excelente, acuerdate de " + tarea);
        //console.log("tarea ingresada:" + tarea);
   // } //else if (nuevaTarea == "no") {
       // alert("Ok, no hay nada por hacer");
     //   break
   // } else {
     //   alert("No ingreso una respuesta valida, vuelva a intentar");
    //}
    //}
//}

//appTarea();

// Funcion para calcular las notas
const calcular = () => {

    // input del estudiante para cada variable
    let fisica = document.querySelector("#fisica").value;
    let ingles = document.querySelector("#ingles").value;
    let matematica = document.querySelector("#matematica").value;
    let lengua = document.querySelector("#lengua").value;
    let notas = "";
    
    let totalNotas =
        parseFloat(fisica) +
        parseFloat(ingles) +
        parseFloat(matematica) +
        parseFloat(lengua);

    // Funcion para que la nota del estudiante se valore en un porcentaje
    let porcentaje = (totalNotas / 40) * 100;
    if (porcentaje <= 100 && porcentaje >= 80) {
        notas = "Alta";
    } else if (porcentaje <= 79 && porcentaje >= 60) {
        notas = "Media";
    } else if (porcentaje <= 59 && porcentaje >= 40) {
        notas = "Baja";
    } else {
        notas = "Desaprobado";
    }
  
    // Checkeo por datos vacios
    if (fisica == "" || ingles == ""
                || matematica == "" || lengua == "") {
        document.querySelector("#mostrarDatos").innerHTML
            = "Ingrese datos correctos";
    } else {
    
        // Checkear si la condicion pasa o falla
        if (porcentaje >= 39.5) {
        document.querySelector(
            "#mostrarDatos"
        ).innerHTML =
            ` De un total de 40 es ${totalNotas}
            y el porcentaje es ${porcentaje}%. <br>
            Tu nota es ${notas}. Aprobaste. `;
        } else {
        document.querySelector(
            "#mostrarDatos"
        ).innerHTML =
            ` De un total de 40 es ${totalNotas}
            y el porcentaje es  ${porcentaje}%. <br>
            Tu nota es ${notas}. Desaprobaste. `;
        }
    }
    };
    
    document.getElementById('captcha')
    document.addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();

        }
    });
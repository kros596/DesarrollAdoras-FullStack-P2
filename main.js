"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importa las clases
var Telefono_1 = require("./Telefono");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
/*
    ESTE CÓDIGO DEFINE TRES PERSONAS INICIALMENTE Y LAS MUESTRA EN LA CONSOLA
    POSTERIORMENTE MODIFICA UNA DE ESTAS PERSONAS PARA AÑADIR UNA DIRECCIÓN, UN TELÉFONO Y UN MAIL
    Y MUESTRA LAS MODIFICACIONES EN PANTALLA
    (Aunque los datos de definición y modificación son definidos en este mismo módulo, se han añadido funciones que permiten detectar errores, como:
        - Que no se definan los datos no esenciales para las personas
        - que los datos en la dirección y otras clases puedan ser de tipo variable en función del caso (pej: nº de calle puede ser numerico o string)
        - que la persona que se intenta modificar no se encuentre entre las definidas
        - que se intente mostrar las personas antes de definirlas
    )
*/
var personas = new Array; //Array del modulo para que pueda ser usada por todas las funciones del mismo que almacenará las personas definidas
main(); //Llama a la función principal
//Función principal
function main() {
    console.log("**************************************\nPRÁCTICA 2: TYPESCRIPT\n**************************************");
    //DEFINICIÓN DE PERSONAS INICIALMENTE
    definirPersonasIniciales(); //Define las personas inicialmente
    console.log("Personas definidas inicialmente:\n**************************************");
    mostrarPersonas(); //Muestra las personas definidas inicialmente
    //MODIFICACIÓN PERSONA
    var error = modificaPersona("00000000T"); //Intenta modificar a la persona con dni X y devuelve el error si no lo consigue
    if (error == "") {
        console.log("Personas modificadas:\n**************************************");
        mostrarPersonas(); //Muestra las personas una vez modificadas
    }
    else {
        console.log("No se ha conseguido modificar la persona: " + error); //Muestra el error
    }
    console.log("**************************************\nFIN\n**************************************");
}
function definirPersonasIniciales() {
    //Función para encapsular que no devuelve ningún valor
    //Creo una variable array de direcciones para almacenar las direcciones de las personas
    var dir_person;
    ///Creo una variable array de telefonos para almacenar las direcciones de las personas
    var tel_person;
    //Creo una variable array de mails para almacenar las direcciones de las personas
    var mail_person;
    var notas_person;
    //DEFINICIÓN DE PERSONAS
    //1. Primera persona
    //Añado una direccion en el array de direcciones
    dir_person = new Array();
    dir_person.push(new Direccion_1.Direccion("Avenida Andreu", "51520", "Os Razo Medio", "Valladolid", 581, "Ático 7", "C"));
    //Añado un teléfono a la persona 1
    tel_person = new Array();
    tel_person.push(new Telefono_1.Telefono("+34 914285715"));
    //Añado un teléfono a la persona 1
    mail_person = new Array();
    mail_person.push(new Mail_1.Mail("persona1@host.es"));
    //Creo la perimera persona con todos los datos menos las notas (que son opcionales)
    var persona1 = new Persona_1.Persona("Rodrigo", "Ávalos Sánchez", "00000000T", new Date("17/07/1991"), dir_person, mail_person, tel_person, "Verde", "Hombre");
    personas.push(persona1); //añade la persona 1 al array de personas
    //2. Segunda persona
    //Añado una direccion en el array de direcciones
    dir_person = new Array();
    dir_person.push(new Direccion_1.Direccion("Travessera Gil", "86935", "Vall Tejada", "Segovia", 60, 9, "F"));
    //Añado un teléfono a la persona 1
    tel_person = new Array();
    tel_person.push(new Telefono_1.Telefono("+34 601201236"));
    //Añado un teléfono a la persona 1
    mail_person = new Array();
    mail_person.push(new Mail_1.Mail("persona2@host.com"));
    mail_person.push(new Mail_1.Mail("persona2_secundario@host.com", "Secundario"));
    //Añado un par de notas
    notas_person = new Array();
    notas_person.push("No ha indicado su color favorito.");
    notas_person.push("No ha indicado su sexo.");
    //Creo la perimera persona con todos los datos menos el color favorito y el sexo (opcionales)
    var persona2 = new Persona_1.Persona("Sandra", "Gil Romero", "35238923W", new Date("20/04/1996"), dir_person, mail_person, tel_person);
    personas.push(persona2); //añade la persona 2 al array de personas
    //3. Tercera persona
    //Añado una direccion en el array de direcciones
    dir_person = new Array();
    dir_person.push(new Direccion_1.Direccion("Avinguda Castañeda", "12867", "San Pulido de las Torres", "Segovia", "Bloq. 2", 4));
    //Añado un teléfono a la persona 1
    tel_person = new Array();
    tel_person.push(new Telefono_1.Telefono("+34 679092726"));
    tel_person.push(new Telefono_1.Telefono("+34 920102167", "Fijo"));
    //Añado un teléfono a la persona 1
    mail_person = new Array();
    mail_person.push(new Mail_1.Mail("persona3@host.com"));
    //Añado un par de notas
    notas_person = new Array();
    notas_person.push("Tiene dos teléfonos.");
    notas_person.push("El numero de la dirección es una cadena de caracteres.");
    //Creo la perimera persona con todos los datos menos el color favorito y el sexo (opcionales)
    var persona3 = new Persona_1.Persona("Marina", "Calderón Gutierrez", "99999999R", new Date("05/12/2001"), dir_person, mail_person, tel_person, "Azul", "Mujer");
    personas.push(persona3); //añade la persona 2 al array de personas
}
function modificaPersona(dni) {
    var personaEncontrada = localizaPersona(dni);
    if (!personaEncontrada) {
        //No ha encontrado la persona
        return "No se ha encontrado la persona con DNI: " + dni;
    }
    else {
        agregaDatos(personaEncontrada);
        return "";
    }
}
function localizaPersona(dni) {
    //FUNCIÓN QUE LOCALIZA A UNA PERSONA POR SU DNI Y LA DEVUELVE. Puede devolver undefined si no encuentra ninguna
    //Devuelve el elemento del array de personas en el que el dni es igual que el dni indicado como parámetro
    return personas.filter(function (obj) { return obj.dni === dni; })[0];
}
function agregaDatos(personaEncontrada) {
    //Agrega los datos a la persona a modificar
    //Direccion
    personaEncontrada.agregaDireccion(new Direccion_1.Direccion("Av de Elvas", "06006", "Badajoz", "Badajoz")); //Agrega direccion
    personaEncontrada.agregaTelefono(new Telefono_1.Telefono("Laboral", "+34666666666")); //Agrega Telefono
    personaEncontrada.agregaMail(new Mail_1.Mail("Laboral", "trabajo@hostLaboral.com")); //Agrega Mail
}
function mostrarPersonas() {
    //Función para encapsular que no devuelve ningún valor
    //Si se han definido las personas, las muestra 1 a 1, sino, muestra mensaje de error
    if (personas.length > 0) {
        personas.forEach(function (persona) {
            persona.mostrarPersona();
        });
    }
    else {
        console.log("Error! No se han definido las personas.");
    }
}

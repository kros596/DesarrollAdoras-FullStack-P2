"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //constructor 
    function Persona(nombre, apellidos, dni, cumpleanos, direcciones, mails, telefonos, colorFav, sexo, notas) {
        //El color favorito, sexo y notas se marcan como op`cionales pudiendo no indicarse por que no existan o por preferencias
        //Se asignan los valores de los parámetros a los atributos del objeto
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        if (colorFav) {
            this.colorFav = colorFav;
        }
        if (sexo) {
            this.sexo = sexo;
        }
        if (notas) {
            this.notas = notas;
        }
    }
    //Funciones para añadir nuevas direcciones, mails y telefono
    Persona.prototype.agregaDireccion = function (nuevaDireccion) {
        this.direcciones.push(nuevaDireccion);
    };
    Persona.prototype.agregaMail = function (nuevoMail) {
        this.mails.push(nuevoMail);
    };
    Persona.prototype.agregaTelefono = function (nuevoTelefono) {
        this.telefonos.push(nuevoTelefono);
    };
    Persona.prototype.mostrarPersona = function () {
        //Función que muestra los datos de la persona en consola
        var mensaje = ""; //Concateno el valor de los atributos para mostrarlos en la variable string
        mensaje += "---------------------------------\n"; //indicador de apertura al representar en consola
        mensaje += "Nombre: " + this.nombre;
        mensaje += "\nApellidos: " + this.apellidos;
        mensaje += "\nDNI: " + this.dni;
        mensaje += "\nCumpleaños: " + this.cumpleanos.toLocaleString(); //En formato local
        mensaje += "\nColor Favorito: " + (this.colorFav ? this.colorFav : "(no indicado)"); //Si hay color se añade el color al mensaje, sino se muestra:No indicado
        mensaje += "\nSexo: " + (this.sexo ? this.sexo : "(no indicado)"); //Si hay colsexoor se añade el sexo al mensaje, sino se muestra:No indicado
        //Si hay notas se añadirán al mensaje sino se omiten
        if (this.notas) {
            if (this.notas.length > 0) {
                mensaje += "\nNotas:";
                this.notas.forEach(function (nota) {
                    mensaje += "\n\t- " + nota;
                });
            }
        }
        //Para cada dirección se añade al mensaje
        if (this.direcciones.length > 0) {
            mensaje += "\nDirecciones:";
            this.direcciones.forEach(function (direccion) {
                //Se escribirán en formato: Calle numero? piso? letra?, cp, población, provincia
                mensaje += "\n\t- " + direccion.calle;
                //Si se ha indicado numero se añade, sino se añade s\n (convenio), para lo que hace falta omitir el caracter reservado \n añadiendo un \ adicional
                mensaje += (direccion.numero ? " " + direccion.numero : " " + "s\\n");
                mensaje += (direccion.piso ? " " + direccion.piso : ""); //Si se ha indicado letra se añade
                mensaje += (direccion.letra ? " " + direccion.letra : ""); //Si se ha indicado letra se añade
                mensaje += ", " + direccion.cp + ", " + direccion.poblacion + ", " + direccion.provincia; //Resto de datos concatenados
            });
        }
        //Para cada telefono se añade al mensaje
        if (this.telefonos.length > 0) {
            mensaje += "\nTeléfonos:";
            this.telefonos.forEach(function (telefono) {
                //Se escribirán en formato: tipo: telefono
                mensaje += "\n\t- " + (telefono.tipo ? telefono.tipo + ": " : "") + telefono.numero;
            });
        }
        //Para cada mail se añade al mensaje
        if (this.mails.length > 0) {
            mensaje += "\nMails:";
            this.mails.forEach(function (mail) {
                //Se escribirán en formato: tipo: telefono
                mensaje += "\n\t- " + (mail.tipo ? mail.tipo + ": " : "") + mail.direccion;
            });
        }
        mensaje += "\n---------------------------------"; //indicador de cierre al representar en consola
        //Muestro el mensaje en consola
        console.log(mensaje);
    };
    return Persona;
}());
exports.Persona = Persona;

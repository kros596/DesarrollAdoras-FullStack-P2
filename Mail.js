"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
//Creación de la clase Mail
var Mail = /** @class */ (function () {
    //constructor 
    function Mail(direccion, tipo) {
        //Se asignan los valores de los parámetros a los atributos del objeto
        this.direccion = direccion;
        //Como no se entiende que es el tipo se marca como opcional, y si se indica se asigna
        if (tipo) {
            this.tipo = tipo;
        }
    }
    return Mail;
}());
exports.Mail = Mail;

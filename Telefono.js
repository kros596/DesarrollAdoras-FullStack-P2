"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
//Creación de la clase Telefono
var Telefono = /** @class */ (function () {
    //constructor 
    function Telefono(numero, tipo) {
        //Se asignan los valores de los parámetros a los atributos del objeto
        this.numero = numero;
        //Como no se entiende que es el tipo se marca como opcional, y si se indica se asigna
        if (tipo) {
            this.tipo = tipo;
        }
    }
    return Telefono;
}());
exports.Telefono = Telefono;

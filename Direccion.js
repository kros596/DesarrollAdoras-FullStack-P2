"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
//Creación de la clase Telefono
var Direccion = /** @class */ (function () {
    //constructor 
    function Direccion(calle, cp, poblacion, provincia, numero, piso, letra) {
        //Los parámetros numero piso y letra serán opcionales ya que no tienen porqué existir siempre
        //Se asignan los valores de los parámetros a los atributos del objeto
        this.calle = calle;
        if (numero) {
            //si se ha indicado se asigna
            this.numero = numero;
        }
        if (piso) {
            //si se ha indicado se asigna
            this.piso = piso;
        }
        if (letra) {
            //si se ha indicado se asigna
            this.letra = letra;
        }
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    return Direccion;
}());
exports.Direccion = Direccion;

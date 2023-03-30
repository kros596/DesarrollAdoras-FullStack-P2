import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona { 
    //campos
    nombre:string;
    apellidos:string;
    dni:string;
    cumpleanos:Date;
    colorFav:string;
    sexo:string;
    direcciones:Array<Direccion>; //un array de objetos de la clase direccion
    mails:Array<Mail>;//un array de objetos de la clase mail
    telefonos:Array<Telefono>//un array de objetos de la clase telefono
    notas:Array<string>//un array de strings
    //constructor 
    constructor(nombre:string, apellidos:string, dni:string, cumpleanos:Date, 
        direcciones:Array<Direccion>, mails:Array<Mail>, telefonos:Array<Telefono>,
         colorFav?:string, sexo?:string, notas?:Array<string>) { 
        //El color favorito, sexo y notas se marcan como op`cionales pudiendo no indicarse por que no existan o por preferencias
        //Se asignan los valores de los parámetros a los atributos del objeto
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.cumpleanos=cumpleanos;
        this.direcciones=direcciones;
        this.mails=mails;
        this.telefonos=telefonos;
        if(colorFav){
            this.colorFav=colorFav;
        }
        if(sexo){
            this.sexo=sexo;
        }
        if(notas){
            this.notas=notas;
        }
    }
    
    //Funciones para añadir nuevas direcciones, mails y telefono
    agregaDireccion(nuevaDireccion:Direccion){
        this.direcciones.push(nuevaDireccion);
    }
    agregaMail(nuevoMail:Mail){
        this.mails.push(nuevoMail);
    }
    agregaTelefono(nuevoTelefono:Telefono){
        this.telefonos.push(nuevoTelefono);
    }

    mostrarPersona(){
        //Función que muestra los datos de la persona en consola

        let mensaje:string=""; //Concateno el valor de los atributos para mostrarlos en la variable string
        mensaje +="---------------------------------\n";//indicador de apertura al representar en consola

        mensaje += "Nombre: " + this.nombre;
        mensaje += "\nApellidos: " + this.apellidos;
        mensaje += "\nDNI: " + this.dni;
        mensaje += "\nCumpleaños: " +  this.cumpleanos.toLocaleString(); //En formato local
        mensaje += "\nColor Favorito: " + (this.colorFav?this.colorFav:"(no indicado)"); //Si hay color se añade el color al mensaje, sino se muestra:No indicado
        mensaje += "\nSexo: " + (this.sexo?this.sexo:"(no indicado)"); //Si hay colsexoor se añade el sexo al mensaje, sino se muestra:No indicado
        //Si hay notas se añadirán al mensaje sino se omiten
        if(this.notas){
            if( this.notas.length>0){
                mensaje += "\nNotas:";
                this.notas.forEach(nota => {
                    mensaje += "\n\t- " + nota;
                });
            }
        }
        //Para cada dirección se añade al mensaje
        if(this.direcciones.length>0){
            mensaje += "\nDirecciones:";
            this.direcciones.forEach(direccion => {
                //Se escribirán en formato: Calle numero? piso? letra?, cp, población, provincia
                mensaje += "\n\t- " + direccion.calle;
                //Si se ha indicado numero se añade, sino se añade s\n (convenio), para lo que hace falta omitir el caracter reservado \n añadiendo un \ adicional
                mensaje += (direccion.numero?" " + direccion.numero: " " + "s\\n"); 
                mensaje += (direccion.piso?" " + direccion.piso:""); //Si se ha indicado letra se añade
                mensaje += (direccion.letra?" " + direccion.letra:""); //Si se ha indicado letra se añade
                mensaje += ", " + direccion.cp + ", " + direccion.poblacion + ", " + direccion.provincia //Resto de datos concatenados
            });
        }
        //Para cada telefono se añade al mensaje
        if(this.telefonos.length>0){
            mensaje += "\nTeléfonos:";
            this.telefonos.forEach(telefono => {
                //Se escribirán en formato: tipo: telefono
                mensaje += "\n\t- " + (telefono.tipo?telefono.tipo + ": ":"") + telefono.numero;
            });
        }
        //Para cada mail se añade al mensaje
        if(this.mails.length>0){
            mensaje += "\nMails:";
            this.mails.forEach(mail => {
                //Se escribirán en formato: tipo: telefono
                mensaje += "\n\t- " + (mail.tipo?mail.tipo + ": ":"") + mail.direccion;
            });
        }

        mensaje+="\n---------------------------------";//indicador de cierre al representar en consola
        //Muestro el mensaje en consola
        console.log(mensaje);
    }
 }
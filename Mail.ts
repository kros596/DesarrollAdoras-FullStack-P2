//Creación de la clase Mail
export class Mail { 
   //campos
   tipo:any; //No se entiende que es asique se indica puede tomar cualquier valor
   direccion:string; //Direccion tipo string
   //constructor 
   constructor(direccion:string,tipo?:any) { 
    //Se asignan los valores de los parámetros a los atributos del objeto
    this.direccion=direccion;
    //Como no se entiende que es el tipo se marca como opcional, y si se indica se asigna
    if(tipo){
        this.tipo=tipo;
    }
   }  
}
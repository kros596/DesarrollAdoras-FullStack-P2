//Creación de la clase Telefono
export class Telefono { 
   //campos
   tipo:any;//No se entiende que es asique se indica puede tomar cualquier valor
   numero:string; //Numero tipo string
   //constructor 
   constructor(numero:string,tipo?:any) { 
      //Se asignan los valores de los parámetros a los atributos del objeto
      this.numero=numero;
       //Como no se entiende que es el tipo se marca como opcional, y si se indica se asigna
      if(tipo){
         this.tipo=tipo;
      }
   }  
}
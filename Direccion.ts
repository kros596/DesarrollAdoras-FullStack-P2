//Creación de la clase Telefono
export class Direccion { 
   //campos
   calle:string;//tipo string
   numero:string|number; //tipo string o numero porque puede darse en ambos tipos
   piso:string|number;//tipo string o numero porque puede darse en ambos tipos
   letra:string; //tipo string
   cp:string;//tipo string porque el codigo postal puede llevar '0' a la izquierda
   poblacion:string;//tipo string
   provincia:string;//tipo string
   //constructor 
   constructor(calle:string, cp:string, poblacion:string, provincia:string,
                numero?:string|number, piso?:string|number, letra?:string) { 
      //Los parámetros numero piso y letra serán opcionales ya que no tienen porqué existir siempre
      //Se asignan los valores de los parámetros a los atributos del objeto
      this.calle=calle;
      if(numero){
         //si se ha indicado se asigna
         this.numero=numero;
      }
      if(piso){
         //si se ha indicado se asigna
         this.piso=piso;
      }
      if(letra){
         //si se ha indicado se asigna
         this.letra=letra;
      }
      this.cp=cp;
      this.poblacion=poblacion;
      this.provincia=provincia;
   }  
}
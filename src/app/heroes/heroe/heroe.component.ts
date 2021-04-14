import { Component } from "@angular/core";

 

 @Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

 })

 export class HeroeComponent{
  nombre:string='Iroman'
  edad:number= 54

  get todoMayuscula(){
      return this.nombre.toUpperCase();

  }

  obtenerNombre():string{
    return `${ this.nombre } - ${ this.edad }`; //forma de concatenar
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }
}
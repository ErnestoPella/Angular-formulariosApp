import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos: Favorito[]
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('dinamicForm') dinamicForm!: NgForm;


  persona:Persona = {
    nombre:'Ernesto',
    favoritos:[
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'DeathStranding'},
    ]
  };
  
  nombreValido():boolean{
    return this.dinamicForm?.controls['nombre']?.invalid;       
  }

  guardar(){
    
  }
}

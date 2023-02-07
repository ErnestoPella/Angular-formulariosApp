import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  @ViewChild('dinamicForm') dinamicForm!: NgForm;


  nombreValido():boolean{
    return this.dinamicForm?.controls['nombre']?.invalid;       
  }

  guardar(){

  }
}

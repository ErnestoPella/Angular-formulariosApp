import { Component, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  

  constructor(){}

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid
          && this.miFormulario?.controls['producto']?.touched;
  }

  guardar(){
    console.log(this.miFormulario);
  }
}

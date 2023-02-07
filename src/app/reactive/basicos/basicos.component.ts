import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  /*miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(100)
  });*/

  miFormulario: FormGroup = this.fb.group({
    nombre: [ 'RTX 4080ti'],
    precio: [ 0 ],
    existencias: [ 0 ]
  })

  constructor(private fb: FormBuilder){}

}

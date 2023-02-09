import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent {

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder){}



  guardar(){}
}

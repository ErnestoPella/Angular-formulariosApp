import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorsService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['', [Validators.required, this.validatorsService.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]] 
  },{
    validators: [this.validatorsService.camposIguales('password','password2')]
  })


  constructor(private fb: FormBuilder,
              private validatorsService: ValidatorService){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ernesto Pella',
      email: 'example@gmail.com',
      username: 'EPella'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){

    this.miFormulario.markAllAsTouched();
  }
}

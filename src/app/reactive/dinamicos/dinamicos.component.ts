import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Geard',Validators.required ],
      ['Death Stranding',Validators.required ],
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  

  constructor(private fb: FormBuilder){}  


  campoNoEsValido( campo: string ){
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
    
  }

  guardar(){

    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }


  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(index: number){
    
    this.favoritosArr.removeAt(index);
  }
}

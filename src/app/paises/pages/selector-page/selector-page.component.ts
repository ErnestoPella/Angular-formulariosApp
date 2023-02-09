import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs';
import { Pais, PaisSmall } from '../../interfaces/paises.interface';
import { PaisesServiceService } from '../../services/paises-service.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]]
  })

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: string[] = [];

  constructor(private fb: FormBuilder,
    private paisesService: PaisesServiceService){}

    ngOnInit(): void {
      this.regiones = this.paisesService.regiones;


      this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_) => {
          this.miFormulario.get('pais')?.reset('');
        }),
        switchMap( region => this.paisesService.getPasisesPorRegion( region ))
      )
      .subscribe( paises => {
        this.paises = paises;
      });
    
      
      this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_) => {
          this.fronteras = [];
          this.miFormulario.get('frontera')?.reset('');
        }),
        switchMap(codigo => this.paisesService.getPasisesPorCodigo( codigo ))
      )
      .subscribe( frontera => {
        this.fronteras = frontera?.borders || [];
      })
    
    }


  guardar(){}
}
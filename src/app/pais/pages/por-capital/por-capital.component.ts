import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino  : string = '';
  hayError : boolean = false;
  paises   : Country[] = [];
  hayPaises: boolean = false;
  

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino  = termino;
    
    this.paisService.buscarCapital( this.termino )
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
        paises[0].flags
        
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }
 
  sugerencias( termino: string ) {
    this.hayError = false;
    //TO DO: crear sugerencias
  }


}

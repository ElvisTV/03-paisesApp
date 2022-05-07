import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pairwise, switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;
  
  constructor(
      private activatedRoute:ActivatedRoute,
      private paisService: PaisService
      
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({cioc}) => this.paisService.getPaisPorAlpha1(cioc)),
      )
      .subscribe( pais => {
        this.pais = pais[0];
        // console.log(this.pais); // si aparece todo el objeto correctamente, junto con todas sus propieda
        // console.log(this.pais.name); // imprime undefined
      });
  }

}

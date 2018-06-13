import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService,
               private router: Router
   ) {
    this.activatedRoute.params.subscribe( params => {
     this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }

  irHome() {
    this.router.navigate(['heroes']);
  }

}

interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
  }


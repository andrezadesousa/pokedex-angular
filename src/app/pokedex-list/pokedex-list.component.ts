import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.sass']
})
export class PokedexListComponent {
  pokemons = ['teste1, teste2']
}

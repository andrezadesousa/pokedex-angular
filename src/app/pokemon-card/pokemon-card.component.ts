import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon: string | undefined;

  @Input()
  numero: number | undefined;
  
  pegarImagemPokemon(){
    const numeroFormatado = this.numero;

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatado}.png`
  }
}
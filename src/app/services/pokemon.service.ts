import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons!: any[]

  constructor(private httpCliente: HttpClient) { 
    this.carregarPokemons()
  }

  async carregarPokemons() {
    const requisicao = await this.httpCliente
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

      this.pokemons = requisicao.results;
      
      console.log(requisicao.results);
  }
}
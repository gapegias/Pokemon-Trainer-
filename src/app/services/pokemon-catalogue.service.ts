import { Injectable } from '@angular/core';
import { PokemonDetails, Pokemon, Pokemons } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';
// Loading enviromental variables
const{ apiPokemon } = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {
  // Private variable pokemon list 
  private _pokemons: PokemonDetails[] = []
  // Private variable boolean
  private _loading: boolean = false 
  // Get method returns pokemons sorted by id
  public get pokemons():PokemonDetails[]{ return this._pokemons.sort(function(a, b) { return a.id - b.id; }) }
  // Get method returns true / false if pokemon loading from pokemon api
  public get loading():boolean{ return this._loading }
  // Add HttpClient
  constructor(private readonly http: HttpClient) { }
  // Get request and returns a pokemon details from additional pokemon api
  private getPokemonData(name: string){
    return this.http.get<PokemonDetails>(apiPokemon + `/${name}`)
  }
  // Get request and returns pokemon list from pokemon api
  public findAllPokemons(): void{
    if(this._pokemons.length > 0 || this._loading)
      return;
    this._pokemons = []
      this._loading = true
      this.http.get<Pokemons>(apiPokemon + "/?offset=0&limit=151")
           .pipe(finalize(() => { this._loading = false }))
           .subscribe((response: Pokemons) => {
               response.results.forEach((result: Pokemon) => {
                 this.getPokemonData(result.name).subscribe((uniqueResponse: PokemonDetails) => {
                   this._pokemons.push(uniqueResponse)}
                 )}
               )
           })
  }
  // Returns pokemon object by pokemon name
  public pokemonByName(name: string): PokemonDetails | undefined{
    return this._pokemons.find((pokemon: PokemonDetails) => pokemon.name === name);
  }

}

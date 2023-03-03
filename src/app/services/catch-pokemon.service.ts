import { Injectable } from '@angular/core';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { Observable, finalize, tap } from 'rxjs';

// Loading enviromental variables
const{ apiTrainersKey, apiTrainers} = environment

@Injectable({
  providedIn: 'root'
})
export class CatchPokemonService {
  // Private variable boolean
  private _loading: boolean = false;
  // Get method returns loading boolean variable
  public get loading(): boolean{ return this._loading; }
  // Add HttpClient, pokemonCatalogueService and trainerService services
  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService
    ) { }
  // Patch request with trainerId and pokemon name, returns a trainer
  public addToPokemons(pokemonName: string): Observable<Trainer>{
    if(!this.trainerService.trainer)
      throw new Error("addToPokemons: There is no trainer");
    const trainer: Trainer = this.trainerService.trainer;

    const pokemon: PokemonDetails| undefined = this.pokemonService.pokemonByName(pokemonName);
    if(!pokemon)
      throw new Error(`addToPokemons: No trainer with name: ${pokemonName}`);

    if(this.trainerService.inPokemons(pokemonName))
      this.trainerService.removeFromPokemons(pokemonName)
    else
      this.trainerService.addToPokemons(pokemonName)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiTrainersKey
    })

    this._loading = true;

    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`,{
      pokemon: [...trainer.pokemon]
    },{
      headers
    }).pipe(
      tap((updatedTrainer: Trainer) => {
        this.trainerService.trainer = updatedTrainer;
      }),
      finalize(() => this._loading = false)
    )
  }
}

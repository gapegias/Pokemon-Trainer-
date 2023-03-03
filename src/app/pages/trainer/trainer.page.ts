import { Component } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {
  // Get method returns trainer of trainerService
  public get trainer(): Trainer | undefined{ return this.trainerService.trainer }
  // Get method returns trainer's pokemon list
  public get catchedPokemons(): PokemonDetails[]{
    const pokemonList: PokemonDetails[] = [];
    if(this.trainerService.trainer){
      for(let pokemonName of this.trainerService.trainer.pokemon){
        const pokemon: PokemonDetails| undefined = this.pokemonService.pokemonByName(pokemonName)
        if(pokemon)
          pokemonList.push(pokemon)
      }
    }
    return pokemonList
  }
  // Add PokemonCatalogueService and trainerService services
  constructor(private trainerService: TrainerService,
              private pokemonService: PokemonCatalogueService){ }

}

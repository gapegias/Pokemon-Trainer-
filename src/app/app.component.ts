import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { TrainerService } from './services/trainer.service';
import { PokemonCatalogueService } from './services/pokemon-catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // Add pokemonService and trainerService services
  constructor(private readonly trainerService: TrainerService,
              private readonly pokemonService: PokemonCatalogueService){ }
  // Loads pokemon from pokemon api when the directive is instantiate (when the app starts)
  ngOnInit(): void {
    if(this.trainerService.trainer)
      this.pokemonService.findAllPokemons();
  }
  
}

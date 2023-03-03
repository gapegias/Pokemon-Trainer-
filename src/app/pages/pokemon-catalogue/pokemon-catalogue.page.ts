import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit{
  // Get method returns a list of pokemons of pokemonCatalogueService
  public get pokemons(): PokemonDetails[]{ return this.pokemonCatalogueService.pokemons }
  // Get method returns bolean loading variable of pokemonCatalogueService
  public get loading(): boolean{ return this.pokemonCatalogueService.loading }
  // Add pokemonCatalogueService service
  constructor(private readonly pokemonCatalogueService: PokemonCatalogueService){ }
  // Loads pokemon from pokemon api when the directive is instantiated
  ngOnInit(): void{ this.pokemonCatalogueService.findAllPokemons(); }
}

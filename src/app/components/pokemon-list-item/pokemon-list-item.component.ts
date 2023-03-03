import { Component, Input } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent {
  // Variable that holds a list of pokemons and receive it from his parent component
  @Input() pokemon?: PokemonDetails;
}

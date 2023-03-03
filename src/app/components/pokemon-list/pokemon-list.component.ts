import { Component, Input } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  // Variable that holds a list of pokemons and receive it from his parent component
  @Input() pokemons: PokemonDetails[] = []
}

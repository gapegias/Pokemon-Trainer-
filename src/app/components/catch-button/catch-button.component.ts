import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { CatchPokemonService } from 'src/app/services/catch-pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.css']
})
export class CatchButtonComponent implements OnInit{
  // Variable that holds the check of a pokemon if it is captured: true / flase
  public isCatched: boolean = false;
  // Variable that holds pokemon name and receive it from his parent component
  @Input() pokemonName: string = "";
  // Add catchPokemonService and trainerService services
  constructor(private readonly catchPokemonService: CatchPokemonService,
              private trainerService: TrainerService) { }
  // Initialize isCatched variable when the directive is instantiated
  ngOnInit(): void {
    this.isCatched = this.trainerService.inPokemons(this.pokemonName)
  }
  // Get method that returns boolean value of loading field of service catchPokemonService
  get loading(): boolean{ return this.catchPokemonService.loading; }
  // Method that when a button of a pokemon is clicked, it adds a pokemon in trainer's pokemon list
  onCatchClick(): void{
   this.catchPokemonService.addToPokemons(this.pokemonName)
                           .subscribe({
                            next:((response: Trainer) => {
                              this.isCatched = this.trainerService.inPokemons(this.pokemonName)
                            })
                           })
  }
}

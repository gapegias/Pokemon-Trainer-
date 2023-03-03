import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  // Private variable trainer
  private _trainer?: Trainer
  // Initialize trainer with saved session trainer
  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }
  // Get method returns trainer
  public get trainer(): Trainer | undefined{
    return this._trainer
  }
  // Set method changes trainer and trainer in session storage
  public set trainer(trainer: Trainer | undefined){
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!)
    this._trainer = trainer
  }
  // Boolean method that checks if a pokemon name is included to trainer's pokemon list
  public inPokemons(pokemonName: string): boolean{
    if(this._trainer)
        return Boolean(this._trainer?.pokemon.find((pokemon: string) => pokemon === pokemonName))
    return false;
  }
  // Add a pokemon name to trainer's pokemon list
  public addToPokemons(pokemonName: string): void{
    if(this._trainer)
        this._trainer.pokemon.push(pokemonName)
  }
  // Remove a pokemon name from trainer's pokemon list
  public removeFromPokemons(pokemonName: string): void{
    if(this._trainer)
        this._trainer.pokemon = this._trainer.pokemon.filter((pokemon: string) => pokemon !== pokemonName)
  }
}

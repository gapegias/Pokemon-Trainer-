import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage{
  // Add router Route
  constructor(private readonly router: Router){ }
  // When login button click and there are no errors it navigates to pokemon catalogue pge 
  handleLogin(): void{
    this.router.navigateByUrl("/pokemons")
  }
}

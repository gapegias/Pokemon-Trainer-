import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  // Variable that takes input from a child component and it is an eventlistener in login button
  @Output() login: EventEmitter<void> = new EventEmitter()
  // Add loginService and trainerService services
  constructor(private readonly loginService: LoginService,
              private readonly trainerService: TrainerService){ }
  /* Method that takes username of a trainer by clicking submit button and if exists:
      - true, initiaize trainer of trainerService
      - false, create trainer and initiaize trainer of trainerService */
  public loginSubmit(loginForm: NgForm): void{
    const { username } = loginForm.value
    this.loginService.login(username)
                     .subscribe({
                        next: (trainer: Trainer) => {
                          this.trainerService.trainer = trainer
                          this.login.emit()
                        },
                        error: () => { }
                     })
  }

}

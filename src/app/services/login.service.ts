import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Load enviromental variables
const { apiTrainers, apiTrainersKey } = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Add HttpClient
  constructor(private http: HttpClient) { }
  /* Trainer logins by username, if exists:
      - true, return this trainer
      - false, return a new created trainer with the given username */
  public login(username: string): Observable<Trainer>{
    return this.checkUsername(username)
               .pipe(
                  switchMap((trainer: Trainer | undefined) => {
                    if(trainer === undefined)
                      return this.createTrainer(username)
                    return of(trainer)
                  })
               )
  }
  /* Find trainer if exists by username:
      - true, return this trainer (get http protocol)
      - false, return undefined */
  private checkUsername(username: string): Observable<Trainer | undefined>{
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
                    .pipe(
                      map((response: Trainer[]) => response.pop())
                    )
  }
  // Create and return a new trainer (post http protocol)
  private createTrainer(username: string): Observable<Trainer>{
      const trainer = {
        username,
        pokemon: []
      }

      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        "x-api-key": apiTrainersKey
      })

      return this.http.post<Trainer>(apiTrainers, trainer, { headers })
  }
}

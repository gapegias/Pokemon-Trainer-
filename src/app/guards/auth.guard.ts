import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainerService } from '../services/trainer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Add router Router and trainerService service
  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ){ }
  /* Check if a route can be activated:
      - true, return true
      - flase, navigate to login page and return false
  */ 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.trainerService.trainer)
      return true;
    this.router.navigateByUrl("/login")
    return false;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKeys } from 'src/app/enums/storage-keys.enum';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {
  // Add router Router 
  constructor(private readonly router: Router){ }
  /* Removes the current trainer's key from session storage and reloads the page. 
     Since no trainer is registered in session storage, the user is redirected to the login page */
  public handleLogout():void{
    if (window.confirm("Are you sure you want to logout?")) {
      StorageUtil.storageDelete(StorageKeys.Trainer)
      location.reload()
    }
  }
}

import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  users: Observable<User[]>;

  constructor(private svc: AppService) { }

  getUsersClick() {
    console.info("getUsersClick()");
    this.users = this.svc.getUsers();
  }

}

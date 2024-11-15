import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  constructor(
    private userService: UserService
  ){}


}

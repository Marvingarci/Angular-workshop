import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users!: User[]

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersR: User[])=>{
      this.users = usersR
    })
  }

  llevameAlDetalle(userId: number){
    this.router.navigate(['user-detail/', userId])
  }
}

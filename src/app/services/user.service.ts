import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(){
    return this.httpClient.get<User[]>(this.API_URL+'/usuarios')
  }

  getUser(id: number){
    return this.httpClient.get<UserResponse>(this.API_URL+'/usuarios/'+id)
  }
}

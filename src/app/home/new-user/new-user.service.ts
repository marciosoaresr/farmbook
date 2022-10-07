import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http:HttpClient) { }

  registerNewUser(NewUser:NewUser){
    return this.http.post('http://localhost:3000/user/signup',NewUser);
  }

  checkExistingUser(user: string){
    return this.http.get(`http://localhost:3000/user/exists/${user}`);
  }

}

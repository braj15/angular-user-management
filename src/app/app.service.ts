import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  user: User = new User();
  users: User[] = [];
  generateId: number = 100;

  constructor() { }

  getUsers():Observable<User[]> {

    return of(this.users).pipe(delay(2000));
  }

  // addUser(user: User):Observable<User> {

  //   let userId: string = 'UID' + (++this.generateId);

  //   user.userId = userId;

  //   this.users.push(user);

  //   return of(user).pipe(delay(2000));
  // }

  getUser(){

    return this.user;
  }

  setUser(user: User){

    let userId: string = 'UID' + (++this.generateId);

    user.userId = userId;

    this.user = user;

    return true;
  }

}
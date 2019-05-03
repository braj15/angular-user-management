import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user: User = new User();

  constructor(private _userService: AppService, private _router: Router) { }

  ngOnInit() {
    
    this.user =  this._userService.getUser();
    
    console.log('from inside of init', this.user);
  }

  registerUser(value): void {

    this._userService.setUser(value);
    
    // this._userService.addUser(this.user).subscribe((user) => {
    //   console.log('User with id: ' + user.userId + ' is generated');
    // });

    this._router.navigate(['confirm-reg']);

  }


}
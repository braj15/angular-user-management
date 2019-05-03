import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  user: User;

  constructor(private _userService: AppService, private _location: Location ) { }

  ngOnInit() {

    this.user = this._userService.getUser();
    console.log('from confirmaion page', this.user);
  }

  goBack(){

    this._userService.setUser(new User());
    this._location.back();
  }

  onEdit(){

    this.goBack();

  }

}
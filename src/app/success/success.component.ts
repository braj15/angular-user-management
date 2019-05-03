import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  user: User;

  constructor(private _userService: AppService) { }

  ngOnInit() {
    this.user = this._userService.getUser();
  }

}
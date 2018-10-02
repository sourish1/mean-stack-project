import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _user:UserService, private _router: Router) {
    // this._user.user()
    //   .subscribe(
    //     data => console.log(data),
    //     err => this._router.navigate(['/login'])
    //   )
  }

  ngOnInit() {
  }

}

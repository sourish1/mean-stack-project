import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _user: UserService, private _router: Router) {}

  ngOnInit() {
  }

  isLoggedIn = false;

  // isLoggedIn(){
  //   this._user.check()
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err)
  //     );
  // }

  logout(){
    this.isLoggedIn = true;
    this._user.signout()
      .subscribe(
        data => { console.log(data), this._router.navigate(['/login']); },
        err => this._router.navigate(['/login'])
      )
  }

}

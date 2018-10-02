import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {

  emailErr: String;

  companyRegister: FormGroup;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.companyRegister = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required,
        Validators.email]),
      'password': new FormControl(null, Validators.required),
      'typeOfUser': new FormControl("company")
    });
  }

  save(){
    if(this.companyRegister.valid){
      //console.log(this.companyRegister.value);
      this._userService.register(JSON.stringify(this.companyRegister.value))
        .subscribe(
          data => {console.log(data); this._router.navigate(['/login']); },
          err => {console.error(err); if(err.error.code == 11000) {this.emailErr="Email already exists";} }
        )
    }
    else{
      return;
    }
  }

}

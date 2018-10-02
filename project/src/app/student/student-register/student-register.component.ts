import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  studentRegister: FormGroup;
  emailErr: string;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.studentRegister = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'typeOfUser': new FormControl("student")
    });
  }

  save(){
    if(this.studentRegister.valid){
      // console.log(this.companyRegister.value);
      this._userService.register(JSON.stringify(this.studentRegister.value))
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

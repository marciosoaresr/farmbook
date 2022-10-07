import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { tinyValidator } from './tiny.validator';
import { UserExistService } from './user-exist.service';
import { userPasswordEqualsValidator } from './user-password-equals.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private checkExistingUser: UserExistService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      userName: ['', [tinyValidator],[this.checkExistingUser.userAlreadyExist()]],
      password: [''],
    },{
      Validators:[userPasswordEqualsValidator],
    }
    );
  }

  register() {
    if(this.newUserForm.valid){
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe(()=> {
        this.router.navigate(['']);
      },
      (Error)
      );
    }
  }
}

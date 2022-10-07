import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(private newUserService: NewUserService) { }

  userAlreadyExist(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((user)=> this.newUserService.checkExistingUser(user))
      ),
      map((userExist) => (userExist ? {existingUser:true} : null
        ),
        first()
        );
    };
  }
}

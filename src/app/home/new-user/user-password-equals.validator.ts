import { FormGroup } from "@angular/forms";

export function userPasswordEqualsValidator(FormGroup: FormGroup) {
    const user = FormGroup.get('user')?.value ?? '';
    const password = FormGroup.get('password')?.value ?? '';

    if (user.trim() + password.trim()){
        return user != password ? null : {passwordEqualUser: true};
    }else{
        return null;
    }
}
import { AbstractControl } from "@angular/forms";

export function tinyValidator(control:AbstractControl){
    const value = control.value as string;
    if (value !== value.toLocaleLowerCase()){
        return {tiny:true}
    }else{
        return null;
    }
};
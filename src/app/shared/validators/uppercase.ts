import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lowercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== control.value?.toLowerCase()) {
      console.log("Oops!", control.value);
      return { lowercase: false };
    }
    return null;
  };
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

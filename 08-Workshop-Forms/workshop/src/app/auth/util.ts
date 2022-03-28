import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    // if (control.errors && Object.keys(control.errors).filter(errorName => errorName !== 'email').length > 0) {
    //     return null;
    // }

    if (!value) {
        return null;
    }

    if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true,
        }
    }

    return null;
}
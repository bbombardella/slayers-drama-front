import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService as AuthWebservice} from "../api/services/auth.service";
import {AuthService} from "../shared/services/auth.service";
import {ProviderEnum} from "../shared/models/provider.enum";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private readonly authWebservice: AuthWebservice,
              private readonly authService: AuthService) {
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    if (group.get('password')?.value === group.get('confirmPassword')?.value) {
      return null;
    }

    return {notSame: 'Les mots de passes doivent être identiques'};
  }

  readonly signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  }, [this.checkPasswords]);

  get errors(): unknown[] {
    if (!this.signUpForm.errors) {
      return [];
    }

    return Object.values(this.signUpForm.errors);
  }

  signUpClicked(): void {
    if(this.signUpForm.invalid) {
      return;
    }

    this.authWebservice.authControllerSignUp({
      body: {
        firstName: this.signUpForm.value.firstName as string,
        lastName: this.signUpForm.value.lastName as string,
        email: this.signUpForm.value.email as string,
        password: this.signUpForm.value.password as string,
        confirmPassword: this.signUpForm.value.confirmPassword as string,
      }
    }).subscribe(val => {
      if (val?.id) {
        this.authService.userSubject.next({
          provider: ProviderEnum.LOCAL,
          payload: {
            username: this.signUpForm.value.email as string,
            password: this.signUpForm.value.password as string
          },
          redirect: true
        });
      }
    })
  }
}

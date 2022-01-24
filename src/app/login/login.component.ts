import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.authenticationService.isAuthenticated()
  }
  ngOnDestroy() {
    this.emailInput.setValue('');
    this.passwordInput.setValue('');
  }

  errorMessage:string | null = null;
  mobile: boolean = window.innerWidth < 1024 ? true : false
  hide = true;
  emailInput = new FormControl('', [Validators.required, Validators.email]);
  passwordInput = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(public authenticationService: AuthService, private router: Router) {}

  signUp() {
    this.authenticationService.signUp(this.emailInput.value, this.passwordInput.value);
    this.emailInput.setValue('');
    this.passwordInput.setValue('');
  }

  signIn() {
    this.authenticationService.signIn(this.emailInput.value, this.passwordInput.value)
      .pipe(
        map((data:any) => data.user.multiFactor.user)
      ).subscribe(
        user => {
          localStorage.setItem('Complaints-Auth-Token', user.accessToken)
          this.router.navigate(['complaints']);
        },
        err => {
          this.errorMessage = err.message
        }
      );
  }

  signOut() {
    this.authenticationService.signOut();
  }

  getErrorMessage(inputName:string) {
    switch(inputName){
      case 'email' :
        if(this.emailInput.hasError('required')) return 'You must enter a email'
        if(this.emailInput.hasError('email')) return 'Invalid email'
        return ''
      case 'password':
        if(this.passwordInput.hasError('minlength')) return 'You must enter at least 6 characters'
        if(this.passwordInput.hasError('required')) return 'You must enter a password'
        return ''
      default:
        return ''
    }
  }
}

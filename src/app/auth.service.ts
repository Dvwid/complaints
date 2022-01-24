import { Injectable } from '@angular/core';
import { from, Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import MultiFactorUser = firebase.User.MultiFactorUser;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private jwtHelper: JwtHelperService, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
  userData:Observable<firebase.User | null>

  public isAuthenticated():any {
    const token = localStorage.getItem('Complaints-Auth-Token')
    return !this.jwtHelper.isTokenExpired(token === null ? undefined : token)
  }

  signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res:any) => {
        console.log('You are Successfully signed up!', res);
      })
      .catch((error:any) => {
        console.log('Something is wrong:', error.message);
      });
  }

  signIn(email: string, password: string):Observable<any> {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password))
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth
      .signOut()
      .then((res:any) => {
        localStorage.removeItem('Complaints-Auth-Token')
      })
  }
}




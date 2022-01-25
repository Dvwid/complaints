import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private jwtHelper: JwtHelperService, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
  userData:Observable<firebase.User | null>

  public isAuthenticated():any {
    const token = localStorage.getItem('Complaints-User-JWT')
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

  signOut() {
    this.angularFireAuth
      .signOut()
      .then((res:any) => {
        localStorage.removeItem('Complaints-User')
        localStorage.removeItem('Complaints-User-JWT')
      })
  }

  signInWithLocalStorage(){
      const user = JSON.parse(localStorage.getItem('Complaints-User') as string)
      this.userData = of(user)

  }
}




import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth, private jwtHelper: JwtHelperService) {
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

  signIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res:any) => {
        this.userData.pipe(
          map((data:any) => data.multiFactor.user)
        ).subscribe(data => {
          localStorage.setItem('Complaints-Auth-Token', data.accessToken)
        })
      })
      .catch((error:any) => {
        console.log('Something went wrong:',error.message);
      });
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

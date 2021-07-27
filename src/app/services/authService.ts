import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
    private token = null;
    private api = 'https://xx.pl/'

    private registerData = {
        email: null,
        code: null
    };

  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(
        private http: HttpClient,
        private router: Router,
       ) {

    }

  checkIsLoggedIn(){
    return this.loggedIn
  }

    getToken() {
        return this.token;
    }


    login(body:{[name: string]: any}) {
        return this.http.post(`${this.api}/api/login`, body).pipe(
            tap((res:any) => {

                this.setAuthData(res.token);

              if(res.token) this.loggedIn.next(true)

                if (res.token && body.remember) {
                    localStorage.setItem('email', body.email);
                    localStorage.setItem('password', body.password);
                } else {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }
            })
        )
    }


    private setAuthData(token = null) {
        this.token = token ? token : null;
     }

    register(data: {[name: string]: any}) {
        return this.http.post(`${this.api}/api/register`, data).pipe(
            tap((res: any) => {
                console.log('authService register',res, res.User?.token)
                this.setAuthData(res.User?.token);
            })
        )
    }

    logout() {
        this.token = null;
        this.loggedIn.next(false)
        this.router.navigate(['/']);
    }

    isAuthenticated(): boolean {
        return !!(this.token);
    }

    isAllowedToSetPassword(): boolean {
        return !!(this.registerData.email && this.registerData.code);
    }
}

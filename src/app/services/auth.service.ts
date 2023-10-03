import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token: string){
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null{
    console.log('gettoken:',sessionStorage.getItem('token'))
    return sessionStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken();
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password}:any):Observable<any>{
    if(email == 'admin' && password == 'admin'){
      this.setToken('abcdefghijklmnopqrstuvwxz');
      return of({name: 'Ashish', email: 'ashish@gmail.com'});
    }
    return throwError(new Error('Failed to login'));
  }

}

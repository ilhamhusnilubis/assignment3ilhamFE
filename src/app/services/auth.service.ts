import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = environment.urlAddress;
  headers = new HttpHeaders()
  .set(
    'Content-Types',
    'application/json',
  );
  datauser = {}

  constructor(private http:HttpClient, private router:Router ) { }


  //register
  registerUser(user){
    return this.http.post<any>(`${this.endpoint}users/register`, user)
  }
  loginUser(user){
    return this.http.post<any>(`${this.endpoint}users/login`, user)
  }

  //logoutuser
  logout(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken == null){
      this.router.navigate([''])
    }
  }

  get isLogin(): boolean{
      let token = localStorage.getItem('token');
      return (token !==null) ? true : false
  }

  getToken(){
      return localStorage.getItem('token');
  }

  getUserProfile(_id): Observable<any>{
    let api = `${this.endpoint}/user/${_id}`;
    return this.http.get(api, {
      headers:this.headers
    }).pipe(map((res:Response)=>{
      return res || {}
    }),catchError(this.handleError)
  )
  }

  handleError(error:HttpErrorResponse){
        let pesan = '';

        if(error.error instanceof ErrorEvent){
            pesan = error.error.message

        }else{
            pesan = `Error code: ${error.status} \n Pesan Error: ${error.message}`;
        }
        return throwError(pesan);

  }


}

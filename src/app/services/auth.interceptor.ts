import {Injectable}  from '@angular/core'
import {HttpInterceptor,HttpRequest, HttpHandler } from '@angular/common/http'
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
 {
  constructor(private authService:AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler){
      const token = this.authService.getToken()
      req = req.clone({
          setHeaders:{
              'access_token':  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE2YjMzYjY3ZWMwYjA4NDg2OGQ1MTIiLCJpYXQiOjE2MDQ4NDM4Njd9.ux_GP5YjIRzZs3dpcGsw7xSGwKdnlErDCkwtDMVxOu4"
          }
      });
    return next.handle(req)
  }
}

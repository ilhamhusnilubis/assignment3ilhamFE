import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginData = {
      username:'',
      password:'',
    }
  
    constructor(private authService:AuthService, private router:Router) {}
  
  ngOnInit(): void {}
  
   
    loginUser(){
      this.authService.loginUser(this.loginData)
      .subscribe(
        data =>{
        console.log(data)
        localStorage.setItem('token', data.access_token)
        window.alert('succes login')
        data => this.router.navigate([''])
      },
      )
    }
  
    }
  
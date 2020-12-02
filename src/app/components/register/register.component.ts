import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  datauser={
    username:'',
    email:'',
    password:'',
    namadepan:'',
    namabelakang:'',
    umur:null
  }
  regis;

  constructor(private authService:AuthService, private router:Router) {}

  RegisterUser(){
    this.authService.registerUser(this.datauser)
    .subscribe(
      res =>{
      console.log(res)
      this.regis=res,
      res => this.router.navigate([''])
    },
    )
  }


  ngOnInit(): void {
  }

}

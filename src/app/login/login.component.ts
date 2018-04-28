import { Component, OnInit } from "@angular/core";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

import { NgModel } from "@angular/forms";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})


export class LoginComponent implements OnInit{
  gitHubData: LoginService;
  fixture: any;
public user:string;
public password:string;
public validar;
constructor (public _loginService:LoginService, public _router:Router){}

ngOnInit(){}

loginbutton(user1, password1 ){
   
    this.validar = this._loginService.evaluaUser(this.user=user1, this.password=password1);    
    console.log(this.user);    
    if(this.validar ==='true'){
            this._router.navigate(['contact']);
        }
        else{
            alert('Datos equivocados');
                   
            //this.user='';
            //this.password='';
        }
    }

}
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
user:string;
password:string;
private validar;
constructor (private _loginService:LoginService, private _router:Router){}

ngOnInit(){}

loginbutton(user1:string, password1:string){
   
    this.validar = this._loginService.evaluaUser(this.user=user1, this.password=password1);    
        if(this.validar ==='true'){
            this._router.navigate(['']);
        }
        else{
            alert('Datos equivocados');
                   
            //this.user='';
            //this.password='';
        }
    }

}
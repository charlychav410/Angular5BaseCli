import { Component, OnInit } from "@angular/core";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import { lstat } from "fs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})


export class LoginComponent implements OnInit{

constructor (private _loginService:LoginService){

}

ngOnInit(){

}
loginbutton(){

}
}
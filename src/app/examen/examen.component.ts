import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ExamenModel } from "../model/examen-model";
import { ExamenService } from "../services/examen.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-examen',
    templateUrl: './examen.component.html',
    styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
    

    @Input('examen-data') examenData: ExamenModel;
    //gitHubData: GitHubModel; aqui se 
    user:string;
    password:string;
    passwordConfirm:string;
    email:string;
    name:string;
   
    constructor(public _examenService:ExamenService,public _router:Router){

        this.examenData = new ExamenModel();
        
    }
    ngOnInit(){
    
    }
    registrobutton(){
       


        let primer=this._examenService.evaluaUser(this.user);
        let segundo=this._examenService.evaluaUser(this.user);
        let tercero=this._examenService.evaluaUser(this.user);
        let cuarto=this._examenService.evaluaUser(this.user);
        let quinto=this._examenService.evaluaUser(this.user);
        if(primer===true&&segundo===true&&tercero===true&&cuarto===true&&quinto===true)
        {
           
            this._router.navigate(['']);

        }
    }

    }
   
   
    
    
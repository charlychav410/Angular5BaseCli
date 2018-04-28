import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ExamenService {

  constructor() { }
    public user: string;
    public password: string;
    public confirmPassword: string;
    public correo : string;
    public nombre : string;
    primero= new Boolean;
    segundo= new Boolean;
    public i: Number;
    public validaMayusc: Number;
    public validaMinusc: Number;
    public validaNum:Number;
    public validaNombre:Number;
    public validaChar:Number;

public evaluaUser(user:string){

    if (user.length>5 && user.length<15){
        return true
    }
    else {
        return false
    }

}

public evaluaPassword( password:string){
    this.primero =  (password.length>4);
        var expresion = /[A-Z]/g;
        var expresion2 = /[a-z]/g;
        var expresion3 = /[0-9]/g;        
        this.validaMayusc = password.match(expresion).length;
        this.validaMinusc = password.match(expresion2).length;
        this.validaNum = password.match(expresion3).length;
        
    if (this.primero && this.validaMayusc >0 && this.validaMinusc >0 && this.validaNum >0){
        return true;
        }
        else{
            return false
        }
    }


  public evaluaConfirmPassword(password:string, passwordConfirm:string){
 
    if (password===passwordConfirm){
        return true
    }
    else{
        return false
    }
    

}
public evaluaCorreo(correo:string){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(correo) ? true : false;
    
}
public evaluaNombre(name:string){
    var expresionN = /[0-9]/g; 
    var expresionC = /[!,#,$,%,&,/,(,),=,?,¡,¿,',´,+,},{,}]/g; 
    this.validaNombre= name.match(expresionN).length;
    this.validaChar=name.match(expresionC).length;
    if (this.validaNombre===0 && this.validaChar===0){
        return true
    }
    else{
        return false;
    } 

}

}
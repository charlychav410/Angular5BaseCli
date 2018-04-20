import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {

  constructor() { }

evaluaUser(user:string, password:string){
 
    if(user==='Carlos'&& password === '123'){
      return 'true'
    }
    else{
      return 'false'
    }

  }

}





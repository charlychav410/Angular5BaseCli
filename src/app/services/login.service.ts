import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
  private user=new Subject<string>();
  private password=new Subject<string>();
  constructor() { }

evaluaUser(newUser:string, newPassword:string){
    return (this.password.next(newPassword)===this.user.next(newUser));
}



}

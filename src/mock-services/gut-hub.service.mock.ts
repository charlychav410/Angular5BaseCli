import {Injectable} from"@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {GitHubModel} from "../app/model/git-hub-model";


@Injectable()
export class GitHubServiceMock {
    private _getUsersUrl='https://api.github.com/users';
   // private _getUsersUrl='http://10.11.1.100:8080/users';

    constructor (private _httpClient:HttpClient){

    }

    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
            gitHubObj.avatarurl='';
            gitHubObj.login=userName;            
            gitHubObj.name='Carlos Pacheco';
            gitHubObj.followers=0;
            gitHubObj.following=0;

          
        return Observable.of(gitHubObj)
                         .catch(this.handleError);

    }

    
handleError(error:any){
    console.log(`Error: ${error}`);
    return Observable.throw(error.json() || 'Server error' );
}
}
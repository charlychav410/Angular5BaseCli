import { Component, OnInit } from '@angular/core';
import{GitHubService} from "../services/gut-hub.service";
import {Observer, Observable} from "rxjs/Rx";
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})




export class MainComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  //gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;

  constructor(private _gitHubService: GitHubService) {
    this.gitHubDataList = new Array<GitHubModel>();
   }

  ngOnInit(){ 
  }
  onSearchUser(userName:string){
    this._gitHubService
    .getUserInfo(userName)
    .subscribe(value=>{
 //this.gitHubData= new GitHubModel(); antes del array
 //this.gitHubData = value;
 this.gitHubDataList.push(value);
});
  }
  onUserClick(evento:GitHubModel){ 
    this.gitHubDataList = this.gitHubDataList.filter(value => {value= evento});
  }
}

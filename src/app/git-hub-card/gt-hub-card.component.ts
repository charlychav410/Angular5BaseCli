import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './gt-hub-card.component.html',
    styleUrls: ['./gt-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit, OnDestroy {
    
    gitHubData: GitHubModel;
    constructor(){
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatarurl = "https://cdn2.iconfinder.com/data/icons/outline-basic-ui-set/139/Profile-Outline-512.png";
        this.gitHubData.followers = 1;
        this.gitHubData.following = 1;
        this.gitHubData.login= "charlychav410";
        this.gitHubData.name = "Carlos Pacheco";
    }
    ngOnInit(){
    }
    ngOnDestroy() {
    }
    
}
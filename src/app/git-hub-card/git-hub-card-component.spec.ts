import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { GitHubModel } from "../model/git-hub-model";
import { GitHubCardComponent } from './gt-hub-card.component';

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData: GitHubModel;
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ GitHubCardComponent ],
      providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      gitHubData=new GitHubModel();
      gitHubData.avatarurl='';
      gitHubData.login='charlychav410';            
      gitHubData.name='Carlos';
      gitHubData.followers=0;
      gitHubData.following=0;
      //return gitHubData;
      fixture = TestBed.createComponent(GitHubCardComponent);
      component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model',()=>{
      component.gitHubData=gitHubData;
      fixture.detectChanges();
      expect(component).toBeTruthy();

    });

    it('should validate model in the view',()=>{
        component.gitHubData=gitHubData;
        const compiled = fixture.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('.data-container #name').textContent)
                       .toContain(`Nombre: ${gitHubData.name}`);
        expect(compiled.querySelector('.data-container #login').textContent)
                       .toContain(`UserName: ${gitHubData.login}`);
        expect(compiled.querySelector('.data-container #followers').textContent)
                       .toContain(`Followers: ${gitHubData.followers}`);
        expect(compiled.querySelector('.data-container #following').textContent)
                       .toContain(`Following: ${gitHubData.following}`);
  
      });
});

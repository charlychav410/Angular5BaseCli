import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubModel } from "../model/git-hub-model";
import { SearchUserComponent } from './search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;
  let gitHubData: GitHubModel;
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ SearchUserComponent ],
      imports: [FormsModule],
      providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
     
      fixture = TestBed.createComponent(SearchUserComponent);
      component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should callonSearchClick', () =>{
    component.userName = 'charlychav410';
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('charlychav410');
    });
component.onSearchClick();
  })
 
  it('should callonSearchClick in view', () =>{
    component.userName = 'charlychav410';
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('charlychav410');
    });
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
});
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from "../git-hub-card/gt-hub-card.component";
import {SearchUserComponent} from "../search-user/search-user.component";
import { MainComponent } from './main.component';
import {MATERIAL_COMPONENTS} from "../app.module";
describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
        SearchUserComponent,
        GitHubCardComponent ],
        imports: [MATERIAL_COMPONENTS, 
          FormsModule, 
          HttpClientModule,
          BrowserAnimationsModule
        ],
          providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

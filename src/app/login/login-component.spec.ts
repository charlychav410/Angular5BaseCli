import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent, routes } from '../app.component';
import { FormsModule } from '@angular/forms';
import{APP_BASE_HREF} from '@angular/common';

import { GitHubCardComponent } from "../git-hub-card/gt-hub-card.component";
import {SearchUserComponent} from "../search-user/search-user.component";
import { AboutComponent } from '../about/about.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { LoginComponent } from '../login/login.component';
import {PadreComponent} from '../padre/padre.component';
import { ContactComponent } from '../contact/contact.component';
import { MainComponent } from '../main/main.component';
import { APP_PROVIDERS } from '../app.providers';
import{MATERIAL_COMPONENTS} from "../app.module";
import { LoginService } from '../services/login.service';
import { RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let servicio: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MATERIAL_COMPONENTS,
        FormsModule,
        RouterModule.forRoot(routes)],
      declarations: [ LoginComponent,
        AppComponent,
        PasivoComponent,
        ReactivoComponent,
        LoginService,
        LoginComponent,
        MainComponent,
        GitHubCardComponent,
        AboutComponent,
        PadreComponent,
        SearchUserComponent,
        AboutComponent, 
      ContactComponent],
      providers:[APP_PROVIDERS, {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      //return gitHubData;
      fixture = TestBed.createComponent(LoginComponent);
      servicio = fixture.componentInstance;
    fixture.detectChanges();
      
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(servicio).toBeTruthy();
  });

  it('should validate service',()=>{
     servicio.password='';
     servicio.user='';
     let recibe = servicio._loginService.evaluaUser(servicio.user,servicio.password);
     expect(recibe).toEqual('false');
    });
    let compiled = fixture.nativeElement;
    compiled.querySelector('Login').click();
});
//let navigateSpy = spyOn((<any>component).router, 'navigate');
//expect(navigateSpy).toHaveBeenCalledWith(['/expectedUrl']);
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
import { RouterModule, Router } from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ExamenComponent } from './examen.component';
import { HttpClient } from "@angular/common/http";
import { ExamenService } from '../services/examen.service';
import { ExamenServiceMock } from '../../mock-services/examen.service.mock';

describe('LoginComponent', () => {
  let service:ExamenServiceMock;
  let component: ExamenComponent;
  let _router:Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MATERIAL_COMPONENTS,
        FormsModule,
        RouterModule.forRoot(routes)],
      declarations: [ LoginComponent,
        AppComponent,
        PasivoComponent,
        ReactivoComponent,
        MainComponent,
        ExamenComponent,
        AboutComponent,
        GitHubCardComponent,
        PadreComponent,
        SearchUserComponent, 
      ContactComponent],
      providers:[APP_PROVIDERS, {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      
      
      service = new ExamenServiceMock();
      component = new ExamenComponent(service, _router);
    
        });

 // it('should create', () => {
   // expect(servicio).toBeTruthy();
  //});
  
  //80

  

    it('should validate user',()=>{
    
      expect(component._examenService.evaluaUser('carlos410')).toEqual(true);
      
      });
      it('should validate password',()=>{
    
        expect(component._examenService.evaluaPassword('Aghgj67')).toEqual(true);
        
        });
        it('should validate passwordequal',()=>{
    
            expect(component._examenService.evaluaConfirmPassword('Aghgj67','Aghgj67')).toEqual(true);
            
            });
        it('should validate correo',()=>{
    
                expect(component._examenService.evaluaCorreo('carkshuk@jsdhjk.com')).toEqual(true);
                
                });
         it('should validate nombre',()=>{
    
                    expect(component._examenService.evaluaNombre('Carlos Eduardo')).toEqual(true);
                    
                    });


});

import { TestBed, async } from '@angular/core/testing';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import{APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GitHubCardComponent } from "./git-hub-card/gt-hub-card.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import { AppComponent, routes } from './app.component';
import { AboutComponent } from './about/about.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { LoginComponent } from './login/login.component';
import {PadreComponent} from './padre/padre.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from './app.providers';
import{MATERIAL_COMPONENTS} from "./app.module";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PasivoComponent,
        ReactivoComponent,
        LoginComponent,
        MainComponent,
        GitHubCardComponent,
        ContactComponent,
        AboutComponent,
        PadreComponent,
        SearchUserComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes) 
      ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('prueba',()=>{
    let texto = 'Carlos';
    expect(texto).toEqual('Carlos');
  }

  );
 it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});

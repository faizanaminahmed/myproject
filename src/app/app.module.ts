import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MyprojserviceService } from './myprojservice.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ArticlelistComponent,
    NewarticleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'navbar',
        component:NavbarComponent
      },
      {
        path:'newarticle',
        component:NewarticleComponent
      },
      {
        path:'articelist',
        component:ArticlelistComponent
      }
    ])
      
    
  ],
  providers: [MyprojserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
=======
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonService} from './services/person-service.service';
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    PersonListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'persons', component: PersonListComponent},
    ])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608

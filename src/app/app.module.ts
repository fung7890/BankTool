import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { Fill1Component } from './fill1/fill1.component';
import { TopicsService } from './topics.service';
import { Fill2Component } from './fill2/fill2.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdSidenavModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from './data.service';




const routes = [

  { path: 'overview', component: OverviewComponent},
  { path: 'overview/:subject', component: Fill1Component, children: [
    {path: ':id', component: Fill2Component}
  ]},
  {path: '**', redirectTo: '/overview'}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyA31es21lsPyEv28tyHddywuQ_6njhwUVc',
  authDomain: 'banktool-de3c2.firebaseapp.com',
  databaseURL: 'https://banktool-de3c2.firebaseio.com',
  projectId: 'banktool-de3c2',
  storageBucket: '',
  messagingSenderId: '960923219494'
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OverviewComponent,
    Fill1Component,
    Fill2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MdSidenavModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [TopicsService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

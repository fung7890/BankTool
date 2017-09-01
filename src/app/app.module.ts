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


const routes = [

  { path: 'overview', component: OverviewComponent},
  { path: ':subject', component: Fill1Component, children: [
    {path: ':id', component: Fill2Component}
  ]},
  {path: '**', redirectTo: '/overview'}
];

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
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

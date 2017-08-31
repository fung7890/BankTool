import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { Fill1Component } from './fill1/fill1.component';
import { TopicsService } from './topics.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OverviewComponent,
    Fill1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

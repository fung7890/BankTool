import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { Fill1Component } from './fill1/fill1.component';


/*defining routes*/
export const router: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: 'overview', component: OverviewComponent},
  { path: 'fill1', component: Fill1Component, children: [
    { path: ':subject', component: Fill1Component},
  ]},
  


  // {
  //   path: 'overview',
  //   children:[
  //     { path: '',
  //       component: OverviewComponent,
  //     },
  //     {
  //       path: 'fill1',
  //       component: Fill1Component
  //     }
  //   ]

  // },
  

  {path: '**', redirectTo:'/'}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

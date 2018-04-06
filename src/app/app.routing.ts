import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Globals } from '../Globals';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {DashboardModule} from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { 
   AuthGuard 
} from './auth.guard';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        canActivate: [AuthGuard],
        loadChildren: './components/components.module#ComponentsModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
  
  // {
  //   path: '',
  //   redirectTo: 'pages',
  //   pathMatch: 'prefix',
  // },
  // {
  //   path: '',
  //   component: FullLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: './dashboard/dashboard.module#DashboardModule'
  //     },
  //     {
  //       path: 'components',
  //       loadChildren: './components/components.module#ComponentsModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'pages',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './pages/pages.module#PagesModule',
  //     }
  //   ]
  // }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

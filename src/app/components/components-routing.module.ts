import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';


const routes: Routes = [
  {
    // path: '',
    // component: AgentComponent,
    // data: {
    //   title: 'Dashboard'
    // }

    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'agent',
        component: AgentComponent,
        data: {
          title: 'Agent'
        }
      }
      
    ]
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

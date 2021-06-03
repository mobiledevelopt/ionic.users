import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopNinePage } from './top-nine.page';

const routes: Routes = [
  {
    path: '',
    component: TopNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopNinePageRoutingModule { }

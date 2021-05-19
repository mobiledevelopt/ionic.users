/*
  Authors : dimarket
  Website : https://#/
  App Name : dimarket
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://#/license
  Copyright © 2020-present dimarket.
*/
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

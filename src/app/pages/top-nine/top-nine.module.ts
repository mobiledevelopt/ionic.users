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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopNinePageRoutingModule } from './top-nine-routing.module';

import { TopNinePage } from './top-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopNinePageRoutingModule
  ],
  declarations: [TopNinePage]
})
export class TopNinePageModule { }

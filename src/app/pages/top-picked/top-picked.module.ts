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

import { TopPickedPageRoutingModule } from './top-picked-routing.module';

import { TopPickedPage } from './top-picked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopPickedPageRoutingModule
  ],
  declarations: [TopPickedPage]
})
export class TopPickedPageModule { }

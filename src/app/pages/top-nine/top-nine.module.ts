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

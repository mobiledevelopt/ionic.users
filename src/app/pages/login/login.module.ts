/*
  Authors : leonidas (Asman)
  Website : https://leonidas.com/
  App Name : ionic 5 dimarket app
  Created : 01-Jan-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://leonidas.com/license
  Copyright  © 2021-present leonidas.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }

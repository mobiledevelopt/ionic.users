import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { QrisPageRoutingModule } from "./qris-routing.module";

import { QrisPage } from "./qris.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, QrisPageRoutingModule],
  declarations: [QrisPage],
})
export class QrisPageModule {}

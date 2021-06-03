import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QrisPage } from "./qris.page";

const routes: Routes = [
  {
    path: "",
    component: QrisPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrisPageRoutingModule {}

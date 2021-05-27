/*
  Authors : dimarket
  Website : https://#/
  App Name : dimarket
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://#/license
  Copyright © 2020-present dimarket.
*/
import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.page.html",
  styleUrls: ["./transfer.page.scss"],
})
export class TransferPage implements OnInit {
  dummy = Array(5);
  list: any[] = [];
  dummyList: any[] = [];
  page = 1;
  constructor(
    public api: ApiService,
    public util: UtilService,
    private navCtrl: NavController,
    public cart: CartService
  ) {
    this.getOffers();
  }

  ngOnInit() {}

  getOffers() {}

  back() {
    this.navCtrl.back();
  }
}

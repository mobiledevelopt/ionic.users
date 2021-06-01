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
  bank: any;
  bank_number: any;
  an_bank: any;

  constructor(
    public api: ApiService,
    public util: UtilService,
    private navCtrl: NavController,
    public cart: CartService
  ) {
    this.getOffers();
  }

  ngOnInit() {}

  getOffers() {
    this.api.get("general/getBank").subscribe(
      (data: any) => {
        console.log("=>related=>", data.data[0]);
        if (data && data.status === 200 && data.data && data.data.length) {
          const products = data.data[0];
          this.bank = products.bank;
          this.bank_number = products.bank_number;
          this.an_bank = products.an_bank;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  back() {
    this.navCtrl.back();
  }
}

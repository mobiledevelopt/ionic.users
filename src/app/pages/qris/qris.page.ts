import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-qris",
  templateUrl: "./qris.page.html",
  styleUrls: ["./qris.page.scss"],
})
export class QrisPage implements OnInit {
  dummy = Array(5);
  list: any[] = [];
  dummyList: any[] = [];
  qris: any;
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

  getOffers() {
    this.api.get("general/getBank").subscribe(
      (data: any) => {
        console.log("=>related=>", data.data[0]);
        if (data && data.status === 200 && data.data && data.data.length) {
          const products = data.data[0];
          this.qris = products.qris;
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

import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { CartService } from "src/app/services/cart.service";
import { TimeComponent } from "src/app/components/time/time.component";
import * as moment from "moment";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-delivery-options",
  templateUrl: "./delivery-options.page.html",
  styleUrls: ["./delivery-options.page.scss"],
})
export class DeliveryOptionsPage implements OnInit {
  deliveryOption: any = "home";
  catatan_belanja: any;
  transaksiOption: any = "regular";

  storeAddress: any[] = [];
  timeSlot: any[] = [];
  time: any;
  datetime: any;
  tanggal: any;
  min_tanggal: any;
  tanggal_pesan: String;
  jam_pesan: any;
  min_date: any;

  constructor(
    private navCtrl: NavController,
    public api: ApiService,
    public util: UtilService,
    public cart: CartService,
    private popoverController: PopoverController,
    private router: Router
  ) {
    this.getStoreList();
    this.getTimeSlot();
    this.datetime = "today";
    this.time = this.util.getString("") + moment().format("dddd, DD-MMMM-YYYY");
    this.tanggal = new Date();
    this.min_tanggal = new Date();
    this.tanggal_pesan = this.tanggal.toISOString();
    this.min_date = new Date();
    this.min_date.setDate(this.min_date.getDate() - 1);
  }

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  getTimeSlot(){
    const info = [...new Set(this.cart.cart.map((item) => item.store_id))];
    console.log("store iddss==================>>", info);
    // test
    // info.push(10, 17);
    // test
    const param = {
      id: info.join(),
    };
    this.api.post("timeslot", param).subscribe(
      (data: any) => {
        console.log(data);
        if (data && data.status === 200 && data.data.length) {
          this.timeSlot = data.data;
          this.jam_pesan = data.data[0].time;
           console.log(this.timeSlot);
        } else {
          this.util.showToast(
            this.util.getString("Timeslote Not Found"),
            "danger",
            "bottom"
          );
          this.back();
        }
      },
      (error) => {
        console.log("error", error);
        this.util.showToast(
          this.util.getString("Something went wrong"),
          "danger",
          "bottom"
        );
      }
    );
  }

  getStoreList() {
    const info = [...new Set(this.cart.cart.map((item) => item.store_id))];
    console.log("store iddss==================>>", info);
    // test
    // info.push(10, 17);
    // test
    const param = {
      id: info.join(),
    };
    this.api.post("stores/getStoresData", param).subscribe(
      (data: any) => {
        console.log(data);
        if (data && data.status === 200 && data.data.length) {
          this.storeAddress = data.data;
          this.cart.stores = this.storeAddress;
        } else {
          this.util.showToast(
            this.util.getString("No Stores Found"),
            "danger",
            "bottom"
          );
          this.back();
        }
      },
      (error) => {
        console.log("error", error);
        this.util.showToast(
          this.util.getString("Something went wrong"),
          "danger",
          "bottom"
        );
      }
    );
  }

  async openTime(ev) {
    const popover = await this.popoverController.create({
      component: TimeComponent,
      event: ev,
      mode: "ios",
    });
    popover.onDidDismiss().then((data) => {
      console.log(data.data);
      if (data.data) {
        if (data.data === "today") {
          this.datetime = "today";
          this.time =
            this.util.getString("Today - ") +
            moment().format("dddd, DD-MMMM-YYYY");
        } else {
          this.datetime = "tomorrow";
          this.time =
            this.util.getString("Tomorrow - ") +
            moment().add(1, "days").format("dddd, DD-MMMM-YYYY");
        }
      }
    });
    await popover.present();
  }

  payment() {
    this.cart.deliveryAt = this.deliveryOption;
    this.cart.catatan_belanja = this.catatan_belanja;
    this.cart.transaksiOption = this.transaksiOption;
    this.cart.datetime = this.tanggal_pesan;
    this.cart.jam = this.jam_pesan;
    if (this.deliveryOption === "home" && this.transaksiOption == "regular") {
      console.log("address");
      const param: NavigationExtras = {
        queryParams: {
          from: "cart",
        },
      };
      this.cart.calcuate();
      this.router.navigate(["tabs/cart/address"], param);
    } else if (
      this.deliveryOption === "home" &&
      this.transaksiOption == "express"
    ) {
      const param: NavigationExtras = {
        queryParams: {
          from: "cart",
        },
      };
      this.cart.calcuate();
      this.router.navigate(["tabs/cart/address"], param);
    } else {
      console.log("payment");
      this.cart.calcuate();
      this.router.navigate(["tabs/cart/payment"]);
    }
  }
}

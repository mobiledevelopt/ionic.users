import { Component, OnInit } from "@angular/core";
import { UtilService } from "../../services/util.service";
import { Router, NavigationExtras } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import * as moment from "moment";
@Component({
  selector: "app-notif",
  templateUrl: "./notif.page.html",
  styleUrls: ["./notif.page.scss"],
})
export class NotifPage implements OnInit {
  dummy: any[] = [];
  orders: any[] = [];
  constructor(
    public util: UtilService,
    private router: Router,
    public api: ApiService
  ) {}

  ionViewWillEnter() {
    this.getOrders("", false);
  }
  getOrders(event, haveRefresh) {
    this.dummy = Array(15);
    this.orders = [];

    this.api.get("Notif").subscribe(
      (data: any) => {
        console.log("ini ada");
        console.log(data);
        this.dummy = [];
        if (data && data.status === 200 && data.data.length > 0) {
          // this.orders = data.data;
          const orders = data.data;
          orders.forEach((element) => {
            // if (
            //   ((x) => {
            //     try {
            //       JSON.parse(x);
            //       return true;
            //     } catch (e) {
            //       return false;
            //     }
            //   })(element.orders)
            // ) {
            //   // element.orders = JSON.parse(element.orders);
            element.date = moment(element.date).format("DD-MMMM-YYYY");
            // }
          });
          this.orders = orders;
          if (haveRefresh) {
            event.target.complete();
          }
          console.log("orderss==>?", this.orders);
        } else {
          if (haveRefresh) {
            event.target.complete();
          }
        }
      },
      (error) => {
        console.log(error);
        this.dummy = [];
        this.orders = [];
        this.util.errorToast(this.util.getString("Something went wrong"));
      }
    );
  }

  ngOnInit() {}

  openMenu() {
    this.util.openMenu();
  }

  goToOrder(val) {
    const navData: NavigationExtras = {
      queryParams: {
        id: val.id,
      },
    };
    this.router.navigate(["/order-details"], navData);
  }

  doRefresh(event) {
    console.log(event);
    this.getOrders(event, true);
  }
}

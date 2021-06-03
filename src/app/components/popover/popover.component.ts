/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/

import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.scss"],
})
export class PopoverComponent implements OnInit {
  constructor(
    private popoverController: PopoverController,
    public util: UtilService,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {}
  select(type) {
    console.log(this.util.numberInfo);

    this.popoverController.dismiss(type);
    if (type == "delete") {
      this.callStore(this.util.numberInfo);
    }
  }

  callStore(item) {
    if (item) {
      // window.open('tel:' + item);
      this.iab.create("tel:0" + item, "_system");
    } else {
      this.util.errorToast(this.util.getString("Number not found"));
    }
  }
}

/*
  Authors : dimarket
  Website : https://#/
  App Name : dimarket
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://#/license
  Copyright © 2020-present dimarket.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StripePaymentsPage } from './stripe-payments.page';

describe('StripePaymentsPage', () => {
  let component: StripePaymentsPage;
  let fixture: ComponentFixture<StripePaymentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripePaymentsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StripePaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

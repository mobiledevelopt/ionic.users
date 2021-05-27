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

import { QrisPage } from './qris.page';

describe('QrisPage', () => {
  let component: QrisPage;
  let fixture: ComponentFixture<QrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrisPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

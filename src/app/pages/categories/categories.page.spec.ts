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

import { CategoriesPage } from './categories.page';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

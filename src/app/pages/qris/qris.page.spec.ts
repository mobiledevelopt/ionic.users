import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { QrisPage } from "./qris.page";

describe("QrisPage", () => {
  let component: QrisPage;
  let fixture: ComponentFixture<QrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrisPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(QrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

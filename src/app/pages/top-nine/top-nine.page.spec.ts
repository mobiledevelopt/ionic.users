import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopNinePage } from './top-nine.page';

describe('TopNinePage', () => {
  let component: TopNinePage;
  let fixture: ComponentFixture<TopNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNinePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

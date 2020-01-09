import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslaPage } from './isla.page';

describe('IslaPage', () => {
  let component: IslaPage;
  let fixture: ComponentFixture<IslaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

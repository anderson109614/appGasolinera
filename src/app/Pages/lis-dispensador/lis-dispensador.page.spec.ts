import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisDispensadorPage } from './lis-dispensador.page';

describe('LisDispensadorPage', () => {
  let component: LisDispensadorPage;
  let fixture: ComponentFixture<LisDispensadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisDispensadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisDispensadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

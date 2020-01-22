import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispensadorPage } from './dispensador.page';

describe('DispensadorPage', () => {
  let component: DispensadorPage;
  let fixture: ComponentFixture<DispensadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispensadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

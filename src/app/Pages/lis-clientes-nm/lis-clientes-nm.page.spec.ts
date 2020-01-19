import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisClientesNMPage } from './lis-clientes-nm.page';

describe('LisClientesNMPage', () => {
  let component: LisClientesNMPage;
  let fixture: ComponentFixture<LisClientesNMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisClientesNMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisClientesNMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

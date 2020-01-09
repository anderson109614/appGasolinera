import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CombustiblePage } from './combustible.page';

describe('CombustiblePage', () => {
  let component: CombustiblePage;
  let fixture: ComponentFixture<CombustiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombustiblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CombustiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

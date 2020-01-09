import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListReportesPage } from './list-reportes.page';

describe('ListReportesPage', () => {
  let component: ListReportesPage;
  let fixture: ComponentFixture<ListReportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReportesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListReportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

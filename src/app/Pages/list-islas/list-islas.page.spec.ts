import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListIslasPage } from './list-islas.page';

describe('ListIslasPage', () => {
  let component: ListIslasPage;
  let fixture: ComponentFixture<ListIslasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIslasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListIslasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

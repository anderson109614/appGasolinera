import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCombustiblesPage } from './list-combustibles.page';

describe('ListCombustiblesPage', () => {
  let component: ListCombustiblesPage;
  let fixture: ComponentFixture<ListCombustiblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCombustiblesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCombustiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

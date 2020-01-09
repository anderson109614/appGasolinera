import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslasPage } from './islas.page';

describe('IslasPage', () => {
  let component: IslasPage;
  let fixture: ComponentFixture<IslasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

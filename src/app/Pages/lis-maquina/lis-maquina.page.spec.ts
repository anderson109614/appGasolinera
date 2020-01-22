import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisMaquinaPage } from './lis-maquina.page';

describe('LisMaquinaPage', () => {
  let component: LisMaquinaPage;
  let fixture: ComponentFixture<LisMaquinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisMaquinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisMaquinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComparativoPage } from './comparativo.page';

describe('ComparativoPage', () => {
  let component: ComparativoPage;
  let fixture: ComponentFixture<ComparativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComparativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

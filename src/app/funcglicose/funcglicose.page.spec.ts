import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncglicosePage } from './funcglicose.page';

describe('FuncglicosePage', () => {
  let component: FuncglicosePage;
  let fixture: ComponentFixture<FuncglicosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncglicosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncglicosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

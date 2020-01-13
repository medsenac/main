import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncpamPage } from './funcpam.page';

describe('FuncpamPage', () => {
  let component: FuncpamPage;
  let fixture: ComponentFixture<FuncpamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncpamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncpamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

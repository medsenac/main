import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncimcPage } from './funcimc.page';

describe('FuncimcPage', () => {
  let component: FuncimcPage;
  let fixture: ComponentFixture<FuncimcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncimcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncimcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

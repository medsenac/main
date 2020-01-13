import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditadmPage } from './editadm.page';

describe('EditadmPage', () => {
  let component: EditadmPage;
  let fixture: ComponentFixture<EditadmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

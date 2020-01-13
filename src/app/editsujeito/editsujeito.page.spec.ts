import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditsujeitoPage } from './editsujeito.page';

describe('EditsujeitoPage', () => {
  let component: EditsujeitoPage;
  let fixture: ComponentFixture<EditsujeitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsujeitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditsujeitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

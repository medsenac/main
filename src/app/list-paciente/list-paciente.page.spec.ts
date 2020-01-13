import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPacientePage } from './list-paciente.page';

describe('ListPacientePage', () => {
  let component: ListPacientePage;
  let fixture: ComponentFixture<ListPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

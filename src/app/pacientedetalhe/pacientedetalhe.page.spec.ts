import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientedetalhePage } from './pacientedetalhe.page';

describe('PacientedetalhePage', () => {
  let component: PacientedetalhePage;
  let fixture: ComponentFixture<PacientedetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientedetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientedetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

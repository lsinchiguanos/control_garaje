import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentesListadoTablaComponent } from './residentes-listado-tabla.component';

describe('ResidentesListadoTablaComponent', () => {
  let component: ResidentesListadoTablaComponent;
  let fixture: ComponentFixture<ResidentesListadoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentesListadoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentesListadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoListadoTablaComponent } from './vehiculo-listado-tabla.component';

describe('VehiculoListadoTablaComponent', () => {
  let component: VehiculoListadoTablaComponent;
  let fixture: ComponentFixture<VehiculoListadoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoListadoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

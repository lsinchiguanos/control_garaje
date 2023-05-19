import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoListadoComponent } from './vehiculo-listado.component';

describe('VehiculoListadoComponent', () => {
  let component: VehiculoListadoComponent;
  let fixture: ComponentFixture<VehiculoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTipoTablaComponent } from './vehiculo-tipo-tabla.component';

describe('VehiculoTipoTablaComponent', () => {
  let component: VehiculoTipoTablaComponent;
  let fixture: ComponentFixture<VehiculoTipoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoTipoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoTipoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

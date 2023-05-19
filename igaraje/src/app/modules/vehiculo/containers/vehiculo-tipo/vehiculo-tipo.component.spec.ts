import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTipoComponent } from './vehiculo-tipo.component';

describe('VehiculoTipoComponent', () => {
  let component: VehiculoTipoComponent;
  let fixture: ComponentFixture<VehiculoTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

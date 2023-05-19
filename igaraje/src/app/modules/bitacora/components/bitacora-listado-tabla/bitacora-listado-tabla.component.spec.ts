import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraListadoTablaComponent } from './bitacora-listado-tabla.component';

describe('BitacoraListadoTablaComponent', () => {
  let component: BitacoraListadoTablaComponent;
  let fixture: ComponentFixture<BitacoraListadoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraListadoTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraListadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

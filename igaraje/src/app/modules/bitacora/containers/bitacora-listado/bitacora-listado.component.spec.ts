import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraListadoComponent } from './bitacora-listado.component';

describe('BitacoraListadoComponent', () => {
  let component: BitacoraListadoComponent;
  let fixture: ComponentFixture<BitacoraListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

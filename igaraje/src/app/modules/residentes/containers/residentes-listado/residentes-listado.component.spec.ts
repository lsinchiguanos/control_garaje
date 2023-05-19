import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentesListadoComponent } from './residentes-listado.component';

describe('ResidentesListadoComponent', () => {
  let component: ResidentesListadoComponent;
  let fixture: ComponentFixture<ResidentesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

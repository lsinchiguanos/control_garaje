import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EserverComponent } from './eserver.component';

describe('EserverComponent', () => {
  let component: EserverComponent;
  let fixture: ComponentFixture<EserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

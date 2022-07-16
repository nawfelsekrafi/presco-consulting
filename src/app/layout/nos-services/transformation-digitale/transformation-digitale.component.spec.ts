import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationDigitaleComponent } from './transformation-digitale.component';

describe('TransformationDigitaleComponent', () => {
  let component: TransformationDigitaleComponent;
  let fixture: ComponentFixture<TransformationDigitaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationDigitaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationDigitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

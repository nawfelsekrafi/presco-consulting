import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxDeveloppementComponent } from './ux-developpement.component';

describe('UxDeveloppementComponent', () => {
  let component: UxDeveloppementComponent;
  let fixture: ComponentFixture<UxDeveloppementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxDeveloppementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxDeveloppementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

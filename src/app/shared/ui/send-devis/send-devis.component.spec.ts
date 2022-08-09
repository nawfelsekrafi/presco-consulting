import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDevisComponent } from './send-devis.component';

describe('SendDevisComponent', () => {
  let component: SendDevisComponent;
  let fixture: ComponentFixture<SendDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

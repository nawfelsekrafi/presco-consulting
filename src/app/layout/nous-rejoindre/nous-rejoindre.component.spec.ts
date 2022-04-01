import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NousRejoindreComponent } from './nous-rejoindre.component';

describe('NousRejoindreComponent', () => {
  let component: NousRejoindreComponent;
  let fixture: ComponentFixture<NousRejoindreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NousRejoindreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NousRejoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

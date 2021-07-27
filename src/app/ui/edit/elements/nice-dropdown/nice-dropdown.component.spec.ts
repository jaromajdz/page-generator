import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceDropdownComponent } from './nice-dropdown.component';

describe('NiceDropdownComponent', () => {
  let component: NiceDropdownComponent;
  let fixture: ComponentFixture<NiceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiceDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

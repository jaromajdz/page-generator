import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionareaComponent } from './actionarea.component';

describe('ActionareaComponent', () => {
  let component: ActionareaComponent;
  let fixture: ComponentFixture<ActionareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

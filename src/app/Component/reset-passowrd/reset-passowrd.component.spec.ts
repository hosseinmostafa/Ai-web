import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassowrdComponent } from './reset-passowrd.component';

describe('ResetPassowrdComponent', () => {
  let component: ResetPassowrdComponent;
  let fixture: ComponentFixture<ResetPassowrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPassowrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

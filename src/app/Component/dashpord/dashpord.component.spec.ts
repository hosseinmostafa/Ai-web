import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpordComponent } from './dashpord.component';

describe('DashpordComponent', () => {
  let component: DashpordComponent;
  let fixture: ComponentFixture<DashpordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashpordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashpordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

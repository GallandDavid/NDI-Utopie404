import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoelComponent } from './noel.component';

describe('NoelComponent', () => {
  let component: NoelComponent;
  let fixture: ComponentFixture<NoelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoelComponent]
    });
    fixture = TestBed.createComponent(NoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

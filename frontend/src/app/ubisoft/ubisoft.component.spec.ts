import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbisoftComponent } from './ubisoft.component';

describe('UbisoftComponent', () => {
  let component: UbisoftComponent;
  let fixture: ComponentFixture<UbisoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbisoftComponent]
    });
    fixture = TestBed.createComponent(UbisoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaireComponent } from './glossaire.component';

describe('GlossaireComponent', () => {
  let component: GlossaireComponent;
  let fixture: ComponentFixture<GlossaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlossaireComponent]
    });
    fixture = TestBed.createComponent(GlossaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

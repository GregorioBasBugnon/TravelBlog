import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelReviewsComponent } from './travel-reviews.component';

describe('TravelReviewsComponent', () => {
  let component: TravelReviewsComponent;
  let fixture: ComponentFixture<TravelReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

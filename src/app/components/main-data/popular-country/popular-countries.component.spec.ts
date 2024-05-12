import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCountryComponent } from './popular-country.component';

describe('PopularCountryComponent', () => {
  let component: PopularCountryComponent;
  let fixture: ComponentFixture<PopularCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

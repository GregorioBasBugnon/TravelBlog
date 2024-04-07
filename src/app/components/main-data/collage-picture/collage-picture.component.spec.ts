import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagePictureComponent } from './collage-picture.component';

describe('CollagePictureComponent', () => {
  let component: CollagePictureComponent;
  let fixture: ComponentFixture<CollagePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollagePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollagePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

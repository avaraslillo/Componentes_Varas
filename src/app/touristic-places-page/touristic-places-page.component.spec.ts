import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristicPlacesPageComponent } from './touristic-places-page.component';

describe('TouristicPlacesPageComponent', () => {
  let component: TouristicPlacesPageComponent;
  let fixture: ComponentFixture<TouristicPlacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristicPlacesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouristicPlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

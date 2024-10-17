import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackDrivingPage } from './track-driving.page';

describe('TrackDrivingPage', () => {
  let component: TrackDrivingPage;
  let fixture: ComponentFixture<TrackDrivingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDrivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

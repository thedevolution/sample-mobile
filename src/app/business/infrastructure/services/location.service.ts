import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinates } from '../../core-domain/domain/coordinates';

const GEOLOCATION_ERRORS = [
  'Browser does not support location services',
  'You have rejected access to your location',
  'Unable to determine your location',
  'Service timeout has been reached'
];

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public trackLocation(): Observable<Coordinates> {
    return new Observable<Coordinates>(observer => {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude, accuracy, speed } = position.coords;
          observer.next({ latitude, longitude, accuracy, speed });
        },
        (error) => observer.error(error),
        { enableHighAccuracy: true } // Optional: Enable high accuracy
      );
  
      return () => navigator.geolocation.clearWatch(watchId);
    });
  }
}

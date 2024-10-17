import { Injectable } from '@angular/core';
import { Coordinates } from '../../core-domain/domain/coordinates';
import { Vincenty } from "tsgeo/Distance/Vincenty";
import { Coordinate } from "tsgeo/Coordinate";

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  private readonly metersInAMile: number = 1609.34;

  constructor() { }

  public calculateDistanceInMiles(initialCoordinates: Coordinates, finalCoordinates: Coordinates): number {
    /*
    const earthRadius = 3958.8; // Radius of the earth in miles
  
    const lat1Rad = this.toRadians(initialCoordinates.latitude);
    const lon1Rad = this.toRadians(initialCoordinates.longitude);
    const lat2Rad = this.toRadians(finalCoordinates.latitude);
    const lon2Rad = this.toRadians(finalCoordinates.longitude);
  
    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;
  
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));   
  
    const distance = earthRadius * c;
  
    return distance;
    */
    if (finalCoordinates.speed && finalCoordinates.speed > 1) {
      const calculator = new Vincenty();
      let coordinate1 = new Coordinate(initialCoordinates.latitude, initialCoordinates.longitude); // Mauna Kea Summit
      let coordinate2 = new Coordinate(finalCoordinates.latitude, finalCoordinates.longitude);
      var distance = calculator.getDistance(coordinate1, coordinate2);
      return distance !== 0 ? distance / this.metersInAMile : 0; 
    }
    return 0;
  }

  public toRadians(degrees: number): number {
    return degrees * Math.PI / 180;

  }
}

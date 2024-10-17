import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { HeaderPage } from "../../components/header/header.page";
import { DistanceService } from 'src/app/business/infrastructure/services/distance.service';
import { LocationService } from 'src/app/business/infrastructure/services/location.service';
import { Coordinates } from 'src/app/business/core-domain/domain/coordinates';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-driving',
  templateUrl: './track-driving.page.html',
  styleUrls: ['./track-driving.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class TrackDrivingPage implements OnInit, OnDestroy {

  milliseconds: number = 0;
  seconds: number = 0;
  minutes: number = 0;

  intervalId: any;
  isRunning: boolean = false;
  distance: number = 0;
  speed: number = 0;
  private previousCoordinates: Coordinates | undefined;
  private locationSubscription: Subscription | undefined;

  constructor(private distanceService: DistanceService, private locationService: LocationService) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.onStopTimer();
    this.locationSubscription?.unsubscribe();
  }

  public onStartStopTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => this.tick(), 10);
      this.locationSubscription = this.locationService.trackLocation().subscribe(coordinates => {
        console.log('Track Location', coordinates);
        if (coordinates) {
          if (!this.previousCoordinates) {
            this.previousCoordinates = coordinates;
          } else {
            this.speed = (coordinates.speed && coordinates.speed > 1) ? coordinates.speed * 2.23694 : 0;
            this.distance += this.distanceService.calculateDistanceInMiles(this.previousCoordinates, coordinates);  
          }
        }
      });
    } else {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.locationSubscription?.unsubscribe();
    }
  }

  public onStartTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => this.tick(), 10);
    }
  }

  public onStopTimer(): void {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
    }
  }

  public onResetTimer(): void {
    this.onStopTimer();
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
  }

  private tick(): void {
    this.milliseconds += 10;
    if (this.milliseconds >= 1000) {
      this.milliseconds = 0;
      this.seconds++;
    }
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
  }

  public get renderStopWatch(): string {
    return this.minutes.toString().padStart(2, '0') + ':' + this.seconds.toString().padStart(2, '0');
  }

  public get startStopWatchButtonValue(): string {
    return this.isRunning ? 'Stop' : 'Start';
  }
}

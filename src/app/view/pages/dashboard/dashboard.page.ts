import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonCard, IonIcon, IonCardHeader, IonBadge, IonNavLink, IonButton } from '@ionic/angular/standalone';
import { TrackDrivingPage } from '../track-driving/track-driving.page';
import { Router } from '@angular/router';
import { HeaderPage } from "../../components/header/header.page";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonButton, IonNavLink, IonBadge, IonCardHeader, IonIcon, IonCard, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class DashboardPage implements OnInit {

  public toNavigateTo = TrackDrivingPage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onTrackDrivingZone(): void {
    this.router.navigate(['/track-driving']);
  }

  public onActivity(): void {
    this.router.navigate(['/activity']);
  }

  public onProfile(): void {
    this.router.navigate(['/profile']);
  }

  public onScan(): void {
    this.router.navigate(['/scan']);
  }
}

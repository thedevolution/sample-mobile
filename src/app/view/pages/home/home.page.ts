import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonCard, IonIcon, IonCardHeader, IonBadge, IonNavLink, IonButton, IonNav, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderPage } from "../../components/header/header.page";
import { DashboardPage } from '../dashboard/dashboard.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonNav, IonButton, IonNavLink, IonBadge, IonCardHeader, IonIcon, IonCard, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class HomePage implements OnInit {

  public baseNavComponent = DashboardPage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onTrackDrivingZone(): void {
    this.router.navigate(['/track-driving']);
  }

}

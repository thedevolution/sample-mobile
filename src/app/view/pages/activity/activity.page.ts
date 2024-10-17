import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { HeaderPage } from "../../components/header/header.page";
import { ActivitySummary } from 'src/app/business/core-domain/domain/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonList, IonButton, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class ActivityPage implements OnInit {

  public activities: ActivitySummary[] = [
    { date: new Date(), miles: 50, hours: 0, minutes: 57, seconds: 34 },
    { date: new Date(), miles: 24, hours: 0, minutes: 20, seconds: 45 },
    { date: new Date(), miles: 3, hours: 0, minutes: 34, seconds: 22 },
    { date: new Date(), miles: 102, hours: 1, minutes: 13, seconds: 12 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

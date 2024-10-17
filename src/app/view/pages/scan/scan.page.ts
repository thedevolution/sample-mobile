import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonIcon, IonButton, IonImg } from '@ionic/angular/standalone';
import { HeaderPage } from "../../components/header/header.page";
import { CameraService } from 'src/app/business/infrastructure/services/camera.service';
import { UserPhoto } from 'src/app/business/core-domain/domain/user-photo';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  standalone: true,
  imports: [IonImg, IonButton, IonIcon, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class ScanPage implements OnInit {

  constructor(private cameraService: CameraService) { }

  ngOnInit() {
  }
  
  public onCamera(): void {
    this.cameraService.takePhoto();
  }

  public get currentPhotos(): UserPhoto[] {
    return this.cameraService.photos;
  }
}

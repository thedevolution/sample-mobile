import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonNav, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonNav, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  @Input()
  public backButton: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public get backButtonStyleClass(): string {
    return this.backButton ? 'show-back-button' : '';
  }

  public onHome(): void {
    this.router.navigate(['/home']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonCard, IonCardContent, IonCol, IonRow, IonInput, IonGrid, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonIcon, IonGrid, IonInput, IonRow, IonCol, IonCardContent, IonCard, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control("", [Validators.required]),
    password: this.formBuilder.control("", [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
  }

  public onSubmitLogin(): void {
    this.router.navigate(['/home']);
  }

}

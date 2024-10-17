import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonDatetime, IonIcon, IonFab, IonFabButton, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';
import { HeaderPage } from "../../components/header/header.page";
import { Profile } from 'src/app/business/core-domain/domain/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonModal, IonDatetimeButton, IonFabButton, IonFab, IonIcon, IonDatetime, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage, ReactiveFormsModule]
})
export class ProfilePage implements OnInit {
  private disableEditing:boolean = true;

  public profileForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control({ disabled: true }, []),
    gender: this.formBuilder.control({ disabled: true }, []),
    dateOfBirth: this.formBuilder.control({ disabled: true }, []),
    address: this.formBuilder.control({ disabled: true }, []),
    phoneNumber: this.formBuilder.control({ disabled: true }, [])
  });

  constructor(private formBuilder: FormBuilder) {
    this.disableEditing = true;
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    const profile = {name:"Mike Michaels", gender:"Male", dateOfBirth: new Date(1990, 2, 23).toISOString(), address:"1234 Testview Dr", phoneNumber:"1(234)567-8910"} as Profile;
    this.profileForm.patchValue({
      name: profile.name,
      gender: profile.gender,
      dateOfBirth: profile.dateOfBirth,
      address: profile.address,
      phoneNumber: profile.phoneNumber
    });
    this.disableEditing = true;
  }

  public onToggleEditing(): void {
    this.disableEditing = !this.disableEditing;
  }

  public get isEditDisabled() {
    return this.disableEditing;
  }
}

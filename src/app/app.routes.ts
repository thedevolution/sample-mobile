import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./view/pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./view/pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'track-driving',
    loadComponent: () => import('./view/pages/track-driving/track-driving.page').then( m => m.TrackDrivingPage)
  },
  {
    path: 'activity',
    loadComponent: () => import('./view/pages/activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./view/pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'scan',
    loadComponent: () => import('./view/pages/scan/scan.page').then( m => m.ScanPage)
  }
  
];

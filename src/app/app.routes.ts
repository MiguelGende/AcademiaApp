import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage) 
  },
  { 
    path: 'tutorial', 
    loadComponent: () => import('./tutorial/tutorial.page').then((m) => m.TutorialPage) 
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage)
  },
  
  { path: '**', redirectTo: 'home' },
];

import { Routes } from '@angular/router';
import { Welcome } from './welcome';

export const WELCOME_ROUTES: Routes = [
  {
    path: '',
    component: Welcome,
    children: [
      { path: '', redirectTo: 'software', pathMatch: 'full' },
      {
        path: 'software',
        loadComponent: () => import('./tabs/software-dev/software-dev').then(m => m.SoftwareDev)
      },
      {
        path: 'actuarial',
        loadComponent: () => import('./tabs/actuarial-tab/actuarial-tab').then(m => m.ActuarialTab)
      },
      {
        path: 'research',
        loadComponent: () => import('./tabs/research-tab/research-tab').then(m => m.ResearchTab)
      },
      {
        path: 'blog',
        loadComponent: () => import('./tabs/blog-tab/blog-tab').then(m => m.BlogTab)
      },
      {
        path: 'cv',
        loadComponent: () => import('./tabs/cv-tab/cv-tab').then(m => m.CvTab)
      },
      {
        path: 'contact',
        loadComponent: () => import('./tabs/contact-tab/contact-tab').then(m => m.ContactTab)
      },
      {
        path: 'socials',
        loadComponent: () => import('./tabs/socials-tab/socials-tab').then(m => m.SocialsTab)
      },
    ],
  },
];

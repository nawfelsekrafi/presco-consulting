import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalesComponent } from './pages/legales/legales.component';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'contactez-nous',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'nos-services',
    loadChildren: () =>
      import('./pages/nos-services/nos-services.module').then(
        (m) => m.NosServicesModule
      ),
  },
  {
    path: 'nous-rejoindre',
    loadChildren: () =>
      import('./pages/nous-rejoindre/nous-rejoindre.module').then(
        (m) => m.NousRejoindreModule
      ),
  },
  {
    path: 'qui-sommes-nous',
    loadChildren: () =>
      import('./pages/qui-sommes-nous/qui-sommes-nous.module').then(
        (m) => m.QuiSommesNousModule
      ),
  },
  {
    path: 'mentions-légales',
    component: LegalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

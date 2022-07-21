import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './layout/faq/faq.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NousRejoindreComponent } from './layout/nous-rejoindre/nous-rejoindre.component';
import { QuiSommesNousComponent } from './layout/qui-sommes-nous/qui-sommes-nous.component';

const routes: Routes = [
  { path: 'accueil', loadChildren: () =>
  import('./layout/home/home.module').then(
    (m) => m.HomeModule
  )},
  { path: '', loadChildren: () =>
  import('./layout/home/home.module').then(
    (m) => m.HomeModule
  ) },
  { path: 'faq', component: FaqComponent },
  { path: 'contactez-nous', component: ContactComponent },
  {
    path: 'nos-services',
    loadChildren: () =>
      import('./layout/nos-services/nos-services.module').then(
        (m) => m.NosServicesModule
      )
  },
  { path: 'nous-rejoindre', component: NousRejoindreComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

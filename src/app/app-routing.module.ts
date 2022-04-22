import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { FaqComponent } from './layout/faq/faq.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NousRejoindreComponent } from './layout/nous-rejoindre/nous-rejoindre.component';
import { QuiSommesNousComponent } from './layout/qui-sommes-nous/qui-sommes-nous.component';
import { NosServicesComponent } from './layout/nos-services/nos-services.component';

const routes: Routes = [
  {path: 'accueil', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contactez-nous', component: ContactComponent},
  {path: 'nos-services', component: NosServicesComponent},
  {path: 'nous-rejoindre', component: NousRejoindreComponent},
  {path: 'qui-sommes-nous', component: QuiSommesNousComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

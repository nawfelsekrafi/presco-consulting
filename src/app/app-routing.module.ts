import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { FaqComponent } from './layout/faq/faq.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NousRejoindreComponent } from './layout/nous-rejoindre/nous-rejoindre.component';

const routes: Routes = [
  {path: 'accueil', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contactez-nous', component: ContactComponent},
  {path: 'nos-services', component: FaqComponent},
  {path: 'nous-rejoindre', component: NousRejoindreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

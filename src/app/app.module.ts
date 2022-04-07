import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { FaqComponent } from './layout/faq/faq.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NousRejoindreComponent } from './layout/nous-rejoindre/nous-rejoindre.component';
import { QuiSommesNousComponent } from './layout/qui-sommes-nous/qui-sommes-nous.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    NousRejoindreComponent,
    QuiSommesNousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

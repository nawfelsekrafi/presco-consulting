import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours/cours.component';
import { SendDevisComponent } from './send-devis/send-devis.component';
import { NgxCaptchaModule } from 'ngx-captcha';



@NgModule({
  declarations: [
    CoursComponent,
    SendDevisComponent,
  ],
  imports: [
    CommonModule,
    NgxCaptchaModule
  ],
  exports: [
    CoursComponent,
    SendDevisComponent,
  ]
})
export class UiModule { }

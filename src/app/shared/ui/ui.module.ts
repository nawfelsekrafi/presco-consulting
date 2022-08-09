import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours/cours.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule } from '@angular/forms';
import { SendDevisComponent } from './send-devis/send-devis.component';



@NgModule({
  declarations: [
    CoursComponent,
    SendDevisComponent
  ],
  imports: [
    CommonModule,
    NgxCaptchaModule,
    FormsModule
  ],
  exports: [
    CoursComponent,
  ]
})
export class UiModule { }

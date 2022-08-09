import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours/cours.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule } from '@angular/forms';
import { SendDevisComponent } from './send-devis/send-devis.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    CoursComponent,
    SendDevisComponent
  ],
  imports: [
    CommonModule,
    NgxCaptchaModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    CoursComponent,
  ]
})
export class UiModule { }

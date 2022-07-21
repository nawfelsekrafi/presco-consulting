import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours/cours.component';
import { SubscriptionComponent } from './subscription-component/subscription.component';



@NgModule({
  declarations: [
    CoursComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursComponent,
  ]
})
export class UiModule { }

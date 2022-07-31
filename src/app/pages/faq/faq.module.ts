import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';


const routes = [
 {path: '',  component: FaqComponent},
]
@NgModule({
  declarations: [
    FaqComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FaqModule { }

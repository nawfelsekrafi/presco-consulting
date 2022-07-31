import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';


const routes = [
 {path: '',  component: ContactComponent},
]
@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContactModule { }

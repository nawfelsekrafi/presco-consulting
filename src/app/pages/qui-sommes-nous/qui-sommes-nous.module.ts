import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuiSommesNousComponent } from './qui-sommes-nous.component';


const routes = [
 {path: '',  component: QuiSommesNousComponent},
]
@NgModule({
  declarations: [
    QuiSommesNousComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class QuiSommesNousModule { }

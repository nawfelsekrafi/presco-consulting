import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NousRejoindreComponent } from './nous-rejoindre.component';


const routes = [
 {path: '',  component: NousRejoindreComponent},
]
@NgModule({
  declarations: [
    NousRejoindreComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NousRejoindreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeComponent } from './home.component';


const routes = [
 {path: '',  component: HomeComponent},
]
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UiModule
  ]
})
export class HomeModule { }

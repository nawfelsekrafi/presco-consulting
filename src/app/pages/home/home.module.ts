import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeComponent } from './home.component';
import { SliderModule } from 'src/app/shared/ui/slider/slider.module';


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
    SliderModule,
    UiModule
  ]
})
export class HomeModule { }

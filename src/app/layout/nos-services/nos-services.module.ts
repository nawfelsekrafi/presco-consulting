import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NosServicesComponent } from './nos-services.component';
import { FormationsComponent } from './formations/formations.component';
import { TransformationDigitaleComponent } from './transformation-digitale/transformation-digitale.component';
import { IaComponent } from './ia/ia.component';
import { UxDeveloppementComponent } from './ux-developpement/ux-developpement.component';


const routes = [
 {path: '',  component: NosServicesComponent},
 {path: 'ia-ds',  component: IaComponent},
 {path: 'developpement-ui-ux',  component: UxDeveloppementComponent},
 {path: 'formations',  component: FormationsComponent},
 {path: 'transformation-digitale',  component: TransformationDigitaleComponent},
 
]
@NgModule({
  declarations: [
    FormationsComponent,
    TransformationDigitaleComponent,
    IaComponent,
    UxDeveloppementComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NosServicesModule { }

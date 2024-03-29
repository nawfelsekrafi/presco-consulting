import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NosServicesComponent } from './nos-services.component';
import { FormationsComponent } from './formations/formations.component';
import { TransformationDigitaleComponent } from './transformation-digitale/transformation-digitale.component';
import { IaComponent } from './ia/ia.component';
import { UxDeveloppementComponent } from './ux-developpement/ux-developpement.component';
import { FormationComponent } from './formation/formation.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes = [
 {path: '',  component: NosServicesComponent},
//  {path: 'ia-ds',  component: IaComponent},
 {path: 'developpement-ui-ux',  component: UxDeveloppementComponent},
 {path: 'formations',  component: FormationsComponent},
 {path: 'formations/formation/:id',  component: FormationComponent},
 {path: 'transformation-digitale',  component: TransformationDigitaleComponent},
 
]
@NgModule({
  declarations: [
    FormationsComponent,
    TransformationDigitaleComponent,
    IaComponent,
    UxDeveloppementComponent,
    NosServicesComponent,
    FormationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    UiModule,
    SweetAlert2Module.forRoot()
  ]
})
export class NosServicesModule { }

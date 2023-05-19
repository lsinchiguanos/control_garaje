import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentesListadoTablaComponent } from './components/residentes-listado-tabla/residentes-listado-tabla.component';
import { ResidentesListadoComponent } from './containers/residentes-listado/residentes-listado.component';
import { ResidentesRoutingModule } from './residentes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@core/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ResidentesListadoTablaComponent,
    ResidentesListadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    ResidentesRoutingModule
  ]
})
export class ResidentesModule { }

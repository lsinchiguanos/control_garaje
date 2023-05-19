import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListadoComponent } from './containers/vehiculo-listado/vehiculo-listado.component';
import { VehiculoTipoComponent } from './containers/vehiculo-tipo/vehiculo-tipo.component';
import { VehiculoTipoTablaComponent } from './components/vehiculo-tipo-tabla/vehiculo-tipo-tabla.component';
import { VehiculoListadoTablaComponent } from './components/vehiculo-listado-tabla/vehiculo-listado-tabla.component';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@core/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    VehiculoListadoComponent,
    VehiculoTipoComponent,
    VehiculoTipoTablaComponent,
    VehiculoListadoTablaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    VehiculoRoutingModule
  ]
})
export class VehiculoModule { }

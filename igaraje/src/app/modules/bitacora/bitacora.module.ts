import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitacoraListadoComponent } from './containers/bitacora-listado/bitacora-listado.component';
import { BitacoraListadoTablaComponent } from './components/bitacora-listado-tabla/bitacora-listado-tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@core/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { BitacoraRoutingModule } from './bitacora-routing.module';



@NgModule({
  declarations: [
    BitacoraListadoComponent,
    BitacoraListadoTablaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    BitacoraRoutingModule
  ]
})
export class BitacoraModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_PATHS } from "@core/routes/internal.path.routes";
import { INTERNAL_ROUTES_PATHS } from "@core/routes/internal.routes";
import { VehiculoListadoComponent } from "./containers/vehiculo-listado/vehiculo-listado.component";
import { VehiculoTipoComponent } from "./containers/vehiculo-tipo/vehiculo-tipo.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES_PATHS.VEHICULO_DEFAULT,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.VEHICULO_LISTADO,
    component: VehiculoListadoComponent
  },
  {
    path: INTERNAL_PATHS.VEHICULO_TIPOS,
    component: VehiculoTipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }

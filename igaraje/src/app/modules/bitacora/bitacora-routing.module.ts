import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_PATHS } from "@core/routes/internal.path.routes";
import { INTERNAL_ROUTES_PATHS } from "@core/routes/internal.routes";
import { BitacoraListadoComponent } from "./containers/bitacora-listado/bitacora-listado.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES_PATHS.BITACORA_DEFAULT,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.BITACORA_LISTADO,
    component: BitacoraListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitacoraRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_PATHS } from "@core/routes/internal.path.routes";
import { INTERNAL_ROUTES_PATHS } from "@core/routes/internal.routes";
import { ResidentesListadoComponent } from "./containers/residentes-listado/residentes-listado.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES_PATHS.RESIDENTES_LISTAR,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.RESIDENTES_LISTADO,
    component: ResidentesListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '@core/routes/internal.path.routes';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';
import { EserverComponent } from './containers/eserver/eserver.component';
import { NoFoundComponent } from './containers/no-found/no-found.component';
import { WorkingComponent } from './containers/working/working.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES_PATHS.ERROR_FOUND,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.NOT_FOUND,
    component: NoFoundComponent
  },
  {
    path: INTERNAL_PATHS.WORKING,
    component: WorkingComponent
  },
  {
    path: INTERNAL_PATHS.SERVER_FOUND,
    component: EserverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }

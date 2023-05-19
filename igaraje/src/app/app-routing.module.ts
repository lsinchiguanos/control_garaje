import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '@core/routes/internal.path.routes';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES_PATHS.AUTH_LOGIN,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.AUTH_DEFAULT,
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    // path: 'dashboard',
    path: INTERNAL_PATHS.DASHBOARD,
    component: SkeletonComponent,
    children: [
      {
        path: '',
        redirectTo: INTERNAL_ROUTES_PATHS.BITACORA_LISTAR,
        pathMatch: 'full'
      },
      {
        // path: 'bitacora',
        path: INTERNAL_PATHS.BITACORA_DEFAULT,
        loadChildren: () =>
          import('@modules/bitacora/bitacora.module').then((m) => m.BitacoraModule)
      },
      {
        // path: 'residentes',
        path: INTERNAL_PATHS.RESIDENTES_DEFAULT,
        loadChildren: () =>
          import('@modules/residentes/residentes.module').then((m) => m.ResidentesModule)
      },
      {
        // path: 'vehiculo',
        path: INTERNAL_PATHS.VEHICULO_DEFAULT,
        loadChildren: () =>
          import('@modules/vehiculo/vehiculo.module').then((m) => m.VehiculoModule)
      },
      {
        path: '**',
        // redirectTo: '/panel/home',
        redirectTo: INTERNAL_ROUTES_PATHS.HOME,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: INTERNAL_PATHS.ERROR,
    loadChildren: () => import('@modules/errors/errors.module').then((m) => m.ErrorsModule)
  },
  {
    path: '**',
    redirectTo: INTERNAL_ROUTES_PATHS.AUTH_LOGIN,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

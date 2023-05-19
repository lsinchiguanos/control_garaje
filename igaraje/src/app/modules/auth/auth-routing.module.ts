import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '@core/routes/internal.path.routes';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';
// import { NoAuthGuard } from '@core/shared/guards/no-auth.guard';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: INTERNAL_ROUTES_PATHS.AUTH_LOGIN,
        pathMatch: 'full'
    },
    {
        path: INTERNAL_PATHS.AUTH_LOGIN,
        component: LoginComponent
        // canActivate: [NoAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }

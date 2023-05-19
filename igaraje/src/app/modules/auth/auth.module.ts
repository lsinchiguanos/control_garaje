import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';
// import { authReducer } from './store/auth.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { AuthEffect } from './store/auth.effect';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // StoreModule.forFeature('auth', authReducer),
    // EffectsModule.forFeature([AuthEffect]),
    AuthRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

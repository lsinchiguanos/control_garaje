import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { SharedModule } from '@core/shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftNavComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // StoreModule.forRoot(ROOT_REDUCER),
    // StoreDevtoolsModule.instrument({ name: 'StoreDevtools' }),
    // EffectsModule.forRoot([AuthEffect]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

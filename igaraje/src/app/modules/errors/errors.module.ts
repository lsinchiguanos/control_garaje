import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingComponent } from './containers/working/working.component';
import { NoFoundComponent } from './containers/no-found/no-found.component';
import { EserverComponent } from './containers/eserver/eserver.component';
import { ErrorsRoutingModule } from './errors-routing.module';



@NgModule({
  declarations: [
    WorkingComponent,
    NoFoundComponent,
    EserverComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }

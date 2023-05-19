import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { WorkingComponent } from './components/working/working.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations:[
    WorkingComponent,
    TableComponent,
    TituloComponent
  ],
  exports:[
    WorkingComponent,
    TableComponent,
    TituloComponent,
    HttpClientModule
  ]
})
export class SharedModule {}

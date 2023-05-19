import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo-listado-tabla',
  templateUrl: './vehiculo-listado-tabla.component.html',
  styleUrls: ['./vehiculo-listado-tabla.component.css']
})
export class VehiculoListadoTablaComponent implements OnInit {

  @Input() bitacoralistado!: any[];
  @Input() cantidad_items: number = 25;
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

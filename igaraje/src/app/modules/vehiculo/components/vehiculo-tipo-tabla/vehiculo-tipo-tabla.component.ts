import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo-tipo-tabla',
  templateUrl: './vehiculo-tipo-tabla.component.html',
  styleUrls: ['./vehiculo-tipo-tabla.component.css']
})
export class VehiculoTipoTablaComponent implements OnInit {

  @Input() bitacoralistado!: any[];
  @Input() cantidad_items: number = 25;
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

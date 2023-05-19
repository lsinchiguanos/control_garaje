import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora-listado-tabla',
  templateUrl: './bitacora-listado-tabla.component.html',
  styleUrls: ['./bitacora-listado-tabla.component.css']
})
export class BitacoraListadoTablaComponent implements OnInit {

  @Input() bitacoralistado!: any[];
  @Input() cantidad_items: number = 25;
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

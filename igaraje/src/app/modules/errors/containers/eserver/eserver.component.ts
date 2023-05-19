import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-eserver',
  templateUrl: './eserver.component.html',
  styleUrls: ['./eserver.component.css']
})
export class EserverComponent implements OnInit {

  return_home = INTERNAL_ROUTES_PATHS.HOME;

  constructor() { }

  ngOnInit(): void {
  }

}

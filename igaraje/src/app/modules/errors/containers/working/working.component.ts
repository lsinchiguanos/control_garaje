import { Component, OnInit } from '@angular/core';
import { INTERNAL_ROUTES_PATHS } from '@core/routes/internal.routes';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {

  return_home = INTERNAL_ROUTES_PATHS.HOME;

  constructor() { }

  ngOnInit(): void {
  }

}

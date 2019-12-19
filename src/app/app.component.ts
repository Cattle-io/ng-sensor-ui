import { Component } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-sensor-ui';

  constructor(private router: Router) { }

  ngOnInit() {

  }


}

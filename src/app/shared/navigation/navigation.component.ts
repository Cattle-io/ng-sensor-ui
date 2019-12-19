import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    messages$ = [
      'MESSAGE 1',
      'MESSAGE 2',
      'MESSAGE 3',
      'MESSAGE 4',
      'MESSAGE 5',
      'MESSAGE 6',
    ];
    notifications$ = [];

  constructor(private breakpointObserver: BreakpointObserver) {}

}

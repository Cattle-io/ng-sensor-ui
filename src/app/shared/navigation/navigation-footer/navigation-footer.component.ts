import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-navigation-footer',
  templateUrl: './navigation-footer.component.html',
  styleUrls: ['./navigation-footer.component.scss']
})
export class NavigationFooterComponent implements OnInit {

  public isFooterCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  setToogleCollapsed(): void {
    this.isFooterCollapsed = !this.isFooterCollapsed;
  }

}

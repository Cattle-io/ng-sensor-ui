import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LogSessionsService } from '../../log-sessions.service';
import { ILogSession } from '../../models/ILogSession.model';

@Component({
  selector: 'ui-log-sessions-list',
  templateUrl: './log-sessions-list.component.html',
  styleUrls: ['./log-sessions-list.component.scss']
})
export class LogSessionsListComponent implements OnInit {

  public logSessions: ILogSession[] = [];
  public SEARCH_KEYWORD = '';

constructor(
  private $logSessions: LogSessionsService,
  private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  this.$logSessions.getAll().then(logSessions => this.logSessions = (logSessions as any[]));
}

goToLogSessionAdd(){
  this.router.navigate(['add/'], { relativeTo: this.route });
}

goToEditLogSessionById(deviceId: string){
  this.router.navigate(['edit/' + deviceId], { relativeTo: this.route });
}

goToDeleteLogSessionById(deviceId: string){
  this.router.navigate(['delete/' + deviceId], { relativeTo: this.route });
}

goToShowLogSessionById(deviceId: string){
  this.router.navigate(['show/' + deviceId], { relativeTo: this.route });
}

}

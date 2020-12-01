import { Component, OnInit } from '@angular/core';
import { LogSessionsService } from '../../log-sessions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ILogSession } from '../../models/ILogSession.model';

@Component({
  selector: 'ui-log-sessions-edit',
  templateUrl: './log-sessions-edit.component.html',
  styleUrls: ['./log-sessions-edit.component.scss']
})
export class LogSessionEditComponent implements OnInit {

  public logSessionId = 0;
  public logSession: ILogSession;
  public animals = null;
  public experiment = null;
  public status = 'OFFLINE';
  public isCreatingLogSession = false;
  public LOG_SESSION: ILogSession = {
    id: -1,
    project_id: -1,
    title: '',
    description: '',
    status: 'STOP',
    duration_hrs: 0,
    started_at: new Date(),
    finished_at: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  };

  constructor(private $logSessions: LogSessionsService, private router: Router, private route: ActivatedRoute ) { }

ngOnInit() {
    this.logSessionId = parseInt(this.route.snapshot.paramMap.get('logSessionId'), 10);
    this.$logSessions.getAll().then(logSessions => {
      this.logSession = logSessions.find(logSession => logSession.id == this.logSessionId) as any;
      this.LOG_SESSION = { ...JSON.parse(JSON.stringify(this.LOG_SESSION) + ''), ...JSON.parse(JSON.stringify(this.logSession) + '')}
    });
  }

getCategoryBackground() {
    return 'url(' + 'https://1001freedownloads.s3.amazonaws.com/icon/thumb/334566/Industry-Circuit-icon.png' + ')';
}


updateLogSession() {
    this.isCreatingLogSession = true;
    const logSession = JSON.parse(JSON.stringify(this.LOG_SESSION) + '');
    this.$logSessions.experimentUpdate(logSession).then(response => {
      this.isCreatingLogSession = false;
    }).catch(error => {
      console.error(error);
      this.isCreatingLogSession = false;
    });
  }


setTitle($event){
  this.LOG_SESSION.title = $event;
}
setDescription($event){
  this.LOG_SESSION.description = $event;
}
setProject($event){
  this.LOG_SESSION.project_id = $event;
}
setLogSessionStatusPause($event){

}
setLogSessionStatusPlay($event){

}

setLogSessionStatusStop($event){

}


}
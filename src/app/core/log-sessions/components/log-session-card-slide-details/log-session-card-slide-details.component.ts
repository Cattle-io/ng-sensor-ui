import { Component, OnInit, Input } from '@angular/core';
import { LogSessionsService } from '../../log-sessions.service';
import { ILogSession } from '../../models/ILogSession.model';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ui-log-session-card-slide-details',
  templateUrl: './log-session-card-slide-details.component.html',
  styleUrls: ['./log-session-card-slide-details.component.scss']
})
export class LogSessionCardSlideDetailsComponent implements OnInit {


  @Input()
  logSession: ILogSession | null = null;




  constructor(private $logSessions: LogSessionsService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToEditLogSessionById(logSessionId: number){
    this.router.navigate(['edit/' + logSessionId], { relativeTo: this.route });
  }
  goToDeleteLogSessionById(logSessionId: number){
    const result = window.confirm('Are you sure you want to delete this experiment?');
    if (result){
      this.$logSessions.experimentRemove(logSessionId + '').then(response => {
      }).catch(error => {
        console.error(error);
      });
    }
  }
}

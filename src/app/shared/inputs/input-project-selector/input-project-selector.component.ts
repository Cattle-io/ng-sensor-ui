import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExperiment } from 'src/app/core/devices/models/experiment.interface';
import { LogSessionsService } from 'src/app/core/log-sessions/log-sessions.service';
import { ILogSession } from 'src/app/core/log-sessions/models/ILogSession.model';
import { IProject } from 'src/app/core/projects/models/project.interface';
import { ProjectsService } from 'src/app/core/projects/projects.service';

@Component({
  selector: 'ui-input-project-selector',
  templateUrl: './input-project-selector.component.html',
  styleUrls: ['./input-project-selector.component.scss']
})
export class InputProjectSelectorComponent implements OnInit {

  @Input()
  icon = '';

  @Input()
  error = '';

  @Input()
  value = '';

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Output()
  nChange = new EventEmitter();

  public project: IProject;
  public projects: IProject[];

  constructor(private $projects: ProjectsService) {

  }

  ngOnInit(): void {
    this.$projects.getAll().then(projects => {
      this.projects = projects;
      this.project = this.projects.find(project => (project.id + '') === (this.value + ''));
    });
  }
  setProject($event){
    this.nChange.emit($event.target.value);
}

}

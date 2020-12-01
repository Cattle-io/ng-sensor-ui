import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExperimentsService } from 'src/app/core/devices/experiments.service';
import { IExperiment } from 'src/app/core/devices/models/experiment.interface';

@Component({
  selector: 'ui-input-experiment-selector',
  templateUrl: './input-experiment-selector.component.html',
  styleUrls: ['./input-experiment-selector.component.scss']
})
export class InputExperimentSelectorComponent implements OnInit {
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

  public experiment: IExperiment;
  public experiments: IExperiment[];

  constructor(private $experiment: ExperimentsService) {

  }

  ngOnInit(): void {
    this.$experiment.getAll().then(experiments => {
      this.experiments = experiments;
      this.experiment = this.experiments.find(experiment => (experiment.id + '') === (this.value + ''));
    });
  }
  setExperiment($event){
    this.nChange.emit($event.target.value);
}

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalsService } from 'src/app/core/devices/animals.service';
import { IAnimal } from 'src/app/core/devices/models/animal.interface';

@Component({
  selector: 'ui-input-animal-selector',
  templateUrl: './input-animal-selector.component.html',
  styleUrls: ['./input-animal-selector.component.scss']
})
export class InputAnimalSelectorComponent implements OnInit {
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

  public animals: IAnimal[];
  public animal: IAnimal | null;

  constructor(private $animals: AnimalsService) { }

  ngOnInit(): void {
    this.$animals.getAll().then(animals => {
      this.animals = animals;
      this.animal = this.animals.find(animal => (animal.id + '') === (this.value + ''));
    });
  }

  setAnimal($event){
      this.nChange.emit($event.target.value);
  }

}

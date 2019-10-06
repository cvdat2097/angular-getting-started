import { Component } from '@angular/core';
import { TemperatureService } from './temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html'
})
export class TemperatureComponent {
  constructor(private readonly temperatureService: TemperatureService) {}

  cChangeHandler(c) {
    this.temperatureService.toF(c);
  }

  fChangeHandler(f) {
    this.temperatureService.toC(f);
  }
}

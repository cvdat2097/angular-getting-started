import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  constructor(private readonly counterService: CounterService) {}

  ngOnInit() {}

  clickHandler() {
    this.counterService.increase();
  }
}

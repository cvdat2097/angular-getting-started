import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter = 0;

  increase() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }
}

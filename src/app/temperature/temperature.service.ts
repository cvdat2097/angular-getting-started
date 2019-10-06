import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemperatureService {
  cTemper = 0;
  fTemper = 32;

  toC(F) {
    this.fTemper = F;
    this.cTemper = (F - 32) * (5 / 9);
  }

  toF(C) {
    this.cTemper = C;
    this.fTemper = C * (9 / 5) + 32;
  }
}

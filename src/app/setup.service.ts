import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Setup } from './setup';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  private setups: Array<Setup>;
  currentIndex: number | undefined;

  constructor() { 
    this.setups = [
      {id: 0, setup: "Why don't oysters donate to charity?"},
      {id: 1, setup: "What does a baby computer call its father?"},
      {id: 2, setup: "What did the custodian say when he jumped out of the closet?"},
      {id: 3, setup: "Why are colds bad criminals?"},
      {id: 4, setup: "How does a penguin build its house?"},
      {id: 5, setup: "Which knight invented King Arthur's Round Table?"},
      {id: 6, setup: "What do sprinters eat before a race?"},
      {id: 7, setup: "What do you call a fly without wings?"},
      {id: 8, setup: "What happens when you witness a ship wreck?"},
      {id: 9, setup: "How can you find Will Smith in the snow?"}
    ]
  }

  emitRandomSetup(): Observable<Setup> {
    this.currentIndex = Math.floor(Math.random() * this.setups.length);
    return of(this.setups[this.currentIndex]);
  }

  getCurrentId() {
    return this.currentIndex;
  }
}

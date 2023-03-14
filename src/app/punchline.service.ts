import { Injectable } from '@angular/core';
import { Punchline } from './punchline';

@Injectable({
  providedIn: 'root'
})
export class PunchlineService {

  private punchlines: Array<Punchline>;
  
  constructor() { 
    this.punchlines = [
      {id: 1, punchLine: "Because they're shellfish."},
      {id: 2, punchLine: "Data."},
      {id: 3, punchLine: "Supplies!"},
      {id: 4, punchLine: "Because they're easy to catch."},
      {id: 5, punchLine: "Igloos it together."},
      {id: 6, punchLine: "Sir Cumference."},
      {id: 7, punchLine: "Nothing. They fast."},
      {id: 8, punchLine: "A walk!"},
      {id: 9, punchLine: "You let it sink in."},
      {id: 10, punchLine: "Follow the fresh prints."}
    ]
  }

  getPunchlines() {
    return this.punchlines;
  }
}

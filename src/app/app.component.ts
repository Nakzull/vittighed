import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SetupService } from './setup.service';
import { Setup } from './setup';
import { Punchline } from './punchline';
import { PunchlineService } from './punchline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vittighed';

  currentIndex: number | undefined;
  setup$: Observable<Setup> | undefined;
  punchline$: Observable<Punchline> | undefined;


  constructor(private setupService: SetupService, private punchlineService: PunchlineService) {

  }
  punchlineControl = true;
  punchlines: Array<Punchline> = this.punchlineService.getPunchlines();

  ngOnInit(): void {
    setInterval(() => {
      this.punchlineControl = true;
      this.setup$ = this.setupService.emitRandomSetup();
      this.currentIndex = this.setupService.getCurrentId();



      setTimeout(() => {
        this.punchlineControl = false;
        this.punchline$ = of(this.punchlines[this.currentIndex!])
      }, 2000);
    }, 5000)
  }
}
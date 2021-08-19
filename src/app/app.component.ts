import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ObserverPostingService } from './observer-posting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'observables';
  constructor(private observerPostingService: ObserverPostingService) {}

  ngOnInit() {}
  observerNext(val: string) {
    this.observerPostingService.observerSubjectNext(val);
  }
  observerError(val: string) {
    this.observerPostingService.observerSubjectError(val);
  }
  observerComplete() {
    this.observerPostingService.observerSubjectComplete();
  }
}

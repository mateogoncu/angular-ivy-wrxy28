import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObserverPostingService } from '../observer-posting.service';

@Component({
  selector: 'app-observer-consumer',
  templateUrl: './observer-consumer.component.html',
  styleUrls: ['./observer-consumer.component.css'],
})
export class ObserverConsumerComponent implements OnInit, OnDestroy {
  observerSubscription!: Observable<string>;
  // showVal: string = '';
  constructor(private observerPostingService: ObserverPostingService) {}

  ngOnInit(): void {
    this.observerSubscription = this.observerPostingService.observable;
    // this.observerSubscription =
    //   this.observerPostingService.observable.subscribe(
    //     (nextVal) => {
    //       this.showVal = nextVal;
    //     },
    //     (errorVal) => {
    //       this.showVal = 'Observer got an error: ' + errorVal;
    //     },
    //     () => {
    //       this.showVal = 'Finished sequence.';
    //     }
    //   );
  }

  ngOnDestroy() {
    // this.observerSubscription.unsubscribe();
  }
}

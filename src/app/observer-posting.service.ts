import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, retryWhen, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ObserverPostingService {
  private observerSubject = new Subject<string>();
  public observable: Observable<string> = this.observerSubject
    .asObservable()
    .pipe(
      switchMap((val) => {
        if (val.includes('0')) {
          return throwError(val).pipe(catchError((val) => of(`Error: ${val}`)));
        } else {
          return of(val);
        }
      })
    );

  observerSubjectNext = (newVal: string) => this.observerSubject.next(newVal);
  observerSubjectError = (errorVal: string) =>
    this.observerSubject.error(errorVal);
  observerSubjectComplete = () => this.observerSubject.complete();

  constructor() {}
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderAnimatorService {

  private animation$: Subject<boolean>;

  constructor() { 
    this.animation$ = new Subject();
  }

  activateAnimation(status: boolean) {
    this.animation$.next(status);
  }

  getAnimationActivator$(): Observable<boolean> {
    return this.animation$.asObservable();
  }
}

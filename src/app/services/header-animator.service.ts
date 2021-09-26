import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderAnimatorService {

  private animation$: Subject<boolean>;
  private mode$: Subject<boolean>;

  constructor() { 
    this.animation$ = new Subject();
    this.mode$ = new Subject();
  }

  activateAnimation(status: boolean) {
    this.animation$.next(status);
  }

  changeMode(mode: boolean) {
    this.mode$.next(mode)
  }

  getAnimationActivator$(): Observable<boolean> {
    return this.animation$.asObservable();
  }

  getMode$(): Observable<boolean> {
    return this.mode$.asObservable();
  }
}

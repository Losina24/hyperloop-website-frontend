import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeaderAnimatorService } from '../services/header-animator.service';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  pageIndex: number = 0;
  transition: boolean = false;

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService
  ) { }

  ngOnInit(): void {
    const html = document.documentElement;
    html.style.overflow = "auto";
  }

  // SCROLL UP //
  scrollUp() {    
    if (this.pageIndex > 0 && this.transition == false) {
      this.transition = true;

      this.pageIndex = this.pageIndex - 1;

      // Running header animation
      //this.headerAnimator.activateAnimation(true);

      this.pageUpAnimation();
    }
  }

  pageUpAnimation() {
    console.log('down',this.pageIndex);
    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: 0,
      opacity: 1,
      scale: 1,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100
    });

    anime({
      targets: '#s' + (this.pageIndex + 2),
      top: '100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      complete: () => {
        //this.headerAnimator.activateAnimation(false);
        this.transition = false;
        this._cdr.detectChanges();
      },
    });
  }

  // SCROLL DOWN //

  /**
   * Scroll down event handler
   */
  scrollDown() {
    if (this.pageIndex < 8 && this.transition == false) {
      this.transition = true;

      this.pageIndex = this.pageIndex + 1;

      // Running header animation
      //this.headerAnimator.activateAnimation(true);

      this.pageDownAnimation();
    }
  }

  /**
   * Animation that runs when the user scrolls down
   */
  pageDownAnimation() {
    anime({
      targets: '#s' + (this.pageIndex),
      top: '-100vh',
      opacity: 0,
      scale: 1,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100
    });

    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: '0vh',
      duration: 850,
      easing: 'easeInOutQuart',
      complete: () => {
        //this.headerAnimator.activateAnimation(false);
        this.transition = false;
        this._cdr.detectChanges();
      },
    });
  }

}

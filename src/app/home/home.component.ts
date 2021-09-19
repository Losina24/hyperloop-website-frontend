import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageIndex: number = 0;
  transition: boolean = false;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  scrollUp() {
    if (this.pageIndex > 0 && this.transition == false) {
      this.transition = true;
      this.pageUp();
      console.log('mouseUp');
    }
  }

  scrollDown() {
    if (this.pageIndex < 2 && this.transition == false) {
      this.transition = true;
      this.pageDown();
      console.log('mouseDown');
    }
  }

  pageDown() {
    this.pageIndex = this.pageIndex + 1;

    anime({
      targets: '#s' + this.pageIndex,
      top: '-100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        this._cdr.detectChanges();
      },
    });

    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: '0vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        this.transition = false;
        this._cdr.detectChanges();
      },
    });

    console.log('index', this.pageIndex);
  }

  pageUp() {
    this.pageIndex = this.pageIndex - 1;
    console.log('in1111dex', this.pageIndex);
    

    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: 0,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        this._cdr.detectChanges();
      },
    });

    anime({
      targets: '#s' + (this.pageIndex + 2),
      top: '100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        this.transition = false;
        this._cdr.detectChanges();
      },
    });

  }
}

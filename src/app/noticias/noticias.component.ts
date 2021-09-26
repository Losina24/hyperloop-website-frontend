import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import { HeaderAnimatorService } from '../services/header-animator.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  
  pageIndex: number = 0;
  transition: boolean = false;

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService
  ) { }

  ngOnInit(): void {
  }

  // SCROLL UP //
  scrollUp() {
    this.headerAnimator.activateAnimation(false);
  }

  scrollDown() {
    this.headerAnimator.activateAnimation(true);
  }
}

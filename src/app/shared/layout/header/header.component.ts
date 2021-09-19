import { Component, OnInit } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import { HeaderAnimatorService } from 'src/app/services/header-animator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nightMode: boolean = false;

  constructor(
    private headerAnimator: HeaderAnimatorService
  ) { }

  ngOnInit(): void {
    this.headerAnimator.getAnimationActivator$().subscribe(status => {
      if (status) {
        this.hideHeader()
      } else {
        this.openHeader()
      }
    });

    this.headerAnimator.getMode$().subscribe( mode => {
      console.log('mode', mode)
      this.nightMode = mode;
    })
  }

  hideHeader() {
    anime({
      targets: 'header',
      translateY: -90,
      duration: 400,
      easing: 'easeInQuart'
    });
  }

  openHeader() {
    anime({
      targets: 'header',
      translateY: 0,
      duration: 400,
      easing: 'easeOutQuart'
    });
  }
}

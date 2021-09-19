import { Component, OnInit } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nightMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideHeader() {
    anime({
      targets: 'header',
      translateY: -90,
      duration: 600,
      easing: 'easeInQuart'
    });
  }

  openHeader() {
    anime({
      targets: 'header',
      translateY: 0,
      duration: 600,
      easing: 'easeOutQuart'
    });
  }
}

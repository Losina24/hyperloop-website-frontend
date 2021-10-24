import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import { HeaderAnimatorService } from 'src/app/services/header-animator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  nightMode: boolean = false;
  hamburgerMenu: boolean = false;
  lang: string = 'es';
  
  texts = {
    en: {
      equipo: 'Team',
      acerca: 'About us',
      noticias: 'News',
      sponsors: 'Partners',
      contacto: 'Contact'
    },
    es: {
      equipo: 'Equipo',
      acerca: 'Acerca',
      noticias: 'Noticias',
      sponsors: 'Partners',
      contacto: 'Contacto'
    }
  }

  constructor(
    private headerAnimator: HeaderAnimatorService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.headerAnimator.getAnimationActivator$().subscribe((status) => {
      if (status) {
        this.hideHeader();
      } else {
        this.openHeader();
      }
    });

    let ss = sessionStorage.getItem("lang");
    if (ss == null) {
      sessionStorage.setItem("lang", 'es');
    } else {
      this.lang = ss;
    }

    this.headerAnimator.getMode$().subscribe((mode) => {
      this.nightMode = mode;
    });
  }

  onRouteTravel() {
    window.scroll(0,0);
    //location.reload();
    this.nightMode = false;

    if(this.hamburgerMenu) {
      this.hamburger();
    }
    //this.hamburgerMenu = false;
  }

  hideHeader() {
    anime({
      targets: 'header',
      translateY: -90,
      duration: 400,
      easing: 'easeInQuart',
    });
  }

  openHeader() {
    if(this.nightMode == false){
      anime({
        targets: '.line',
        duration: 0,
        backgroundColor: '#000',
        easing: 'easeInOutSine',
        complete: () => {
          this._cdr.detectChanges();
        },
      });
    }

    anime({
      targets: 'header',
      translateY: 0,
      duration: 400,
      easing: 'easeOutQuart',
    });
  }

  hamburger() {

    if (this.hamburgerMenu == false) {

      anime({
        targets: '#menu-lat',
        duration: 350,
        width: '100vw',
        easing: 'easeInOutSine',
        complete: () => {
          this._cdr.detectChanges();
        },
      });

      anime({
        targets: '.line',
        duration: 350,
        backgroundColor: '#fff',
        easing: 'easeInOutSine',
        complete: () => {
          this._cdr.detectChanges();
        },
      });
    } else {

      if(this.nightMode == false ) {
        anime({
          targets: '.line',
          duration: 350,
          backgroundColor: '#000',
          easing: 'easeInOutSine',
          complete: () => {
            this._cdr.detectChanges();
          },
        });
      } else {
        anime({
          targets: '.line',
          duration: 350,
          backgroundColor: '#fff',
          easing: 'easeInOutSine',
          complete: () => {
            this._cdr.detectChanges();
          },
        });
      }

      anime({
        targets: '#menu-lat',
        duration: 350,
        width: 0,
        //right: '-100vw',
        easing: 'easeInOutSine',
        complete: () => {
          this._cdr.detectChanges();
        },
      });
    }
    this.hamburgerMenu = !this.hamburgerMenu;
    console.log(this.hamburgerMenu);
    
  }

  setLang() {
    if(this.lang == 'es') {
      sessionStorage.setItem("lang", 'en');
      this.lang = 'en';
    } else {
      sessionStorage.setItem("lang", 'es');
      this.lang = 'es';
    }
  }

  getLang() {
    if(this.lang == 'es') {
      return 'spain.png'
    } else {
      return 'lang.svg'
    }
  }

  getTranslation(text: string) {
    let lang = sessionStorage.getItem('lang');
    //@ts-ignore
    return this.texts[lang][text];
  }
}

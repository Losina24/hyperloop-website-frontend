import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeaderAnimatorService } from '../services/header-animator.service';

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

  texts = {
    en: {
      queHacemos: 'What do we do?',
      tecnologia: 'Technology',
      hyperloopTechno: 'Hyperloop technology, also known as "the 5th mode of transport", is a vehicle based on capsules that levitate through tunnels at low pressure without friction, at high speed and autonomously.',
      knowMore: 'You want to know more?',
      conocenos: 'Meet us',
      continuacion: 'Below we leave you the links to our social networks, where we continuously communicate about all the updates of our work. If you are a journalist we also leave you a link that may interest you'
    },
    es: {
      queHacemos: '¿Qué hacemos?',
      tecnologia: 'Tecnología',
      hyperloopTechno: 'La tecnología hyperloop, o también conocida como «el quinto medio de transporte», se caracteriza por ser un vehículo basado en cápsulas que levitan dentro de túneles a baja presión sin rozamiento, a alta velocidad y de forma autónoma.',
      knowMore: '¿Quiéres saber más?',
      conocenos: 'Conócenos',
      continuacion: 'A continuación te dejamos los enlaces a nuestras redes sociales, donde comunicamos continuamente sobre todas las actualizaciones de nuestro trabajo. Si eres periodista también te dejamos un link que puede interesarte'
    }
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService
  ) {}

  ngOnInit(): void {
    this.headerAnimator.changeMode(true)
  }

  // SCROLL UP //
  scrollUp() {
    if (this.pageIndex > 0 && this.transition == false) {
      this.transition = true;

      this.pageIndex = this.pageIndex - 1;

      // Running header animation
      this.headerAnimator.activateAnimation(true);

      if(this.pageIndex == 0) {
        // If the user is going to the landing page
        this.zoomInAnimation();
      } else {
        // If the user is not on the landing page
        this.pageUpAnimation();
      }
    }
  }

  pageUpAnimation() {
    anime({
      targets: '#s' + (this.pageIndex),
      top: 0,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100
    });

    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: '100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(true)
        }
        this.headerAnimator.activateAnimation(false);
        this.transition = false;
        this._cdr.detectChanges();
      },
    });
  }

  zoomInAnimation() {
    anime({
      targets: 'h2.nosotros',
      bottom: '-50vh',
      duration: 850,
      easing: 'easeInOutQuart',
      delay: 0,
      endDelay: 100
    })

    anime({
      targets: '#s1',
      scale: 1,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {

        // If the user is on the landing page, set the header to night mode
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(true)
        }

        // Header down
        this.headerAnimator.activateAnimation(false);
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
    if (this.pageIndex < 3 && this.transition == false) {
      this.transition = true;

      this.pageIndex = this.pageIndex + 1;

      // Running header animation
      this.headerAnimator.activateAnimation(true);

      if(this.pageIndex == 1) {
        // If the user is on the landing page
        this.zoomOutAnimation();
      } else {
        // If the user is not on the landing page
        this.pageDownAnimation();
      }
    }
  }

  /**
   * Animation that runs when the user scrolls down
   */
  pageDownAnimation() {
    if (this.pageIndex == 2) {
      anime({
        targets: 'h2',
        bottom: '-50vh',
        duration: 600,
        easing: 'easeInOutQuart',
        endDelay: 100
      })
    }

    anime({
      targets: '#s' + (this.pageIndex - 1),
      top: '-100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100
    });

    anime({
      targets: '#s' + (this.pageIndex),
      top: '0vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(false)
        }
        this.headerAnimator.activateAnimation(false);
        this.transition = false;
        this._cdr.detectChanges();
      },
    });
  }

  zoomOutAnimation() {
    anime({
      targets: 'h2.nosotros',
      bottom: '-19vh',
      duration: 850,
      easing: 'easeInOutQuart',
      delay: 500,
      endDelay: 100
    })

    anime({
      targets: '#s1',
      scale: 0.7,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {

        // If the user is on the landing page, set the header to night mode
        if (this.pageIndex == 1) {
          this.headerAnimator.changeMode(false)
        }

        // Header down
        this.headerAnimator.activateAnimation(false);
        this.transition = false;
        this._cdr.detectChanges();
      },
    });
  }

  getTranslation(text: string) {
      let lang = sessionStorage.getItem('lang');
      //@ts-ignore
      return this.texts[lang][text];
  }
}

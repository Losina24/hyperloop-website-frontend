import {
  Component,
  OnInit,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { HeaderAnimatorService } from '../services/header-animator.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  last: number = 0;
  aux: [number] = [0];
  lastTouch: any = null;

  texts = {
    en: {
      queHacemos: 'What do we do?',
      tecnologia: 'Technology',
      hyperloopTechno:
        'Hyperloop technology, also known as "the 5th mode of transport", is a vehicle based on capsules that levitate through tunnels at low pressure without friction, at high speed and autonomously.',
      knowMore: 'You want to know more?',
      conocenos: 'Meet us',
      continuacion:
        'Below we leave you the links to our social networks, where we continuously communicate about all the updates of our work. If you are a journalist we also leave you a link that may interest you',
    },
    es: {
      queHacemos: '¿Qué hacemos?',
      tecnologia: 'Tecnología hyperloop',
      hyperloopTechno:
        'La tecnología hyperloop es una tecnología para lo que será «el quinto medio de transporte». Se caracteriza por un vehículo que se desplaza dentro de un tubo a baja presión sin ningún tipo de rozamiento, por lo que con tan solo un impulso inicial puede alcanzar altas velocidades.',
      knowMore: '¿Quieres saber más?',
      conocenos: 'Conócenos',
      continuacion:
        'A continuación te dejamos los enlaces a nuestras redes sociales, donde comunicamos continuamente sobre todas las actualizaciones de nuestro trabajo. Si eres periodista también te dejamos un link que puede interesarte',
    },
  };

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //@ts-ignore
    if (this.route.component.name == 'HomeComponent') {
    }
  }

  mouseWheelFunc(event: any) {
    let p2 = window.scrollY;
    console.log('probando', event);

    if (p2 != 0) {
      this.aux.push(p2);
    }

    if (this.aux[this.aux.length - 1] > this.last) {
      this.scrollDown();
      this.last = this.aux[this.aux.length - 1];
      //window.scrollTo(0,0)
    } else {
      console.log('p2', this.aux[this.aux.length - 1]);
      this.scrollUp();
      this.last = this.aux[this.aux.length - 1];
      //window.scrollTo(0,0)
    }
  }

  @HostListener('touchstart', ['$event'])
  aaa(event: any) {
    this.lastTouch = null;
    this.aux = [0];
    this.lastTouch = event.touches[0].screenY;

    console.log('touch', this.lastTouch);
  }

  @HostListener('touchend', ['$event'])
  bbb(event: any) {
    this.lastTouch = null;

    console.log('touch', this.lastTouch);
  }

  @HostListener('touchmove', ['$event'])
  ccc(event: any) {
    var currentTouch = event.changedTouches[0].screenY;
      this.aux.push(currentTouch);
      console.log(
        '1234asdf',
        this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]
      );

      if (
        this.aux.length >= 3 &&
        this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]
      ) {
        this.scrollUp();
      } else if (
        this.aux.length >= 3 &&
        this.aux[this.aux.length - 1] < this.aux[this.aux.length - 2]
      ) {
        this.scrollDown();
      }

      this.lastTouch = currentTouch;
      console.log('touch', this.lastTouch);
  }

  ngOnInit(): void {
    const html = document.documentElement;
    html.style.overflow = "hidden";

    this.headerAnimator.changeMode(true);
    window.scrollTo(0, 0);

    // Scroll para moviles
    /*window.addEventListener('touchstart', (event) => {
      this.lastTouch = null;
      this.aux = [0];
      this.lastTouch = event.touches[0].screenY;

      console.log('touch', this.lastTouch);
    });

    window.addEventListener('touchend', (event) => {
      this.lastTouch = null;

      console.log('touch', this.lastTouch);
    });

    window.addEventListener('touchmove', (event) => {
      var currentTouch = event.changedTouches[0].screenY;
      this.aux.push(currentTouch);
      console.log(
        '1234asdf',
        this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]
      );

      if (
        this.aux.length >= 3 &&
        this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]
      ) {
        this.scrollUp();
      } else if (
        this.aux.length >= 3 &&
        this.aux[this.aux.length - 1] < this.aux[this.aux.length - 2]
      ) {
        this.scrollDown();
      }

      this.lastTouch = currentTouch;
      console.log('touch', this.lastTouch);
    });*/
  }

  onScroll(event: any) {
    console.log('evento', event);
  }

  // SCROLL UP //
  scrollUp() {
    if (this.pageIndex > 0 && this.transition == false) {
      this.transition = true;

      this.pageIndex = this.pageIndex - 1;

      // Running header animation
      this.headerAnimator.activateAnimation(true);

      if (this.pageIndex == 0) {
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
      targets: '#s' + this.pageIndex,
      top: 0,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
    });

    anime({
      targets: '#s' + (this.pageIndex + 1),
      top: '100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(true);
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
      endDelay: 100,
    });

    anime({
      targets: '#s1',
      scale: 1,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        // If the user is on the landing page, set the header to night mode
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(true);
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

      if (this.pageIndex == 1) {
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
        endDelay: 100,
      });
    }

    anime({
      targets: '#s' + (this.pageIndex - 1),
      top: '-100vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
    });

    anime({
      targets: '#s' + this.pageIndex,
      top: '0vh',
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        if (this.pageIndex == 0) {
          this.headerAnimator.changeMode(false);
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
      bottom: '-14vh',
      duration: 850,
      easing: 'easeInOutQuart',
      delay: 500,
      endDelay: 100,
    });

    anime({
      targets: '#s1',
      scale: 0.7,
      duration: 850,
      easing: 'easeInOutQuart',
      endDelay: 100,
      complete: () => {
        // If the user is on the landing page, set the header to night mode
        if (this.pageIndex == 1) {
          this.headerAnimator.changeMode(false);
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

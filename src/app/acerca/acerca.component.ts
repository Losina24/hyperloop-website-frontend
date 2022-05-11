import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { HeaderAnimatorService } from '../services/header-animator.service';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {
  
  pageIndex: number = 0;
  transition: boolean = false;
  last: number = 0;
  aux: [number] = [0];
  lastTouch:any = null;


  texts = {
    en: {
      quienessomos: 'Who are we?',
      nosotros: 'About us',
      team: 'The Hyperloop UPV team is a group of students developing hyperloop technology, designing and manufacturing a prototype hyperloop vehicle. This year, Hyperloop UPV is proposing not only a scalable vehicle, but also the necessary infrastructure to enable its implementation in society.',
      us: 'About us',
      mision: 'Mission',
      vision: 'Vission',
      valores: 'Values',
      mMes: 'Hyperloop UPV seeks to put Valencia in the focus of innovation, developing prototypes of the transport of the future, designing and validating cutting-edge and scalable technology applicable to engineering solutions to problems that hinder the sustainable development of society.',
      vMes: 'We seek the development of the fifth mode of transport. A 100% ecological and sustainable transport that facilitates growing global mobility without damaging the environment. We want to make our work in a small workshop the project of a whole generation.',
      vvMes: 'We are a responsible team with the environment and committed to the problems of our society. Our main value, the one that moves us, is to shape a future even better than our present.'
    },
    es: {
      quienessomos: '¿Quiénes somos?',
      nosotros: 'Sobre nosotros',
      team: 'El equipo de Hyperloop UPV. Hyperloop UPV es un equipo de estudiantes de la Universidad Politécnica de Valencia que desarrolla, diseña y fabrica un vehículo prototipo de tecnología hyperloop. Este año, Hyperloop UPV propone, no solo un vehículo escalable, sino también la infraestructura necesaria para su implantación en la sociedad.',
      us: 'Nosotros',
      mision: 'Misión',
      vision: 'Visión',
      valores: 'Valores',
      mMes: 'En Hyperloop UPV buscamos poner a Valencia en el foco de la innovación. Para ello, en el equipo de la UPV desarrollamos vehículos prototipos de tecnología puntera y escalable, aplicable a las soluciones ingenieriles y a los problemas que dificultan el desarrollo sostenible de la sociedad.',
      vMes: 'Buscamos el desarrollo del quinto medio de transporte. Un transporte ultrarrápido y sostenible que facilite la movilidad mundial. Queremos hacer de nuestro trabajo en un pequeño taller, el proyecto de toda una generación.',
      vvMes: 'Somos un equipo comprometido con el medio ambiente y con los problemas de movilidad de nuestra sociedad. Nuestro valor principal es dar forma a un futuro en el que las ciudades estén mejor conectadas.'
    }
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService
  ) {
    // Scroll para moviles
    /*window.addEventListener('touchstart', (event) =>{
      this.lastTouch = null
      this.aux = [0];
      this.lastTouch = event.touches[0].screenY;

      console.log('touch', this.lastTouch);
    })

    window.addEventListener('touchend',(event) => {
      this.lastTouch = null;

      console.log('touch', this.lastTouch);
    })

    window.addEventListener('touchmove', (event) =>{
      var currentTouch = event.changedTouches[0].screenY
      this.aux.push(currentTouch)
      console.log('1234asdf', this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]);
      
      if (this.aux.length >= 3 && this.aux[this.aux.length - 1] > this.aux[this.aux.length - 2]) {
        this.scrollUp()
      } else if(this.aux.length >= 3 && this.aux[this.aux.length - 1] < this.aux[this.aux.length - 2]) {
        this.scrollDown()
      }
      
      this.lastTouch = currentTouch
      console.log('touch', this.lastTouch);
      
    })*/
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
    window.scroll(0,0);
    const html = document.documentElement;
    html.style.maxHeight = ""+window.innerHeight;
    html.style.overflow = "hidden";
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
    if (this.pageIndex < 3 && this.transition == false) {
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

  getTranslation(text: string) {
    let lang = sessionStorage.getItem('lang');
    //@ts-ignore
    return this.texts[lang][text];
  }
}

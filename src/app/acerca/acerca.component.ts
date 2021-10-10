import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
      team: 'El equipo Hyperloop UPV es un grupo de estudiantes que desarrolla dicha tecnología, diseñando y fabricando un vehículo prototipo de hyperloop. Este año, Hyperloop UPV propone, no sólo un vehículo escalable, sino también la infraestructura necesaria que permita su implantación en la sociedad.',
      us: 'Nosotros',
      mision: 'Misión',
      vision: 'Visión',
      valores: 'Valores',
      mMes: 'Hyperloop UPV busca poner a Valencia en el foco de la innovación, desarrollando prototipos del transporte del futuro diseñando y validando tecnología puntera y escalable aplicable a las soluciones ingenieriles a los problemas que dificultan el desarrollo sostenible de la sociedad.',
      vMes: 'Buscamos el desarrollo del quinto medio de transporte. Un transporte 100% ecológico y sostenible que facilite la creciente movilidad mundial sin perjudicar al medio ambiente. Queremos hacer de nuestro trabajo en un pequeño taller, el proyecto de toda una generación.',
      vvMes: 'Somos un equipo responsable con el medio ambiente y comprometido con los problemas de nuestra sociedad. Nuestro valor principal, aquel que nos mueve, es dar forma a un futuro aún mejor que nuestro presente.'
    }
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    private headerAnimator: HeaderAnimatorService
  ) { }

  ngOnInit(): void {

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

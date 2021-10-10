import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeaderAnimatorService } from '../services/header-animator.service';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  pageIndex: number = 0;
  transition: boolean = false;
  popup: string = '';

  texts = {
    en: {
      ventajas: 'Advantages',
      necesitamos: 'We need you!',
      slogan: '"When spiders weave together, they can bind a lion"🦁',
      subtitulo: 'This year, at Hyperloop UPV we are committed to a fully scalable vision, a new prototype vehicle and its infrastructure. The way to achieve this is by surrounding ourselves with companies willing to be part of this team, because we will only be able to leave our mark on society by working together.',
      cursiva: 'Being a sponsor of Hyperloop UPV means being part of this big project.',
      niveles: 'Levels of partnership',
      pulsa: 'Click on the levels to see their characteristics'
    },
    es: {
      ventajas: 'Ventajas',
      necesitamos: '¡Te necesitamos!',
      slogan: '«Cuando las arañas tejen juntas, pueden atar a un león 🦁»',
      subtitulo: 'Este año, en Hyperloop UPV apostamos por una visión completamente escalable, un nuevo vehículo prototipo y su infraestructura. La manera de conseguirlo es rodeándonos de empresas dispuestas a pertenecer a este equipo, pues solo unidos lograremos dejar huella en la sociedad.',
      cursiva: 'Ser patrocinador de Hyperloop UPV es formar parte de este gran proyecto.',
      niveles: 'Niveles de patrocinio',
      pulsa: 'Pulsa sobre los niveles para ver sus características'
    }
  }

  ventajas: any = {
    premium: {
      aportacion: '50.000€ (> 12.000€ aportación económica)',
      ventajas: [
        "Presencia web",
        "Anuncio del patrocinio en redes sociales",
        "Boletín mensual",
        "Campañas de marketing en redes sociales",
        "Logo en el stand de la European Hyperloop Week",
        "Encuentros networking entre partners",
        "Logo en la equipación de la temporada",
        "Logo en el prototipo",
        "Participación en eventos generales",
        "Acceso a Talento Joven",
        "Invitación presencial a la semana de la European Hyperloop Week"
      ]
    },
    gold: {
      aportacion: '15.000€ (> 6.000€ aportación económica)',
      ventajas: [
        "Presencia web",
        "Anuncio del patrocinio en redes sociales",
        "Boletín mensual",
        "Campañas de marketing en redes sociales",
        "Logo en el stand de la European Hyperloop Week",
        "Encuentros networking entre partners",
        "Logo en la equipación de la temporada",
        "Logo en el prototipo",
        "Participación en eventos generales",
        "Acceso a Talento Joven"
      ]
    },
    silver: {
      aportacion: '6.000€',
      ventajas: [
        "Presencia web",
        "Anuncio del patrocinio en redes sociales",
        "Boletín mensual",
        "Campañas de marketing en redes sociales",
        "Logo en el stand de la European Hyperloop Week",
        "Encuentros networking entre partners",
        "Logo en la equipación de la temporada",
        "Logo en el prototipo",
      ]
    },
    bronze: {
      aportacion: '2.000€',
      ventajas: [
        "Presencia web",
        "Anuncio del patrocinio en redes sociales",
        "Boletín mensual",
        "Campañas de marketing en redes sociales",
        "Logo en el stand de la European Hyperloop Week",
        "Encuentros networking entre partners"
      ]
    },
    collabs: {
      aportacion: '',
      ventajas: [
        "Presencia web",
        "Anuncio del patrocinio en redes sociales",
        "Boletín mensual"
      ]
    },
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
    if (this.pageIndex < 4 && this.transition == false) {
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

  // Niveles de patrocinio
  openSponsorLevel(lvl: string) {
    this.popup = lvl
  }

  getTranslation(text: string) {
    let lang = sessionStorage.getItem('lang');
    //@ts-ignore
    return this.texts[lang][text];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unveiling',
  templateUrl: './unveiling.component.html',
  styleUrls: ['./unveiling.component.scss']
})
export class UnveilingComponent implements OnInit {

  texts = {
    en: {
      contacto: 'Colaborate with us',
      titulo: 'Shape the future with us'
    },
    es: {
      contacto: 'Colabora con nosotros',
      titulo: 'Dale forma al futuro con nosotros'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  getTranslation(text: string) {
    let lang = sessionStorage.getItem('lang');
    //@ts-ignore
    return this.texts[lang][text];
  }
}

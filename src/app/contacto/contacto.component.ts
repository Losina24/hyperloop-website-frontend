import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  texts = {
    en: {
      contacto: 'Contact',
      nombre: 'Name',
      escribeNombre: 'Write your name',
      asunto: 'Subject',
      escribeAsunto: 'Write a subject',
      mensaje: 'Message',
      cuerpoMensaje: 'Message\'s body',
      enviar: 'Send',
      aceptar: 'By submitting you agree that your data will be saved by Hyperloop UPV'
    },
    es: {
      contacto: 'Contacto',
      nombre: 'Nombre',
      escribeNombre: 'Escribe tu nombre',
      asunto: 'Asunto',
      escribeAsunto: 'Escribe un asunto',
      mensaje: 'Mensaje',
      cuerpoMensaje: 'Cuerpo del mensaje',
      enviar: 'Enviar',
      aceptar: 'Al enviar aceptas que Hyperloop UPV almacene tus datos'
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

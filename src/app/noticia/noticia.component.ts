import { Component, OnInit, Input } from '@angular/core';
import * as NewsJson from 'src/noticias.json';
import {News} from 'src/app/shared/types/News'
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})


export class NoticiaComponent implements OnInit {

  @Input() id: number = 0;
  NewsJson: any = (NewsJson as any).default;
  noticia: any;
  constructor() { }

  ngOnInit(): void { 
    this.noticia = this.NewsJson.find( (noticia: any) => noticia.id == this.id);

  }

}

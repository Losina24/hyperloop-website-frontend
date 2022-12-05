import { Component, OnInit, Input } from '@angular/core';
import * as NewsJson from 'src/noticias.json';

@Component({
  selector: 'app-news-miniature',
  templateUrl: './news-miniature.component.html',
  styleUrls: ['./news-miniature.component.scss']
})
export class NewsMiniatureComponent implements OnInit {

  @Input() id: number = 0;
  NewsJson: any = (NewsJson as any).default;
  noticia: any;
  constructor() { }

  ngOnInit(): void {
    this.noticia = this.NewsJson.find( (noticia: any) => noticia.id == this.id);
  }

}

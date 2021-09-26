import { Component, Input, OnInit } from '@angular/core';
import * as members from '../../../miembros.json';

@Component({
  selector: 'app-miembro',
  templateUrl: './miembro.component.html',
  styleUrls: ['./miembro.component.scss']
})
export class MiembroComponent implements OnInit {
  @Input() alias: string = '';
  @Input() style: string = 'square'; // square - rounded - circle
  @Input() big_team: boolean = false;

  members: any = (members as any).default;
  member: any;

  constructor() {
  }

  ngOnInit(): void {
    // Obteniendo el usuario dado el alias (siglas con las letras iniciales)
    this.member = this.members.find( (member: any) => member.alias == this.alias);
  }

}

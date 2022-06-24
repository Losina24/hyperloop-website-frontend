import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AcercaComponent } from './acerca/acerca.component';
import { EntrarComponent } from './entrar/entrar.component';
import { UnveilingComponent } from './unveiling/unveiling.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:id', component: NoticiaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'donations', component: UnveilingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

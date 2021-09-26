import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:id', component: NoticiaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'equipo', component: EquipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

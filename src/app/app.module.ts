import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NoticiasComponent } from './noticias/noticias.component';
import { NewsMiniatureComponent } from './shared/news-miniature/news-miniature.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrarComponent } from './entrar/entrar.component';
import { UnveilingComponent } from './unveiling/unveiling.component';
//import { MouseWheelDirective } from './shared/directives/mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NoticiasComponent,
    NoticiaComponent,
    SponsorsComponent,
    EquipoComponent,
    ContactoComponent,
    AcercaComponent,
    DashboardComponent,
    EntrarComponent,
    UnveilingComponent,
    NewsMiniatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

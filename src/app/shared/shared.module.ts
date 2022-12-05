import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MouseWheelDirective } from './directives/mousewheel.directive';
import { MiembroComponent } from './miembro/miembro.component';
import { NewsMiniatureComponent } from './news-miniature/news-miniature.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    MouseWheelDirective,
    MiembroComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MouseWheelDirective,
    MiembroComponent,
  ]
})
export class SharedModule {}

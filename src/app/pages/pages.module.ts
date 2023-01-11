import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { ChileComponent } from './chile/chile.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    PeruComponent,
    UruguayComponent,
    ChileComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PeruComponent,
    UruguayComponent,
    ChileComponent,
    HomeComponent,
    ErrorComponent
  ],
})
export class PagesModule { }

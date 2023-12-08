import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';
import { QuizsComponent } from './quizs/quizs.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { NoelComponent } from './noel/noel.component';
import { UbisoftComponent } from './ubisoft/ubisoft.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'informations',
    component: InformationsComponent,
  },
  {
    path: 'quiz',
    component: QuizsComponent,
  },
  {
    path: 'glossaire',
    component: GlossaireComponent,
  },
  {
    path: 'noel',
    component: NoelComponent,
  },
  {
    path: 'ubisoft',
    component: UbisoftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

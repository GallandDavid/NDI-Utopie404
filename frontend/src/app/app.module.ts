import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { InformationsComponent } from './informations/informations.component';
import { QuizsComponent } from './quizs/quizs.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { ContenuComponent } from './home/contenu/contenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    InformationsComponent,
    QuizsComponent,
    GlossaireComponent,
    ContenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

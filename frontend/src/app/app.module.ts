import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { InformationsComponent } from './informations/informations.component';
import { QuizsComponent } from './quizs/quizs.component';
import { GlossaireComponent } from './glossaire/glossaire.component';
import { ContenuComponent } from './home/contenu/contenu.component';
import { NoelComponent } from './noel/noel.component';
import { UbisoftComponent } from './ubisoft/ubisoft.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    InformationsComponent,
    QuizsComponent,
    GlossaireComponent,
    ContenuComponent,
    NoelComponent,
    UbisoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

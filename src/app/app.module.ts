import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ListemedComponent } from './listemed/listemed.component';
import { FormsModule } from '@angular/forms';
import { MedecinAddComponent } from './medecin-add/medecin-add.component';
import { ModifComponent } from './modif/modif.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NewsComponent,
    HomeComponent,
    ListemedComponent,
    MedecinAddComponent,
    ModifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

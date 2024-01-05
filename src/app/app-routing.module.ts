import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ListemedComponent } from './listemed/listemed.component';
import { MedecinAddComponent } from './medecin-add/medecin-add.component';
import { ModifComponent } from './modif/modif.component';
const routes: Routes = [  { path: 'about', component: AboutComponent },{ path: 'news', component: NewsComponent },{ path: 'home', component: HomeComponent }
,{ path: 'listemed', component: ListemedComponent },{ path: 'add', component: MedecinAddComponent },  {
  path: 'modif/:id',
  component: ModifComponent,
},
];
//ajouti el routes mta3 el home
//baddel lienet el home
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

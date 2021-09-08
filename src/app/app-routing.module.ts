import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeafletComponent } from './components/add-leaflet/add-leaflet.component';
import { ArticleComponent } from './components/article/article.component';
import { CartComponent } from './components/cart/cart.component';
import { InsidearticleComponent } from './components/insidearticle/insidearticle.component';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { LeafletdetailComponent } from './components/leafletdetail/leafletdetail.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:MainComponent},
  {path:"ilanlar",component:LeafletComponent},
  {path:"ilanlar/ekle",component:AddLeafletComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"sepet",component:CartComponent},
  {path:"ilanlar/ilan/:leafletId",component:LeafletdetailComponent },
  {path:"decklist",component:ArticleComponent},
  {path:"decklist/:articleId",component:InsidearticleComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

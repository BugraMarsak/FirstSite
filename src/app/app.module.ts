import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';

import { LeafletComponent } from './components/leaflet/leaflet.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLeafletComponent } from './components/add-leaflet/add-leaflet.component';
import { CardTypeComponent } from './components/card-type/card-type.component';
import { FilterPipePipe } from './pipes/filter-pipe-pipe';

import { CardAttributefilterPipe } from './pipes/card-attributefilter.pipe';
import { CardtypefilterPipe } from './pipes/cardtypefilter.pipe';
import { RacefilterPipe } from './pipes/racefilter.pipe';
import { ElementfilterPipe } from './pipes/elementfilter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ArticleComponent } from './components/article/article.component';
import { LeafletdetailComponent } from './components/leafletdetail/leafletdetail.component';
import { InsidearticleComponent } from './components/insidearticle/insidearticle.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LeafletComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddLeafletComponent,
    CardTypeComponent,
    FilterPipePipe,
    CardAttributefilterPipe,
    CardtypefilterPipe,
    RacefilterPipe,
    ElementfilterPipe,
    CartComponent,
    ArticleComponent,
    LeafletdetailComponent,
    InsidearticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

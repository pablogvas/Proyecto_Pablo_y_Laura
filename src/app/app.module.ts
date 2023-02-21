import { FooterComponent } from './modules/components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsComponent } from './modules/components/products/products.component';
import { WelcomeComponent } from './modules/components/inicio/welcome/welcome.component'
import { AppComponent } from './app.component';
import { NavComponent } from './modules/components/nav/nav.component';
import { HeaderComponent } from './modules/components/header/header.component';
import {FormularioComponent} from './modules/components/gestion/formulario/formulario.component'

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FormularioComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'gestion', component: FormularioComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

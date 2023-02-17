import { WelcomeComponent } from './modules/components/inicio/welcome/welcome.component'
import { ListaProdutosComponent } from './modules/components/producto/lista-produtos/lista-produtos.component';

import {FormularioComponent} from './modules/components/gestion/formulario/formulario.component'

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/components/nav/nav.component';
import { HeaderComponent } from './modules/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListaProdutosComponent,
    FormularioComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: ListaProdutosComponent},
      {path: 'gestion', component: FormularioComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

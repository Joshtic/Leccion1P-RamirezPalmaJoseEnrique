import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';
import { HeaderComponent } from './components/vista2/header/header.component';
import { FotoContactoComponent } from './components/vista3/foto-contacto/foto-contacto.component';
import { DatosContactoComponent } from './components/vista3/datos-contacto/datos-contacto.component';
import { ListaComponent } from './components/vista2/lista/lista.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component,
    HeaderComponent,
    FotoContactoComponent,
    DatosContactoComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

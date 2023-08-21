import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableroDibujoComponent } from './components/tablero-dibujo/tablero-dibujo.component';
import { AnimacionComponent } from './components/animacion/animacion.component';
import { RandomContactComponent } from './components/random-contact/random-contact.component';
import { ContactosTableComponent } from './components/contactos-table/contactos-table.component';
import { TareasPageComponent } from './pages/tareas-page/tareas-page.component';


import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropTaskComponent } from './components/drag-drop-task/drag-drop-task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AreaPrivadaComponent } from './pages/area-privada/area-privada.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    LoginFormComponent,
    ContactFormComponent,
    ContactsPageComponent,
    NavComponent,
    TableroDibujoComponent,
    AnimacionComponent,
    RandomContactComponent,
    ContactosTableComponent,
    TareasPageComponent,
    NavigationComponent,
    DragDropTaskComponent,
    AreaPrivadaComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    //Importamos ReactiveModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { loginGuard } from './guards/login-guard';
import { AnimacionComponent } from './components/animacion/animacion.component';
import { TareasPageComponent } from './pages/tareas-page/tareas-page.component';
import { AreaPrivadaComponent } from './pages/area-privada/area-privada.component';

/*
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent, canActivate:[loginGuard]},//canActivate: [authGuard]  para que no nos deje ir al home si no nos logueamos ,canActivate: [authGuard]
  {path:'contacts', component:ContactsPageComponent,canActivate:[loginGuard]},
  {path:'tareas', component:TareasPageComponent,canActivate:[loginGuard]},
  {path:'animacion', component:AnimacionComponent,canActivate:[loginGuard]},
  {path:'**',component:NotFoundPageComponent}
];*/

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent},//canActivate: [authGuard]  para que no nos deje ir al home si no nos logueamos ,canActivate: [authGuard]
  {path:'contacts', component:ContactsPageComponent},
  {path:'tareas', component:TareasPageComponent},
  {path:'animacion', component:AnimacionComponent},
  {path:'areaprivada', component:AreaPrivadaComponent,canActivate:[loginGuard]},
  {path:'**',component:NotFoundPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

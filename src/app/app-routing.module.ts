import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { loginGuard } from './guards/login-guard';
import { AnimacionComponent } from './components/animacion/animacion.component';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent, canActivate:[loginGuard]},//canActivate: [authGuard]  para que no nos deje ir al home si no nos logueamos ,canActivate: [authGuard]
  {path:'contacts', component:ContactsPageComponent,canActivate:[loginGuard]},
  {path:'animacion', component:AnimacionComponent,canActivate:[loginGuard]},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

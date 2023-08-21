import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private loginservice:LoginService, private router: Router){

  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    estaLogueado(){
      return this.loginservice.estaLogueadoService();
    }
  
    logout(){
      this.loginservice.logoutService();
    }

    /*shouldShowNavigation(): boolean {
      console.log("metodo shouldS: ");
      console.log( this.router.url !== '/login' && this.estaLogueado());
      return this.router.url !== '/login' && this.estaLogueado();
    }*/

    isLoginPage(): boolean {
      const currentPath = this.router.url;
      console.log(currentPath);
      return currentPath === '/login';
    }
}

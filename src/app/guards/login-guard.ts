import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

export const loginGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  
  const router = inject(Router);
  const loginservice = inject(LoginService);

  if(loginservice.estaLogueadoService()){
    return true;
  }else{
    router.navigate(['login']);
    return false;
  }

  
};
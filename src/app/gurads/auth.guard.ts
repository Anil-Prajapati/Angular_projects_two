import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userRole:string="admin";
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // alert('this is the not authorize person...')
      // return this.userRole==='admin'?true:false;

      if(this.userRole==='admin'){
        return true;
      }else{
        alert('this is the not authorize person...');
        return false;
      }
  }
  
}

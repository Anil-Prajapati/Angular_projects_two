import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasChangesGuard implements CanDeactivate<unknown> {

  pageHasChanges:boolean=true;

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.pageHasChanges){
        return true;
      }else{
        alert('This is the not possible to changes has pages please Sumitted Your data into the databases...')
        return false;
      }
  }
  
}

import {Injectable} from '@angular/core'
import { ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router/src/router_state';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable()
export class ProductRouteGuard implements CanActivate{
    
    private firstNavigation:boolean = true;
    constructor(private router:Router){}

    canActivate(activatedroutesnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot):boolean{

            if(this.firstNavigation){
                this.firstNavigation = false;
                if(activatedroutesnapshot.component != ProductComponent){
                    this.router.navigateByUrl("/");
                    return false;
                }
            }
            
            return true;
    }
}
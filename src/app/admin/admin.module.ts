import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import {BrowserModule} from "@angular/platform-browser"
import { CommonModule } from "@angular/common";
import { ModelModule } from "../model/model.module";
import { AuthRouteGuard } from '../guard/auth.guard';
// import {} from './mode'

@NgModule({
    declarations: [AdminComponent, AuthComponent],
    imports:[
        ModelModule,
        CommonModule, 
        RouterModule.forChild([
            {path: "auth", component:AuthComponent},
            {path: "main", component:AdminComponent, canActivate: [AuthRouteGuard] },
            {path: "**", redirectTo:"auth"},
        ]),
        FormsModule,
    ReactiveFormsModule],
    exports: [AdminComponent, AuthComponent],
    providers: [AuthRouteGuard]

})
export class AdminModule{

}
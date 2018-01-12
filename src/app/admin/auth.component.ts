import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl:'auth.component.html'
})
export class AuthComponent{

    public username:string;
    public password: string;
    public errorMessage:string = null;

    constructor(private router:Router,
                private authService : AuthService
                ){}

    public authenticate(form: NgForm):void{

        this.authService.authenticate(this.username, this.password)
            .subscribe( (status) =>{
                if(status){
                    this.router.navigateByUrl("/admin/main");
                }
                else{
                    this.errorMessage = "Invalid Credentials";
                }
            })
        
    }
}
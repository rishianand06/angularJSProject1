import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Headers } from "@angular/http";
import { RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{

    public token:string = null;
    private baseUrl:string = "http://localhost:3500/login";

    constructor(private http: Http){}
    public authenticate(username: string, password:string) :Observable<boolean>{

        let customheaders: Headers = new Headers({
            "Content-Type": "application/json"
        });

        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheaders
        });

        return this.http.post(
            this.baseUrl,
             {name: username, password: password},
             requestOptions)
             .map((response) => {
                 let data = response.json();
                 this.token = data.token;
                 console.log(this.token);
                 
                 return data.success;
             });
        
    }

    public get authenticated(): boolean{
        return this.token != null;
    }

    public logout():void{
        this.token = null;
    }

}
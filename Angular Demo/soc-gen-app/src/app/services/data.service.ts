import { Injectable } from "@angular/core";
import { USER_DATA } from "../mocks";
import "rxjs/add/operator/map"
import { User } from "../model/User";
import { Http } from "@angular/http";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthService } from "./auth.service";
@Injectable()
export class DataService
{
    constructor(private http:Http,private httpCli:HttpClient,private auth:AuthService){}
    getUserData()
    {
        return USER_DATA;
    }
    getJsonData()
    {
      return  this.http.get("assets/userdata.json")
                       .map(response=><User[]>response.json().userdata);
    }
    getApiData()
    {
        //as querystring
     // return  this.httpCli.get<User[]>("https://soc-gen.firebaseio.com/userdata.json?auth="+this.auth.getToken());
     ///in params
    //   return  this.httpCli.get<User[]>("https://soc-gen.firebaseio.com/userdata.json?",
    //   {params:new HttpParams().set("auth",this.auth.getToken())});

    return  this.httpCli.get<User[]>("https://soc-gen.firebaseio.com/userdata.json");
    }
}
import { Injectable } from "@angular/core";
import { USER_DATA } from "../mocks";
import "rxjs/add/operator/map"
import { User } from "../model/User";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService
{
    constructor(private http:Http,private httpCli:HttpClient){}
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
      return  this.httpCli.get<User[]>("https://soc-gen.firebaseio.com/userdata.json");
                      
    }
}
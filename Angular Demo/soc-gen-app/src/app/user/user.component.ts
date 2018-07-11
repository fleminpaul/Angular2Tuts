import { Component, Input } from "@angular/core";
import { User } from "../model/User";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})
export class UserComponent {
    @Input('titleName')
    title:string;
    @Input ('userInfos')
    users:User[];

    myclasses={
        border:true,
        text:false
    }

    moreInfo(user){
        alert(`Company of ${user.fname} is ${user.company}`);
        this.myclasses.border=false;
        this.myclasses.text=true;

    }
    // ngOnChanges(){
    //     console.log("ngOnChanges");
    // }

    // ngOnInit(){
    //     console.log("ngOnInit");
    // }

    // ngDoCheck(){
    //     console.log("ngDoCheck");
    // }
    // ngAfterContentInit(){
    //     console.log("ngAfterContentInit");
    // }
    // ngAfterContentChecked(){
    //     console.log("ngAfterContentChecked");
    // }
    // ngAfterViewInit(){
    //     console.log("ngAfterViewInit");
    // }
    // ngAfterChecked(){
    //     console.log("ngAfterChecked");
    // }
    // ngOnDestroy(){
    //     console.log("ngOnDestroy");
    // }
}
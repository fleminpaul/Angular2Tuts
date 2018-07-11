import { Component, Input } from "@angular/core";
import { User } from "../model/User";
import { DataService } from "../services/data.service";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})
export class UserComponent {
    @Input('titleName')
    title: string;
    @Input('userInfos')
    users: User[];

    myclasses = {
        border: true,
        text: false
    }
    constructor(private ds: DataService) { }
    moreInfo(user) {
        alert(`Company of ${user.fname} is ${user.company}`);
        this.myclasses.border = false;
        this.myclasses.text = true;

    }
    // ngOnChanges(){
    //     console.log("ngOnChanges");
    // }

    ngOnInit() {
        this.ds.getApiData().subscribe(
            data => this.users = data,
            err => console.log(err.status + " " + err.statusText),
            () => console.log("Completed")

        );
    }

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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  id:number;
  ngOnInit() {
    //this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(param=>{
      this.id =  +param['id'];
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  contactNumber: number = 9739570508;
  data = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Data Arrived") }, 900);
  })

  todos = [{
    label: "some work",
    status: "pending"
  },
  {
    label: "some work1",
    status: "completed"
  },
  {
    label: "some work2",
    status: "not doing"
  },
  {
    label: "some work3",
    status: "pending"
  }]
  constructor() { }

  ngOnInit() {
  }

}

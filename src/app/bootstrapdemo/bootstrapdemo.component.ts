import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {
  fruits=["mango","banana","apple","orange","pinaple"]
  constructor() { }
  toggle=true
  ngOnInit() {
  }

}

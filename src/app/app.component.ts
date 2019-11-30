import { Component } from '@angular/core';
import {Myclass} from './mymodule'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor()
  {
    var my=new Myclass()
    my.hello()
  }

}

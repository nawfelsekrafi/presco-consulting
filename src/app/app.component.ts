import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Presco-consulting';
  wait : boolean = true;
  constructor(){
  }
  ngOnInit(){
    setTimeout(() => {
      this.wait= false;
    }, 100);
  }
}

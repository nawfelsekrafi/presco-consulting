import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.component.html',
  styleUrls: ['./qui-sommes-nous.component.css']
})
export class QuiSommesNousComponent implements OnInit, AfterViewInit {

  wait : boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.wait= false;
    }, 600);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showList: boolean = false;

  constructor( private router: Router) { }
  
  ngOnInit(): void {
    // let menuIcon = document.getElementById('list-icon');
    // let menu = <HTMLElement>document.querySelector('.menu');
    
      
    
   
    // menuIcon!.onclick = function(){
    //   menu!.classList.toggle("show");
    // }
    // menu!.onclick = function(){
    //   menu!.classList.toggle("show");
    // }
    
   
  }



}

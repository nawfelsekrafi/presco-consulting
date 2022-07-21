import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from 'src/app/shared/fake-db/fake-db';
import { Cours } from 'src/app/shared/models/cours';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses :any ;
  constructor(public router: Router) {
    
   }

  ngOnInit(): void {
    this.courses = courses.slice(0 ,4);
  }

}

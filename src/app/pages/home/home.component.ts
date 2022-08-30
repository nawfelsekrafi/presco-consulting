import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/shared/services/cours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses :any ;
  constructor(public router: Router,
    private coursService: CoursService
    ) {
    
   }

  ngOnInit(): void {
    this.getFormation();
  }

  getFormation(){
   this.courses =  this.coursService.getFormations().slice(0,4);
  }

}

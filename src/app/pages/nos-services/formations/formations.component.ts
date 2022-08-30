import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/services/cours.service';


@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  courses : any;
  constructor(
    private coursService: CoursService
  ) { }

  getFormation(){
    this.courses =  this.coursService.getFormations();
  }

  ngOnInit(): void {
    this.getFormation();
    this.courses  = this.courses.slice(0,5);
    
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

  selectedFilter:any;
  filterFormationBy(domain: any){
    this.getFormation();
    this.selectedFilter = domain;
    this.courses = this.courses.filter((e:any) => e.domain == domain);
  }

  afficherAllFormation(){
    this.getFormation();
  }

}

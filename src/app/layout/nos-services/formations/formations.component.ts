import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/shared/models/cours';
import { courses } from '../../../shared/fake-db/fake-db'

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  courses : any;
  constructor() { }

  ngOnInit(): void {
    this.courses  = courses.splice(0,5);
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Title } from '@angular/platform-browser';
=======
>>>>>>> 86506d5b23151c220bd7448a47f1b740b18e7be2

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {

<<<<<<< HEAD
  constructor(
    private titleService : Title
  ) { 
    this.titleService.setTitle('Nos Services - Presco Consulting');
  }
=======
  constructor() { }
>>>>>>> 86506d5b23151c220bd7448a47f1b740b18e7be2

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}

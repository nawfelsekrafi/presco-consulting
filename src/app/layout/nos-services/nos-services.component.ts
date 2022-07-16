import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {

  constructor(
    private titleService : Title
  ) { 
    this.titleService.setTitle('Nos Services - Presco Consulting');
  }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}

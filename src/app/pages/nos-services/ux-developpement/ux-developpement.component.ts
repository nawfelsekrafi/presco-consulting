import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ux-developpement',
  templateUrl: './ux-developpement.component.html',
  styleUrls: ['./ux-developpement.component.css']
})
export class UxDeveloppementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}

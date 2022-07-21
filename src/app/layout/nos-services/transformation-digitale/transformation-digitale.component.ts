import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation-digitale',
  templateUrl: './transformation-digitale.component.html',
  styleUrls: ['./transformation-digitale.component.css']
})
export class TransformationDigitaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}

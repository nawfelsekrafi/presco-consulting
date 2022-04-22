import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nous-rejoindre',
  templateUrl: './nous-rejoindre.component.html',
  styleUrls: ['./nous-rejoindre.component.css']
})
export class NousRejoindreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}

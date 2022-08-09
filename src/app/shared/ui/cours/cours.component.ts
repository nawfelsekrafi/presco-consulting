import { Component, Input, OnInit, Output } from '@angular/core';

import { Cours } from '../../models/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  @Input()
  cours: Cours = new Cours() ;

  // @Output()
  // OpenCours$ : EventEmitter = new EventEmitter();

  constructor() {
    this.siteKey = '6LdNOqocAAAAADgo2zcsO4lp5MJV8HaIhngDFZZP';
   }

  resolved(event: any) {
    this.captcha = true;
  }
  captcha = false;
  // this is used for Google Recaptcha v2
  siteKey: string = '';

  ngOnInit(): void {
  }

}

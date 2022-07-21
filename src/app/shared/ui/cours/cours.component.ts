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

  constructor() { }

  ngOnInit(): void {
  }

}

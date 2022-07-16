import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  @Input()
  nom: string = "cours";

  @Input()
  certifiant: boolean = true;

  @Input()
  duree: string = "x h/ x j";

  @Input()
  couleur: string = "blue" || "purple";

  @Input()
  prochaineSession : string = "";

  @Output()
  OpenCours$ : EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FORMATIONS } from '../db/db';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private http: HttpClient
  ) { }

  getFormations() : any[]{
    return FORMATIONS;
  }

}

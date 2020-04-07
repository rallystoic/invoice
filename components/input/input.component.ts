import { Component, OnInit } from '@angular/core';
import { Items } from '../../Entities';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
//***********************************************

items = new Items();
arr: string[];


word: string= '';
lists = ['s'];
lists$ = new Observable<string[]>();


//***********************************************





  ngOnInit() {
  }

}

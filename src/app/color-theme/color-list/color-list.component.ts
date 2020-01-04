import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {

  @Output() colorWasSelected = new EventEmitter<string>();
  colors = [
    'white', 
    'silver',  
    'gray', 
    'black', 
    'red', 
    'maroon', 
    'yellow', 
    'olive', 
    'lime', 
    'green', 
    'aqua', 
    'teal', 
    'blue', 
    'navy', 
    'fuchsia', 
    'purple'
  ]

  colorsData;

  constructor() { }

  ngOnInit() {
    this.colorsData = this.colors;
    console.log(this.colorsData);
  }

  onColorSelect(myColor:string) {
    this.colorWasSelected.emit(myColor);
  }
  

}

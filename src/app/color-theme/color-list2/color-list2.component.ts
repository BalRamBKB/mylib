import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-list2',
  templateUrl: './color-list2.component.html',
  styleUrls: ['./color-list2.component.scss']
})
export class ColorList2Component implements OnInit {

  @Output() colorWasSelected2 = new EventEmitter<string>();
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
    'purple', 
  ]

  colorsData;

  constructor() { }

  ngOnInit() {
  }

  onColorSelected(myColor2:string) {
    this.colorWasSelected2.emit(myColor2);
  }

}

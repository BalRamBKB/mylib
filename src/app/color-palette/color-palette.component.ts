import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

  @ViewChild('myDiv', {static: false}) myDivElementRef: ElementRef;


  constructor() {}

  ngAfterViewInit() {



   }

  ngOnInit() {

    // this.myDivElementRef.nativeElement.innerHTML;
    // console.log(this.myDivElementRef);
  }

  // colors:string [] = [
  //   'white',
  //   'silver',
  //   'gray',
  //   'black',
  //   'red', 
  //   'maroon',
  //   'yellow',
  //   'olive',
  //   'lime',
  //   'green',
  //   'aqua',
  //   'teal',
  //   'blue',
  //   'navy',
  //   'fuchsia' ,
  //   'purple', 
  // ]

  colors = [
    { colorName:'white', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'silver', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, 
    { colorName:'gray', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'black', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'red', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'maroon', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'yellow', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'olive', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'lime', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'green', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'aqua', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'teal', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'blue', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'navy', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'fuchsia', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { colorName:'purple', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
   ]


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

}

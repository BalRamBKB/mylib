import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.scss']
})
export class ColorThemeComponent implements OnInit {

  selectedPrimaryColor : string;
  selectedSecondaryColor : string;
  constructor() { }

  ngOnInit() {
  }

}

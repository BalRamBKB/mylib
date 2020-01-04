import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-view',
  templateUrl: './color-view.component.html',
  styleUrls: ['./color-view.component.scss']
})
export class ColorViewComponent implements OnInit {

  @Input() primaryColorDetails:string;
  @Input() secondaryColorDetails:string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-color2',
  templateUrl: './color2.component.html',
  styleUrls: ['./color2.component.scss']
})
export class Color2Component implements OnInit {

  @Input() color2:string;

  @Output() colorSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.colorSelect.emit();
  }

}

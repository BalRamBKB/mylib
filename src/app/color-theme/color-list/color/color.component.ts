import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() colorD:string;

  @Output() colorSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.colorSelect.emit();
  }

}

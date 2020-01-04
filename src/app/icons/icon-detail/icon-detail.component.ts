import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-detail',
  templateUrl: './icon-detail.component.html',
  styleUrls: ['./icon-detail.component.scss']
})
export class IconDetailComponent implements OnInit {

  @Input() iconDetail: string;

  constructor() { }

  ngOnInit() {
  }

}

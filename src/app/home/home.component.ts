import { Component, OnInit } from '@angular/core';

// import { ApiService } from "../shared/api.service";

// import productData from '../shared/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // articles;
  // articles:any = productData;
  // constructor(private apiService: ApiService) { }
  constructor() { }

  ngOnInit() {
    // this.apiService.getData().subscribe((data)=>{
    //   console.log(data);
    //   this.articles = data;
    // });
  }
  

}

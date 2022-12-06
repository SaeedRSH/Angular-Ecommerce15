import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  products: any[];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?PageSize=50&PageIndex=1&BrandId=1&TypeId=1&Search=Angular').subscribe({
    next: (response: IPagination) => {
      this.products = response.data;
      console.log(this.products);
    },
    error: (e) => console.error(e)
  }
    );    
  }
}



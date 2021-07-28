import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { StockOverview } from '../models/StockOverview';
import { StockDetailed } from '../models/StockDetailed';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  stockOverviews: StockOverview[]; 
  searchString: string = null; 
  stockDetailed: StockDetailed; 
  search: boolean = false; 
  view: boolean = false; 
  
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  sumbitSearch(searchString: string): void {
    this.homeService.getSearchStockResults(searchString)
    .subscribe
    (
      data => 
      {
        this.stockOverviews = data; 
      }
    ); 

    if (this.stockOverviews !== undefined && this.stockOverviews.length > 0) {
      this.search = true; 
      this.view = false; 
    }
  }   

  viewStock(symbol: string) {
    this.homeService.getStockBySymbol(symbol)
    .subscribe
    (
      data => 
      {
        this.stockDetailed = data; 
      }
    ); 

    if (this.stockDetailed !== undefined && Object.keys(this.stockDetailed).length > 0) {
      this.search = false; 
      this.view = true; 
    }
  }

  back() {
    this.search = true; 
    this.view = false; 
  }

}

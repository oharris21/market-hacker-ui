import { Component, OnInit } from '@angular/core';
import { StockDetailed } from '../models/StockDetailed';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-hotlist-view',
  templateUrl: './hotlist-view.component.html',
  styleUrls: ['./hotlist-view.component.css']
})
export class HotlistViewComponent implements OnInit {

  hotListStocks: StockDetailed[]; 
  loading: boolean = true; 
  stockDetailed: StockDetailed; 
  view: boolean = false; 
  emptyHotList: boolean = false; 

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHotlist(); 
  }

  getHotlist() {
    this.homeService.getHotList()
    .subscribe(data => {
      this.hotListStocks = data.hotListStocks; 
      console.log(this.hotListStocks); 
      this.setSpinner(); 
    });
  }

  setSpinner() {
      // turn off spinner and set data view in table if the hotlist is populated 
      if (this.hotListStocks != null && this.hotListStocks!= undefined && Object.keys(this.hotListStocks).length > 0) {
        this.loading = false; 
        this.emptyHotList = false; 
      }

      // turn off spinner and display message if the hotlist call was successful but the hotlist
      // is empty 
      if (this.hotListStocks != null && this.hotListStocks != undefined && this.hotListStocks.length == 0) {
        this.loading = false; 
        this.emptyHotList = true; 
      }

      // unsuccessful hotlist call
      if (this.hotListStocks == null || this.hotListStocks == undefined) {
        this.loading = false; 
        this.emptyHotList = true; 
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
      this.view = true; 
    }
  }

  back() {
    this.view = false; 
  }

}

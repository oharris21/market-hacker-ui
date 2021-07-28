import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { StockDetailed } from '../models/StockDetailed';
import { Subscription, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotlist-sidebar',
  templateUrl: './hotlist-sidebar.component.html',
  styleUrls: ['./hotlist-sidebar.component.css']
})
export class HotlistComponent implements OnInit {

  stockDetailedArray: StockDetailed[]; 
  hotListStocks: StockDetailed[]; 
  loading: boolean = true; 
  emptyHotList: boolean = false; 
  subscription: Subscription;

  constructor(private homeService: HomeService) { }

  // comment this method out to run the application without the hotlist refreshing each minute
  ngOnInit(): void {
    this.homeService.getHotList()
    .subscribe(data => {
      this.hotListStocks = data.hotListStocks; 
      console.log(data);
      this.setSpinner(); 
    });

    interval(60000)
    .pipe(
      mergeMap(() => this.homeService.getHotList())
    )
    .subscribe(data => {
      this.hotListStocks = data.hotListStocks; 
      console.log(data);
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
    if (this.hotListStocks != null && this.hotListStocks!= undefined && this.hotListStocks.length == 0) {
      this.loading = false; 
      this.emptyHotList = true; 
    }
  }

}

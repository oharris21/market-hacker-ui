import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

// export class StockDetailed {
//   constructor(
//     public symbol: string,
//     public name: string,
//     public price: number, 
//     public changesPercentage: number,
//     public change: number,
//     public dayLow: number,
//     public dayHigh: number,
//     public yearHigh: number,
//     public yearLow: number,
//     public marketCap: number,
//     public priceAvg50: number,
//     public priceAvg200: number,
//     public volume: number,
//     public avgVolume: number,
//     public exchange: string, 
//     public open: number,
//     public previousClose: number,
//     public eps: number,
//     public pe: number,
//     public earningsAnnouncement: string,
//     public sharesOutstanding: number,
//     public timestamp: Date,
//     public companyName: string,
//     public sector: string,
//     public industry: string,
//     public exchangeShortName: string, 
//     public country: string, 
//     public isEtf: string,
//     public isActivelyTrading: string,
//   ) {}
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // stock = 'AAL'; 
  // stockFromWS: StockDetailed; 

  constructor(private homeService: HomeService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.getStock(); 
  }

  // getStock() {
  //   this.httpClient.get<any>('http://localhost:8080/smoke-test').subscribe(
  //     response => {
  //       console.log(response); 
  //       this.stock = response; 
  //     }
  //   );
  // }

  // not gonna be exactly like this, but we do want logic in the sidebar to route it to a full screen
  // view if the user chooses 
  
  // $(function(){
  //   $('.toggle-menu').click(function(e){
  //     e.preventDefault();
  //     $('.sidebar').toggleClass('toggled');
  //   });
  // });

}

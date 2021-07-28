import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { StockDetailed } from '../models/StockDetailed';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.css']
})
export class ScreenerComponent implements OnInit {

  marketCapSelected: boolean = false; 
  priceSelected: boolean = false; 
  betaSelected: boolean = false; 
  volumeSelected: boolean = false; 
  dividendSelected: boolean = false; 
  sectorSelected: boolean = false; 
  marketCapStringLiteral: string = "marketCap"; 
  priceStringLiteral: string = "price"; 
  betaStringLiteral: string = "beta"; 
  volumeStringLiteral: string = "volume"; 
  dividendStringLiteral: string = "dividend"; 
  sectorStringLiteral: string = "sector"; 
  stockDetailedArray: StockDetailed[]; 
  marketCap: number = null; 
  price: number = null; 
  beta: number = null; 
  volume: number = null; 
  dividend: number = null; 
  sector: string = null; 
  selected: number = 0; 
  marketCapGreaterOrLess: number = null; 
  priceGreaterOrLess: number = null; 
  betaGreaterOrLess: number = null; 
  volumeGreaterOrLess: number = null; 
  dividendGreaterOrLess: number = null; 
  search: boolean = false; 
  view: boolean = false; 
  stockDetailed: StockDetailed; 

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  selectCheckbox(selectedParam: string) {
    if (selectedParam === "marketCap") {
      this.marketCapSelected == false ? this.marketCapSelected = true : this.marketCapSelected = false; 
    }
    if (selectedParam === "price") {
      this.priceSelected == false ? this.priceSelected = true : this.priceSelected = false; 
    }
    if (selectedParam === "beta") {
      this.betaSelected == false ? this.betaSelected = true : this.betaSelected = false; 
    }
    if (selectedParam === "volume") {
      this.volumeSelected == false ? this.volumeSelected = true : this.volumeSelected = false; 
    }
    if (selectedParam === "dividend") {
      this.dividendSelected == false ? this.dividendSelected = true : this.dividendSelected = false; 
    }
    if (selectedParam === "sector") {
      this.sectorSelected == false ? this.sectorSelected = true : this.sectorSelected = false; 
    }
  }

  setSector(){
    if (this.selected == 1) this.sector = "Financial Services"; 
    else if (this.selected == 2) this.sector = "Basic Materials"; 
    else if (this.selected == 3) this.sector = "Communication Services"; 
    else if (this.selected == 4) this.sector = "Consumer Defensive"; 
    else if (this.selected == 5) this.sector = "Consumer Cyclical"; 
    else if (this.selected == 6) this.sector = "Real Estate"; 
    else if (this.selected == 7) this.sector = "Conglomerates"; 
    else if (this.selected == 8) this.sector = "Industrial Goods"; 
    else if (this.selected == 9) this.sector = "Healthcare"; 
    else if (this.selected == 10) this.sector = "Energy"; 
    else if (this.selected == 11) this.sector = "Technology"; 
    else if (this.selected == 12) this.sector = "Industrials"; 
    else if (this.selected == 13) this.sector = "Financial"; 
    else if (this.selected == 14) this.sector = "Services"; 
    else if (this.selected == 15) this.sector = "Utilities"; 
  }

  submitScreenerSearch() {
    this.setSector(); 
    let paramsMap = new HttpParams();

    if (this.marketCapSelected) 
      this.marketCapGreaterOrLess == 1 ? paramsMap = paramsMap.append('marketCapMoreThan', this.marketCap.toString()) :
        paramsMap = paramsMap.append('marketCapLessThan', this.marketCap.toString());
    if (this.priceSelected) 
      this.priceGreaterOrLess == 1 ? paramsMap = paramsMap.append("priceMoreThan", this.price.toString()) : 
        paramsMap = paramsMap.append("priceLessThan", this.price.toString());
    if (this.betaSelected) 
      this.betaGreaterOrLess == 1 ? paramsMap = paramsMap.append("betaMoreThan", this.beta.toString()) : 
        paramsMap = paramsMap.append("betaLessThan", this.beta.toString()); 
    if (this.volumeSelected) 
      this.volumeGreaterOrLess == 1 ? paramsMap = paramsMap.append("volumeMoreThan", this.volume.toString()) : 
        paramsMap = paramsMap.append("volumeLessThan", this.volume.toString()); 
    if (this.dividendSelected) 
      this.dividendGreaterOrLess == 1 ? paramsMap = paramsMap.append("dividendMoreThan", this.dividend.toString()) : 
        paramsMap = paramsMap.append("dividendLessThan", this.dividend.toString()); 
    if (this.sectorSelected) paramsMap = paramsMap.append("sector", this.sector); 

    this.homeService.getStockScreenerResults(paramsMap) 
    .subscribe
    (
      data => 
      {
        this.stockDetailedArray = data; 
        console.log(data); 
      }
    ); 

    if (this.stockDetailedArray !== undefined && this.stockDetailedArray.length > 0) {
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

    if (this.stockDetailedArray !== undefined && this.stockDetailedArray.length > 0) {
      this.search = false; 
      this.view = true; 
    }
  }

  back() {
    this.search = true; 
    this.view = false; 
  }

}

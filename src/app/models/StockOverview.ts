export class StockOverview {
    constructor(
      public date: string,
      public open: number,
      public close: number,
      public high: number,
      public low: number,
      public volume: number,
      public symbol: string,
      public name: string,
      public currency: string,
      public stockExchange: string,
      public exchangeShortName: string
    ) {}
  }
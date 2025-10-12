import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Quote {
  quotes: {
    id: number;
    quote: string;
    author: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getQuotes() {
    return this.httpClient.get<Quote>("https://dummyjson.com/quotes");
  }
}

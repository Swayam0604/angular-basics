import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../services/quote.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [NgFor,CommonModule,JsonPipe],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
  quotes!: Quote;  // the Quotes that we have in the interface
  queryParams!: any;
constructor(private quoteService: QuoteService, private activeRoute: ActivatedRoute) {         
  
}

ngOnInit() {
  this.quoteService.getQuotes()
  .subscribe({
    next:(data) => this.quotes = data
  });
  this.activeRoute.queryParams.subscribe(
  {
   next : (params) => this.queryParams= params
  }
  );
}


}

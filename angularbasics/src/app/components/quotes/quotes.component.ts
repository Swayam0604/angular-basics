import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../services/quote.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [NgFor,CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
  quotes!: Quote;  // the Quotes that we have in the interface 
constructor(private quoteService: QuoteService) {         
  
}

ngOnInit() {
  this.quoteService.getQuotes()
  .subscribe({
    next:(data) => this.quotes = data
  });
}


}

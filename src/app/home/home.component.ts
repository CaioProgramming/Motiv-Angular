import { Component, OnInit } from '@angular/core';
import { communityText, customizationText, downloadText, techtext } from './data/texts.constants';
import { QuoteService } from '../quotes/service/quote.service';
import { Quote } from '../quotes/model/quote.model';
import { AuthService } from '../auth/auth.service';
import { Style } from '../styles/model/style.model';
import { StyleService } from '../styles/service/style.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { StyleHelper } from '../styles/service/style.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('2.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  quotes: Quote[] = [];
  styles: Style[] = [];
  currentIndex = 0;
  currentStyle: Style | undefined = undefined;
  currentQuote: Quote | undefined = undefined;
  indexUpdateSubscription: any;
  isAuthenticated = false;
  background: { [key: string]: string; } =  {
    'background': 'linear-gradient(to bottom, transparent, antiquewhite)'
  };

  constructor(private quoteService: QuoteService, private styleService: StyleService, private authService: AuthService, private styleHelper: StyleHelper) { }



  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.quoteService.getLastQuotes().then(quotes => {
      this.quotes = quotes;
      quotes.forEach(quote => {
        this.styleService.getDataById(quote.style).then(style => {
          if (style != undefined) {
            this.styles.push(style);
          }
        });
      });
      this.indexUpdateSubscription = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1);
        if(this.currentIndex >= this.quotes.length) { this.currentIndex = 0; }
        this.currentQuote = this.quotes[this.currentIndex];
        this.currentStyle = this.styles.find(style => style.id === this.currentQuote?.style);
        if (this.currentStyle != undefined) {
          this.background = this.styleHelper.getBackgroundColor(this.currentStyle.styleProperties)
        }
        console.log("current index -> ", this.currentIndex);
      }, 10000);
    });
  }

  ngOnDestroy(): void {
    if (this.indexUpdateSubscription) {
      clearInterval(this.indexUpdateSubscription);
    }
  }

}

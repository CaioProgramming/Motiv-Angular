import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Quote } from '../model/quote.model';
import { Style } from '../../styles/model/style.model';
import { StyleService } from '../../styles/service/style.service';
import { StyleHelper } from '../../styles/service/style.helper';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'quote-card',
  templateUrl: "quote.card.component.html",
  styleUrl: './quote.card.component.component.css',
 
})


export class QuoteCardComponent implements OnInit, OnChanges {
  @Input() quote: Quote | undefined = undefined;
  @Input() style: Style | undefined = undefined;
  styleProperties: { [key: string]: string } | undefined;
  textProperties: { [key: string]: string } | undefined;
  background: { [key: string]: string } | undefined;

  constructor(private cd: ChangeDetectorRef) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['style'] && changes['style'].currentValue) {
      this.updateStyleProperties();
    }
  }

  private updateStyleProperties(): void {
    if (this.style) {
      const styleHelper = new StyleHelper();
      
      this.styleProperties = styleHelper.getStyleForCard(this.style.styleProperties);
      this.textProperties = styleHelper.getStyleForText(this.style.textProperties, this.style.shadowStyle);
      this.background = styleHelper.getBackgroundColor(this.style.styleProperties);

      this.cd.detectChanges();
    }
  }

  ngOnInit(): void {
   this.updateStyleProperties();
  }

}

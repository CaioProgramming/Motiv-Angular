import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Quote } from '../model/quote.model';
import { Style } from '../../styles/model/style.model';
import { StyleHelper } from '../../styles/service/style.helper';
import { FontService } from '../../utils/fonts/font.service';

@Component({
  selector: 'app-quote-card',
  templateUrl: "quote.card.component.html",
  styleUrl: './quote.card.component.component.css',
 
})


export class QuoteCardComponent implements OnInit, OnChanges {
  @Input() quote: Quote | undefined = undefined;
  @Input() style: Style | undefined = undefined;
  styleProperties: { [key: string]: string } | undefined;
  textProperties: { [key: string]: string } | undefined;
  background: { [key: string]: string } | undefined;

  constructor(private cd: ChangeDetectorRef, private fontService: FontService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['style'] && changes['style'].currentValue) {
      this.updateStyleProperties();
    }
  }

  private updateStyleProperties(): void {
    if (this.style) {
      const styleHelper = new StyleHelper();
      
      this.styleProperties = styleHelper.getStyleForCard();
      this.textProperties = styleHelper.getStyleForText(this.style.textProperties, this.style.shadowStyle);
      this.background = styleHelper.getBackgroundColor(this.style.styleProperties);

      this.fontService.addFontFamily(this.style.textProperties.fontFamily).then(() => {
        this.cd.detectChanges();
      });
    }
  }

  ngOnInit(): void {
   this.updateStyleProperties();
  }

}

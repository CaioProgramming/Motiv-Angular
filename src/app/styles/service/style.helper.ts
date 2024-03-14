import { Inject } from "@angular/core";
import { ShadowStyle, StyleProperties, TextProperties } from "../model/style.model";
@Inject({ 
    providedIn : 'root'
})
export class  StyleHelper {

    constructor() { }

    getStyleForText(textProperties: TextProperties, shadowStyle: ShadowStyle | undefined) : { [key: string]: string } {
        
        const textStyle : {[key: string]: string} = {
            'font-family': textProperties.fontFamily || 'Roboto',
            'text-align': textProperties.textAlignment.toLowerCase(),
            'font-style': textProperties.fontStyle,
            'color': textProperties.textColor || 'black',
            'width': 'auto',
            'padding': '0px',
            'margin': '10px'
        };
        if(shadowStyle != undefined) {
            const xPosition = parseFloat(shadowStyle.dx.toFixed(2));
            const yPosition = parseFloat(shadowStyle.dy.toFixed(2));
            const radius = parseFloat(shadowStyle.radius.toFixed(2));
            const shadowDefs = `${xPosition}px ${yPosition}px ${radius}px ${shadowStyle.shadowColor}`
            textStyle['text-shadow'] = shadowDefs;
        }

        return textStyle;
    }

    getStyleForCard(): {[key: string]: string} {
        return {
            
            'border-radius': '10px',
            'border-width': '1px',
            'border-color': 'whitesmoke',
            'width': '50vh',
            'height': '60vh',
        };
    }

    getBackgroundColor(styleProperties: StyleProperties): {[key: string]: string} {
        return {
            'background': `linear-gradient(to bottom, transparent, ${styleProperties.backgroundColor || 'antiquewhite'})`,
        }
    }
}


import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class FontService {

  
    
    constructor(private http: HttpClient) { }

    addFontFamily(fontFamily: string): Promise<void> {
        const head = document.getElementsByTagName('head')[0];

        const existingLink = Array.from(head.getElementsByTagName('link')).find(link => link.href.includes(fontFamily));

        if(!existingLink) {
            const link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
            head.appendChild(link);
        }
        return Promise.resolve();

    }

}
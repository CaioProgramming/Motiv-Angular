import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';


@Injectable({
    providedIn: 'root'
})

export class FontService {

    constructor(private http: HttpClient) { }

    loadFonts() {
        const path = './assets/fonts/family_names.xml';
        console.log("Loading fonts from -> ", path);
        return this.http.get(path, { responseType: 'text' })
            .pipe(
                map((resource: string) => {
                    let res;
                    parseString(
                        resource, (error: any, result: any) => {
                            if (error) {
                                console.error("Error parsing xml fonts -> ", error);
                            } else {
                                res = result.resources['string-array'][0].item;
                            }
                        }
                    )
                    console.log('xml data -> ', res);
                    return res;
                })
            ).subscribe((data: any) => { 
                console.log("Data -> ", data);
                if(data != undefined && data.length > 0) {
                    data.forEach((fontFamily: string) => {
                        this.addFontFamily(fontFamily);
                    });
                }
               
            });
    }

    addFontFamily(fontFamily: string): void {
        const head = document.getElementsByTagName('head')[0];

        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
        head.appendChild(link);
    }

}
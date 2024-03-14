import { Component, OnInit } from '@angular/core';
import { FontService } from './utils/fonts/font.service';
import { Title, Meta } from '@angular/platform-browser';
import { appSettings } from './core/app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fontloader: FontService, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.setupApp();
  }

  setupApp(): void { 
   const settings = appSettings;
    this.titleService.setTitle(settings.name);
    this.addIcon(settings.icon);
    console.log("Updated app settings.");
    
  }

  addIcon(iconRef: string) {
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconRef;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

}

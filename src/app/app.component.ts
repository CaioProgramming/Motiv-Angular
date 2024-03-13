import { Component, OnInit } from '@angular/core';
import { FontService } from './utils/fonts/font.service';
import { Title, Meta } from '@angular/platform-browser';
import { appSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fontloader: FontService, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.fontloader.loadFonts();
  }

  setupApp(): void { 
   const settings = appSettings;
    this.titleService.setTitle(settings.name);
    this.metaService.updateTag({ rel: 'icon', href: settings.icon });

  }

}

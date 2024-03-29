import { TuiRootModule, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// app.module.ts
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core/routes/app.router.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { TuiAppBarModule, TuiIconModule } from '@taiga-ui/experimental';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBarComponent } from "./bar/appBar.component";
import { config } from './environments/environment.firebase';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { FontService } from "./utils/fonts/font.service";
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { StyleHelper } from "./styles/service/style.helper";
import { FooterComponent } from "./footer/footer.component";

export function playerFactory() {
    return player;
}

@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        FooterComponent
    ],
    providers: [FontService,
        StyleHelper,
        provideLottieOptions({
            player: () => import('lottie-web'),
        })],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        HomeModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiAppBarModule,
        TuiButtonModule,
        TuiIconModule,
        TuiAvatarModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
    ],
    bootstrap: [AppComponent],
    // other metadata...
})
export class AppModule { }
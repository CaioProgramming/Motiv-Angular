import { Component, OnInit } from "@angular/core";
import { Observable} from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Router } from '@angular/router';
import { appSettings } from "../core/app.settings";

@Component({
    selector: 'app-bar',
    templateUrl: "./AppBar.component.html",
    styleUrls: ["./appBar.component.css"]
})

export class AppBarComponent implements OnInit {

    isAuthenticated$!: Observable<boolean>;

    user: firebase.default.User | null | undefined = null;
    placeHolderAvatar = "assets/icons/astronaut.svg"

    appIcon = appSettings.icon;
    appName = appSettings.name;
    constructor(private authservice: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.isAuthenticated$ = this.authservice.isAuthenticated();
        this.getUserName();
    }

    getUserName(): void {
        this.authservice.currentUser$.subscribe(user => {
          this.user = user;
        });
      }

    signInWithGoogle(): void {
        this.authservice.signInWithGoogle().then((user) => {
            console.log("current user is: " + user.user?.displayName);
            console.log(user);
            this.getUserName();
        });
    }

    openProfile(): void {
        console.log("open profile");
        this.router.navigate(['/user']);
    }

    navigateHome(): void { 
        this.router.navigate(['/home']);
    }

}
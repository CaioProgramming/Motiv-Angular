import { Component, Input } from "@angular/core";

@Component(
    {
        selector: "app-card",
        templateUrl: "./card.component.html",
        styleUrls: ["./card.component.less"]
    })

export class CardComponent {
    @Input() startColor: string = "#fff";
    @Input() endColor: string = "#000";
    @Input() title: string = "Title";
    @Input() description: string = "Description";
    @Input() icon: string = "assets/icons/saturn_and_other_planets.svg";
}
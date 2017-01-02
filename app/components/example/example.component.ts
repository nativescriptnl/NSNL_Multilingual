import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
var utilityModule = require("utils/utils");

@Component({
    selector: "example",
    templateUrl: "./components/example/example.component.html"
})

export class ExampleComponent implements OnInit {

    public constructor(private location: Location) {
    }

    public ngOnInit() {
    }

    public goBack() {
        this.location.back();
    }

    public launchWebsite() {
        utilityModule.openUrl("https://www.nativescript.nl");
    }

}

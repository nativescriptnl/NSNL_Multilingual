import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

import {TranslateService} from 'ng2-translate';


@Component({
    selector: "example",
    templateUrl: "./components/example/example.component.html"
})

export class ExampleComponent implements OnInit {

    public constructor(private location: Location, private translate: TranslateService) {
    }

    public ngOnInit() {
        this.translate.addLangs(["en", "nl"]);
        this.translate.setDefaultLang('en');
        let browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
    }

    public goBack() {
        this.location.back();
    }

    public changeLanguage(lang: string) {
        this.translate.use(lang);
    }

}

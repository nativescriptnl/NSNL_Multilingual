import {Component} from "@angular/core";

import {TranslateService} from 'ng2-translate';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "nl"]);
        translate.setDefaultLang('en');

        // IMPORTANT: There is no Browser in NativeScript, therefore you cannot use any browser based api's etc. - REMOVE THIS
        // You would set the language default explicitly above via default lang you want to start the app with
        // Then allow users to set their own default language in the app and persist their choice to preserve and set again everytime they relaunch the app
        
        // let browserLang = this.translate.getBrowserLang();
        // this.translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
    }
}

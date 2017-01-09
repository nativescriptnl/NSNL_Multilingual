import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {Http} from "@angular/http";
import {AppRoutes, AppComponents} from "./app.routing";

import {AppComponent} from "./app.component";

import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";

// for AoT compilation
export function translateLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, "/i18n", ".json");
};

@NgModule({
    declarations: [AppComponent, ...AppComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
        TranslateModule.forRoot([{
            provide: TranslateLoader,
            deps: [Http],
            useFactory: (translateLoaderFactory)
        }])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}

"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent].concat(app_routing_1.AppComponents),
        bootstrap: [app_component_1.AppComponent],
        imports: [platform_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes)],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
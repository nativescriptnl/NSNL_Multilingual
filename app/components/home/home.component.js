"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToPage = function (componentName) {
        this.router.navigate([componentName]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "./components/home/home.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var utilityModule = require("utils/utils");
var ExampleComponent = (function () {
    function ExampleComponent(location) {
        this.location = location;
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExampleComponent.prototype.launchWebsite = function () {
        utilityModule.openUrl("https://www.nativescript.nl");
    };
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    core_1.Component({
        selector: "example",
        templateUrl: "./components/example/example.component.html"
    }),
    __metadata("design:paramtypes", [common_1.Location])
], ExampleComponent);
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.component.js.map
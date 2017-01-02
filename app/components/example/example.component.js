"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_translate_1 = require("ng2-translate");
var ExampleComponent = (function () {
    function ExampleComponent(location, translate) {
        this.location = location;
        this.translate = translate;
    }
    ExampleComponent.prototype.ngOnInit = function () {
        this.translate.addLangs(["en", "nl"]);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
    };
    ExampleComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExampleComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    core_1.Component({
        selector: "example",
        templateUrl: "./components/example/example.component.html"
    }),
    __metadata("design:paramtypes", [common_1.Location, ng2_translate_1.TranslateService])
], ExampleComponent);
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.component.js.map
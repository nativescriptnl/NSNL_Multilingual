"use strict";
var home_component_1 = require("./components/home/home.component");
var example_component_1 = require("./components/example/example.component");
exports.AppRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "example", component: example_component_1.ExampleComponent }
];
exports.AppComponents = [
    home_component_1.HomeComponent,
    example_component_1.ExampleComponent
];
//# sourceMappingURL=app.routing.js.map
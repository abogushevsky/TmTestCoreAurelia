System.register(["aurelia-framework", "aurelia-fetch-client"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_fetch_client_1, Values;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }
        ],
        execute: function () {
            Values = class Values {
                constructor(http) {
                    this.http = http;
                    this.values = [];
                }
                activate() {
                    return this.http.fetch("http://localhost:YOURPORTNUMBER/api/values").
                        then(response => response.json()).then(data => {
                        //this.values = data.text;
                    });
                }
            };
            Values = __decorate([
                aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient)
            ], Values);
            exports_1("Values", Values);
        }
    };
});
//# sourceMappingURL=values.js.map
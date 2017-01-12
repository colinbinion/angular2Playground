"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StarsComponent = (function () {
    function StarsComponent() {
        this.count = 5;
        this.rating = 0;
        this.stars = [];
    }
    StarsComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= this.count; i++) {
            this.stars.push(i > this.rating);
        }
    };
    return StarsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "count", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
StarsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/stars/stars.html',
        styles: [" .starrating { color: #d17581; }"],
        selector: 'auction-stars'
    }),
    __metadata("design:paramtypes", [])
], StarsComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StarsComponent;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    return Serie;
}());
exports.Serie = Serie;
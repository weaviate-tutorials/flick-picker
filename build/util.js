"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64 = exports.listFiles = void 0;
var fs_1 = require("fs");
var listFiles = function (path) {
    return (0, fs_1.readdirSync)(path).map(function (name) {
        return {
            name: name,
            path: "".concat(path).concat(name),
        };
    });
};
exports.listFiles = listFiles;
var getBase64 = function (file) {
    return (0, fs_1.readFileSync)(file, { encoding: 'base64' });
};
exports.getBase64 = getBase64;

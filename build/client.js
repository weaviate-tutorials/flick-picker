"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeaviateClient = void 0;
var weaviate_ts_client_1 = require("weaviate-ts-client");
var client;
var getWeaviateClient = function () {
    if (!client) {
        client = weaviate_ts_client_1.default.client({
            scheme: 'http',
            host: 'localhost:8080',
        });
    }
    ;
    // client.misc.readyChecker().do().then(console.log)
    return client;
};
exports.getWeaviateClient = getWeaviateClient;

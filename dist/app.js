"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const Mongo_1 = __importDefault(require("./services/Mongo"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor(port) {
        var _a;
        this.port = port;
        this.mongo = new Mongo_1.default((_a = process.env.MONGO_CLUSTER_CONNECTION) !== null && _a !== void 0 ? _a : '');
        this.mongo.init();
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.listen();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({ origin: "https://task-track-frontend.vercel.app/" }));
        this.app.use(this.loggerMiddleware);
        this.app.use(routes_1.default); // Add the application router
    }
    // Middleware function to see the request method and url
    loggerMiddleware(req, res, next) {
        console.log(`${req.method} ${req.path}`);
        next();
    }
    listen() {
        this.app.listen(this.port, () => console.log(`App listening in port ${this.port}...`));
    }
}
exports.App = App;
new App(Number(process.env.PORT) || 8080);

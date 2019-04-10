"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _common = _interopRequireDefault(require("./src/config/common.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _morgan["default"])('combined'));
app.use("/api/".concat(_common["default"].apiVer), require('./src/controllers'));
app.listen(3000);
console.log('app running on port ', 3000);
"use client";
"use strict";

exports.__esModule = true;

var Navbar_1 = require("./component/Navbar");

var Hero_1 = require("./component/Hero");

var CardComponent_1 = require("./component/CardComponent");

var Video_1 = require("./component/Video");

var ZigZagSection_1 = require("./component/ZigZagSection");

var ThreeCardSection_1 = require("./component/ThreeCardSection");

var Testimonials_1 = require("./component/Testimonials");

var Plan_1 = require("./component/Plan");

var faqs_1 = require("./component/faqs");

var Calculator_1 = require("./component/Calculator");

var Footer_1 = require("./component/Footer");

var Home = function Home() {
  return React.createElement("div", null, React.createElement(Navbar_1["default"], null), React.createElement(Hero_1["default"], null), React.createElement("div", {
    className: "pt-6 pb-6 sm:pt-8 sm:pb-8"
  }, React.createElement(CardComponent_1["default"], null)), React.createElement(Video_1["default"], null), React.createElement("div", {
    className: "pt-6 pb-6 sm:pt-8 sm:pb-8"
  }, React.createElement(Calculator_1["default"], null)), React.createElement(ZigZagSection_1["default"], null), React.createElement(ThreeCardSection_1["default"], null), React.createElement(Testimonials_1["default"], null), React.createElement(Plan_1["default"], null), React.createElement(faqs_1["default"], null), React.createElement(Footer_1["default"], null));
};

exports["default"] = Home;
(() => {
var exports = {};
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuExample)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\components\\Header.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MenuExample extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeItem: "crowdcoin"
    });
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const {
      activeItem
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      style: {
        marginTop: "10px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
        route: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "item",
          children: "CrowdCoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Menu, {
        position: "right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
          route: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "item",
            children: "Campaigns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
          route: "/campaigns/new",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "item",
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\components\\Layout.js";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\components\\RequestRow.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });

    _defineProperty(this, "onFinalize", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    const {
      id,
      request,
      approversCount
    } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      disabled: request.complete,
      positive: readyToFinalize && !request.complete,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: this.props.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(request.value, "ether")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.recipient
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: [request.approvalCount, "/", approversCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "teal",
          basic: true,
          onClick: this.onFinalize,
          children: "Finalize"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestRow);

/***/ }),

/***/ "./ethereum/campaign.js":
/*!******************************!*\
  !*** ./ethereum/campaign.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Campaign.json */ "./ethereum/build/Campaign.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__.default.eth.Contract(JSON.parse(JSON.stringify(_build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__)), address);
});

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://rinkeby.infura.io/v3/76cad49dfdf34a3fae292809880842cb");
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\pages\\campaigns\\requests\\index.js";







class RequestIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return {
      address,
      requests,
      requestCount,
      approversCount
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_6__.default, {
        id: index,
        request: request,
        address: this.props.address,
        approversCount: this.props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this);
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Requests"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            primary: true,
            floated: "right",
            style: {
              marginBottom: 10
            },
            children: "Add Requests"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Recipient"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approval Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Finalize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {
          children: this.renderRows()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: ["Found ", this.props.requestCount, " requests."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ "./ethereum/build/Campaign.json":
/*!**************************************!*\
  !*** ./ethereum/build/Campaign.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"},{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approversCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"finalizeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRequestsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSummary","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numRequests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bool","name":"complete","type":"bool"},{"internalType":"uint256","name":"approvalCount","type":"uint256"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/campaigns/requests/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUszRCxLQUFMLENBQVcrQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUEyQkQ7O0FBOURrQzs7QUFpRXJDLGlFQUFlSCxZQUFmOzs7Ozs7Ozs7O0FDeEVBLE1BQU1tQixNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBdEI7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBTSxHQUNwQkksR0FEYyxDQUNWLGdCQURVLEVBQ1EsZ0JBRFIsRUFFZEEsR0FGYyxDQUVWLHFCQUZVLEVBRWEsaUJBRmIsRUFHZEEsR0FIYyxDQUdWLDhCQUhVLEVBR3NCLDJCQUh0QixFQUlkQSxHQUpjLENBSVYsa0NBSlUsRUFJMEIseUJBSjFCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0Ly4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC8uL2V0aGVyZXVtL2NhbXBhaWduLmpzIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0Ly4vZXRoZXJldW0vd2ViMy5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0L2V4dGVybmFsIFwid2ViM1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBNZW51LCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUV4YW1wbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogXCJjcm93ZGNvaW5cIiB9O1xuICAvLyBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Dcm93ZENvaW48L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5DYW1wYWlnbnM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5cbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgfSk7XG4gIH07XG5cbiAgb25GaW5hbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgIGNvbnN0IHsgaWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfVxuICAgICAgICBwb3NpdGl2ZT17cmVhZHlUb0ZpbmFsaXplICYmICFyZXF1ZXN0LmNvbXBsZXRlfVxuICAgICAgPlxuICAgICAgICA8Q2VsbD57dGhpcy5wcm9wcy5pZH08L0NlbGw+XG4gICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cbiAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCBcImV0aGVyXCIpfTwvQ2VsbD5cbiAgICAgICAgPENlbGw+e3JlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cbiAgICAgICAgPENlbGw+XG4gICAgICAgICAge3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fVxuICAgICAgICA8L0NlbGw+XG4gICAgICAgIDxDZWxsPlxuICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cbiAgICAgICAgICAgICAgQXBwcm92ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DZWxsPlxuICAgICAgICA8Q2VsbD5cbiAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25GaW5hbGl6ZX0+XG4gICAgICAgICAgICAgIEZpbmFsaXplXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NlbGw+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iLCJpbXBvcnQgd2ViMyBmcm9tIFwiLi93ZWIzXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4vYnVpbGQvQ2FtcGFpZ24uanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYWRkcmVzcykgPT4ge1xuICByZXR1cm4gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoQ2FtcGFpZ24pKSwgYWRkcmVzcyk7XG59O1xuIiwiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxubGV0IHdlYjM7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxuICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xufSBlbHNlIHtcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzc2Y2FkNDlkZmRmMzRhM2ZhZTI5MjgwOTg4MDg0MmNiXCJcbiAgKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvd1wiO1xuXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcbiAgICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50IH07XG4gIH1cblxuICByZW5kZXJSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZXF1ZXN0Um93XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cbiAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgYXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgQWRkIFJlcXVlc3RzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8Qm9keT57dGhpcy5yZW5kZXJSb3dzKCl9PC9Cb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8ZGl2PkZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHMuPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXMoKVxuICAuYWRkKFwiL2NhbXBhaWducy9uZXdcIiwgXCIvY2FtcGFpZ25zL25ld1wiKVxuICAuYWRkKFwiL2NhbXBhaWducy86YWRkcmVzc1wiLCBcIi9jYW1wYWlnbnMvc2hvd1wiKVxuICAuYWRkKFwiL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0c1wiLCBcIi9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXhcIilcbiAgLmFkZChcIi9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMvbmV3XCIsIFwiL2NhbXBhaWducy9yZXF1ZXN0cy9uZXdcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dCIsIk1lbnUiLCJTZWdtZW50IiwiTGluayIsIk1lbnVFeGFtcGxlIiwiYWN0aXZlSXRlbSIsInJlbmRlciIsInN0YXRlIiwibWFyZ2luVG9wIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsImNhbXBhaWduIiwiYWRkcmVzcyIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsIkxheW91dCIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxdWVzdENvdW50IiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlbmRlclJvd3MiLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJvdXRlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==
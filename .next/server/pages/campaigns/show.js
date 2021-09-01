(() => {
var exports = {};
exports.id = "pages/campaigns/show";
exports.ids = ["pages/campaigns/show"];
exports.modules = {

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
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
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\components\\ContributeForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ContributeForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: "",
      errorMessage: "",
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(this.state.value, "ether")
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(`/campaigns/${this.props.address}`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false,
        value: ""
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Amount to Contribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: this.state.value,
          onChange: event => this.setState({
            value: event.target.value
          }),
          label: "ether",
          labelPosition: "right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        primary: true,
        loading: this.state.loading,
        children: "Contribute!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeForm);

/***/ }),

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

/***/ "./ethereum/Campaign.js":
/*!******************************!*\
  !*** ./ethereum/Campaign.js ***!
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

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
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
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_Campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/Campaign */ "./ethereum/Campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\66886\\Desktop\\Coding\\solidityProject\\Kickstarter-Contract\\pages\\campaigns\\show.js";









class CampaignShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const campaign = (0,_ethereum_Campaign__WEBPACK_IMPORTED_MODULE_5__.default)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [{
      header: manager,
      meta: "Address of Manager",
      description: "The manager created this campaign and can create requests to withdraw money",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: minimumContribution,
      meta: "Minimum Contribution (wei)",
      description: "You must contribute at least this much wei to become a approver"
    }, {
      header: requestsCount,
      meta: "Number of Requests",
      description: "A requests tries to withdraw money from the contract. Requests must be apprived by approvers"
    }, {
      header: approversCount,
      meta: "Number of Approvers",
      description: "Number of people who have already donated to this campaign"
    }, {
      header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__.default.utils.fromWei(balance, "ether"),
      meta: "Campagin Balance (ether)",
      description: "The balance is how much money this campaign has left to spend."
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Campaign Show "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            width: 10,
            children: this.renderCards()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            width: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_7__.default, {
              address: this.props.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_8__.Link, {
              route: `/campaigns/${this.props.address}/requests`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  primary: true,
                  children: "View Requests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignShow);

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
var __webpack_exports__ = (__webpack_exec__("./pages/campaigns/show.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1TLGNBQU4sU0FBNkJSLDRDQUE3QixDQUF1QztBQUFBO0FBQUE7O0FBQUEsbUNBQzdCO0FBQ05TLE1BQUFBLEtBQUssRUFBRSxFQUREO0FBRU5DLE1BQUFBLFlBQVksRUFBRSxFQUZSO0FBR05DLE1BQUFBLE9BQU8sRUFBRTtBQUhILEtBRDZCOztBQUFBLHNDQU8xQixNQUFPQyxLQUFQLElBQWlCO0FBQzFCQSxNQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFQSxZQUFNQyxRQUFRLEdBQUdULDJEQUFRLENBQUMsS0FBS1UsS0FBTCxDQUFXQyxPQUFaLENBQXpCO0FBRUEsV0FBS0MsUUFBTCxDQUFjO0FBQUVOLFFBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCRCxRQUFBQSxZQUFZLEVBQUU7QUFBL0IsT0FBZDs7QUFFQSxVQUFJO0FBQ0YsY0FBTVEsUUFBUSxHQUFHLE1BQU1aLG1FQUFBLEVBQXZCO0FBQ0EsY0FBTVEsUUFBUSxDQUFDTyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsQ0FBbUM7QUFDdkNDLFVBQUFBLElBQUksRUFBRU4sUUFBUSxDQUFDLENBQUQsQ0FEeUI7QUFFdkNULFVBQUFBLEtBQUssRUFBRUgsK0RBQUEsQ0FBaUIsS0FBS3FCLEtBQUwsQ0FBV2xCLEtBQTVCLEVBQW1DLE9BQW5DO0FBRmdDLFNBQW5DLENBQU47QUFLQUYsUUFBQUEsd0RBQUEsQ0FBcUIsY0FBYSxLQUFLUSxLQUFMLENBQVdDLE9BQVEsRUFBckQ7QUFDRCxPQVJELENBUUUsT0FBT2EsR0FBUCxFQUFZO0FBQ1osYUFBS1osUUFBTCxDQUFjO0FBQUVQLFVBQUFBLFlBQVksRUFBRW1CLEdBQUcsQ0FBQ0M7QUFBcEIsU0FBZDtBQUNEOztBQUVELFdBQUtiLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQkYsUUFBQUEsS0FBSyxFQUFFO0FBQXpCLE9BQWQ7QUFDRCxLQTNCb0M7QUFBQTs7QUE2QnJDc0IsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBK0IsV0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLTCxLQUFMLENBQVdqQixZQUFuRDtBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxvREFBRDtBQUNFLGVBQUssRUFBRSxLQUFLaUIsS0FBTCxDQUFXbEIsS0FEcEI7QUFFRSxrQkFBUSxFQUFHRyxLQUFELElBQVcsS0FBS0ssUUFBTCxDQUFjO0FBQUVSLFlBQUFBLEtBQUssRUFBRUcsS0FBSyxDQUFDcUIsTUFBTixDQUFheEI7QUFBdEIsV0FBZCxDQUZ2QjtBQUdFLGVBQUssRUFBQyxPQUhSO0FBSUUsdUJBQWEsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsOERBQUMsc0RBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxjQUFNLEVBQUMsT0FBdEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtrQixLQUFMLENBQVdqQjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRSw4REFBQyxxREFBRDtBQUFRLGVBQU8sTUFBZjtBQUFnQixlQUFPLEVBQUUsS0FBS2lCLEtBQUwsQ0FBV2hCLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpQkQ7O0FBL0NvQzs7QUFrRHZDLGlFQUFlSCxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNNkIsV0FBTixTQUEwQnJDLDRDQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3pDO0FBQUVzQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUR5QztBQUFBOztBQUVqRDtBQUVBUCxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVPLE1BQUFBO0FBQUYsUUFBaUIsS0FBS1gsS0FBNUI7QUFDQSx3QkFDRSw4REFBQyxtREFBRDtBQUFNLFdBQUssRUFBRTtBQUFFWSxRQUFBQSxTQUFTLEVBQUU7QUFBYixPQUFiO0FBQUEsOEJBQ0UsOERBQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUMsR0FBWjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UsOERBQUMsd0RBQUQ7QUFBVyxnQkFBUSxFQUFDLE9BQXBCO0FBQUEsZ0NBQ0UsOERBQUMseUNBQUQ7QUFBTSxlQUFLLEVBQUMsR0FBWjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLDhEQUFDLHlDQUFEO0FBQU0sZUFBSyxFQUFDLGdCQUFaO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZ0JEOztBQXRCZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xuRDtBQUNBO0FBQ0E7QUFFQSxpRUFBZ0J4QixLQUFELElBQVc7QUFDeEIsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdBLEtBQUssQ0FBQzJCLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVBEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQSxpRUFBZ0IxQixPQUFELElBQWE7QUFDMUIsU0FBTyxJQUFJVix1REFBSixDQUFzQnNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZXpDLGlEQUFmLENBQVgsQ0FBdEIsRUFBNERXLE9BQTVELENBQVA7QUFDRCxDQUZEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQSxpRUFBZ0JBLE9BQUQsSUFBYTtBQUMxQixTQUFPLElBQUlWLHVEQUFKLENBQXNCc0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlekMsaURBQWYsQ0FBWCxDQUF0QixFQUE0RFcsT0FBNUQsQ0FBUDtBQUNELENBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFFQSxJQUFJVixJQUFKOztBQUVBLElBQUksS0FBSixFQUE2RSxFQUE3RSxNQUlPO0FBQ0w7QUFDQSxRQUFNOEMsUUFBUSxHQUFHLElBQUlMLG9FQUFKLENBQ2YsK0RBRGUsQ0FBakI7QUFHQXpDLEVBQUFBLElBQUksR0FBRyxJQUFJeUMsNkNBQUosQ0FBU0ssUUFBVCxDQUFQO0FBQ0Q7O0FBRUQsaUVBQWU5QyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW9ELFlBQU4sU0FBMkIxRCw0Q0FBM0IsQ0FBcUM7QUFDbkMsZUFBYTJELGVBQWIsQ0FBNkI1QyxLQUE3QixFQUFvQztBQUNsQyxVQUFNRCxRQUFRLEdBQUdULDJEQUFRLENBQUNVLEtBQUssQ0FBQzZDLEtBQU4sQ0FBWTVDLE9BQWIsQ0FBekI7QUFFQSxVQUFNNkMsT0FBTyxHQUFHLE1BQU0vQyxRQUFRLENBQUNPLE9BQVQsQ0FBaUJ5QyxVQUFqQixHQUE4QkMsSUFBOUIsRUFBdEI7QUFFQSxXQUFPO0FBQ0wvQyxNQUFBQSxPQUFPLEVBQUVELEtBQUssQ0FBQzZDLEtBQU4sQ0FBWTVDLE9BRGhCO0FBRUxnRCxNQUFBQSxtQkFBbUIsRUFBRUgsT0FBTyxDQUFDLENBQUQsQ0FGdkI7QUFHTEksTUFBQUEsT0FBTyxFQUFFSixPQUFPLENBQUMsQ0FBRCxDQUhYO0FBSUxLLE1BQUFBLGFBQWEsRUFBRUwsT0FBTyxDQUFDLENBQUQsQ0FKakI7QUFLTE0sTUFBQUEsY0FBYyxFQUFFTixPQUFPLENBQUMsQ0FBRCxDQUxsQjtBQU1MTyxNQUFBQSxPQUFPLEVBQUVQLE9BQU8sQ0FBQyxDQUFEO0FBTlgsS0FBUDtBQVFEOztBQUVEUSxFQUFBQSxXQUFXLEdBQUc7QUFDWixVQUFNO0FBQ0pKLE1BQUFBLE9BREk7QUFFSkcsTUFBQUEsT0FGSTtBQUdKSixNQUFBQSxtQkFISTtBQUlKRSxNQUFBQSxhQUpJO0FBS0pDLE1BQUFBO0FBTEksUUFNRixLQUFLcEQsS0FOVDtBQVFBLFVBQU11RCxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFBQSxNQUFNLEVBQUVILE9BRFY7QUFFRUksTUFBQUEsSUFBSSxFQUFFLG9CQUZSO0FBR0VDLE1BQUFBLFdBQVcsRUFDVCw2RUFKSjtBQUtFQyxNQUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBTFQsS0FEWSxFQVFaO0FBQ0VKLE1BQUFBLE1BQU0sRUFBRVAsbUJBRFY7QUFFRVEsTUFBQUEsSUFBSSxFQUFFLDRCQUZSO0FBR0VDLE1BQUFBLFdBQVcsRUFDVDtBQUpKLEtBUlksRUFjWjtBQUNFRixNQUFBQSxNQUFNLEVBQUVMLGFBRFY7QUFFRU0sTUFBQUEsSUFBSSxFQUFFLG9CQUZSO0FBR0VDLE1BQUFBLFdBQVcsRUFDVDtBQUpKLEtBZFksRUFvQlo7QUFDRUYsTUFBQUEsTUFBTSxFQUFFSixjQURWO0FBRUVLLE1BQUFBLElBQUksRUFBRSxxQkFGUjtBQUdFQyxNQUFBQSxXQUFXLEVBQ1Q7QUFKSixLQXBCWSxFQTBCWjtBQUNFRixNQUFBQSxNQUFNLEVBQUVqRSxpRUFBQSxDQUFtQjJELE9BQW5CLEVBQTRCLE9BQTVCLENBRFY7QUFFRU8sTUFBQUEsSUFBSSxFQUFFLDBCQUZSO0FBR0VDLE1BQUFBLFdBQVcsRUFDVDtBQUpKLEtBMUJZLENBQWQ7QUFrQ0Esd0JBQU8sOERBQUMseURBQUQ7QUFBWSxXQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVEdkMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBLGtDQUNFLDhEQUFDLDBEQUFEO0FBQWEsaUJBQUssRUFBRSxFQUFwQjtBQUFBLHNCQUF5QixLQUFLc0MsV0FBTDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0UsOERBQUMsMERBQUQ7QUFBYSxpQkFBSyxFQUFFLENBQXBCO0FBQUEsbUNBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IscUJBQU8sRUFBRSxLQUFLdEQsS0FBTCxDQUFXQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRSw4REFBQyx1REFBRDtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0UsOERBQUMseUNBQUQ7QUFBTSxtQkFBSyxFQUFHLGNBQWEsS0FBS0QsS0FBTCxDQUFXQyxPQUFRLFdBQTlDO0FBQUEscUNBQ0U7QUFBQSx1Q0FDRSw4REFBQyxxREFBRDtBQUFRLHlCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBd0JEOztBQXZGa0M7O0FBMEZyQyxpRUFBZTBDLFlBQWY7Ozs7Ozs7Ozs7QUNuR0EsTUFBTW1CLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUF0Qjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFNLEdBQ3BCSSxHQURjLENBQ1YsZ0JBRFUsRUFDUSxnQkFEUixFQUVkQSxHQUZjLENBRVYscUJBRlUsRUFFYSxpQkFGYixFQUdkQSxHQUhjLENBR1YsOEJBSFUsRUFHc0IsMkJBSHRCLEVBSWRBLEdBSmMsQ0FJVixrQ0FKVSxFQUkwQix5QkFKMUIsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0Ly4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC8uL2V0aGVyZXVtL0NhbXBhaWduLmpzIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0Ly4vZXRoZXJldW0vY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvLi9ldGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0Ly4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0ZXItY29udHJhY3QvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydGVyLWNvbnRyYWN0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnRlci1jb250cmFjdC9leHRlcm5hbCBcIndlYjNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIlwiLFxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSwgXCJldGhlclwiKSxcbiAgICAgIH0pO1xuXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCB2YWx1ZTogXCJcIiB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgQ29udHJpYnV0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBNZW51LCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUV4YW1wbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgYWN0aXZlSXRlbTogXCJjcm93ZGNvaW5cIiB9O1xuICAvLyBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Dcm93ZENvaW48L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5DYW1wYWlnbnM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiIsImltcG9ydCB3ZWIzIGZyb20gXCIuL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi9idWlsZC9DYW1wYWlnbi5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChhZGRyZXNzKSA9PiB7XG4gIHJldHVybiBuZXcgd2ViMy5ldGguQ29udHJhY3QoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShDYW1wYWlnbikpLCBhZGRyZXNzKTtcbn07XG4iLCJpbXBvcnQgd2ViMyBmcm9tIFwiLi93ZWIzXCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4vYnVpbGQvQ2FtcGFpZ24uanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYWRkcmVzcykgPT4ge1xuICByZXR1cm4gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoQ2FtcGFpZ24pKSwgYWRkcmVzcyk7XG59O1xuIiwiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxubGV0IHdlYjM7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxuICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xufSBlbHNlIHtcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzc2Y2FkNDlkZmRmMzRhM2ZhZTI5MjgwOTg4MDg0MmNiXCJcbiAgKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL0NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyQ2FyZHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFsYW5jZSxcbiAgICAgIG1hbmFnZXIsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXlcIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhIGFwcHJvdmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSByZXF1ZXN0cyB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByaXZlZCBieSBhcHByb3ZlcnNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIEFwcHJvdmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFnaW4gQmFsYW5jZSAoZXRoZXIpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q2FtcGFpZ24gU2hvdyA8L2gzPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcygpXG4gIC5hZGQoXCIvY2FtcGFpZ25zL25ld1wiLCBcIi9jYW1wYWlnbnMvbmV3XCIpXG4gIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzXCIsIFwiL2NhbXBhaWducy9zaG93XCIpXG4gIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzXCIsIFwiL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleFwiKVxuICAuYWRkKFwiL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cy9uZXdcIiwgXCIvY2FtcGFpZ25zL3JlcXVlc3RzL25ld1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwic3RhdGUiLCJyZXBsYWNlUm91dGUiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJNZW51IiwiU2VnbWVudCIsIkxpbmsiLCJNZW51RXhhbXBsZSIsImFjdGl2ZUl0ZW0iLCJtYXJnaW5Ub3AiLCJDb250YWluZXIiLCJIZWFkZXIiLCJjaGlsZHJlbiIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnblNob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInN1bW1hcnkiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsInJlbmRlckNhcmRzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImZyb21XZWkiLCJyb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=
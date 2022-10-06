/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/checkout.js":
/*!*******************************!*\
  !*** ./assets/js/checkout.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var allureException = ["coco", "rose", "adele", "angelina", "jessica", "selena", "taylor", "julia", "nicole", "gwyneth", "ev7914", "tl6814", "ev5714", "mo5514", "mo7608", "ev5512", "ev5706", "ev6810", "eg6612", "eh16", "mh2206", "sh5206", "ep3608", "mh2216", "maya", "noya"];
var cartItems = null;
var skus = [];
var teamdeskItems = null;
var teamdeskPOItems = null;
var pShippingGroup = {};
var isPopup = false;
/**
 * Get the inventory and po from teamdesk
 */

function cartGetDelivery() {
  if (cartItems) {
    skus = cartItems.lineItems.physicalItems.map(function (i) {
      var sku = i.sku;

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      return encodeURIComponent(sku);
    });
    fetch("//shp-webserver.glitch.me/get-teamdesk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        table: 'Inventory',
        filter: "Any([SKU],'" + skus.join(",") + "')"
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      teamdeskItems = r;
      teamdeskPOItems = [];
      cartSetDelivery(); // fetch(`//shp-webserver.glitch.me/get-teamdesk`, {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         table: 't_763479',
      //         options: `?filter=Any([SKU],'${skus.join(",")}') and [Incoming Quantity]>0 and [Arrival Due Date]>ToDate('1/1/1')&sort=Arrival Due Date//ASC`                        
      //     })
      // })
      // .then(r=>r.json())
      // .then(r=>{
      //     teamdeskPOItems = r;
      //     cartSetDelivery();
      // })
      // .catch(e=>{
      //     console.log(e);
      //     cartSetDelivery();
      // })
    }).catch(function (e) {
      return console.log(e);
    });
  }
}
/**
 * Fill in the delivery information
 */


function cartSetDelivery() {
  if (teamdeskItems) {
    var qtyChecked = [];

    var _loop = function _loop() {
      var _step$value = _step.value,
          index = _step$value[0],
          sku = _step$value[1];

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      var item = teamdeskItems.find(function (s) {
        return encodeURIComponent(s.SKU.toUpperCase()) == sku.toUpperCase();
      });

      if (item) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
          var qty = cartItems.lineItems.physicalItems[index].quantity;
          var buff = 0;

          if (qtyChecked[item.SKU]) {
            buff = qtyChecked[item.SKU];
            qtyChecked[item.SKU] += qty;
          } else {
            qtyChecked[item.SKU] = qty;
          }

          var content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>";

          if (item["Total On Hand"] == item["Available Quantity"]) {
            if (Number(item["Quantity USA"]) > 0) {
              if (Number(item["Quantity USA"]) - buff > 0) {
                content += "En 3-4 d\xEDas: cantidad <strong>" + Math.min(item["Quantity USA"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity USA"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity USA"]);
              }
            }

            if (Number(item["Quantity Canada"]) > 0 && qty > 0) {
              if (Number(item["Quantity Canada"]) - buff > 0) {
                content += "En 5-8 d\xEDas: cantidad <strong>" + Math.min(item["Quantity Canada"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity Canada"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity Canada"]);
              }
            }
          } else {
            if (Number(item["Available Quantity"]) > 0) {
              if (Number(item["Available Quantity"]) - buff > 0) {
                content += "Dans 3-8 jours: cantidad <strong>" + Math.min(item["Available Quantity"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Available Quantity"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Available Quantity"]);
              }
            }
          } // if (item["Virtual Quantity"] && qty>0) {                            
          //     if (item["Lock Status"]!="Locked for processing" && Number(item["Unlocked for sale quantity"]) > 0 && qty>0) {
          //         if (Number(item["Unlocked for sale quantity"])-buff > 0) {                                    
          //             content+=`1 week later: quantity <strong>${Math.min(item["Unlocked for sale quantity"]-buff, qty)}</strong><br/>`;                                    
          //             qty = qty - Math.min(item["Unlocked for sale quantity"]-buff, qty);                                    
          //             buff=0;
          //         } else {
          //             buff-=Number(item["Unlocked for sale quantity"]);
          //         }
          //     }
          //     let virtual={};                        
          //     if (Number(item["Quantity Incoming"])-2 > 0 && qty>0) {
          //         if (Number(item["Quantity Incoming"])-2 -buff > 0) {
          //             let inItems = teamdeskPOItems.filter(p=>p.SKU.toUpperCase() == item["SKU"].toUpperCase());
          //             let i=0, totalP=buff, tempqty = qty;
          //             while (i<inItems.length && tempqty>0) {
          //                 totalP+=Number(inItems[i]["Incoming Quantity"]);
          //                 tempqty = tempqty - Math.min(Number(inItems[i]["Incoming Quantity"]), tempqty);
          //                 i++;                                
          //             }
          //             if (i>0) {
          //                 let inItem = inItems[i-1];                                    
          //                 let mdiff = monthDiff(new Date(), new Date(inItem["Arrival Due Date"]));
          //                 if (mdiff==0) {                                    
          //                     if (allureException.includes(inItem["Part Number"])) {
          //                         mdiff+=3;
          //                     } else {
          //                         mdiff+=1;
          //                     }
          //                 } else if (allureException.includes(inItem["Part Number"])) {
          //                     mdiff+=2;
          //                 }
          //                 virtual[mdiff] = Math.min(totalP, qty);                                        
          //                 qty = tempqty;
          //                 buff=0;
          //             }
          //         } else {
          //             buff = buff - Number(item["Quantity Incoming"]) + 2;
          //         }
          //     }
          //     if (qty>0) {
          //         let m = item["Virtual Location"].slice(0,-1);
          //         if (virtual[m]) {
          //             virtual[m]+=qty;
          //         } else {
          //             virtual[m]=qty;
          //         }
          //     }
          //     // console.log(virtual);
          //     if (Object.keys(virtual).length > 0) {
          //         const options = {year: 'numeric', month: 'long'};
          //         let vkeys = Object.keys(virtual).sort(function(a,b) {
          //             return b-a;
          //         })                
          //         for (let key of vkeys) {
          //             if (Number(key)) {
          //                 let date = new Date();
          //                 date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
          //                 date.setMonth(date.getMonth()+Number(key));
          //                 content+=`${date.toLocaleDateString('en-US', options)}: quantity <strong>${virtual[key]}</strong><br/>`;
          //             } else {
          //                 content+=`${key.replace("_","-")} months later: quantity <strong>${virtual[key]}</strong><br/>`;
          //             }
          //         }
          //     }
          // }                     


          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<li class=\"product-option cart-delivery\">" + content + "</li>");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find(".product-body").append("\n                            <ul class=\"product-options\"><li class=\"product-option cart-delivery\">" + content + "</li></ul>\n                        ");
          }
        } else {
          var _qty = cartItems.lineItems.physicalItems[index].quantity;

          if (qtyChecked[item.SKU]) {
            qtyChecked[item.SKU] += _qty;
          } else {
            qtyChecked[item.SKU] = _qty;
          }
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
        cmhRushItems = ['CMH', 'CMLACE', 'CMMONO', 'CMLACEPOLY', 'CMSKIN'];
        hairService = ["style#221", "style#222", "style#231", "style#232", "style#233", "style#234", "style#251", "style#331", "style#332", "style#334", "style#335", "style#341", "style#342", "style#343", "style#551", "style#552", "Style #Your_Own", "Online Services Pack"];
        var _content = "";

        if (cmhRushItems.includes(sku.toUpperCase())) {
          _content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>Env\xEDo garantizado en 3 meses<br/>";
        } else if (hairService.includes(sku)) {
          _content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>Dans 2-3 semaines<br/>";
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<div class=\"cart-delivery\">" + _content + "</div>");
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(skus.entries()), _step; !(_step = _iterator()).done;) {
      var cmhRushItems;
      var hairService;

      _loop();
    }
  }
}

function checkProducts() {
  var token = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=store-token]").val();
  console.log(cartItems);

  if (cartItems) {
    var ids = cartItems.lineItems.physicalItems.map(function (i) {
      return i.productId;
    });
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      body: JSON.stringify({
        query: "\n            query SeveralProductsByID {\n                site {\n                    products(entityIds: [" + ids.join(",") + "]) {\n                        edges {\n                            node {\n                                name\n                                sku\n                                entityId\n                                metafields (namespace: \"shipping.shipperhq\") {\n                                    edges {\n                                        node {\n                                            key\n                                            value\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n            "
      })
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      if (data.data) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(data.data.site.products.edges), _step2; !(_step2 = _iterator2()).done;) {
          var product = _step2.value;
          var shippingGroup = null;

          if (product.node.metafields.edges.length > 0) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(product.node.metafields.edges), _step4; !(_step4 = _iterator4()).done;) {
              var group = _step4.value;

              if (group.node.key == "shipping-groups") {
                shippingGroup = group.node.value;
                break;
              }
            }
          }

          pShippingGroup[product.node.entityId] = shippingGroup;
        }

        var totalhp = 0;

        for (var _iterator3 = _createForOfIteratorHelperLoose(cartItems.lineItems.physicalItems), _step3; !(_step3 = _iterator3()).done;) {
          var item = _step3.value;

          if (pShippingGroup[item.productId]) {
            if (pShippingGroup[item.productId].toLowerCase().includes("hairpiece")) {
              totalhp += item.quantity;
            }
          }

          console.log(totalhp);
        }

        setShipment(cartItems.baseAmount > 500 || totalhp > 2);
      } else {
        setShipment();
      }
    });
  }
}
/**
 * Check and set shipment
 * 
 * @param {boolean} isLarger True if having more than 2 pieces of hairpieces or subtotal larger than 500
 */


function setShipment(isLarger) {
  if (isLarger === void 0) {
    isLarger = false;
  }

  var group = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=customer-group]").val(); // console.log(isLarger)

  switch (group) {
    case "Newcomer":
      if (isLarger) {
        if (isPopup == false) {
          _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_1__["default"].fire({
            text: "As a new client, some restrictions are placed on your account for your first three orders. After your first three orders, restrictions on your cart total will be removed. If you would like to pay using a credit card, please reduce your cart total to under $500.00, or reduce the number of hairpieces in your cart to 2 or less.",
            icon: 'info'
          });
          isPopup = true;
        }

        setInterval(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").find("li.form-checklist-item").filter(function () {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".paymentProviderHeader-name").eq(0).text().toLowerCase().includes("credit card") || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-applepay").length > 0;
          }).css("display", "none");
        }, 500);
      }

      break;

    case 'Blocklist':
      if (isLarger) {
        setInterval(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").find("li.form-checklist-item").filter(function () {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".paymentProviderHeader-name").eq(0).text().toLowerCase().includes("credit card") || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-applepay").length > 0;
          }).css("display", "none");
        }, 500);
      }

      break;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  var _this = this;

  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getCart({
    includeOptions: true
  }, function (err, myCart) {
    if (err) {
      return;
    }

    if (myCart) {
      cartItems = {
        id: myCart.id,
        baseAmount: myCart.baseAmount,
        lineItems: myCart.lineItems
      };
      var group = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=customer-group]").val();

      if (group) {
        if (group == "Blocklist" || "Newcomer") {
          checkProducts();
        }
      }

      var checkInit = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#cart-edit-link").length > 0 && ".cart-section".length > 0) {
          _this.clearInterval(checkInit);

          cartGetDelivery();
          var baction = setInterval(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").length > 0) {
              clearInterval(baction);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").on("click", function () {
                setTimeout(function () {
                  cartSetDelivery();
                }, 500);
              });
            }
          }, 500);
        }
      }, 500);
    }
  });
});

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
 // WeakMap will defined in the global scope if native WeakMap is not supported.

var weakMap = new WeakMap(); // eslint-disable-line no-unused-vars
// Set defaults for sweetalert2 popup boxes

var Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'button',
    cancelButton: 'button'
  }
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (Swal);

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api.js":
/*!************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _api_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/countries */ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js");
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/product */ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js");
/* harmony import */ var _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/product-attributes */ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js");
/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/search */ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/cart */ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js");






var internals = {};
/**
 * Convenience function to request a page via ajax
 *
 * @param url
 * @param options
 * @param callback
 */

internals.getPage = function (url, options, callback) {
  Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
    method: 'GET',
    requestOptions: options
  }, callback);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  country: new _api_countries__WEBPACK_IMPORTED_MODULE_1__["default"](),
  productAttributes: new _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__["default"](),
  product: new _api_product__WEBPACK_IMPORTED_MODULE_2__["default"](),
  search: new _api_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  cart: new _api_cart__WEBPACK_IMPORTED_MODULE_5__["default"](),
  getPage: internals.getPage
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/base.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");


var _default = /*#__PURE__*/function () {
  /**
   * @Constructor
   */
  function _default(version) {
    this.remoteVersion = version || 'v1';
    this.remoteBaseEndpoint = '/remote/';
  }
  /**
   *
   * @param {String} url
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Boolean} remote
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.makeRequest = function makeRequest(url, method, options, remote, callback) {
    Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
      method: method,
      remote: remote,
      requestOptions: options
    }, callback);
  }
  /**
   *
   * @param {String} endpoint
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.remoteRequest = function remoteRequest(endpoint, method, options, callback) {
    var remoteUrl = this.remoteBaseEndpoint + this.remoteVersion + endpoint;
    this.makeRequest(remoteUrl, method, options, true, callback);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/cart.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  function _default() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  /**
   * Get a collection of Carts. For now, this will only return an array of a single cart as multiple carts per session
   * are not currently supported.
   *
   * @param options
   * @param {Function} callback
   */
  _proto.getCarts = function getCarts(options, callback) {
    if (options === void 0) {
      options = {};
    }

    var url = '/api/storefront/carts';

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Get the current Cart's details, either with or without Product Option selections.
   * Can also be used to get a particular cart provided a cartId in the options.
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCart = function getCart(options, callback) {
    if (options === void 0) {
      options = {};
    }

    /* If no cart ID is provided, get the collection of carts and return the first one */
    if (!options.cartId) {
      return this.getCarts(options, function (err, response) {
        return callback(err, response[0]);
      });
    }

    var url = "/api/storefront/carts/" + options.cartId;

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Add the parameters to a URL needed to get product option details on cart line items
   * @param url
   */
  ;

  _proto.includeOptions = function includeOptions(url) {
    return url + "?include=lineItems.physicalItems.options,lineItems.digitalItems.options";
  }
  /**
   * Get a sum of the cart line item quantities
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCartQuantity = function getCartQuantity(options, callback) {
    if (options === void 0) {
      options = {};
    }

    this.getCart(options, function (err, response) {
      if (err) {
        return callback(err);
      }

      var quantity = 0;

      if (response) {
        var cart = response;
        var lineItemQuantities = [cart.lineItems.physicalItems, cart.lineItems.digitalItems, cart.lineItems.customItems].reduce(function (a, b) {
          return a.concat(b);
        }).filter(function (lineItem) {
          return !lineItem.parentId;
        }).map(function (lineItem) {
          return lineItem.quantity;
        }).reduce(function (accumulator, lineItemQuantity) {
          return accumulator + lineItemQuantity;
        }, 0);
        var giftCertificateQuantity = cart.lineItems.giftCertificates.length;
        quantity = lineItemQuantities + giftCertificateQuantity;
      }

      callback(null, quantity);
    });
  }
  /**
   * Add item to cart with options (variants)
   *
   * @param {FormData} formData
   * @param {Function} callback
   */
  ;

  _proto.itemAdd = function itemAdd(formData, callback) {
    this.remoteRequest('/cart/add', 'POST', {
      formData: formData
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-add-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Update cart item quantity
   *
   * @param {String|Object} itemId
   * @param {Number|Function} qty
   * @param {Function|null} callback
   */
  ;

  _proto.itemUpdate = function itemUpdate(itemId, qty, callback) {
    var callbackArg = callback;
    var items;

    if (Array.isArray(itemId) && typeof qty === 'function') {
      callbackArg = qty;
      items = itemId;
    } else {
      items = [{
        id: itemId,
        quantity: qty
      }];
    }

    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-update-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * Remove cart items
   *
   * Calls the internal update function with quantity: 0
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.itemRemove = function itemRemove(itemId, callback) {
    var items = [{
      id: itemId,
      quantity: 0
    }];
    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-remove-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Get giftwrapping options
   * @param {String} itemId
   * @param {Object|Function} options
   * @param {Function|null} callback
   */
  ;

  _proto.getItemGiftWrappingOptions = function getItemGiftWrappingOptions(itemId, options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.remoteRequest("/gift-wrapping/" + itemId, 'GET', opts, callbackArg);
  }
  /**
   * Submit giftwrapping options
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.submitItemGiftWrappingOption = function submitItemGiftWrappingOption(itemId, params, callback) {
    this.remoteRequest("/gift-wrapping/" + itemId, 'POST', {
      params: params
    }, callback);
  }
  /**
   * Update cart items
   *
   * @param {Array} items
   * @param {Function} callback
   */
  ;

  _proto.update = function update(items, callback) {
    var payload = {
      items: items
    };
    this.remoteRequest('/cart/update', 'POST', {
      params: payload
    }, callback);
  }
  /**
   * Get cart content
   *
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.getContent = function getContent(options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.makeRequest('/cart.php', 'GET', opts, false, callbackArg);
  }
  /**
   * Get cart shipping quote
   *
   * @param {Object} params
   * @param {String|Array|Object} renderWith
   * @param {Function} callback
   */
  ;

  _proto.getShippingQuotes = function getShippingQuotes(params, renderWith, callback) {
    var options = {
      params: params
    };
    var callbackArg = callback;
    var renderWithArg = renderWith;

    if (typeof callbackArg !== 'function') {
      callbackArg = renderWithArg;
      renderWithArg = null;
    }

    if (renderWithArg) {
      options.template = renderWithArg;
    }

    this.remoteRequest('/shipping-quote', 'GET', options, callbackArg);
  }
  /**
   * Submit shipping quote based on quoteId
   *
   * @param {Number} quoteId
   * @param {Function} callback
   */
  ;

  _proto.submitShippingQuote = function submitShippingQuote(quoteId, callback) {
    var options = {
      params: {
        shipping_method: quoteId
      }
    };
    this.remoteRequest('/shipping-quote', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {String} code
   * @param {Function} callback
   */
  ;

  _proto.applyCode = function applyCode(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/apply-code', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {Number} code
   * @param {Function} callback
   */
  ;

  _proto.applyGiftCertificate = function applyGiftCertificate(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/gift-certificates', 'POST', options, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/countries.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/country-states/';
    return _this;
  }
  /**
   *
   * Get country data by id wrapper
   *
   * @param {Number} id
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(id, callback) {
    var url = this.endpoint + id;
    this.remoteRequest(url, 'GET', {}, callback);
  }
  /**
   * Get country data by country name
   * @param name
   * @param callback
   */
  ;

  _proto.getByName = function getByName(name, callback) {
    var url = this.endpoint + name;
    this.remoteRequest(url, 'GET', {}, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/product-attributes/';
    _this.inCartEndpoint = '/configure-options/';
    return _this;
  }
  /**
   * @param {Number} productId
   * @param {Object} params
   * @param callback
   */


  var _proto = _default.prototype;

  _proto.optionChange = function optionChange(productId, params, template, callback) {
    if (template === void 0) {
      template = null;
    }

    var templateArg = template;
    var callbackArg = callback;

    if (typeof templateArg === 'function') {
      callbackArg = templateArg;
      templateArg = null;
    }

    var normalizedQs = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeQueryStringParams"])(params);
    this.remoteRequest(this.endpoint + productId, 'POST', {
      params: normalizedQs,
      template: templateArg
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('product-options-change-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * @param {Number} itemId
   * @param {Object} params
   * @param callback
   */
  ;

  _proto.configureInCart = function configureInCart(itemId, params, callback) {
    this.remoteRequest(this.inCartEndpoint + itemId, 'GET', params, function (err, response) {
      callback(err, response);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/products.php?productId=';
    return _this;
  }
  /**
   *
   * @param {Number} productId
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(productId, params, callback) {
    var url = this.endpoint + productId;
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/search.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/search.php?search_query=';
    return _this;
  }
  /**
   * Get search results
   * @param {String} query
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.search = function search(query, params, callback) {
    var url = this.endpoint + encodeURIComponent(query);
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    _hooks__WEBPACK_IMPORTED_MODULE_0__["default"].emit('search-quick-remote', query);
    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/cart */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js");
/* harmony import */ var _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/cookie */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js");
/* harmony import */ var _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/currency-selector */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js");
/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/product */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js");
/* harmony import */ var _hooks_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js");
/* harmony import */ var _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/faceted-search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js");
/* harmony import */ var _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/sort-by */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js");







var internals = {};
internals.classes = {
  cart: new _hooks_cart__WEBPACK_IMPORTED_MODULE_0__["default"](),
  cookie: new _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__["default"](),
  currencySelector: new _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__["default"](),
  product: new _hooks_product__WEBPACK_IMPORTED_MODULE_3__["default"](),
  search: new _hooks_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  facetedSearch: new _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sortBy: new _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__["default"]()
};

internals.parseHooks = function (hookName) {
  var hookType = hookName.split('-')[0];

  if (internals.classes[hookType] === undefined) {
    throw new Error(hookType + " is not a valid hookType");
  }

  return internals.classes[hookType];
};

var Hooks = /*#__PURE__*/function () {
  function Hooks() {}

  var _proto = Hooks.prototype;

  _proto.on = function on(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.on(hookName, callback);
  };

  _proto.off = function off(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.off(hookName, callback);
  };

  _proto.emit = function emit(hookName) {
    var hook = internals.parseHooks(hookName);
    return hook.emit.apply(hook, arguments);
  };

  return Hooks;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Hooks());

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(_default, _EventEmitter);

  function _default() {
    var _this;

    _this = _EventEmitter.call(this) || this;
    _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    return _this;
  }

  return _default;
}(eventemitter2__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.itemAdd();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.itemAdd = function itemAdd() {
    var _this2 = this;

    this.$body.on('submit', '[data-cart-item-add]', function (event) {
      _this2.emit('cart-item-add', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  function _default() {
    return _BaseHooks.apply(this, arguments) || this;
  }

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.currencySelector();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.currencySelector = function currencySelector() {
    var _this2 = this;

    this.$body.on('input', '[data-currency-selector-toggle]', function (event) {
      _this2.emit('currencySelector-toggle', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.searchEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.searchEvents = function searchEvents() {
    var _this2 = this;

    this.$body.on('click', '[data-faceted-search-facet]', function (event) {
      _this2.emit('facetedSearch-facet-clicked', event);
    });
    this.$body.on('submit', '[data-faceted-search-range]', function (event) {
      _this2.emit('facetedSearch-range-submitted', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.optionsChange();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.optionsChange = function optionsChange() {
    var _this2 = this;

    this.$body.on('change', '[data-product-option-change]', function (event) {
      _this2.emit('product-option-change', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.quickSearch();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.quickSearch = function quickSearch() {
    var _this2 = this;

    this.$body.on('input', '[data-search-quick]', function (event) {
      _this2.emit('search-quick', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.sortByEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.sortByEvents = function sortByEvents() {
    var _this2 = this;

    this.$body.on('submit', '[data-sort-by]', function (event) {
      _this2.emit('sortBy-submitted', event);
    });
    this.$body.on('change', '[data-sort-by] select', function (event) {
      _this2.emit('sortBy-select-changed', event);

      if (!event.isDefaultPrevented()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).closest('form').trigger('submit');
      }
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/request.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */

function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}

/* harmony default export */ __webpack_exports__["default"] = (function (relativeUrl, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      baseUrl: null,
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}',
    'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = []; // Not a valid method

  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }

  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];

    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }

  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }

  var url = relativeUrl;

  if (options.requestOptions.baseUrl) {
    url = "" + options.requestOptions.baseUrl + url;
  } // make ajax request using jquery


  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    method: options.method,
    url: url,
    xhrFields: {
      withCredentials: true
    },
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;

      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        } // If using "sections", morph the content into the arbitrary keys => content object.


        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;

          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }

        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }

      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js ***!
  \******************************************************************/
/*! exports provided: normalizeQueryStringParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryStringParams", function() { return normalizeQueryStringParams; });
// Utilities
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/**
 * Normalize querystring params. Remove empty array values
 * @param {string} params
 * @returns {string} Normalized querystring
 */


function normalizeQueryStringParams(params) {
  var qsParams = queryString.parse(params);

  var isValidParam = function isValidParam(value) {
    return value !== '' && value !== undefined;
  };

  var optionsCollection = Object.keys(qsParams).reduce(function (normalized, key) {
    var param;

    if (qsParams[key] instanceof Array) {
      var _param;

      var filtered = qsParams[key].filter(isValidParam);
      param = (_param = {}, _param[key] = filtered, _param);
    } else if (isValidParam(qsParams[key])) {
      var _param2;

      param = (_param2 = {}, _param2[key] = qsParams[key], _param2);
    }

    return Object.assign({}, normalized, param);
  }, {});
  var paramString = queryString.stringify(optionsCollection);
  return paramString;
}

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/main.js ***!
  \*************************************************************/
/*! exports provided: hooks, api, tools, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@bigcommerce/stencil-utils/src/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./node_modules/@bigcommerce/stencil-utils/src/tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return _tools__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var StencilUtils = {
  hooks: _hooks__WEBPACK_IMPORTED_MODULE_0__["default"],
  api: _api__WEBPACK_IMPORTED_MODULE_1__["default"],
  tools: _tools__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (StencilUtils);
/* global define */

(function (root) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && root) {
    // Ignores below for https://github.com/eslint/eslint/issues/5150
    define(function () {
      // eslint-disable-line prefer-arrow-callback
      root.stencilUtils = StencilUtils; // eslint-disable-line no-param-reassign
    });
  } else if ( true && module.exports) {
    module.exports = StencilUtils;
  } else {
    window.stencilUtils = StencilUtils;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/image */ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js");
/* harmony import */ var _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/imageSrcset */ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js");
/* harmony import */ var _tools_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/storage */ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  image: new _tools_image__WEBPACK_IMPORTED_MODULE_0__["default"](),
  imageSrcset: new _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__["default"](),
  storage: new _tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"]()
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/image.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrc = function getSrc(path, dimensions) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/g;
    var size;

    if (typeof dimensions === 'object') {
      var width = dimensions.width || 100;
      var height = dimensions.height || 100;
      size = width + "x" + height;
    } else if (typeof dimensions === 'string' && sizeRegex.test(dimensions)) {
      // If dimensions is a string and match the NNNxNNN or NNNw format
      size = dimensions;
    } else {
      // Use the original image size
      size = 'original';
    }

    return path.replace('{:size}', size);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrcset = function getSrcset(url, sizes) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/; // Regex to test to that srcset descriptor is of the form 1x 1.5x 2x OR 123w

    var descriptorRegex = /(^\d+w$)|(^([0-9](\.[0-9]+)?)x)$/;
    var srcsets = {};

    if (!sizes) {
      // Use default srcsets if none are provided
      srcsets = {
        '80w': '80w',
        '160w': '160w',
        '320w': '320w',
        '640w': '640w',
        '960w': '960w',
        '1280w': '1280w',
        '1920w': '1920w',
        '2560w': '2560w'
      };
    } else if (sizes === Object(sizes) && !Object.keys(sizes).some(function (descriptor) {
      return !(descriptorRegex.test(descriptor) && sizeRegex.test(sizes[descriptor]));
    })) {
      // If object consists of valid srcsets, use it instead
      srcsets = sizes; // If there's only one argument, return a `src` only (also works for `srcset`)

      if (Object.keys(srcsets).length === 1) {
        return url.replace('{:size}', srcsets[Object.keys(srcsets)[0]]);
      }
    } else {
      throw new Error('Invalid srcset descriptor or size');
    } // eslint-disable-next-line new-cap


    return Object.keys(srcsets).map(function (descriptor) {
      return [url.replace('{:size}', srcsets[descriptor]), descriptor].join(' ');
    }).join(', ');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  /**
   * Check if a storage type (like localStorage or sessionStorage) is available for use
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
   * @param type
   * @returns boolean
   */
  _proto.storageAvailable = function storageAvailable(type) {
    var storage = window[type];

    try {
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && ( // everything except Firefox
      e.code === 22 || // Firefox
      e.code === 1014 || // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' || // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
  };

  _proto.localStorageAvailable = function localStorageAvailable() {
    return this.storageAvailable('localStorage');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {

      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;

            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {

      if (!this._all &&
        !this._events.error &&
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || !!this._all;
    }
    else {
      return !!this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {

    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;

        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if(!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}();


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.min.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&l(i,n.prototype),i}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===z.indexOf(n)&&(z.push(n),_(n))}function v(t){return t&&"function"==typeof t.toPromise}function b(t){return v(t)?t.toPromise():Promise.resolve(t)}function y(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(e=t)&&e.jquery;var e}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function C(t){var e=Q();return e?e.querySelector(t):null}function e(t){return C(".".concat(t))}function n(){var t=$();return h(t.querySelectorAll(".".concat(Y.icon)))}function k(){var t=n().filter(function(t){return vt(t)});return t.length?t[0]:null}function x(){return e(Y.title)}function P(){return e(Y.content)}function A(){return e(Y.image)}function B(){return e(Y["progress-steps"])}function S(){return e(Y["validation-message"])}function E(){return C(".".concat(Y.actions," .").concat(Y.confirm))}function O(){return C(".".concat(Y.actions," .").concat(Y.cancel))}function T(){return e(Y.actions)}function L(){return e(Y.header)}function j(){return e(Y.footer)}function q(){return e(Y["timer-progress-bar"])}function I(){return e(Y.close)}function V(){var t=h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return vt(t)})}function M(){return!J()&&!document.body.classList.contains(Y["no-backdrop"])}function R(){return $().hasAttribute("data-loading")}function H(e,t){var n;e.textContent="",t&&(n=(new DOMParser).parseFromString(t,"text/html"),h(n.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(n.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function D(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function N(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m(Y).indexOf(t)&&-1===m(Z).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return _("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));mt(t,e.customClass[n])}}var U="SweetAlert2:",_=function(t){console.warn("".concat(U," ").concat(t))},F=function(t){console.error("".concat(U," ").concat(t))},z=[],W=function(t){return"function"==typeof t?t():t},K=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Y=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Z=t(["success","warning","info","question","error"]),Q=function(){return document.body.querySelector(".".concat(Y.container))},$=function(){return e(Y.popup)},J=function(){return document.body.classList.contains(Y["toast-shown"])},X={previousBodyPadding:null};function G(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return gt(t,Y[e]);case"checkbox":return t.querySelector(".".concat(Y.checkbox," input"));case"radio":return t.querySelector(".".concat(Y.radio," input:checked"))||t.querySelector(".".concat(Y.radio," input:first-child"));case"range":return t.querySelector(".".concat(Y.range," input"));default:return gt(t,Y.input)}}function tt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function et(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function nt(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function ot(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function it(t){t.style.opacity="",t.style.display="none"}function rt(t,e,n){e?ot(t,n):it(t)}function at(t){return!!(t.scrollHeight>t.clientHeight)}function ct(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function st(t,e){var n=1<arguments.length&&void 0!==e&&e,o=q();vt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ut(){return"undefined"==typeof window||"undefined"==typeof document}function lt(t){sn.isVisible()&&ft!==t.target.value&&sn.resetValidationMessage(),ft=t.target.value}function dt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?wt(t,e):t&&H(e,t)}function pt(t,e){var n=T(),o=E(),i=O();e.showConfirmButton||e.showCancelButton||it(n),N(n,e,"actions"),xt(o,"confirm",e),xt(i,"cancel",e),e.buttonsStyling?function(t,e,n){mt([t,e],Y.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);{var o;R()||(o=window.getComputedStyle(t).getPropertyValue("background-color"),t.style.borderLeftColor=o,t.style.borderRightColor=o)}}(o,i,e):(ht([o,i],Y.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ft,mt=function(t,e){et(t,e,!0)},ht=function(t,e){et(t,e,!1)},gt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(D(t.childNodes[n],e))return t.childNodes[n]},vt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},bt='\n <div aria-labelledby="'.concat(Y.title,'" aria-describedby="').concat(Y.content,'" class="').concat(Y.popup,'" tabindex="-1">\n   <div class="').concat(Y.header,'">\n     <ul class="').concat(Y["progress-steps"],'"></ul>\n     <div class="').concat(Y.icon," ").concat(Z.error,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.question,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.warning,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.info,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.success,'"></div>\n     <img class="').concat(Y.image,'" />\n     <h2 class="').concat(Y.title,'" id="').concat(Y.title,'"></h2>\n     <button type="button" class="').concat(Y.close,'"></button>\n   </div>\n   <div class="').concat(Y.content,'">\n     <div id="').concat(Y.content,'" class="').concat(Y["html-container"],'"></div>\n     <input class="').concat(Y.input,'" />\n     <input type="file" class="').concat(Y.file,'" />\n     <div class="').concat(Y.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select,'"></select>\n     <div class="').concat(Y.radio,'"></div>\n     <label for="').concat(Y.checkbox,'" class="').concat(Y.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(Y.label,'"></span>\n     </label>\n     <textarea class="').concat(Y.textarea,'"></textarea>\n     <div class="').concat(Y["validation-message"],'" id="').concat(Y["validation-message"],'"></div>\n   </div>\n   <div class="').concat(Y.actions,'">\n     <button type="button" class="').concat(Y.confirm,'">OK</button>\n     <button type="button" class="').concat(Y.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer,'"></div>\n   <div class="').concat(Y["timer-progress-bar-container"],'">\n     <div class="').concat(Y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),yt=function(t){var e,n,o,i,r,a,c,s,u,l,d,p,f,m,h,g=!!(e=Q())&&(e.parentNode.removeChild(e),ht([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0);ut()?F("SweetAlert2 requires document to initialize"):((n=document.createElement("div")).className=Y.container,g&&mt(n,Y["no-transition"]),H(n,bt),(o="string"==typeof(i=t.target)?document.querySelector(i):i).appendChild(n),r=t,(a=$()).setAttribute("role",r.toast?"alert":"dialog"),a.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||a.setAttribute("aria-modal","true"),c=o,"rtl"===window.getComputedStyle(c).direction&&mt(Q(),Y.rtl),s=P(),u=gt(s,Y.input),l=gt(s,Y.file),d=s.querySelector(".".concat(Y.range," input")),p=s.querySelector(".".concat(Y.range," output")),f=gt(s,Y.select),m=s.querySelector(".".concat(Y.checkbox," input")),h=gt(s,Y.textarea),u.oninput=lt,l.onchange=lt,f.onchange=lt,m.onchange=lt,h.oninput=lt,d.oninput=function(t){lt(t),p.value=d.value},d.onchange=function(t){lt(t),d.nextSibling.value=d.value})},wt=function(t,e){t.jquery?Ct(e,t):H(e,t.toString())},Ct=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(ut())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function xt(t,e,n){var o;rt(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),H(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=Y[e],N(t,n,"".concat(e,"Button")),mt(t,n["".concat(e,"ButtonClass")])}function Pt(t,e){var n,o,i,r,a,c,s,u,l=Q();l&&(n=l,"string"==typeof(o=e.backdrop)?n.style.background=o:o||mt([document.documentElement,document.body],Y["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i=l,(r=e.position)in Y?mt(i,Y[r]):(_('The "position" parameter is not valid, defaulting to "center"'),mt(i,Y.center)),a=l,!(c=e.grow)||"string"!=typeof c||(s="grow-".concat(c))in Y&&mt(a,Y[s]),N(l,e,"container"),(u=document.body.getAttribute("data-swal2-queue-step"))&&(l.setAttribute("data-queue-step",u),document.body.removeAttribute("data-swal2-queue-step")))}function At(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var Bt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Et=function(t){if(!jt[t.input])return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Lt(t.input),n=jt[t.input](e,t);ot(n),setTimeout(function(){tt(n)})},Ot=function(t,e){var n=G(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},Tt=function(t){var e=Lt(t.input);t.customClass&&mt(e,t.customClass.input)},Lt=function(t){var e=Y[t]?Y[t]:Y.input;return gt(P(),e)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:y(e.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),At(t,e),t.type=e.input,t},jt.file=function(t,e){return At(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),H(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=G(P(),"checkbox");n.value=1,n.id=Y.checkbox,n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return H(o,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,At(e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle($()).width),o=parseInt(window.getComputedStyle($()).paddingLeft)+parseInt(window.getComputedStyle($()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;$().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function qt(t,e){var n,o,i,r,a,c=P().querySelector("#".concat(Y.content));e.html?(dt(e.html,c),ot(c,"block")):e.text?(c.textContent=e.text,ot(c,"block")):it(c),n=t,o=e,i=P(),r=Bt.innerParams.get(n),a=!r||o.input!==r.input,St.forEach(function(t){var e=Y[t],n=gt(i,e);Ot(t,o.inputAttributes),n.className=e,a&&it(n)}),o.input&&(a&&Et(o),Tt(o)),N(P(),e,"content")}function It(){return Q()&&Q().getAttribute("data-queue-step")}function Vt(t,s){var u=B();if(!s.progressSteps||0===s.progressSteps.length)return it(u),0;ot(u),u.textContent="";var l=parseInt(void 0===s.currentProgressStep?It():s.currentProgressStep);l>=s.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.progressSteps.forEach(function(t,e){var n,o,i,r,a,c=(n=t,o=document.createElement("li"),mt(o,Y["progress-step"]),H(o,n),o);u.appendChild(c),e===l&&mt(c,Y["active-progress-step"]),e!==s.progressSteps.length-1&&(r=s,a=document.createElement("li"),mt(a,Y["progress-step-line"]),r.progressStepsDistance&&(a.style.width=r.progressStepsDistance),i=a,u.appendChild(i))})}function Mt(t,e){var n,o,i,r,a,c,s,u,l=L();N(l,e,"header"),Vt(0,e),n=t,o=e,(r=Bt.innerParams.get(n))&&o.icon===r.icon&&k()?N(k(),o,"icon"):(Dt(),o.icon&&(-1!==Object.keys(Z).indexOf(o.icon)?(i=C(".".concat(Y.icon,".").concat(Z[o.icon])),ot(i),Ut(i,o),Nt(),N(i,o,"icon"),mt(i,o.showClass.icon)):F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')))),function(t){var e=A();if(!t.imageUrl)return it(e);ot(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),nt(e,"width",t.imageWidth),nt(e,"height",t.imageHeight),e.className=Y.image,N(e,t,"image")}(e),a=e,c=x(),rt(c,a.title||a.titleText),a.title&&dt(a.title,c),a.titleText&&(c.innerText=a.titleText),N(c,a,"title"),s=e,u=I(),H(u,s.closeButtonHtml),N(u,s,"closeButton"),rt(u,s.showCloseButton),u.setAttribute("aria-label",s.closeButtonAriaLabel)}function Rt(t,e){var n,o,i,r;n=e,o=$(),nt(o,"width",n.width),nt(o,"padding",n.padding),n.background&&(o.style.background=n.background),zt(o,n),Pt(0,e),Mt(t,e),qt(t,e),pt(0,e),i=e,r=j(),rt(r,i.footer),i.footer&&dt(i.footer,r),N(r,i,"footer"),"function"==typeof e.onRender&&e.onRender($())}function Ht(){return E()&&E().click()}var Dt=function(){for(var t=n(),e=0;e<t.length;e++)it(t[e])},Nt=function(){for(var t=$(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){t.textContent="",e.iconHtml?H(t,_t(e.iconHtml)):"success"===e.icon?H(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?H(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):H(t,_t({question:"?",warning:"!",info:"i"}[e.icon]))},_t=function(t){return'<div class="'.concat(Y["icon-content"],'">').concat(t,"</div>")},Ft=[],zt=function(t,e){t.className="".concat(Y.popup," ").concat(vt(t)?e.showClass.popup:""),e.toast?(mt([document.documentElement,document.body],Y["toast-shown"]),mt(t,Y.toast)):mt(t,Y.modal),N(t,e,"popup"),"string"==typeof e.customClass&&mt(t,e.customClass),e.icon&&mt(t,Y["icon-".concat(e.icon)])};function Wt(){var t=$();t||sn.fire(),t=$();var e=T(),n=E();ot(e),ot(n,"inline-block"),mt([t,e],Y.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Kt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout(function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Yt(){if(Xt.timeout)return function(){var t=q(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Xt.timeout.stop()}function Zt(){if(Xt.timeout){var t=Xt.timeout.start();return st(t),t}}function Qt(t){return Object.prototype.hasOwnProperty.call(Gt,t)}function $t(t){return ee[t]}function Jt(t){for(var e in t)Qt(i=e)||_('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==ne.indexOf(o)&&_('The parameter "'.concat(o,'" is incompatible with toasts'))),$t(n=e)&&g(n,$t(n));var n,o,i}var Xt={},Gt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,onDestroy:void 0,scrollbarPadding:!0},te=["allowEscapeKey","allowOutsideClick","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","footer","hideClass","html","icon","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","text","title","titleText"],ee={animation:'showClass" and "hideClass'},ne=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],oe=Object.freeze({isValidParameter:Qt,isUpdatableParameter:function(t){return-1!==te.indexOf(t)},isDeprecatedParameter:$t,argsToParams:function(o){var i={};return"object"!==r(o[0])||w(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||w(n)?i[t]=n:void 0!==n&&F("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):s(i,o[0]),i},isVisible:function(){return vt($())},clickConfirm:Ht,clickCancel:function(){return O()&&O().click()},getContainer:Q,getPopup:$,getTitle:x,getContent:P,getHtmlContainer:function(){return e(Y["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:I,getActions:T,getConfirmButton:E,getCancelButton:O,getHeader:L,getFooter:j,getTimerProgressBar:q,getFocusableElements:V,getValidationMessage:S,isLoading:R,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return c(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,s({},r,t))}}]),i}(this)},queue:function(t){var r=this;Ft=t;function a(t,e){Ft=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ft.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ft[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:It,insertQueueStep:function(t,e){return e&&e<Ft.length?Ft.splice(e,0,t):Ft.push(t)},deleteQueueStep:function(t){void 0!==Ft[t]&&Ft.splice(t,1)},showLoading:Wt,enableLoading:Wt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Yt,resumeTimer:Zt,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Yt:Zt)()},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return st(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()}});function ie(){var t,e=Bt.innerParams.get(this);e&&(t=Bt.domCache.get(this),e.showConfirmButton||(it(t.confirmButton),e.showCancelButton||it(t.actions)),ht([t.popup,t.actions],Y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1)}function re(){null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+function(){var t=document.createElement("div");t.className=Y["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function ae(){return!!window.MSInputMethodContext&&!!document.documentMode}function ce(){var t=Q(),e=$();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var se=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||$().scrollHeight>window.innerHeight-44&&(Q().style.paddingBottom="".concat(44,"px"))},ue=function(){var e,t=Q();t.ontouchstart=function(t){e=le(t.target)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},le=function(t){var e=Q();return t===e||!(at(e)||"INPUT"===t.tagName||at(P())&&P().contains(t))},de={swalPromiseResolve:new WeakMap};function pe(t,e,n,o){var i;n?he(t,o):(Kt().then(function(){return he(t,o)}),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),M()&&(null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null),D(document.body,Y.iosfix)&&(i=parseInt(document.body.style.top,10),ht(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=-1*i),"undefined"!=typeof window&&ae()&&window.removeEventListener("resize",ce),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ht([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"],Y["toast-column"]])}function fe(t){var e,n,o,i=$();i&&(e=Bt.innerParams.get(this))&&!D(i,e.hideClass.popup)&&(n=de.swalPromiseResolve.get(this),ht(i,e.showClass.popup),mt(i,e.hideClass.popup),o=Q(),ht(o,e.showClass.backdrop),mt(o,e.hideClass.backdrop),function(t,e,n){var o=Q(),i=kt&&ct(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){me(t,e,o,a)}else{pe(t,o,J(),a)}}(this,i,e),void 0!==t?(t.isDismissed=void 0!==t.dismiss,t.isConfirmed=void 0===t.dismiss):t={isDismissed:!0,isConfirmed:!1},n(t||{}))}var me=function(t,e,n,o){Xt.swalCloseEventFinishedCallback=pe.bind(null,t,n,J(),o),e.addEventListener(kt,function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)})},he=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function ge(t,e,n){var o=Bt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ve(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var be=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return c(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ye={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function we(t){var e,n;(e=t).inputValidator||Object.keys(ye).forEach(function(t){e.input===t&&(e.inputValidator=ye[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&_("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=W(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(_('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}function Ce(t){var e=Q(),n=$();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;je(e,n,t),Te(e,n),M()&&(Le(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===Q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,Q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),J()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)}),ht(e,Y["no-transition"])}function ke(t){var e,n=$();t.target===n&&(e=Q(),n.removeEventListener(kt,ke),e.style.overflowY="auto")}function xe(t,e){"select"===e.input||"radio"===e.input?Me(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(v(e.inputValue)||y(e.inputValue))&&Re(t,e)}function Pe(t,e){t.disableButtons(),e.input?Ne(t,e):Ue(t,e,!0)}function Ae(t,e){t.disableButtons(),e(K.cancel)}function Be(t,e){t.closePopup({value:e})}function Se(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return ze(e,t,o)},t.keydownTarget=n.keydownListenerCapture?window:$(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function Ee(t,e,n){var o=V(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();$().focus()}function Oe(t,e,n){Bt.innerParams.get(t).toast?Qe(t,e,n):(Je(e),Xe(e),Ge(t,e,n))}var Te=function(t,e){kt&&ct(e)?(t.style.overflowY="hidden",e.addEventListener(kt,ke)):t.style.overflowY="auto"},Le=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!D(document.body,Y.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),mt(document.body,Y.iosfix),ue(),se()),"undefined"!=typeof window&&ae()&&(ce(),window.addEventListener("resize",ce)),e&&"hidden"!==n&&re(),setTimeout(function(){t.scrollTop=0})},je=function(t,e,n){mt(t,n.showClass.backdrop),ot(e),mt(e,n.showClass.popup),mt([document.documentElement,document.body],Y.shown),n.heightAuto&&n.backdrop&&!n.toast&&mt([document.documentElement,document.body],Y["height-auto"])},qe=function(t){return t.checked?1:0},Ie=function(t){return t.checked?t.value:null},Ve=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Me=function(e,n){function o(t){return He[n.input](i,De(t),n)}var i=P();v(n.inputOptions)||y(n.inputOptions)?(Wt(),b(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Re=function(e,n){var o=e.getInput();it(o),b(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),ot(o),o.focus(),e.hideLoading()}).catch(function(t){F("Error in inputValue promise: ".concat(t)),o.value="",ot(o),o.focus(),e.hideLoading()})},He={select:function(t,e,i){function r(t,e,n){var o=document.createElement("option");o.value=n,H(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var a=gt(t,Y.select);e.forEach(function(t){var e,n=t[0],o=t[1];Array.isArray(o)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,a.appendChild(e),o.forEach(function(t){return r(e,t[1],t[0])})):r(a,o,n)}),a.focus()},radio:function(t,e,a){var c=gt(t,Y.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=Y.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");H(r,n),r.className=Y.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},De=function o(n){var i=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach(function(t,e){var n=t;"object"===r(n)&&(n=o(n)),i.push([e,n])}):Object.keys(n).forEach(function(t){var e=n[t];"object"===r(e)&&(e=o(e)),i.push([t,e])}),i},Ne=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qe(n);case"radio":return Ie(n);case"file":return Ve(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return b(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ue(e,n,o)})):e.getInput().checkValidity()?Ue(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Ue=function(e,t,n){t.showLoaderOnConfirm&&Wt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return b(t.preConfirm(n,t.validationMessage))}).then(function(t){vt(S())||!1===t?e.hideLoading():Be(e,void 0===t?n:t)})):Be(e,n)},_e=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Fe=["Escape","Esc"],ze=function(t,e,n){var o=Bt.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?We(t,e,o):"Tab"===e.key?Ke(e,o):-1!==_e.indexOf(e.key)?Ye():-1!==Fe.indexOf(e.key)&&Ze(e,o,n)},We=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ht(),e.preventDefault()}},Ke=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Ee(0,o,-1):Ee(0,o,1),t.stopPropagation(),t.preventDefault()},Ye=function(){var t=E(),e=O();document.activeElement===t&&vt(e)?e.focus():document.activeElement===e&&vt(t)&&t.focus()},Ze=function(t,e,n){W(e.allowEscapeKey)&&(t.preventDefault(),n(K.esc))},Qe=function(e,t,n){t.popup.onclick=function(){var t=Bt.innerParams.get(e);t.showConfirmButton||t.showCancelButton||t.showCloseButton||t.input||n(K.close)}},$e=!1,Je=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&($e=!0)}}},Xe=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||($e=!0)}}},Ge=function(n,o,i){o.container.onclick=function(t){var e=Bt.innerParams.get(n);$e?$e=!1:t.target===o.container&&W(e.allowOutsideClick)&&i(K.backdrop)}};var tn=function(t,e,n){var o=q();it(o),e.timer&&(t.timeout=new be(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(o),setTimeout(function(){t.timeout.running&&st(e.timer)})))},en=function(t,e){if(!e.toast)return W(e.allowEnterKey)?e.focusCancel&&vt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&vt(t.confirmButton)?t.confirmButton.focus():void Ee(0,-1,1):nn()},nn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var on,rn=function(t){for(var e in t)t[e]=new WeakMap},an=Object.freeze({hideLoading:ie,disableLoading:ie,getInput:function(t){var e=Bt.innerParams.get(t||this),n=Bt.domCache.get(t||this);return n?G(n.content,e.input):null},close:fe,closePopup:fe,closeModal:fe,closeToast:fe,enableButtons:function(){ge(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ge(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ve(this.getInput(),!1)},disableInput:function(){return ve(this.getInput(),!0)},showValidationMessage:function(t){var e=Bt.domCache.get(this);H(e.validationMessage,t);var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),ot(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",Y["validation-message"]),tt(o),mt(o,Y.inputerror))},resetValidationMessage:function(){var t=Bt.domCache.get(this);t.validationMessage&&it(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ht(e,Y.inputerror))},getProgressSteps:function(){return Bt.domCache.get(this).progressSteps},_main:function(t){Jt(t),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var e=function(t){var e=s({},Gt.showClass,t.showClass),n=s({},Gt.hideClass,t.hideClass),o=s({},Gt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"};o.hideClass={}}return o}(t);we(e),Object.freeze(e),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var n=function(t){var e={popup:$(),container:Q(),content:P(),actions:T(),confirmButton:E(),cancelButton:O(),closeButton:I(),validationMessage:S(),progressSteps:B()};return Bt.domCache.set(t,e),e}(this);return Rt(this,e),Bt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};de.swalPromiseResolve.set(n,t);o.confirmButton.onclick=function(){return Pe(n,i)};o.cancelButton.onclick=function(){return Ae(n,e)};o.closeButton.onclick=function(){return e(K.close)};Oe(n,o,e);Se(n,Xt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){mt(document.body,Y["toast-column"])}else{ht(document.body,Y["toast-column"])}xe(n,i);Ce(i);tn(Xt,i,e);en(o,i);setTimeout(function(){o.container.scrollTop=0})})}(this,n,e)},update:function(e){var t=$(),n=Bt.innerParams.get(this);if(!t||D(t,n.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){sn.isUpdatableParameter(t)?o[t]=e[t]:_('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=s({},n,o);Rt(this,i),Bt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:s({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Bt.domCache.get(this),e=Bt.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),"function"==typeof e.onDestroy&&e.onDestroy(),delete this.params,delete Xt.keydownHandler,delete Xt.keydownTarget,rn(Bt),rn(de))}}),cn=function(){function r(){if(a(this,r),"undefined"!=typeof window){"undefined"==typeof Promise&&F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),on=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Bt.promise.set(this,i)}}return c(r,[{key:"then",value:function(t){return Bt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Bt.promise.get(this).finally(t)}}]),r}();s(cn.prototype,an),s(cn,oe),Object.keys(an).forEach(function(t){cn[t]=function(){if(on)return on[t].apply(on,arguments)}}),cn.DismissReason=K,cn.version="9.17.2";var sn=cn;return sn.default=sn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9jYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9wcm9kdWN0LWF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvY29va2llLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvY3VycmVuY3ktc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9zb3J0LWJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbGliL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy90b29scy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzL2ltYWdlU3Jjc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvdG9vbHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjIvbGliL2V2ZW50ZW1pdHRlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RyaWN0LXVyaS1lbmNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiXSwibmFtZXMiOlsiYWxsdXJlRXhjZXB0aW9uIiwiY2FydEl0ZW1zIiwic2t1cyIsInRlYW1kZXNrSXRlbXMiLCJ0ZWFtZGVza1BPSXRlbXMiLCJwU2hpcHBpbmdHcm91cCIsImlzUG9wdXAiLCJjYXJ0R2V0RGVsaXZlcnkiLCJsaW5lSXRlbXMiLCJwaHlzaWNhbEl0ZW1zIiwibWFwIiwiaSIsInNrdSIsImluZGV4T2YiLCJsZW5ndGgiLCJzbGljZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGFibGUiLCJmaWx0ZXIiLCJqb2luIiwidGhlbiIsInIiLCJqc29uIiwiY2FydFNldERlbGl2ZXJ5IiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsInF0eUNoZWNrZWQiLCJpbmRleCIsIml0ZW0iLCJmaW5kIiwicyIsIlNLVSIsInRvVXBwZXJDYXNlIiwiJCIsImVxIiwicXR5IiwicXVhbnRpdHkiLCJidWZmIiwiY29udGVudCIsIk51bWJlciIsIk1hdGgiLCJtaW4iLCJhcHBlbmQiLCJjbWhSdXNoSXRlbXMiLCJoYWlyU2VydmljZSIsImluY2x1ZGVzIiwiZW50cmllcyIsImNoZWNrUHJvZHVjdHMiLCJ0b2tlbiIsInZhbCIsImlkcyIsInByb2R1Y3RJZCIsInF1ZXJ5IiwiZGF0YSIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwicHJvZHVjdCIsInNoaXBwaW5nR3JvdXAiLCJub2RlIiwibWV0YWZpZWxkcyIsImdyb3VwIiwia2V5IiwidmFsdWUiLCJlbnRpdHlJZCIsInRvdGFsaHAiLCJ0b0xvd2VyQ2FzZSIsInNldFNoaXBtZW50IiwiYmFzZUFtb3VudCIsImlzTGFyZ2VyIiwic3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNldEludGVydmFsIiwiY3NzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInV0aWxzIiwiYXBpIiwiY2FydCIsImdldENhcnQiLCJpbmNsdWRlT3B0aW9ucyIsImVyciIsIm15Q2FydCIsImlkIiwiY2hlY2tJbml0IiwiY2xlYXJJbnRlcnZhbCIsImJhY3Rpb24iLCJvbiIsInNldFRpbWVvdXQiLCJ3ZWFrTWFwIiwiV2Vha01hcCIsIlN3YWwiLCJzd2VldEFsZXJ0IiwibWl4aW4iLCJidXR0b25zU3R5bGluZyIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImludGVybmFscyIsImdldFBhZ2UiLCJ1cmwiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJjb3VudHJ5IiwiQ291bnRyeUFwaSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiUHJvZHVjdEF0dHJpYnV0ZXNBcGkiLCJQcm9kdWN0QXBpIiwic2VhcmNoIiwiU2VhcmNoQXBpIiwiQ2FydEFwaSIsInZlcnNpb24iLCJyZW1vdGVWZXJzaW9uIiwicmVtb3RlQmFzZUVuZHBvaW50IiwibWFrZVJlcXVlc3QiLCJyZW1vdGUiLCJyZW1vdGVSZXF1ZXN0IiwiZW5kcG9pbnQiLCJyZW1vdGVVcmwiLCJnZXRDYXJ0cyIsInJlc3BvbnNlIiwiY2FydElkIiwiZ2V0Q2FydFF1YW50aXR5IiwibGluZUl0ZW1RdWFudGl0aWVzIiwiZGlnaXRhbEl0ZW1zIiwiY3VzdG9tSXRlbXMiLCJyZWR1Y2UiLCJhIiwiYiIsImNvbmNhdCIsImxpbmVJdGVtIiwicGFyZW50SWQiLCJhY2N1bXVsYXRvciIsImxpbmVJdGVtUXVhbnRpdHkiLCJnaWZ0Q2VydGlmaWNhdGVRdWFudGl0eSIsImdpZnRDZXJ0aWZpY2F0ZXMiLCJpdGVtQWRkIiwiZm9ybURhdGEiLCJlbWl0RGF0YSIsIkhvb2tzIiwiZW1pdCIsIml0ZW1VcGRhdGUiLCJpdGVtSWQiLCJjYWxsYmFja0FyZyIsIml0ZW1zIiwiQXJyYXkiLCJpc0FycmF5IiwidXBkYXRlIiwiaXRlbVJlbW92ZSIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwib3B0cyIsInN1Ym1pdEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb24iLCJwYXJhbXMiLCJwYXlsb2FkIiwiZ2V0Q29udGVudCIsImdldFNoaXBwaW5nUXVvdGVzIiwicmVuZGVyV2l0aCIsInJlbmRlcldpdGhBcmciLCJ0ZW1wbGF0ZSIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJxdW90ZUlkIiwic2hpcHBpbmdfbWV0aG9kIiwiYXBwbHlDb2RlIiwiY29kZSIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwiQmFzZSIsImdldEJ5SWQiLCJnZXRCeU5hbWUiLCJuYW1lIiwiaW5DYXJ0RW5kcG9pbnQiLCJvcHRpb25DaGFuZ2UiLCJ0ZW1wbGF0ZUFyZyIsIm5vcm1hbGl6ZWRRcyIsIm5vcm1hbGl6ZVF1ZXJ5U3RyaW5nUGFyYW1zIiwiY29uZmlndXJlSW5DYXJ0IiwicGFyYW1zQXJnIiwiY2xhc3NlcyIsIkNhcnRIb29rcyIsImNvb2tpZSIsIkNvb2tpZUhvb2tzIiwiY3VycmVuY3lTZWxlY3RvciIsIkN1cnJlbmN5U2VsZWN0b3JIb29rcyIsIlByb2R1Y3RIb29rcyIsIlNlYXJjaEhvb2tzIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2hIb29rcyIsInNvcnRCeSIsIlNvcnRCeUhvb2tzIiwicGFyc2VIb29rcyIsImhvb2tOYW1lIiwiaG9va1R5cGUiLCJzcGxpdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiaG9vayIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiJGJvZHkiLCJFdmVudEVtaXR0ZXIiLCJldmVudCIsInRhcmdldCIsIkJhc2VIb29rcyIsInNlYXJjaEV2ZW50cyIsIm9wdGlvbnNDaGFuZ2UiLCJxdWlja1NlYXJjaCIsInNvcnRCeUV2ZW50cyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwidHJpZ2dlciIsImlzVmFsaWRIVFRQTWV0aG9kIiwiYWxsb3dlZE1ldGhvZHMiLCJyZWxhdGl2ZVVybCIsImRlZmF1bHRPcHRpb25zIiwiYmFzZVVybCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJyZXF1ZXN0ZWRUZW1wbGF0ZSIsInVzaW5nVGVtcGxhdGVzIiwidXNpbmdTZWN0aW9ucyIsInRlbXBsYXRlcyIsImhhc093blByb3BlcnR5IiwicHVzaCIsInJlbmRlcl93aXRoIiwiYWpheCIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmV0Iiwia2V5cyIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRlbXBsYXRlVmFyaWFibGVOYW1lcyIsInRlbXBsYXRlVmFyaWFibGUiLCJlcnJvciIsIlhIUiIsInRleHRTdGF0dXMiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJxc1BhcmFtcyIsInBhcnNlIiwiaXNWYWxpZFBhcmFtIiwib3B0aW9uc0NvbGxlY3Rpb24iLCJub3JtYWxpemVkIiwicGFyYW0iLCJmaWx0ZXJlZCIsInBhcmFtU3RyaW5nIiwiU3RlbmNpbFV0aWxzIiwiaG9va3MiLCJ0b29scyIsInJvb3QiLCJkZWZpbmUiLCJzdGVuY2lsVXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2UiLCJJbWFnZVRvb2wiLCJpbWFnZVNyY3NldCIsIkltYWdlU3Jjc2V0VG9vbCIsInN0b3JhZ2UiLCJTdG9yYWdlVG9vbHMiLCJnZXRTcmMiLCJwYXRoIiwiZGltZW5zaW9ucyIsInNpemVSZWdleCIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInRlc3QiLCJnZXRTcmNzZXQiLCJzaXplcyIsImRlc2NyaXB0b3JSZWdleCIsInNyY3NldHMiLCJzb21lIiwiZGVzY3JpcHRvciIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiRE9NRXhjZXB0aW9uIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzXCIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IF8sIHsgbWluIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnLi90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQnO1xyXG5cclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuXHJcbnZhciBhbGx1cmVFeGNlcHRpb24gPSBbXHJcbiAgICBcImNvY29cIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJhZGVsZVwiLFxyXG4gICAgXCJhbmdlbGluYVwiLFxyXG4gICAgXCJqZXNzaWNhXCIsXHJcbiAgICBcInNlbGVuYVwiLFxyXG4gICAgXCJ0YXlsb3JcIixcclxuICAgIFwianVsaWFcIixcclxuICAgIFwibmljb2xlXCIsXHJcbiAgICBcImd3eW5ldGhcIixcclxuICAgIFwiZXY3OTE0XCIsXHJcbiAgICBcInRsNjgxNFwiLFxyXG4gICAgXCJldjU3MTRcIixcclxuICAgIFwibW81NTE0XCIsXHJcbiAgICBcIm1vNzYwOFwiLFxyXG4gICAgXCJldjU1MTJcIixcclxuICAgIFwiZXY1NzA2XCIsXHJcbiAgICBcImV2NjgxMFwiLFxyXG4gICAgXCJlZzY2MTJcIixcclxuICAgIFwiZWgxNlwiLFxyXG4gICAgXCJtaDIyMDZcIixcclxuICAgIFwic2g1MjA2XCIsXHJcbiAgICBcImVwMzYwOFwiLFxyXG4gICAgXCJtaDIyMTZcIixcclxuICAgIFwibWF5YVwiLFxyXG4gICAgXCJub3lhXCIsXHJcbl07XHJcblxyXG52YXIgY2FydEl0ZW1zID0gbnVsbDtcclxudmFyIHNrdXM9W107XHJcbnZhciB0ZWFtZGVza0l0ZW1zID0gbnVsbDtcclxudmFyIHRlYW1kZXNrUE9JdGVtcyA9IG51bGw7XHJcbnZhciBwU2hpcHBpbmdHcm91cD17fTtcclxudmFyIGlzUG9wdXA9ZmFsc2U7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpbnZlbnRvcnkgYW5kIHBvIGZyb20gdGVhbWRlc2tcclxuICovXHJcbiBmdW5jdGlvbiBjYXJ0R2V0RGVsaXZlcnkoKSB7ICAgIFxyXG4gICAgaWYgKGNhcnRJdGVtcykgeyAgICAgICAgXHJcbiAgICAgICAgc2t1cyA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5tYXAoaT0+e1xyXG4gICAgICAgICAgICBsZXQgc2t1ID0gaS5za3U7XHJcbiAgICAgICAgICAgIGlmIChza3UuaW5kZXhPZihcIl9OXCIpPT1za3UubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIHNrdSA9IHNrdS5zbGljZSgwLHNrdS5sZW5ndGgtMik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc2t1KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTogJ0ludmVudG9yeScsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGBBbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHI9PnIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHI9PntcclxuICAgICAgICAgICAgdGVhbWRlc2tJdGVtcyA9IHI7ICBcclxuXHJcbiAgICAgICAgICAgIHRlYW1kZXNrUE9JdGVtcyA9IFtdOyAgICAgICBcclxuICAgICAgICAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0YWJsZTogJ3RfNzYzNDc5JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiBgP2ZpbHRlcj1BbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKSBhbmQgW0luY29taW5nIFF1YW50aXR5XT4wIGFuZCBbQXJyaXZhbCBEdWUgRGF0ZV0+VG9EYXRlKCcxLzEvMScpJnNvcnQ9QXJyaXZhbCBEdWUgRGF0ZS8vQVNDYCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLnRoZW4ocj0+ci5qc29uKCkpXHJcbiAgICAgICAgICAgIC8vIC50aGVuKHI9PntcclxuICAgICAgICAgICAgLy8gICAgIHRlYW1kZXNrUE9JdGVtcyA9IHI7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXJ0U2V0RGVsaXZlcnkoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLmNhdGNoKGU9PntcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZT0+Y29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmlsbCBpbiB0aGUgZGVsaXZlcnkgaW5mb3JtYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGNhcnRTZXREZWxpdmVyeSgpIHsgICAgICAgIFxyXG4gICAgaWYgKHRlYW1kZXNrSXRlbXMpIHtcclxuICAgICAgICBsZXQgcXR5Q2hlY2tlZD1bXTtcclxuICAgICAgICBmb3IgKGxldCBbaW5kZXgsIHNrdV0gb2Ygc2t1cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKHNrdS5pbmRleE9mKFwiX05cIik9PXNrdS5sZW5ndGgtMikge1xyXG4gICAgICAgICAgICAgICAgc2t1ID0gc2t1LnNsaWNlKDAsc2t1Lmxlbmd0aC0yKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0ZWFtZGVza0l0ZW1zLmZpbmQocz0+ZW5jb2RlVVJJQ29tcG9uZW50KHMuU0tVLnRvVXBwZXJDYXNlKCkpPT1za3UudG9VcHBlckNhc2UoKSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXR5ID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2luZGV4XS5xdWFudGl0eTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWZmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5Q2hlY2tlZFtpdGVtLlNLVV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiA9IHF0eUNoZWNrZWRbaXRlbS5TS1VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHlDaGVja2VkW2l0ZW0uU0tVXSs9cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ9YDxzdHJvbmc+VGllbXBvIGVzdGltYWRvIGRlIGVudsOtbzo8L3N0cm9uZz48YnIvPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW1wiVG90YWwgT24gSGFuZFwiXSA9PSBpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdKS1idWZmPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Kz1gRW4gMy00IGTDrWFzOiBjYW50aWRhZCA8c3Ryb25nPiR7TWF0aC5taW4oaXRlbVtcIlF1YW50aXR5IFVTQVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdLWJ1ZmYsIHF0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmLT1OdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdKT4wICYmIHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBFbiA1LTggZMOtYXM6IGNhbnRpZGFkIDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdLWJ1ZmYsIHF0eSl9PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSAtIE1hdGgubWluKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0tYnVmZiwgcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYgLT0gTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBEYW5zIDMtOCBqb3VyczogY2FudGlkYWQgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0tYnVmZiwgcXR5KX08L3N0cm9uZz48YnIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5ID0gcXR5IC0gTWF0aC5taW4oaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXS1idWZmLCBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmY9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiAtPSBOdW1iZXIoaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGl0ZW1bXCJWaXJ0dWFsIFF1YW50aXR5XCJdICYmIHF0eT4wKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbVtcIkxvY2sgU3RhdHVzXCJdIT1cIkxvY2tlZCBmb3IgcHJvY2Vzc2luZ1wiICYmIE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pID4gMCAmJiBxdHk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pLWJ1ZmYgPiAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudCs9YDEgd2VlayBsYXRlcjogcXVhbnRpdHkgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJVbmxvY2tlZCBmb3Igc2FsZSBxdWFudGl0eVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0tYnVmZiwgcXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJ1ZmYtPU51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB2aXJ0dWFsPXt9OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBJbmNvbWluZ1wiXSktMiA+IDAgJiYgcXR5PjApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKS0yIC1idWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbkl0ZW1zID0gdGVhbWRlc2tQT0l0ZW1zLmZpbHRlcihwPT5wLlNLVS50b1VwcGVyQ2FzZSgpID09IGl0ZW1bXCJTS1VcIl0udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGk9MCwgdG90YWxQPWJ1ZmYsIHRlbXBxdHkgPSBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2hpbGUgKGk8aW5JdGVtcy5sZW5ndGggJiYgdGVtcHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvdGFsUCs9TnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRlbXBxdHkgPSB0ZW1wcXR5IC0gTWF0aC5taW4oTnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSksIHRlbXBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpKys7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5JdGVtID0gaW5JdGVtc1tpLTFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbWRpZmYgPSBtb250aERpZmYobmV3IERhdGUoKSwgbmV3IERhdGUoaW5JdGVtW1wiQXJyaXZhbCBEdWUgRGF0ZVwiXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobWRpZmY9PTApIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChhbGx1cmVFeGNlcHRpb24uaW5jbHVkZXMoaW5JdGVtW1wiUGFydCBOdW1iZXJcIl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWRpZmYrPTM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsbHVyZUV4Y2VwdGlvbi5pbmNsdWRlcyhpbkl0ZW1bXCJQYXJ0IE51bWJlclwiXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0yO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZpcnR1YWxbbWRpZmZdID0gTWF0aC5taW4odG90YWxQLCBxdHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcXR5ID0gdGVtcHF0eTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnVmZiA9IGJ1ZmYgLSBOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbSA9IGl0ZW1bXCJWaXJ0dWFsIExvY2F0aW9uXCJdLnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHZpcnR1YWxbbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2aXJ0dWFsW21dKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZpcnR1YWxbbV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZpcnR1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXModmlydHVhbCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHZrZXlzID0gT2JqZWN0LmtleXModmlydHVhbCkuc29ydChmdW5jdGlvbihhLGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gYi1hO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBrZXkgb2YgdmtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoTnVtYmVyKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkrTnVtYmVyKGtleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50Kz1gJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKX06IHF1YW50aXR5IDxzdHJvbmc+JHt2aXJ0dWFsW2tleV19PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQrPWAke2tleS5yZXBsYWNlKFwiX1wiLFwiLVwiKX0gbW9udGhzIGxhdGVyOiBxdWFudGl0eSA8c3Ryb25nPiR7dmlydHVhbFtrZXldfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5hcHBlbmQoYDxsaSBjbGFzcz1cInByb2R1Y3Qtb3B0aW9uIGNhcnQtZGVsaXZlcnlcIj4ke2NvbnRlbnR9PC9saT5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwiLnByb2R1Y3QtYm9keVwiKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdC1vcHRpb25zXCI+PGxpIGNsYXNzPVwicHJvZHVjdC1vcHRpb24gY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2xpPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF0eSA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpbmRleF0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eUNoZWNrZWRbaXRlbS5TS1VdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Q2hlY2tlZFtpdGVtLlNLVV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbWhSdXNoSXRlbXMgPSBbJ0NNSCcsICdDTUxBQ0UnLCAnQ01NT05PJywgJ0NNTEFDRVBPTFknLCAnQ01TS0lOJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFpclNlcnZpY2UgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIyMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyNTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzMyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzMzRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzNDJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzM0M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjNTUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSM1NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN0eWxlICNZb3VyX093blwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFNlcnZpY2VzIFBhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtaFJ1c2hJdGVtcy5pbmNsdWRlcyhza3UudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PWA8c3Ryb25nPlRpZW1wbyBlc3RpbWFkbyBkZSBlbnbDrW86PC9zdHJvbmc+PGJyLz5FbnbDrW8gZ2FyYW50aXphZG8gZW4gMyBtZXNlczxici8+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFpclNlcnZpY2UuaW5jbHVkZXMoc2t1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9YDxzdHJvbmc+VGllbXBvIGVzdGltYWRvIGRlIGVudsOtbzo8L3N0cm9uZz48YnIvPkRhbnMgMi0zIHNlbWFpbmVzPGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2Rpdj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tQcm9kdWN0cygpIHtcclxuICAgIGxldCB0b2tlbiA9ICQoXCJbbmFtZT1zdG9yZS10b2tlbl1cIikudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0SXRlbXMpO1xyXG4gICAgaWYgKGNhcnRJdGVtcykge1xyXG4gICAgICAgIGxldCBpZHMgPSBjYXJ0SXRlbXMubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMubWFwKGk9PmkucHJvZHVjdElkKTsgICAgICAgIFxyXG4gICAgICAgIGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IGBcclxuICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XHJcbiAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFske2lkcy5qb2luKFwiLFwiKX1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFmaWVsZHMgKG5hbWVzcGFjZTogXCJzaGlwcGluZy5zaGlwcGVyaHFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+eyAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9kdWN0IG9mIGRhdGEuZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBwaW5nR3JvdXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0Lm5vZGUubWV0YWZpZWxkcy5lZGdlcy5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBncm91cCBvZiBwcm9kdWN0Lm5vZGUubWV0YWZpZWxkcy5lZGdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwLm5vZGUua2V5ID09IFwic2hpcHBpbmctZ3JvdXBzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0dyb3VwID0gZ3JvdXAubm9kZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBTaGlwcGluZ0dyb3VwW3Byb2R1Y3Qubm9kZS5lbnRpdHlJZF0gPSBzaGlwcGluZ0dyb3VwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsaHA9MDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwU2hpcHBpbmdHcm91cFtpdGVtLnByb2R1Y3RJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwU2hpcHBpbmdHcm91cFtpdGVtLnByb2R1Y3RJZF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImhhaXJwaWVjZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsaHAgKz0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvdGFsaHApXHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIHNldFNoaXBtZW50KChjYXJ0SXRlbXMuYmFzZUFtb3VudCkgPiA1MDAgfHwgdG90YWxocD4yKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hpcG1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHNldCBzaGlwbWVudFxyXG4gKiBcclxuICogQHBhcmFtIHtib29sZWFufSBpc0xhcmdlciBUcnVlIGlmIGhhdmluZyBtb3JlIHRoYW4gMiBwaWVjZXMgb2YgaGFpcnBpZWNlcyBvciBzdWJ0b3RhbCBsYXJnZXIgdGhhbiA1MDBcclxuICovXHJcbiBmdW5jdGlvbiBzZXRTaGlwbWVudChpc0xhcmdlcj1mYWxzZSkgeyAgXHJcbiAgXHJcbiAgICBsZXQgZ3JvdXAgPSAkKFwiW25hbWU9Y3VzdG9tZXItZ3JvdXBdXCIpLnZhbCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNMYXJnZXIpXHJcbiAgICBzd2l0Y2ggKGdyb3VwKSB7XHJcbiAgICAgICAgY2FzZSBcIk5ld2NvbWVyXCI6XHJcbiAgICAgICAgICAgIGlmIChpc0xhcmdlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUG9wdXA9PWZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcyBhIG5ldyBjbGllbnQsIHNvbWUgcmVzdHJpY3Rpb25zIGFyZSBwbGFjZWQgb24geW91ciBhY2NvdW50IGZvciB5b3VyIGZpcnN0IHRocmVlIG9yZGVycy4gQWZ0ZXIgeW91ciBmaXJzdCB0aHJlZSBvcmRlcnMsIHJlc3RyaWN0aW9ucyBvbiB5b3VyIGNhcnQgdG90YWwgd2lsbCBiZSByZW1vdmVkLiBJZiB5b3Ugd291bGQgbGlrZSB0byBwYXkgdXNpbmcgYSBjcmVkaXQgY2FyZCwgcGxlYXNlIHJlZHVjZSB5b3VyIGNhcnQgdG90YWwgdG8gdW5kZXIgJDUwMC4wMCwgb3IgcmVkdWNlIHRoZSBudW1iZXIgb2YgaGFpcnBpZWNlcyBpbiB5b3VyIGNhcnQgdG8gMiBvciBsZXNzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpc1BvcHVwPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jaGVja291dC1zdGVwLS1wYXltZW50XCIpLmZpbmQoXCIuY2hlY2tvdXQtdmlldy1jb250ZW50XCIpLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jaGVja291dC1zdGVwLS1wYXltZW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmNoZWNrb3V0LXZpZXctY29udGVudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcImxpLmZvcm0tY2hlY2tsaXN0LWl0ZW1cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5wYXltZW50UHJvdmlkZXJIZWFkZXItbmFtZVwiKS5lcSgwKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImNyZWRpdCBjYXJkXCIpIHx8ICQodGhpcykuZmluZChcIiNyYWRpby1hcHBsZXBheVwiKS5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQmxvY2tsaXN0JzpcclxuICAgICAgICAgICAgaWYgKGlzTGFyZ2VyKSB7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIuY2hlY2tvdXQtc3RlcC0tcGF5bWVudFwiKS5maW5kKFwiLmNoZWNrb3V0LXZpZXctY29udGVudFwiKS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jaGVja291dC1zdGVwLS1wYXltZW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmNoZWNrb3V0LXZpZXctY29udGVudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcImxpLmZvcm0tY2hlY2tsaXN0LWl0ZW1cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5wYXltZW50UHJvdmlkZXJIZWFkZXItbmFtZVwiKS5lcSgwKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImNyZWRpdCBjYXJkXCIpIHx8ICQodGhpcykuZmluZChcIiNyYWRpby1hcHBsZXBheVwiKS5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnQoe2luY2x1ZGVPcHRpb25zOiB0cnVlfSwgKGVyciwgbXlDYXJ0KSA9PiB7ICAgICAgICBcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpZiAobXlDYXJ0KSB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtcyA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBteUNhcnQuaWQsXHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50OiBteUNhcnQuYmFzZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIGxpbmVJdGVtczogbXlDYXJ0LmxpbmVJdGVtcyxcclxuICAgICAgICAgICAgfTsgICAgICBcclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gJChcIltuYW1lPWN1c3RvbWVyLWdyb3VwXVwiKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXAgPT0gXCJCbG9ja2xpc3RcIiB8fCBcIk5ld2NvbWVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Byb2R1Y3RzKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY2hlY2tJbml0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjY2FydC1lZGl0LWxpbmtcIikubGVuZ3RoPjAgJiYgKFwiLmNhcnQtc2VjdGlvblwiKS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbChjaGVja0luaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRHZXREZWxpdmVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYWN0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIi5jYXJ0LWFjdGlvbnMgYnV0dG9uXCIpLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJ0LWFjdGlvbnMgYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBXZWFrTWFwIHdpbGwgZGVmaW5lZCBpbiB0aGUgZ2xvYmFsIHNjb3BlIGlmIG5hdGl2ZSBXZWFrTWFwIGlzIG5vdCBzdXBwb3J0ZWQuXG5jb25zdCB3ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5jb25zdCBTd2FsID0gc3dlZXRBbGVydC5taXhpbih7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidXR0b24nLFxuICAgICAgICBjYW5jZWxCdXR0b246ICdidXR0b24nLFxuICAgIH0sXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBTd2FsO1xuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9saWIvcmVxdWVzdCc7XG5cbmltcG9ydCBDb3VudHJ5QXBpIGZyb20gJy4vYXBpL2NvdW50cmllcyc7XG5pbXBvcnQgUHJvZHVjdEFwaSBmcm9tICcuL2FwaS9wcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXR0cmlidXRlc0FwaSBmcm9tICcuL2FwaS9wcm9kdWN0LWF0dHJpYnV0ZXMnO1xuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL2FwaS9zZWFyY2gnO1xuaW1wb3J0IENhcnRBcGkgZnJvbSAnLi9hcGkvY2FydCc7XG5cbmNvbnN0IGludGVybmFscyA9IHt9O1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYSBwYWdlIHZpYSBhamF4XG4gKlxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5pbnRlcm5hbHMuZ2V0UGFnZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWVzdCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVxdWVzdE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfSwgY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvdW50cnk6IG5ldyBDb3VudHJ5QXBpKCksXG4gICAgcHJvZHVjdEF0dHJpYnV0ZXM6IG5ldyBQcm9kdWN0QXR0cmlidXRlc0FwaSgpLFxuICAgIHByb2R1Y3Q6IG5ldyBQcm9kdWN0QXBpKCksXG4gICAgc2VhcmNoOiBuZXcgU2VhcmNoQXBpKCksXG4gICAgY2FydDogbmV3IENhcnRBcGkoKSxcbiAgICBnZXRQYWdlOiBpbnRlcm5hbHMuZ2V0UGFnZSxcbn07XG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9saWIvcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICB0aGlzLnJlbW90ZVZlcnNpb24gPSB2ZXJzaW9uIHx8ICd2MSc7XG4gICAgICAgIHRoaXMucmVtb3RlQmFzZUVuZHBvaW50ID0gJy9yZW1vdGUvJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW90ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbWFrZVJlcXVlc3QodXJsLCBtZXRob2QsIG9wdGlvbnMsIHJlbW90ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHJlbW90ZVJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVtb3RlVXJsID0gdGhpcy5yZW1vdGVCYXNlRW5kcG9pbnQgKyB0aGlzLnJlbW90ZVZlcnNpb24gKyBlbmRwb2ludDtcblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHJlbW90ZVVybCwgbWV0aG9kLCBvcHRpb25zLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBIb29rcyBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogR2V0IGEgY29sbGVjdGlvbiBvZiBDYXJ0cy4gRm9yIG5vdywgdGhpcyB3aWxsIG9ubHkgcmV0dXJuIGFuIGFycmF5IG9mIGEgc2luZ2xlIGNhcnQgYXMgbXVsdGlwbGUgY2FydHMgcGVyIHNlc3Npb25cbiAgICAgKiBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0Q2FydHMob3B0aW9ucyA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgdXJsID0gJy9hcGkvc3RvcmVmcm9udC9jYXJ0cyc7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuaW5jbHVkZU9wdGlvbnModXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgb3B0aW9ucywgdHJ1ZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgQ2FydCdzIGRldGFpbHMsIGVpdGhlciB3aXRoIG9yIHdpdGhvdXQgUHJvZHVjdCBPcHRpb24gc2VsZWN0aW9ucy5cbiAgICAgKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGdldCBhIHBhcnRpY3VsYXIgY2FydCBwcm92aWRlZCBhIGNhcnRJZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDYXJ0KG9wdGlvbnMgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgLyogSWYgbm8gY2FydCBJRCBpcyBwcm92aWRlZCwgZ2V0IHRoZSBjb2xsZWN0aW9uIG9mIGNhcnRzIGFuZCByZXR1cm4gdGhlIGZpcnN0IG9uZSAqL1xuICAgICAgICBpZiAoIW9wdGlvbnMuY2FydElkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJ0cyhvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4gY2FsbGJhY2soZXJyLCByZXNwb25zZVswXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9IGAvYXBpL3N0b3JlZnJvbnQvY2FydHMvJHtvcHRpb25zLmNhcnRJZH1gO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVPcHRpb25zKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmluY2x1ZGVPcHRpb25zKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIG9wdGlvbnMsIHRydWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBwYXJhbWV0ZXJzIHRvIGEgVVJMIG5lZWRlZCB0byBnZXQgcHJvZHVjdCBvcHRpb24gZGV0YWlscyBvbiBjYXJ0IGxpbmUgaXRlbXNcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgaW5jbHVkZU9wdGlvbnModXJsKSB7XG4gICAgICAgIHJldHVybiBgJHt1cmx9P2luY2x1ZGU9bGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMub3B0aW9ucyxsaW5lSXRlbXMuZGlnaXRhbEl0ZW1zLm9wdGlvbnNgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHN1bSBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gcXVhbnRpdGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldENhcnRRdWFudGl0eShvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbVF1YW50aXRpZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGluZUl0ZW1zLmRpZ2l0YWxJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgY2FydC5saW5lSXRlbXMuY3VzdG9tSXRlbXMsXG4gICAgICAgICAgICAgICAgXS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGxpbmVJdGVtID0+ICFsaW5lSXRlbS5wYXJlbnRJZClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChsaW5lSXRlbSA9PiBsaW5lSXRlbS5xdWFudGl0eSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIGxpbmVJdGVtUXVhbnRpdHkpID0+IGFjY3VtdWxhdG9yICsgbGluZUl0ZW1RdWFudGl0eSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2lmdENlcnRpZmljYXRlUXVhbnRpdHkgPSBjYXJ0LmxpbmVJdGVtcy5naWZ0Q2VydGlmaWNhdGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBxdWFudGl0eSA9IGxpbmVJdGVtUXVhbnRpdGllcyArIGdpZnRDZXJ0aWZpY2F0ZVF1YW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgaXRlbSB0byBjYXJ0IHdpdGggb3B0aW9ucyAodmFyaWFudHMpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgaXRlbUFkZChmb3JtRGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvY2FydC9hZGQnLCAnUE9TVCcsIHsgZm9ybURhdGEgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ2NhcnQtaXRlbS1hZGQtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGl0ZW0gcXVhbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gaXRlbUlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8RnVuY3Rpb259IHF0eVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbH0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBpdGVtVXBkYXRlKGl0ZW1JZCwgcXR5LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcbiAgICAgICAgbGV0IGl0ZW1zO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1JZCkgJiYgdHlwZW9mIHF0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBxdHk7XG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1JZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHF0eSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgnY2FydC1pdGVtLXVwZGF0ZS1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNhcnQgaXRlbXNcbiAgICAgKlxuICAgICAqIENhbGxzIHRoZSBpbnRlcm5hbCB1cGRhdGUgZnVuY3Rpb24gd2l0aCBxdWFudGl0eTogMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgaXRlbVJlbW92ZShpdGVtSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtSWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgnY2FydC1pdGVtLXJlbW92ZS1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdpZnR3cmFwcGluZyBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxudWxsfSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gb3B0cztcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdChgL2dpZnQtd3JhcHBpbmcvJHtpdGVtSWR9YCwgJ0dFVCcsIG9wdHMsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZ2lmdHdyYXBwaW5nIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Ym1pdEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb24oaXRlbUlkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdChgL2dpZnQtd3JhcHBpbmcvJHtpdGVtSWR9YCwgJ1BPU1QnLCB7IHBhcmFtcyB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgaXRlbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICB1cGRhdGUoaXRlbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9jYXJ0L3VwZGF0ZScsICdQT1NUJywgeyBwYXJhbXM6IHBheWxvYWQgfSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDb250ZW50KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IG9wdHM7XG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KCcvY2FydC5waHAnLCAnR0VUJywgb3B0cywgZmFsc2UsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBzaGlwcGluZyBxdW90ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fE9iamVjdH0gcmVuZGVyV2l0aFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCByZW5kZXJXaXRoLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcbiAgICAgICAgbGV0IHJlbmRlcldpdGhBcmcgPSByZW5kZXJXaXRoO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tBcmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcmVuZGVyV2l0aEFyZztcbiAgICAgICAgICAgIHJlbmRlcldpdGhBcmcgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbmRlcldpdGhBcmcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGVtcGxhdGUgPSByZW5kZXJXaXRoQXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvc2hpcHBpbmctcXVvdGUnLCAnR0VUJywgb3B0aW9ucywgY2FsbGJhY2tBcmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBzaGlwcGluZyBxdW90ZSBiYXNlZCBvbiBxdW90ZUlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcXVvdGVJZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2hpcHBpbmdfbWV0aG9kOiBxdW90ZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9zaGlwcGluZy1xdW90ZScsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgY291cG9uIGNvZGUgb3IgZ2lmdCBjZXJ0aWZpY2F0ZSB0byB0aGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvZGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFwcGx5Q29kZShjb2RlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvYXBwbHktY29kZScsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgY291cG9uIGNvZGUgb3IgZ2lmdCBjZXJ0aWZpY2F0ZSB0byB0aGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9naWZ0LWNlcnRpZmljYXRlcycsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIodmVyc2lvbik7XG5cbiAgICAgICAgLy8gc2V0IHVwIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gJy9jb3VudHJ5LXN0YXRlcy8nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0IGNvdW50cnkgZGF0YSBieSBpZCB3cmFwcGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEJ5SWQoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBpZDtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodXJsLCAnR0VUJywge30sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY291bnRyeSBkYXRhIGJ5IGNvdW50cnkgbmFtZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBuYW1lO1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCh1cmwsICdHRVQnLCB7fSwgY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgSG9va3MgZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IHsgbm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvcHJvZHVjdC1hdHRyaWJ1dGVzLyc7XG4gICAgICAgIHRoaXMuaW5DYXJ0RW5kcG9pbnQgPSAnL2NvbmZpZ3VyZS1vcHRpb25zLyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2R1Y3RJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvcHRpb25DaGFuZ2UocHJvZHVjdElkLCBwYXJhbXMsIHRlbXBsYXRlID0gbnVsbCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlQXJnID0gdGVtcGxhdGU7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGVBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gdGVtcGxhdGVBcmc7XG4gICAgICAgICAgICB0ZW1wbGF0ZUFyZyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkUXMgPSBub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyhwYXJhbXMpO1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodGhpcy5lbmRwb2ludCArIHByb2R1Y3RJZCwgJ1BPU1QnLCB7IHBhcmFtczogbm9ybWFsaXplZFFzLCB0ZW1wbGF0ZTogdGVtcGxhdGVBcmcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ3Byb2R1Y3Qtb3B0aW9ucy1jaGFuZ2UtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcoZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodGhpcy5pbkNhcnRFbmRwb2ludCArIGl0ZW1JZCwgJ0dFVCcsIHBhcmFtcywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvcHJvZHVjdHMucGhwP3Byb2R1Y3RJZD0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2R1Y3RJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEJ5SWQocHJvZHVjdElkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBwcm9kdWN0SWQ7XG4gICAgICAgIGxldCBwYXJhbXNBcmcgPSBwYXJhbXM7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcGFyYW1zQXJnO1xuICAgICAgICAgICAgcGFyYW1zQXJnID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIHBhcmFtc0FyZywgZmFsc2UsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSG9va3MgZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcih2ZXJzaW9uKTtcblxuICAgICAgICAvLyBzZXQgdXAgY2xhc3MgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnL3NlYXJjaC5waHA/c2VhcmNoX3F1ZXJ5PSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCByZXN1bHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgc2VhcmNoKHF1ZXJ5LCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpO1xuICAgICAgICBsZXQgcGFyYW1zQXJnID0gcGFyYW1zO1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc0FyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBwYXJhbXNBcmc7XG4gICAgICAgICAgICBwYXJhbXNBcmcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhvb2tzLmVtaXQoJ3NlYXJjaC1xdWljay1yZW1vdGUnLCBxdWVyeSk7XG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgcGFyYW1zQXJnLCBmYWxzZSwgY2FsbGJhY2tBcmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYXJ0SG9va3MgZnJvbSAnLi9ob29rcy9jYXJ0JztcbmltcG9ydCBDb29raWVIb29rcyBmcm9tICcuL2hvb2tzL2Nvb2tpZSc7XG5pbXBvcnQgQ3VycmVuY3lTZWxlY3Rvckhvb2tzIGZyb20gJy4vaG9va3MvY3VycmVuY3ktc2VsZWN0b3InO1xuaW1wb3J0IFByb2R1Y3RIb29rcyBmcm9tICcuL2hvb2tzL3Byb2R1Y3QnO1xuaW1wb3J0IFNlYXJjaEhvb2tzIGZyb20gJy4vaG9va3Mvc2VhcmNoJztcbmltcG9ydCBGYWNldGVkU2VhcmNoSG9va3MgZnJvbSAnLi9ob29rcy9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgU29ydEJ5SG9va3MgZnJvbSAnLi9ob29rcy9zb3J0LWJ5JztcblxuY29uc3QgaW50ZXJuYWxzID0ge307XG5cbmludGVybmFscy5jbGFzc2VzID0ge1xuICAgIGNhcnQ6IG5ldyBDYXJ0SG9va3MoKSxcbiAgICBjb29raWU6IG5ldyBDb29raWVIb29rcygpLFxuICAgIGN1cnJlbmN5U2VsZWN0b3I6IG5ldyBDdXJyZW5jeVNlbGVjdG9ySG9va3MoKSxcbiAgICBwcm9kdWN0OiBuZXcgUHJvZHVjdEhvb2tzKCksXG4gICAgc2VhcmNoOiBuZXcgU2VhcmNoSG9va3MoKSxcbiAgICBmYWNldGVkU2VhcmNoOiBuZXcgRmFjZXRlZFNlYXJjaEhvb2tzKCksXG4gICAgc29ydEJ5OiBuZXcgU29ydEJ5SG9va3MoKSxcbn07XG5cbmludGVybmFscy5wYXJzZUhvb2tzID0gZnVuY3Rpb24gKGhvb2tOYW1lKSB7XG4gICAgY29uc3QgaG9va1R5cGUgPSBob29rTmFtZS5zcGxpdCgnLScpWzBdO1xuXG4gICAgaWYgKGludGVybmFscy5jbGFzc2VzW2hvb2tUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtob29rVHlwZX0gaXMgbm90IGEgdmFsaWQgaG9va1R5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLmNsYXNzZXNbaG9va1R5cGVdO1xufTtcblxuY2xhc3MgSG9va3Mge1xuICAgIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rID0gaW50ZXJuYWxzLnBhcnNlSG9va3MoaG9va05hbWUpO1xuXG4gICAgICAgIHJldHVybiBob29rLm9uKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rID0gaW50ZXJuYWxzLnBhcnNlSG9va3MoaG9va05hbWUpO1xuXG4gICAgICAgIHJldHVybiBob29rLm9mZihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGVtaXQoaG9va05hbWUpIHtcbiAgICAgICAgY29uc3QgaG9vayA9IGludGVybmFscy5wYXJzZUhvb2tzKGhvb2tOYW1lKTtcblxuICAgICAgICByZXR1cm4gaG9vay5lbWl0LmFwcGx5KGhvb2ssIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSG9va3MoKTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXRlbUFkZCgpO1xuICAgIH1cblxuICAgIGl0ZW1BZGQoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ3N1Ym1pdCcsICdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjYXJ0LWl0ZW0tYWRkJywgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge31cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW5jeVNlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3VycmVuY3lTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignaW5wdXQnLCAnW2RhdGEtY3VycmVuY3ktc2VsZWN0b3ItdG9nZ2xlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjdXJyZW5jeVNlbGVjdG9yLXRvZ2dsZScsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlYXJjaEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2xpY2snLCAnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXRdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYm9keS5vbignc3VibWl0JywgJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjaGFuZ2UnLCAnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCBldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnF1aWNrU2VhcmNoKCk7XG4gICAgfVxuXG4gICAgcXVpY2tTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2lucHV0JywgJ1tkYXRhLXNlYXJjaC1xdWlja10nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VhcmNoLXF1aWNrJywgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNvcnRCeUV2ZW50cygpO1xuICAgIH1cblxuICAgIHNvcnRCeUV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignc3VibWl0JywgJ1tkYXRhLXNvcnQtYnldJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NvcnRCeS1zdWJtaXR0ZWQnLCBldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NoYW5nZScsICdbZGF0YS1zb3J0LWJ5XSBzZWxlY3QnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc29ydEJ5LXNlbGVjdC1jaGFuZ2VkJywgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoISBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBtZXRob2QgcGFzc2VkIGluIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRIVFRQTWV0aG9kKG1ldGhvZCkge1xuICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ107XG5cbiAgICByZXR1cm4gYWxsb3dlZE1ldGhvZHMuaW5kZXhPZihtZXRob2QpICE9PSAtMTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVsYXRpdmVVcmwsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJlbW90ZTogZmFsc2UsXG4gICAgICAgIHJlcXVlc3RPcHRpb25zOiB7XG4gICAgICAgICAgICBiYXNlVXJsOiBudWxsLFxuICAgICAgICAgICAgZm9ybURhdGE6IG51bGwsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBbXSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhIDogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5wYXJhbXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5jb25maWcgPyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZykgOiAne30nLFxuICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgfTtcbiAgICBjb25zdCByZXF1ZXN0ZWRUZW1wbGF0ZSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMudGVtcGxhdGU7XG5cbiAgICBsZXQgdXNpbmdUZW1wbGF0ZXMgPSBmYWxzZTtcbiAgICBsZXQgdXNpbmdTZWN0aW9ucyA9IGZhbHNlO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXTtcblxuXG4gICAgLy8gTm90IGEgdmFsaWQgbWV0aG9kXG4gICAgaWYgKCFpc1ZhbGlkSFRUUE1ldGhvZChvcHRpb25zLm1ldGhvZCkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcignTm90IGEgdmFsaWQgSFRUUCBtZXRob2QnKSk7XG4gICAgfVxuXG5cbiAgICBpZiAodHlwZW9mKHJlcXVlc3RlZFRlbXBsYXRlKSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVxdWVzdGVkVGVtcGxhdGUpKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgICAgICB1c2luZ1NlY3Rpb25zID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGVzID0gW107XG5cbiAgICAgICAgZm9yICh0ZW1wbGF0ZSBpbiByZXF1ZXN0ZWRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RlZFRlbXBsYXRlLmhhc093blByb3BlcnR5KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKHJlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZihyZXF1ZXN0ZWRUZW1wbGF0ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IFtyZXF1ZXN0ZWRUZW1wbGF0ZV07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RlZFRlbXBsYXRlKSAmJiByZXF1ZXN0ZWRUZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IHJlcXVlc3RlZFRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB1c2luZ1RlbXBsYXRlcyA9IHRydWU7XG5cbiAgICAgICAgaGVhZGVyc1snc3RlbmNpbC1vcHRpb25zJ10gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICByZW5kZXJfd2l0aDogdGVtcGxhdGVzLmpvaW4oJywnKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHVybCA9IHJlbGF0aXZlVXJsO1xuICAgIGlmIChvcHRpb25zLnJlcXVlc3RPcHRpb25zLmJhc2VVcmwpIHtcbiAgICAgICAgdXJsID0gYCR7b3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5iYXNlVXJsfSR7dXJsfWA7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhamF4IHJlcXVlc3QgdXNpbmcganF1ZXJ5XG4gICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFR5cGU6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBmYWxzZSA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICBwcm9jZXNzRGF0YTogIW9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBvcHRpb25zLnJlbW90ZSA/IHJlc3BvbnNlLmNvbnRlbnQgOiByZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKHVzaW5nVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBgY29tcG9uZW50c2AgcHJlZml4IGZyb20gdGhlIHJlc3BvbnNlIGlmIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjb250ZW50KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuS2V5ID0ga2V5LnJlcGxhY2UoL15jb21wb25lbnRzXFwvLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2NsZWFuS2V5XSA9IGNvbnRlbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZShjb250ZW50W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgXCJzZWN0aW9uc1wiLCBtb3JwaCB0aGUgY29udGVudCBpbnRvIHRoZSBhcmJpdHJhcnkga2V5cyA9PiBjb250ZW50IG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAodXNpbmdTZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMgPSBPYmplY3Qua2V5cyhyZXF1ZXN0ZWRUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZVZhcmlhYmxlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHRlbXBsYXRlVmFyaWFibGUgb2YgdGVtcGxhdGVWYXJpYWJsZU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W3RlbXBsYXRlVmFyaWFibGVdID0gY29udGVudFtyZXF1ZXN0ZWRUZW1wbGF0ZVt0ZW1wbGF0ZVZhcmlhYmxlXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29udGVudFtyZXF1ZXN0ZWRUZW1wbGF0ZVt0ZW1wbGF0ZVZhcmlhYmxlXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldC5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoWEhSLCB0ZXh0U3RhdHVzLCBlcnIpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG59XG4iLCIvLyBVdGlsaXRpZXNcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbi8qKlxuICogTm9ybWFsaXplIHF1ZXJ5c3RyaW5nIHBhcmFtcy4gUmVtb3ZlIGVtcHR5IGFycmF5IHZhbHVlc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc1xuICogQHJldHVybnMge3N0cmluZ30gTm9ybWFsaXplZCBxdWVyeXN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMocGFyYW1zKSB7XG4gICAgY29uc3QgcXNQYXJhbXMgPSBxdWVyeVN0cmluZy5wYXJzZShwYXJhbXMpO1xuXG4gICAgY29uc3QgaXNWYWxpZFBhcmFtID0gKHZhbHVlKSA9PiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQpO1xuXG4gICAgY29uc3Qgb3B0aW9uc0NvbGxlY3Rpb24gPSBPYmplY3Qua2V5cyhxc1BhcmFtcykucmVkdWNlKChub3JtYWxpemVkLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIGlmIChxc1BhcmFtc1trZXldIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gcXNQYXJhbXNba2V5XS5maWx0ZXIoaXNWYWxpZFBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtID0geyBba2V5XTogZmlsdGVyZWQgfTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUGFyYW0ocXNQYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICAgIHBhcmFtID0geyBba2V5XTogcXNQYXJhbXNba2V5XSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZWQsIHBhcmFtKTtcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCBwYXJhbVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShvcHRpb25zQ29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHBhcmFtU3RyaW5nO1xufVxuIiwiaW1wb3J0IGhvb2tzIGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbmNvbnN0IFN0ZW5jaWxVdGlscyA9IHtcbiAgICBob29rcyxcbiAgICBhcGksXG4gICAgdG9vbHMsXG59O1xuXG5leHBvcnQgeyBob29rcywgYXBpLCB0b29scyB9O1xuZXhwb3J0IGRlZmF1bHQgU3RlbmNpbFV0aWxzO1xuXG4vKiBnbG9iYWwgZGVmaW5lICovXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICYmIHJvb3QpIHtcbiAgICAgICAgLy8gSWdub3JlcyBiZWxvdyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzUxNTBcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItYXJyb3ctY2FsbGJhY2tcbiAgICAgICAgICAgIHJvb3Quc3RlbmNpbFV0aWxzID0gU3RlbmNpbFV0aWxzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBTdGVuY2lsVXRpbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnN0ZW5jaWxVdGlscyA9IFN0ZW5jaWxVdGlscztcbiAgICB9XG59KHRoaXMpKTtcbiIsImltcG9ydCBJbWFnZVRvb2wgZnJvbSAnLi90b29scy9pbWFnZSc7XG5pbXBvcnQgSW1hZ2VTcmNzZXRUb29sIGZyb20gJy4vdG9vbHMvaW1hZ2VTcmNzZXQnO1xuaW1wb3J0IFN0b3JhZ2VUb29scyBmcm9tICcuL3Rvb2xzL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW1hZ2U6IG5ldyBJbWFnZVRvb2woKSxcbiAgICBpbWFnZVNyY3NldDogbmV3IEltYWdlU3Jjc2V0VG9vbCgpLFxuICAgIHN0b3JhZ2U6IG5ldyBTdG9yYWdlVG9vbHMoKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0U3JjKHBhdGgsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBzaXplIHN0cmluZyBpcyBvZiB0aGUgZm9ybSAxMjN4MTIzIG9yIDEwMHdcbiAgICAgICAgY29uc3Qgc2l6ZVJlZ2V4ID0gLyheXFxkK3ckKXwoXihcXGQrPyl4KFxcZCs/KSQpL2c7XG4gICAgICAgIGxldCBzaXplO1xuXG4gICAgICAgIGlmICh0eXBlb2YoZGltZW5zaW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGggfHwgMTAwO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgfHwgMTAwO1xuXG4gICAgICAgICAgICBzaXplID0gYCR7d2lkdGh9eCR7aGVpZ2h0fWA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGRpbWVuc2lvbnMpID09PSAnc3RyaW5nJyAmJiBzaXplUmVnZXgudGVzdChkaW1lbnNpb25zKSkge1xuICAgICAgICAgICAgLy8gSWYgZGltZW5zaW9ucyBpcyBhIHN0cmluZyBhbmQgbWF0Y2ggdGhlIE5OTnhOTk4gb3IgTk5OdyBmb3JtYXRcbiAgICAgICAgICAgIHNpemUgPSBkaW1lbnNpb25zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBpbWFnZSBzaXplXG4gICAgICAgICAgICBzaXplID0gJ29yaWdpbmFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoJ3s6c2l6ZX0nLCBzaXplKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0U3Jjc2V0KHVybCwgc2l6ZXMpIHtcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBzaXplIHN0cmluZyBpcyBvZiB0aGUgZm9ybSAxMjN4MTIzIG9yIDEwMHdcbiAgICAgICAgY29uc3Qgc2l6ZVJlZ2V4ID0gLyheXFxkK3ckKXwoXihcXGQrPyl4KFxcZCs/KSQpLztcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCB0byB0aGF0IHNyY3NldCBkZXNjcmlwdG9yIGlzIG9mIHRoZSBmb3JtIDF4IDEuNXggMnggT1IgMTIzd1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yUmVnZXggPSAvKF5cXGQrdyQpfCheKFswLTldKFxcLlswLTldKyk/KXgpJC87XG5cbiAgICAgICAgbGV0IHNyY3NldHMgPSB7fTtcblxuICAgICAgICBpZiAoIXNpemVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZGVmYXVsdCBzcmNzZXRzIGlmIG5vbmUgYXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBzcmNzZXRzID0ge1xuICAgICAgICAgICAgICAgICc4MHcnOiAnODB3JyxcbiAgICAgICAgICAgICAgICAnMTYwdyc6ICcxNjB3JyxcbiAgICAgICAgICAgICAgICAnMzIwdyc6ICczMjB3JyxcbiAgICAgICAgICAgICAgICAnNjQwdyc6ICc2NDB3JyxcbiAgICAgICAgICAgICAgICAnOTYwdyc6ICc5NjB3JyxcbiAgICAgICAgICAgICAgICAnMTI4MHcnOiAnMTI4MHcnLFxuICAgICAgICAgICAgICAgICcxOTIwdyc6ICcxOTIwdycsXG4gICAgICAgICAgICAgICAgJzI1NjB3JzogJzI1NjB3JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoKHNpemVzID09PSBPYmplY3Qoc2l6ZXMpKSAmJiAhT2JqZWN0LmtleXMoc2l6ZXMpLnNvbWUoZGVzY3JpcHRvciA9PlxuICAgICAgICAgICAgIShkZXNjcmlwdG9yUmVnZXgudGVzdChkZXNjcmlwdG9yKSAmJiBzaXplUmVnZXgudGVzdChzaXplc1tkZXNjcmlwdG9yXSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBjb25zaXN0cyBvZiB2YWxpZCBzcmNzZXRzLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgICAgICAgc3Jjc2V0cyA9IHNpemVzO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBhcmd1bWVudCwgcmV0dXJuIGEgYHNyY2Agb25seSAoYWxzbyB3b3JrcyBmb3IgYHNyY3NldGApXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3Jjc2V0cykubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh1cmwucmVwbGFjZSgnezpzaXplfScsIHNyY3NldHNbT2JqZWN0LmtleXMoc3Jjc2V0cylbMF1dKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3Jjc2V0IGRlc2NyaXB0b3Igb3Igc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNyY3NldHMpLm1hcChkZXNjcmlwdG9yID0+XG4gICAgICAgICAgICBbdXJsLnJlcGxhY2UoJ3s6c2l6ZX0nLCBzcmNzZXRzW2Rlc2NyaXB0b3JdKSwgZGVzY3JpcHRvcl0uam9pbignICcpXG4gICAgICAgICkuam9pbignLCAnKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzdG9yYWdlIHR5cGUgKGxpa2UgbG9jYWxTdG9yYWdlIG9yIHNlc3Npb25TdG9yYWdlKSBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSSNUZXN0aW5nX2Zvcl9hdmFpbGFiaWxpdHlcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJyk7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCIvKiFcbiAqIEV2ZW50RW1pdHRlcjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWoxbngvRXZlbnRFbWl0dGVyMlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMyBoaWoxbnhcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuOyFmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgPyBBcnJheS5pc0FycmF5IDogZnVuY3Rpb24gX2lzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG4gIHZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uZikge1xuICAgICAgY29uZmlndXJlLmNhbGwodGhpcywgdGhpcy5fY29uZik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlKGNvbmYpIHtcbiAgICBpZiAoY29uZikge1xuXG4gICAgICB0aGlzLl9jb25mID0gY29uZjtcblxuICAgICAgY29uZi5kZWxpbWl0ZXIgJiYgKHRoaXMuZGVsaW1pdGVyID0gY29uZi5kZWxpbWl0ZXIpO1xuICAgICAgY29uZi5tYXhMaXN0ZW5lcnMgJiYgKHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnMgPSBjb25mLm1heExpc3RlbmVycyk7XG4gICAgICBjb25mLndpbGRjYXJkICYmICh0aGlzLndpbGRjYXJkID0gY29uZi53aWxkY2FyZCk7XG4gICAgICBjb25mLm5ld0xpc3RlbmVyICYmICh0aGlzLm5ld0xpc3RlbmVyID0gY29uZi5uZXdMaXN0ZW5lcik7XG5cbiAgICAgIGlmICh0aGlzLndpbGRjYXJkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJUcmVlID0ge307XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKGNvbmYpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICB0aGlzLm5ld0xpc3RlbmVyID0gZmFsc2U7XG4gICAgY29uZmlndXJlLmNhbGwodGhpcywgY29uZik7XG4gIH1cblxuICAvL1xuICAvLyBBdHRlbnRpb24sIGZ1bmN0aW9uIHJldHVybiB0eXBlIG5vdyBpcyBhcnJheSwgYWx3YXlzICFcbiAgLy8gSXQgaGFzIHplcm8gZWxlbWVudHMgaWYgbm8gYW55IG1hdGNoZXMgZm91bmQgYW5kIG9uZSBvciBtb3JlXG4gIC8vIGVsZW1lbnRzIChsZWFmcykgaWYgdGhlcmUgYXJlIG1hdGNoZXNcbiAgLy9cbiAgZnVuY3Rpb24gc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlLCBpKSB7XG4gICAgaWYgKCF0cmVlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lcnM9W10sIGxlYWYsIGxlbiwgYnJhbmNoLCB4VHJlZSwgeHhUcmVlLCBpc29sYXRlZEJyYW5jaCwgZW5kUmVhY2hlZCxcbiAgICAgICAgdHlwZUxlbmd0aCA9IHR5cGUubGVuZ3RoLCBjdXJyZW50VHlwZSA9IHR5cGVbaV0sIG5leHRUeXBlID0gdHlwZVtpKzFdO1xuICAgIGlmIChpID09PSB0eXBlTGVuZ3RoICYmIHRyZWUuX2xpc3RlbmVycykge1xuICAgICAgLy9cbiAgICAgIC8vIElmIGF0IHRoZSBlbmQgb2YgdGhlIGV2ZW50KHMpIGxpc3QgYW5kIHRoZSB0cmVlIGhhcyBsaXN0ZW5lcnNcbiAgICAgIC8vIGludm9rZSB0aG9zZSBsaXN0ZW5lcnMuXG4gICAgICAvL1xuICAgICAgaWYgKHR5cGVvZiB0cmVlLl9saXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaGFuZGxlcnMgJiYgaGFuZGxlcnMucHVzaCh0cmVlLl9saXN0ZW5lcnMpO1xuICAgICAgICByZXR1cm4gW3RyZWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZWFmID0gMCwgbGVuID0gdHJlZS5fbGlzdGVuZXJzLmxlbmd0aDsgbGVhZiA8IGxlbjsgbGVhZisrKSB7XG4gICAgICAgICAgaGFuZGxlcnMgJiYgaGFuZGxlcnMucHVzaCh0cmVlLl9saXN0ZW5lcnNbbGVhZl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdHJlZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChjdXJyZW50VHlwZSA9PT0gJyonIHx8IGN1cnJlbnRUeXBlID09PSAnKionKSB8fCB0cmVlW2N1cnJlbnRUeXBlXSkge1xuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZSBldmVudCBlbWl0dGVkIGlzICcqJyBhdCB0aGlzIHBhcnRcbiAgICAgIC8vIG9yIHRoZXJlIGlzIGEgY29uY3JldGUgbWF0Y2ggYXQgdGhpcyBwYXRjaFxuICAgICAgLy9cbiAgICAgIGlmIChjdXJyZW50VHlwZSA9PT0gJyonKSB7XG4gICAgICAgIGZvciAoYnJhbmNoIGluIHRyZWUpIHtcbiAgICAgICAgICBpZiAoYnJhbmNoICE9PSAnX2xpc3RlbmVycycgJiYgdHJlZS5oYXNPd25Qcm9wZXJ0eShicmFuY2gpKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKzEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgIH0gZWxzZSBpZihjdXJyZW50VHlwZSA9PT0gJyoqJykge1xuICAgICAgICBlbmRSZWFjaGVkID0gKGkrMSA9PT0gdHlwZUxlbmd0aCB8fCAoaSsyID09PSB0eXBlTGVuZ3RoICYmIG5leHRUeXBlID09PSAnKicpKTtcbiAgICAgICAgaWYoZW5kUmVhY2hlZCAmJiB0cmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAvLyBUaGUgbmV4dCBlbGVtZW50IGhhcyBhIF9saXN0ZW5lcnMsIGFkZCBpdCB0byB0aGUgaGFuZGxlcnMuXG4gICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWUsIHR5cGVMZW5ndGgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoYnJhbmNoIGluIHRyZWUpIHtcbiAgICAgICAgICBpZiAoYnJhbmNoICE9PSAnX2xpc3RlbmVycycgJiYgdHJlZS5oYXNPd25Qcm9wZXJ0eShicmFuY2gpKSB7XG4gICAgICAgICAgICBpZihicmFuY2ggPT09ICcqJyB8fCBicmFuY2ggPT09ICcqKicpIHtcbiAgICAgICAgICAgICAgaWYodHJlZVticmFuY2hdLl9saXN0ZW5lcnMgJiYgIWVuZFJlYWNoZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCB0eXBlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbYnJhbmNoXSwgaSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGJyYW5jaCA9PT0gbmV4dFR5cGUpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbYnJhbmNoXSwgaSsyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBObyBtYXRjaCBvbiB0aGlzIG9uZSwgc2hpZnQgaW50byB0aGUgdHJlZSBidXQgbm90IGluIHRoZSB0eXBlIGFycmF5LlxuICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2N1cnJlbnRUeXBlXSwgaSsxKSk7XG4gICAgfVxuXG4gICAgeFRyZWUgPSB0cmVlWycqJ107XG4gICAgaWYgKHhUcmVlKSB7XG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHRyZWUgd2lsbCBhbGxvdyBhbnkgbWF0Y2ggZm9yIHRoaXMgcGFydCxcbiAgICAgIC8vIHRoZW4gcmVjdXJzaXZlbHkgZXhwbG9yZSBhbGwgYnJhbmNoZXMgb2YgdGhlIHRyZWVcbiAgICAgIC8vXG4gICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHhUcmVlLCBpKzEpO1xuICAgIH1cblxuICAgIHh4VHJlZSA9IHRyZWVbJyoqJ107XG4gICAgaWYoeHhUcmVlKSB7XG4gICAgICBpZihpIDwgdHlwZUxlbmd0aCkge1xuICAgICAgICBpZih4eFRyZWUuX2xpc3RlbmVycykge1xuICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBsaXN0ZW5lciBvbiBhICcqKicsIGl0IHdpbGwgY2F0Y2ggYWxsLCBzbyBhZGQgaXRzIGhhbmRsZXIuXG4gICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWUsIHR5cGVMZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnVpbGQgYXJyYXlzIG9mIG1hdGNoaW5nIG5leHQgYnJhbmNoZXMgYW5kIG90aGVycy5cbiAgICAgICAgZm9yKGJyYW5jaCBpbiB4eFRyZWUpIHtcbiAgICAgICAgICBpZihicmFuY2ggIT09ICdfbGlzdGVuZXJzJyAmJiB4eFRyZWUuaGFzT3duUHJvcGVydHkoYnJhbmNoKSkge1xuICAgICAgICAgICAgaWYoYnJhbmNoID09PSBuZXh0VHlwZSkge1xuICAgICAgICAgICAgICAvLyBXZSBrbm93IHRoZSBuZXh0IGVsZW1lbnQgd2lsbCBtYXRjaCwgc28ganVtcCB0d2ljZS5cbiAgICAgICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWVbYnJhbmNoXSwgaSsyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihicmFuY2ggPT09IGN1cnJlbnRUeXBlKSB7XG4gICAgICAgICAgICAgIC8vIEN1cnJlbnQgbm9kZSBtYXRjaGVzLCBtb3ZlIGludG8gdGhlIHRyZWUuXG4gICAgICAgICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeHhUcmVlW2JyYW5jaF0sIGkrMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpc29sYXRlZEJyYW5jaCA9IHt9O1xuICAgICAgICAgICAgICBpc29sYXRlZEJyYW5jaFticmFuY2hdID0geHhUcmVlW2JyYW5jaF07XG4gICAgICAgICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeyAnKionOiBpc29sYXRlZEJyYW5jaCB9LCBpKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKHh4VHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIGFuZCBzdGlsbCBvbiBhICcqKidcbiAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWUsIHR5cGVMZW5ndGgpO1xuICAgICAgfSBlbHNlIGlmKHh4VHJlZVsnKiddICYmIHh4VHJlZVsnKiddLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWVbJyonXSwgdHlwZUxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RlbmVycztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdyb3dMaXN0ZW5lclRyZWUodHlwZSwgbGlzdGVuZXIpIHtcblxuICAgIHR5cGUgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcblxuICAgIC8vXG4gICAgLy8gTG9va3MgZm9yIHR3byBjb25zZWN1dGl2ZSAnKionLCBpZiBzbywgZG9uJ3QgYWRkIHRoZSBldmVudCBhdCBhbGwuXG4gICAgLy9cbiAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0eXBlLmxlbmd0aDsgaSsxIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmKHR5cGVbaV0gPT09ICcqKicgJiYgdHlwZVtpKzFdID09PSAnKionKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJlZSA9IHRoaXMubGlzdGVuZXJUcmVlO1xuICAgIHZhciBuYW1lID0gdHlwZS5zaGlmdCgpO1xuXG4gICAgd2hpbGUgKG5hbWUpIHtcblxuICAgICAgaWYgKCF0cmVlW25hbWVdKSB7XG4gICAgICAgIHRyZWVbbmFtZV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgdHJlZSA9IHRyZWVbbmFtZV07XG5cbiAgICAgIGlmICh0eXBlLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGlmICghdHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgdHJlZS5fbGlzdGVuZXJzID0gbGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0eXBlb2YgdHJlZS5fbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdHJlZS5fbGlzdGVuZXJzID0gW3RyZWUuX2xpc3RlbmVycywgbGlzdGVuZXJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkodHJlZS5fbGlzdGVuZXJzKSkge1xuXG4gICAgICAgICAgdHJlZS5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICAgICAgaWYgKCF0cmVlLl9saXN0ZW5lcnMud2FybmVkKSB7XG5cbiAgICAgICAgICAgIHZhciBtID0gZGVmYXVsdE1heExpc3RlbmVycztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBtID0gdGhpcy5fZXZlbnRzLm1heExpc3RlbmVycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG0gPiAwICYmIHRyZWUuX2xpc3RlbmVycy5sZW5ndGggPiBtKSB7XG5cbiAgICAgICAgICAgICAgdHJlZS5fbGlzdGVuZXJzLndhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWUuX2xpc3RlbmVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbmFtZSA9IHR5cGUuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuXG4gIC8vIDEwIGxpc3RlbmVycyBhcmUgYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaFxuICAvLyBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbiAgLy9cbiAgLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4gIC8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZGVsaW1pdGVyID0gJy4nO1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZXZlbnRzLm1heExpc3RlbmVycyA9IG47XG4gICAgaWYgKCF0aGlzLl9jb25mKSB0aGlzLl9jb25mID0ge307XG4gICAgdGhpcy5fY29uZi5tYXhMaXN0ZW5lcnMgPSBuO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnQgPSAnJztcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pIHtcbiAgICB0aGlzLm1hbnkoZXZlbnQsIDEsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm1hbnkgPSBmdW5jdGlvbihldmVudCwgdHRsLCBmbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFueSBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoLS10dGwgPT09IDApIHtcbiAgICAgICAgc2VsZi5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuX29yaWdpbiA9IGZuO1xuXG4gICAgdGhpcy5vbihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLl9ldmVudHMgfHwgaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAodHlwZSA9PT0gJ25ld0xpc3RlbmVyJyAmJiAhdGhpcy5uZXdMaXN0ZW5lcikge1xuICAgICAgaWYgKCF0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSAqX2FsbCogZnVuY3Rpb25zIGFuZCBpbnZva2UgdGhlbS5cbiAgICBpZiAodGhpcy5fYWxsKSB7XG4gICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGw7IGkrKykgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5fYWxsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmV2ZW50ID0gdHlwZTtcbiAgICAgICAgdGhpcy5fYWxsW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXG4gICAgICBpZiAoIXRoaXMuX2FsbCAmJlxuICAgICAgICAhdGhpcy5fZXZlbnRzLmVycm9yICYmXG4gICAgICAgICEodGhpcy53aWxkY2FyZCAmJiB0aGlzLmxpc3RlbmVyVHJlZS5lcnJvcikpIHtcblxuICAgICAgICBpZiAoYXJndW1lbnRzWzFdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBhcmd1bWVudHNbMV07IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5jYXVnaHQsIHVuc3BlY2lmaWVkICdlcnJvcicgZXZlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcjtcblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIGhhbmRsZXIgPSBbXTtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlLmNhbGwodGhpcywgaGFuZGxlciwgbnMsIHRoaXMubGlzdGVuZXJUcmVlLCAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5ldmVudCA9IHR5cGU7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSlcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gc2xvd2VyXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChoYW5kbGVyKSB7XG4gICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGw7IGkrKykgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IHR5cGU7XG4gICAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobGlzdGVuZXJzLmxlbmd0aCA+IDApIHx8ICEhdGhpcy5fYWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAhIXRoaXMuX2FsbDtcbiAgICB9XG5cbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vbkFueSh0eXBlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb24gb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHMgfHwgaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PSBcIm5ld0xpc3RlbmVyc1wiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyc1wiLlxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICBncm93TGlzdGVuZXJUcmVlLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHtcbiAgICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZW9mIHRoaXMuX2V2ZW50c1t0eXBlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkodGhpcy5fZXZlbnRzW3R5cGVdKSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG5cbiAgICAgICAgdmFyIG0gPSBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZXZlbnRzLm1heExpc3RlbmVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBtID0gdGhpcy5fZXZlbnRzLm1heExpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuXG4gICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25BbnkgPSBmdW5jdGlvbihmbikge1xuXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbkFueSBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX2FsbCkge1xuICAgICAgdGhpcy5fYWxsID0gW107XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBmdW5jdGlvbiB0byB0aGUgZXZlbnQgbGlzdGVuZXIgY29sbGVjdGlvbi5cbiAgICB0aGlzLl9hbGwucHVzaChmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncmVtb3ZlTGlzdGVuZXIgb25seSB0YWtlcyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnMsbGVhZnM9W107XG5cbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICB2YXIgbnMgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcbiAgICAgIGxlYWZzID0gc2VhcmNoTGlzdGVuZXJUcmVlLmNhbGwodGhpcywgbnVsbCwgbnMsIHRoaXMubGlzdGVuZXJUcmVlLCAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBkb2VzIG5vdCB1c2UgbGlzdGVuZXJzKCksIHNvIG5vIHNpZGUgZWZmZWN0IG9mIGNyZWF0aW5nIF9ldmVudHNbdHlwZV1cbiAgICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSByZXR1cm4gdGhpcztcbiAgICAgIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgICAgbGVhZnMucHVzaCh7X2xpc3RlbmVyczpoYW5kbGVyc30pO1xuICAgIH1cblxuICAgIGZvciAodmFyIGlMZWFmPTA7IGlMZWFmPGxlYWZzLmxlbmd0aDsgaUxlYWYrKykge1xuICAgICAgdmFyIGxlYWYgPSBsZWFmc1tpTGVhZl07XG4gICAgICBoYW5kbGVycyA9IGxlYWYuX2xpc3RlbmVycztcbiAgICAgIGlmIChpc0FycmF5KGhhbmRsZXJzKSkge1xuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAgIChoYW5kbGVyc1tpXS5saXN0ZW5lciAmJiBoYW5kbGVyc1tpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHx8XG4gICAgICAgICAgICAoaGFuZGxlcnNbaV0uX29yaWdpbiAmJiBoYW5kbGVyc1tpXS5fb3JpZ2luID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgICBsZWFmLl9saXN0ZW5lcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICAgICAgICBkZWxldGUgbGVhZi5fbGlzdGVuZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaGFuZGxlcnMgPT09IGxpc3RlbmVyIHx8XG4gICAgICAgIChoYW5kbGVycy5saXN0ZW5lciAmJiBoYW5kbGVycy5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHx8XG4gICAgICAgIChoYW5kbGVycy5fb3JpZ2luICYmIGhhbmRsZXJzLl9vcmlnaW4gPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICAgICAgZGVsZXRlIGxlYWYuX2xpc3RlbmVycztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmZBbnkgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBpID0gMCwgbCA9IDAsIGZucztcbiAgICBpZiAoZm4gJiYgdGhpcy5fYWxsICYmIHRoaXMuX2FsbC5sZW5ndGggPiAwKSB7XG4gICAgICBmbnMgPSB0aGlzLl9hbGw7XG4gICAgICBmb3IoaSA9IDAsIGwgPSBmbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZuID09PSBmbnNbaV0pIHtcbiAgICAgICAgICBmbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FsbCA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmY7XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICF0aGlzLl9ldmVudHMgfHwgaW5pdC5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgdmFyIG5zID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG4gICAgICB2YXIgbGVhZnMgPSBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBudWxsLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuXG4gICAgICBmb3IgKHZhciBpTGVhZj0wOyBpTGVhZjxsZWFmcy5sZW5ndGg7IGlMZWFmKyspIHtcbiAgICAgICAgdmFyIGxlYWYgPSBsZWFmc1tpTGVhZl07XG4gICAgICAgIGxlYWYuX2xpc3RlbmVycyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHJldHVybiB0aGlzO1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgdmFyIGhhbmRsZXJzID0gW107XG4gICAgICB2YXIgbnMgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcbiAgICAgIHNlYXJjaExpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIGhhbmRsZXJzLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuICAgICAgcmV0dXJuIGhhbmRsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG5cbiAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkgdGhpcy5fZXZlbnRzW3R5cGVdID0gW107XG4gICAgaWYgKCFpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzQW55ID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZih0aGlzLl9hbGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hbGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICB9O1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBleHBvcnRzLkV2ZW50RW1pdHRlcjIgPSBFdmVudEVtaXR0ZXI7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWwuXG4gICAgd2luZG93LkV2ZW50RW1pdHRlcjIgPSBFdmVudEVtaXR0ZXI7XG4gIH1cbn0oKTtcbiIsIi8qISBqUXVlcnkgdjMuNi4xIHwgKGMpIE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcseT1uLmhhc093blByb3BlcnR5LGE9eS50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHY9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZS5pdGVtfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT09ZS53aW5kb3d9LEU9Qy5kb2N1bWVudCxjPXt0eXBlOiEwLHNyYzohMCxub25jZTohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gYihlLHQsbil7dmFyIHIsaSxvPShuPW58fEUpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsdClmb3IociBpbiBjKShpPXRbcl18fHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShyKSkmJm8uc2V0QXR0cmlidXRlKHIsaSk7bi5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltvLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBmPVwiMy42LjFcIixTPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBTLmZuLmluaXQoZSx0KX07ZnVuY3Rpb24gcChlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXcoZSk7cmV0dXJuIW0oZSkmJiF4KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPHQmJnQtMSBpbiBlKX1TLmZuPVMucHJvdG90eXBlPXtqcXVlcnk6Zixjb25zdHJ1Y3RvcjpTLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cy5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1TLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUy5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5tYXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiBuLmNhbGwoZSx0LGUpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGV2ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4odCsxKSUyfSkpfSxvZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCUyfSkpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soMDw9biYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDp1LHNvcnQ6dC5zb3J0LHNwbGljZTp0LnNwbGljZX0sUy5leHRlbmQ9Uy5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sXCJfX3Byb3RvX19cIiE9PXQmJmEhPT1yJiYobCYmciYmKFMuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhuPWFbdF0sbz1pJiYhQXJyYXkuaXNBcnJheShuKT9bXTppfHxTLmlzUGxhaW5PYmplY3Qobik/bjp7fSxpPSExLGFbdF09Uy5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LFMuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGYrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj15LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmYS5jYWxsKG4pPT09bCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQsbil7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSxuKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihwKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHAoT2JqZWN0KGUpKT9TLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihwKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnKGEpfSxndWlkOjEsc3VwcG9ydDp2fSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoUy5mbltTeW1ib2wuaXRlcmF0b3JdPXRbU3ltYm9sLml0ZXJhdG9yXSksUy5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtuW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgZD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLEUseSxzLGMsdixTPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksaj1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LEQ9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXFteXFxcXHJcXFxcblxcXFxmXXxbXFxcXHctXXxbXlxcMC1cXFxceDdmXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIixGPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIiwkPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksQj1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoRiksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK0YpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIixcImdcIiksbmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrZS5zbGljZSgxKS02NTUzNjtyZXR1cm4gdHx8KG48MD9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUobj4+MTB8NTUyOTYsMTAyMyZufDU2MzIwKSl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LG9lPWZ1bmN0aW9uKCl7VCgpfSxhZT1iZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7SC5hcHBseSh0PU8uY2FsbChwLmNoaWxkTm9kZXMpLHAuY2hpbGROb2RlcyksdFtwLmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtIPXthcHBseTp0Lmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxPLmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKFQoZSksZT1lfHxDLEUpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ2KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIU5bdCtcIiBcIl0mJigheXx8IXkudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJihVLnRlc3QodCl8fHoudGVzdCh0KSkpeyhmPWVlLnRlc3QodCkmJnZlKGUucGFyZW50Tm9kZSl8fGUpPT09ZSYmZC5zY29wZXx8KChzPWUuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9cy5yZXBsYWNlKHJlLGllKTplLnNldEF0dHJpYnV0ZShcImlkXCIscz1TKSksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109KHM/XCIjXCIrczpcIjpzY29wZVwiKStcIiBcIit4ZShsW29dKTtjPWwuam9pbihcIixcIil9dHJ5e3JldHVybiBILmFwcGx5KG4sZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSxufWNhdGNoKGUpe04odCwhMCl9ZmluYWxseXtzPT09UyYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBnKHQucmVwbGFjZShCLFwiJDFcIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrXCIgXCIpPmIuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Iuc2hpZnQoKV0sZVt0K1wiIFwiXT1ufX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gZVtTXT0hMCxlfWZ1bmN0aW9uIGNlKGUpe3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0pYi5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGRlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJmUudHlwZT09PXR9fWZ1bmN0aW9uIGhlKG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PXR8fFwiYnV0dG9uXCI9PT10KSYmZS50eXBlPT09bn19ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiZm9ybVwiaW4gZT9lLnBhcmVudE5vZGUmJiExPT09ZS5kaXNhYmxlZD9cImxhYmVsXCJpbiBlP1wibGFiZWxcImluIGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT10OmUuZGlzYWJsZWQ9PT10OmUuaXNEaXNhYmxlZD09PXR8fGUuaXNEaXNhYmxlZCE9PSF0JiZhZShlKT09PXQ6ZS5kaXNhYmxlZD09PXQ6XCJsYWJlbFwiaW4gZSYmZS5kaXNhYmxlZD09PXR9fWZ1bmN0aW9uIHllKGEpe3JldHVybiBsZShmdW5jdGlvbihvKXtyZXR1cm4gbz0rbyxsZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShbXSxlLmxlbmd0aCxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249cltpXV0mJihlW25dPSEodFtuXT1lW25dKSl9KX0pfWZ1bmN0aW9uIHZlKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLm5hbWVzcGFjZVVSSSxuPWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6cDtyZXR1cm4gciE9QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsRT0haShDKSxwIT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuc2NvcGU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoQy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsJiYhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGh9KSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoQy5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUsudGVzdChDLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGQuZ2V0QnlJZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1TLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShTKS5sZW5ndGh9KSxkLmdldEJ5SWQ/KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIHQmJnQudmFsdWU9PT1ufX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZFKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHM9W10seT1bXSwoZC5xc2E9Sy50ZXN0KEMucXVlcnlTZWxlY3RvckFsbCkpJiYoY2UoZnVuY3Rpb24oZSl7dmFyIHQ7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrUytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK1MrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnkucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx5LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitTK1wiLV1cIikubGVuZ3RofHx5LnB1c2goXCJ+PVwiKSwodD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiXCIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aHx8eS5wdXNoKFwiXFxcXFtcIitNK1wiKm5hbWVcIitNK1wiKj1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHkucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrUytcIisqXCIpLmxlbmd0aHx8eS5wdXNoKFwiLiMuK1srfl1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiXFxcXFxcZlwiKSx5LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmeS5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx5LnB1c2goXCIsLio6XCIpfSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKGZ1bmN0aW9uKGUpe2QuZGlzY29ubmVjdGVkTWF0Y2g9Yy5jYWxsKGUsXCIqXCIpLGMuY2FsbChlLFwiW3MhPScnXTp4XCIpLHMucHVzaChcIiE9XCIsRil9KSx5PXkubGVuZ3RoJiZuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdj10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxqPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBufHwoMSYobj0oZS5vd25lckRvY3VtZW50fHxlKT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IWQuc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09bj9lPT1DfHxlLm93bmVyRG9jdW1lbnQ9PXAmJnYocCxlKT8tMTp0PT1DfHx0Lm93bmVyRG9jdW1lbnQ9PXAmJnYocCx0KT8xOnU/UCh1LGUpLVAodSx0KTowOjQmbj8tMToxKX06ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuLHI9MCxpPWUucGFyZW50Tm9kZSxvPXQucGFyZW50Tm9kZSxhPVtlXSxzPVt0XTtpZighaXx8IW8pcmV0dXJuIGU9PUM/LTE6dD09Qz8xOmk/LTE6bz8xOnU/UCh1LGUpLVAodSx0KTowO2lmKGk9PT1vKXJldHVybiBwZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKXMudW5zaGlmdChuKTt3aGlsZShhW3JdPT09c1tyXSlyKys7cmV0dXJuIHI/cGUoYVtyXSxzW3JdKTphW3JdPT1wPy0xOnNbcl09PXA/MTowfSksQ30sc2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzZShlLG51bGwsbnVsbCx0KX0sc2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoVChlKSxkLm1hdGNoZXNTZWxlY3RvciYmRSYmIU5bdCtcIiBcIl0mJighc3x8IXMudGVzdCh0KSkmJigheXx8IXkudGVzdCh0KSkpdHJ5e3ZhciBuPWMuY2FsbChlLHQpO2lmKG58fGQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChlKXtOKHQsITApfXJldHVybiAwPHNlKHQsQyxudWxsLFtlXSkubGVuZ3RofSxzZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpLHYoZSx0KX0sc2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpO3ZhciBuPWIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLHI9biYmRC5jYWxsKGIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFFKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PXI/cjpkLmF0dHJpYnV0ZXN8fCFFP2UuZ2V0QXR0cmlidXRlKHQpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0sc2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MCxpPTA7aWYobD0hZC5kZXRlY3REdXBsaWNhdGVzLHU9IWQuc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoaiksbCl7d2hpbGUodD1lW2krK10pdD09PWVbaV0mJihyPW4ucHVzaChpKSk7d2hpbGUoci0tKWUuc3BsaWNlKG5bcl0sMSl9cmV0dXJuIHU9bnVsbCxlfSxvPXNlLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UodGUsbmUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UodGUsbmUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHNlLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnNlLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBHLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1oKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PW1bZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJm0oZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihuLHIsaSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXNlLmF0dHIoZSxuKTtyZXR1cm4gbnVsbD09dD9cIiE9XCI9PT1yOiFyfHwodCs9XCJcIixcIj1cIj09PXI/dD09PWk6XCIhPVwiPT09cj90IT09aTpcIl49XCI9PT1yP2kmJjA9PT10LmluZGV4T2YoaSk6XCIqPVwiPT09cj9pJiYtMTx0LmluZGV4T2YoaSk6XCIkPVwiPT09cj9pJiZ0LnNsaWNlKC1pLmxlbmd0aCk9PT1pOlwifj1cIj09PXI/LTE8KFwiIFwiK3QucmVwbGFjZSgkLFwiIFwiKStcIiBcIikuaW5kZXhPZihpKTpcInw9XCI9PT1yJiYodD09PWl8fHQuc2xpY2UoMCxpLmxlbmd0aCsxKT09PWkrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGgsZSx0LGcseSl7dmFyIHY9XCJudGhcIiE9PWguc2xpY2UoMCwzKSxtPVwibGFzdFwiIT09aC5zbGljZSgtNCkseD1cIm9mLXR5cGVcIj09PWU7cmV0dXJuIDE9PT1nJiYwPT09eT9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPXYhPT1tP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLGM9ZS5wYXJlbnROb2RlLGY9eCYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHA9IW4mJiF4LGQ9ITE7aWYoYyl7aWYodil7d2hpbGUobCl7YT1lO3doaWxlKGE9YVtsXSlpZih4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpcmV0dXJuITE7dT1sPVwib25seVwiPT09aCYmIXUmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7ZD0ocz0ocj0oaT0obz0oYT1jKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSkmJnJbMl0sYT1zJiZjLmNoaWxkTm9kZXNbc107d2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoMT09PWEubm9kZVR5cGUmJisrZCYmYT09PWUpe2lbaF09W2sscyxkXTticmVha319ZWxzZSBpZihwJiYoZD1zPShyPShpPShvPShhPWUpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSwhMT09PWQpd2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSkmJisrZCYmKHAmJigoaT0obz1hW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtrLGRdKSxhPT09ZSkpYnJlYWs7cmV0dXJuKGQtPXkpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGFbU10/YShvKToxPGEubGVuZ3RoPyh0PVtlLGUsXCJcIixvXSxiLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9sZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShlLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1QKGUscltpXSldPSEodFtuXT1yW2ldKX0pOmZ1bmN0aW9uKGUpe3JldHVybiBhKGUsMCx0KX0pOmF9fSxwc2V1ZG9zOntub3Q6bGUoZnVuY3Rpb24oZSl7dmFyIHI9W10saT1bXSxzPWYoZS5yZXBsYWNlKEIsXCIkMVwiKSk7cmV0dXJuIHNbU10/bGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbz1zKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkoaT1vW2FdKSYmKGVbYV09ISh0W2FdPWkpKX0pOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pLGhhczpsZShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIDA8c2UodCxlKS5sZW5ndGh9fSksY29udGFpbnM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHRlLG5lKSxmdW5jdGlvbihlKXtyZXR1cm4tMTwoZS50ZXh0Q29udGVudHx8byhlKSkuaW5kZXhPZih0KX19KSxsYW5nOmxlKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8XCJcIil8fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrbiksbj1uLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oZSl7dmFyIHQ7ZG97aWYodD1FP2UubGFuZzplLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKHQ9dC50b0xvd2VyQ2FzZSgpKT09PW58fDA9PT10LmluZGV4T2YobitcIi1cIil9d2hpbGUoKGU9ZS5wYXJlbnROb2RlKSYmMT09PWUubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihlKXt2YXIgdD1uLmxvY2F0aW9uJiZuLmxvY2F0aW9uLmhhc2g7cmV0dXJuIHQmJnQuc2xpY2UoMSk9PT1lLmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09YX0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1DLmFjdGl2ZUVsZW1lbnQmJighQy5oYXNGb2N1c3x8Qy5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpnZSghMSksZGlzYWJsZWQ6Z2UoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hYi5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEoudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDp5ZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6eWUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOnllKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46eWUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6eWUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDp5ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6dDxuP3Q6bjswPD0tLXI7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OnllKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1iLnBzZXVkb3MuZXEse3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWIucHNldWRvc1tlXT1kZShlKTtmb3IoZSBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWIucHNldWRvc1tlXT1oZShlKTtmdW5jdGlvbiBtZSgpe31mdW5jdGlvbiB4ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJlwicGFyZW50Tm9kZVwiPT09YyxwPXIrKztyZXR1cm4gZS5maXJzdD9mdW5jdGlvbihlLHQsbil7d2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKXJldHVybiBzKGUsdCxuKTtyZXR1cm4hMX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPVtrLHBdO2lmKG4pe3doaWxlKGU9ZVt1XSlpZigoMT09PWUubm9kZVR5cGV8fGYpJiZzKGUsdCxuKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilpZihpPShvPWVbU118fChlW1NdPXt9KSlbZS51bmlxdWVJRF18fChvW2UudW5pcXVlSURdPXt9KSxsJiZsPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWU9ZVt1XXx8ZTtlbHNle2lmKChyPWlbY10pJiZyWzBdPT09ayYmclsxXT09PXApcmV0dXJuIGFbMl09clsyXTtpZigoaVtjXT1hKVsyXT1zKGUsdCxuKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gd2UoaSl7cmV0dXJuIDE8aS5sZW5ndGg/ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWkubGVuZ3RoO3doaWxlKHItLSlpZighaVtyXShlLHQsbikpcmV0dXJuITE7cmV0dXJuITB9OmlbMF19ZnVuY3Rpb24gVGUoZSx0LG4scixpKXtmb3IodmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7czx1O3MrKykobz1lW3NdKSYmKG4mJiFuKG8scixpKXx8KGEucHVzaChvKSxsJiZ0LnB1c2gocykpKTtyZXR1cm4gYX1mdW5jdGlvbiBDZShkLGgsZyx5LHYsZSl7cmV0dXJuIHkmJiF5W1NdJiYoeT1DZSh5KSksdiYmIXZbU10mJih2PUNlKHYsZSkpLGxlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVtdLHU9W10sbD10Lmxlbmd0aCxjPWV8fGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspc2UoZSx0W3JdLG4pO3JldHVybiBufShofHxcIipcIixuLm5vZGVUeXBlP1tuXTpuLFtdKSxmPSFkfHwhZSYmaD9jOlRlKGMscyxkLG4scikscD1nP3Z8fChlP2Q6bHx8eSk/W106dDpmO2lmKGcmJmcoZixwLG4scikseSl7aT1UZShwLHUpLHkoaSxbXSxuLHIpLG89aS5sZW5ndGg7d2hpbGUoby0tKShhPWlbb10pJiYocFt1W29dXT0hKGZbdVtvXV09YSkpfWlmKGUpe2lmKHZ8fGQpe2lmKHYpe2k9W10sbz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJmkucHVzaChmW29dPWEpO3YobnVsbCxwPVtdLGkscil9bz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJi0xPChpPXY/UChlLGEpOnNbb10pJiYoZVtpXT0hKHRbaV09YSkpfX1lbHNlIHA9VGUocD09PXQ/cC5zcGxpY2UobCxwLmxlbmd0aCk6cCksdj92KG51bGwsdCxwLHIpOkguYXBwbHkodCxwKX0pfWZ1bmN0aW9uIEVlKGUpe2Zvcih2YXIgaSx0LG4scj1lLmxlbmd0aCxvPWIucmVsYXRpdmVbZVswXS50eXBlXSxhPW98fGIucmVsYXRpdmVbXCIgXCJdLHM9bz8xOjAsdT1iZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PWl9LGEsITApLGw9YmUoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSxhLCEwKSxjPVtmdW5jdGlvbihlLHQsbil7dmFyIHI9IW8mJihufHx0IT09dyl8fCgoaT10KS5ub2RlVHlwZT91KGUsdCxuKTpsKGUsdCxuKSk7cmV0dXJuIGk9bnVsbCxyfV07czxyO3MrKylpZih0PWIucmVsYXRpdmVbZVtzXS50eXBlXSljPVtiZSh3ZShjKSx0KV07ZWxzZXtpZigodD1iLmZpbHRlcltlW3NdLnR5cGVdLmFwcGx5KG51bGwsZVtzXS5tYXRjaGVzKSlbU10pe2ZvcihuPSsrcztuPHI7bisrKWlmKGIucmVsYXRpdmVbZVtuXS50eXBlXSlicmVhaztyZXR1cm4gQ2UoMTxzJiZ3ZShjKSwxPHMmJnhlKGUuc2xpY2UoMCxzLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1lW3MtMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoQixcIiQxXCIpLHQsczxuJiZFZShlLnNsaWNlKHMsbikpLG48ciYmRWUoZT1lLnNsaWNlKG4pKSxuPHImJnhlKGUpKX1jLnB1c2godCl9cmV0dXJuIHdlKGMpfXJldHVybiBtZS5wcm90b3R5cGU9Yi5maWx0ZXJzPWIucHNldWRvcyxiLnNldEZpbHRlcnM9bmV3IG1lLGg9c2UudG9rZW5pemU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsPXhbZStcIiBcIl07aWYobClyZXR1cm4gdD8wOmwuc2xpY2UoMCk7YT1lLHM9W10sdT1iLnByZUZpbHRlcjt3aGlsZShhKXtmb3IobyBpbiBuJiYhKHI9Xy5leGVjKGEpKXx8KHImJihhPWEuc2xpY2UoclswXS5sZW5ndGgpfHxhKSxzLnB1c2goaT1bXSkpLG49ITEsKHI9ei5leGVjKGEpKSYmKG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZShCLFwiIFwiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix5LHYsbSx4LHIsaT1bXSxvPVtdLGE9QVtlK1wiIFwiXTtpZighYSl7dHx8KHQ9aChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKGE9RWUodFtuXSkpW1NdP2kucHVzaChhKTpvLnB1c2goYSk7KGE9QShlLCh5PW8sbT0wPCh2PWkpLmxlbmd0aCx4PTA8eS5sZW5ndGgscj1mdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1PTAsbD1cIjBcIixjPWUmJltdLGY9W10scD13LGQ9ZXx8eCYmYi5maW5kLlRBRyhcIipcIixpKSxoPWsrPW51bGw9PXA/MTpNYXRoLnJhbmRvbSgpfHwuMSxnPWQubGVuZ3RoO2ZvcihpJiYodz10PT1DfHx0fHxpKTtsIT09ZyYmbnVsbCE9KG89ZFtsXSk7bCsrKXtpZih4JiZvKXthPTAsdHx8by5vd25lckRvY3VtZW50PT1DfHwoVChvKSxuPSFFKTt3aGlsZShzPXlbYSsrXSlpZihzKG8sdHx8QyxuKSl7ci5wdXNoKG8pO2JyZWFrfWkmJihrPWgpfW0mJigobz0hcyYmbykmJnUtLSxlJiZjLnB1c2gobykpfWlmKHUrPWwsbSYmbCE9PXUpe2E9MDt3aGlsZShzPXZbYSsrXSlzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSl3aGlsZShsLS0pY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3YubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoaz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGM9IXImJmgoZT1sLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1jLmxlbmd0aCl7aWYoMjwobz1jWzBdPWNbMF0uc2xpY2UoMCkpLmxlbmd0aCYmXCJJRFwiPT09KGE9b1swXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJkUmJmIucmVsYXRpdmVbb1sxXS50eXBlXSl7aWYoISh0PShiLmZpbmQuSUQoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLHQpfHxbXSlbMF0pKXJldHVybiBuO2wmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKG8uc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Ry5uZWVkc0NvbnRleHQudGVzdChlKT8wOm8ubGVuZ3RoO3doaWxlKGktLSl7aWYoYT1vW2ldLGIucmVsYXRpdmVbcz1hLnR5cGVdKWJyZWFrO2lmKCh1PWIuZmluZFtzXSkmJihyPXUoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLGVlLnRlc3Qob1swXS50eXBlKSYmdmUodC5wYXJlbnROb2RlKXx8dCkpKXtpZihvLnNwbGljZShpLDEpLCEoZT1yLmxlbmd0aCYmeGUobykpKXJldHVybiBILmFwcGx5KG4sciksbjticmVha319fXJldHVybihsfHxmKGUsYykpKHIsdCwhRSxuLCF0fHxlZS50ZXN0KGUpJiZ2ZSh0LnBhcmVudE5vZGUpfHx0KSxufSxkLnNvcnRTdGFibGU9Uy5zcGxpdChcIlwiKS5zb3J0KGopLmpvaW4oXCJcIik9PT1TLGQuZGV0ZWN0RHVwbGljYXRlcz0hIWwsVCgpLGQuc29ydERldGFjaGVkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oQy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8ZmUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxkLmF0dHJpYnV0ZXMmJmNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxmZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8ZmUoUixmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxzZX0oQyk7Uy5maW5kPWQsUy5leHByPWQuc2VsZWN0b3JzLFMuZXhwcltcIjpcIl09Uy5leHByLnBzZXVkb3MsUy51bmlxdWVTb3J0PVMudW5pcXVlPWQudW5pcXVlU29ydCxTLnRleHQ9ZC5nZXRUZXh0LFMuaXNYTUxEb2M9ZC5pc1hNTCxTLmNvbnRhaW5zPWQuY29udGFpbnMsUy5lc2NhcGVTZWxlY3Rvcj1kLmVzY2FwZTt2YXIgaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9W10saT12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYoaSYmUyhlKS5pcyhuKSlicmVhaztyLnB1c2goZSl9cmV0dXJuIHJ9LFQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LGs9Uy5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBBKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgTj0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtmdW5jdGlvbiBqKGUsbixyKXtyZXR1cm4gbShuKT9TLmdyZXAoZSxmdW5jdGlvbihlLHQpe3JldHVybiEhbi5jYWxsKGUsdCxlKSE9PXJ9KTpuLm5vZGVUeXBlP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09biE9PXJ9KTpcInN0cmluZ1wiIT10eXBlb2Ygbj9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4tMTxpLmNhbGwobixlKSE9PXJ9KTpTLmZpbHRlcihuLGUscil9Uy5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1yLm5vZGVUeXBlP1MuZmluZC5tYXRjaGVzU2VsZWN0b3IocixlKT9bcl06W106Uy5maW5kLm1hdGNoZXMoZSxTLmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LFMuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj10aGlzLmxlbmd0aCxpPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKFMoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PHI7dCsrKWlmKFMuY29udGFpbnMoaVt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0KyspUy5maW5kKGUsaVt0XSxuKTtyZXR1cm4gMTxyP1MudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmay50ZXN0KGUpP1MoZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgRCxxPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyhTLmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxELFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJjM8PWUubGVuZ3RoP1tudWxsLGUsbnVsbF06cS5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBTP3RbMF06dCxTLm1lcmdlKHRoaXMsUy5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpFLCEwKSksTi50ZXN0KHJbMV0pJiZTLmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCltKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGk9RS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPWksdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6bShlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZShTKTpTLm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPVMuZm4sRD1TKEUpO3ZhciBMPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEg9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ZnVuY3Rpb24gTyhlLHQpe3doaWxlKChlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1TKGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPG47ZSsrKWlmKFMuY29udGFpbnModGhpcyx0W2VdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPVwic3RyaW5nXCIhPXR5cGVvZiBlJiZTKGUpO2lmKCFrLnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/LTE8YS5pbmRleChuKToxPT09bi5ub2RlVHlwZSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjaygxPG8ubGVuZ3RoP1MudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5jYWxsKFMoZSksdGhpc1swXSk6aS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLnVuaXF1ZVNvcnQoUy5tZXJnZSh0aGlzLmdldCgpLFMoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksUy5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gVCgoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUuY29udGVudERvY3VtZW50JiZyKGUuY29udGVudERvY3VtZW50KT9lLmNvbnRlbnREb2N1bWVudDooQShlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksUy5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKHIsaSl7Uy5mbltyXT1mdW5jdGlvbihlLHQpe3ZhciBuPVMubWFwKHRoaXMsaSxlKTtyZXR1cm5cIlVudGlsXCIhPT1yLnNsaWNlKC01KSYmKHQ9ZSksdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPVMuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihIW3JdfHxTLnVuaXF1ZVNvcnQobiksTC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFA9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIFIoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gTShlKXt0aHJvdyBlfWZ1bmN0aW9uIEkoZSx0LG4scil7dmFyIGk7dHJ5e2UmJm0oaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmbShpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fVMuQ2FsbGJhY2tzPWZ1bmN0aW9uKHIpe3ZhciBlLG47cj1cInN0cmluZ1wiPT10eXBlb2Ygcj8oZT1yLG49e30sUy5lYWNoKGUubWF0Y2goUCl8fFtdLGZ1bmN0aW9uKGUsdCl7blt0XT0hMH0pLG4pOlMuZXh0ZW5kKHt9LHIpO3ZhciBpLHQsbyxhLHM9W10sdT1bXSxsPS0xLGM9ZnVuY3Rpb24oKXtmb3IoYT1hfHxyLm9uY2Usbz1pPSEwO3UubGVuZ3RoO2w9LTEpe3Q9dS5zaGlmdCgpO3doaWxlKCsrbDxzLmxlbmd0aCkhMT09PXNbbF0uYXBwbHkodFswXSx0WzFdKSYmci5zdG9wT25GYWxzZSYmKGw9cy5sZW5ndGgsdD0hMSl9ci5tZW1vcnl8fCh0PSExKSxpPSExLGEmJihzPXQ/W106XCJcIil9LGY9e2FkZDpmdW5jdGlvbigpe3JldHVybiBzJiYodCYmIWkmJihsPXMubGVuZ3RoLTEsdS5wdXNoKHQpKSxmdW5jdGlvbiBuKGUpe1MuZWFjaChlLGZ1bmN0aW9uKGUsdCl7bSh0KT9yLnVuaXF1ZSYmZi5oYXModCl8fHMucHVzaCh0KTp0JiZ0Lmxlbmd0aCYmXCJzdHJpbmdcIiE9PXcodCkmJm4odCl9KX0oYXJndW1lbnRzKSx0JiYhaSYmYygpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKC0xPChuPVMuaW5BcnJheSh0LHMsbikpKXMuc3BsaWNlKG4sMSksbjw9bCYmbC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlPy0xPFMuaW5BcnJheShlLHMpOjA8cy5sZW5ndGh9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIHMmJihzPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSxzPXQ9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFzfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSx0fHxpfHwocz10PVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhYX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXx8KHQ9W2UsKHQ9dHx8W10pLnNsaWNlP3Quc2xpY2UoKTp0XSx1LnB1c2godCksaXx8YygpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFvfX07cmV0dXJuIGZ9LFMuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgbz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGk9XCJwZW5kaW5nXCIsYT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gaX0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHMuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGEudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGk9YXJndW1lbnRzO3JldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKHIpe1MuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49bShpW3RbNF1dKSYmaVt0WzRdXTtzW3RbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9biYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmbShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHIubm90aWZ5KS5kb25lKHIucmVzb2x2ZSkuZmFpbChyLnJlamVjdCk6clt0WzBdK1wiV2l0aFwiXSh0aGlzLG4/W2VdOmFyZ3VtZW50cyl9KX0pLGk9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LG4scil7dmFyIHU9MDtmdW5jdGlvbiBsKGksbyxhLHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMsZT1mdW5jdGlvbigpe3ZhciBlLHQ7aWYoIShpPHUpKXtpZigoZT1hLmFwcGx5KG4scikpPT09by5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt0PWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixtKHQpP3M/dC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpKToodSsrLHQuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSxsKHUsbyxSLG8ubm90aWZ5V2l0aCkpKTooYSE9PVImJihuPXZvaWQgMCxyPVtlXSksKHN8fG8ucmVzb2x2ZVdpdGgpKG4scikpfX0sdD1zP2U6ZnVuY3Rpb24oKXt0cnl7ZSgpfWNhdGNoKGUpe1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmUy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsdC5zdGFja1RyYWNlKSx1PD1pKzEmJihhIT09TSYmKG49dm9pZCAwLHI9W2VdKSxvLnJlamVjdFdpdGgobixyKSl9fTtpP3QoKTooUy5EZWZlcnJlZC5nZXRTdGFja0hvb2smJih0LnN0YWNrVHJhY2U9Uy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksQy5zZXRUaW1lb3V0KHQpKX19cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24oZSl7b1swXVszXS5hZGQobCgwLGUsbShyKT9yOlIsZS5ub3RpZnlXaXRoKSksb1sxXVszXS5hZGQobCgwLGUsbSh0KT90OlIpKSxvWzJdWzNdLmFkZChsKDAsZSxtKG4pP246TSkpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP1MuZXh0ZW5kKGUsYSk6YX19LHM9e307cmV0dXJuIFMuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49dFsyXSxyPXRbNV07YVt0WzFdXT1uLmFkZCxyJiZuLmFkZChmdW5jdGlvbigpe2k9cn0sb1szLWVdWzJdLmRpc2FibGUsb1szLWVdWzNdLmRpc2FibGUsb1swXVsyXS5sb2NrLG9bMF1bM10ubG9jayksbi5hZGQodFszXS5maXJlKSxzW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIHNbdFswXStcIldpdGhcIl0odGhpcz09PXM/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxzW3RbMF0rXCJXaXRoXCJdPW4uZmlyZVdpdGh9KSxhLnByb21pc2UocyksZSYmZS5jYWxsKHMscyksc30sd2hlbjpmdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHQ9bixyPUFycmF5KHQpLGk9cy5jYWxsKGFyZ3VtZW50cyksbz1TLkRlZmVycmVkKCksYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7clt0XT10aGlzLGlbdF09MTxhcmd1bWVudHMubGVuZ3RoP3MuY2FsbChhcmd1bWVudHMpOmUsLS1ufHxvLnJlc29sdmVXaXRoKHIsaSl9fTtpZihuPD0xJiYoSShlLG8uZG9uZShhKHQpKS5yZXNvbHZlLG8ucmVqZWN0LCFuKSxcInBlbmRpbmdcIj09PW8uc3RhdGUoKXx8bShpW3RdJiZpW3RdLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7d2hpbGUodC0tKUkoaVt0XSxhKHQpLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyIFc9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGUsdCl7Qy5jb25zb2xlJiZDLmNvbnNvbGUud2FybiYmZSYmVy50ZXN0KGUubmFtZSkmJkMuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LFMucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfTt2YXIgRj1TLkRlZmVycmVkKCk7ZnVuY3Rpb24gJCgpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwkKSxDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsJCksUy5yZWFkeSgpfVMuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGUpe1MucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSxTLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tUy5yZWFkeVdhaXQ6Uy5pc1JlYWR5KXx8KFMuaXNSZWFkeT0hMCkhPT1lJiYwPC0tUy5yZWFkeVdhaXR8fEYucmVzb2x2ZVdpdGgoRSxbU10pfX0pLFMucmVhZHkudGhlbj1GLnRoZW4sXCJjb21wbGV0ZVwiPT09RS5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PUUucmVhZHlTdGF0ZSYmIUUuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP0Muc2V0VGltZW91dChTLnJlYWR5KTooRS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCQpLEMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwkKSk7dmFyIEI9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09dyhuKSlmb3IocyBpbiBpPSEwLG4pQihlLHQscyxuW3NdLCEwLG8sYSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYoaT0hMCxtKHIpfHwoYT0hMCksbCYmKGE/KHQuY2FsbChlLHIpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKFMoZSksbil9KSksdCkpZm9yKDtzPHU7cysrKXQoZVtzXSxuLGE/cjpyLmNhbGwoZVtzXSxzLHQoZVtzXSxuKSkpO3JldHVybiBpP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sXz0vXi1tcy0vLHo9Ly0oW2Etel0pL2c7ZnVuY3Rpb24gVShlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gZS5yZXBsYWNlKF8sXCJtcy1cIikucmVwbGFjZSh6LFUpfXZhciBWPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gRygpe3RoaXMuZXhwYW5kbz1TLmV4cGFuZG8rRy51aWQrK31HLnVpZD0xLEcucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFYoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlbWCh0KV09bjtlbHNlIGZvcihyIGluIHQpaVtYKHIpXT10W3JdO3JldHVybiBpfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW1godCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1yKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoWCk6KHQ9WCh0KSlpbiByP1t0XTp0Lm1hdGNoKFApfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgclt0W25dXX0odm9pZCAwPT09dHx8Uy5pc0VtcHR5T2JqZWN0KHIpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYhUy5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFk9bmV3IEcsUT1uZXcgRyxKPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxLPS9bQS1aXS9nO2Z1bmN0aW9uIFooZSx0LG4pe3ZhciByLGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj1cImRhdGEtXCIrdC5yZXBsYWNlKEssXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPVwidHJ1ZVwiPT09KGk9bil8fFwiZmFsc2VcIiE9PWkmJihcIm51bGxcIj09PWk/bnVsbDppPT09K2krXCJcIj8raTpKLnRlc3QoaSk/SlNPTi5wYXJzZShpKTppKX1jYXRjaChlKXt9US5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59Uy5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFEuaGFzRGF0YShlKXx8WS5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUS5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7US5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBZLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7WS5yZW1vdmUoZSx0KX19KSxTLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihuLGUpe3ZhciB0LHIsaSxvPXRoaXNbMF0sYT1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09bil7aWYodGhpcy5sZW5ndGgmJihpPVEuZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhWS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe3Q9YS5sZW5ndGg7d2hpbGUodC0tKWFbdF0mJjA9PT0ocj1hW3RdLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKHI9WChyLnNsaWNlKDUpKSxaKG8scixpW3JdKSk7WS5zZXQobyxcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gaX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2Ygbj90aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4pfSk6Qih0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0O2lmKG8mJnZvaWQgMD09PWUpcmV0dXJuIHZvaWQgMCE9PSh0PVEuZ2V0KG8sbikpP3Q6dm9pZCAwIT09KHQ9WihvLG4pKT90OnZvaWQgMDt0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnNldCh0aGlzLG4sZSl9KX0sbnVsbCxlLDE8YXJndW1lbnRzLmxlbmd0aCxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5yZW1vdmUodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1ZLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPVkuYWNjZXNzKGUsdCxTLm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPVMucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89Uy5fcXVldWVIb29rcyhlLHQpO1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxmdW5jdGlvbigpe1MuZGVxdWV1ZShlLHQpfSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFkuZ2V0KGUsbil8fFkuYWNjZXNzKGUsbix7ZW1wdHk6Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtZLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLFMuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cImZ4XCIsZS0tKSxhcmd1bWVudHMubGVuZ3RoPGU/Uy5xdWV1ZSh0aGlzWzBdLHQpOnZvaWQgMD09PW4/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TLnF1ZXVlKHRoaXMsdCxuKTtTLl9xdWV1ZUhvb2tzKHRoaXMsdCksXCJmeFwiPT09dCYmXCJpbnByb2dyZXNzXCIhPT1lWzBdJiZTLmRlcXVldWUodGhpcyx0KX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTEsaT1TLkRlZmVycmVkKCksbz10aGlzLGE9dGhpcy5sZW5ndGgscz1mdW5jdGlvbigpey0tcnx8aS5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShhLS0pKG49WS5nZXQob1thXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihyKyssbi5lbXB0eS5hZGQocykpO3JldHVybiBzKCksaS5wcm9taXNlKHQpfX0pO3ZhciBlZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsdGU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrZWUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxuZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0scmU9RS5kb2N1bWVudEVsZW1lbnQsaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfSxvZT17Y29tcG9zZWQ6ITB9O3JlLmdldFJvb3ROb2RlJiYoaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIFMuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHxlLmdldFJvb3ROb2RlKG9lKT09PWUub3duZXJEb2N1bWVudH0pO3ZhciBhZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmaWUoZSkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIil9O2Z1bmN0aW9uIHNlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gUy5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fChTLmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz1lLm5vZGVUeXBlJiYoUy5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmdGUuZXhlYyhTLmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pUy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLFMuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgdWU9e307ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYobFtjXT1ZLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxsW2NdfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGxbY109KHU9YT1vPXZvaWQgMCxhPShpPXIpLm93bmVyRG9jdW1lbnQscz1pLm5vZGVOYW1lLCh1PXVlW3NdKXx8KG89YS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSksdT1TLmNzcyhvLFwiZGlzcGxheVwiKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksXCJub25lXCI9PT11JiYodT1cImJsb2NrXCIpLHVlW3NdPXUpKSkpOlwibm9uZVwiIT09biYmKGxbY109XCJub25lXCIsWS5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihjPTA7YzxmO2MrKyludWxsIT1sW2NdJiYoZVtjXS5zdHlsZS5kaXNwbGF5PWxbY10pO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7YWUodGhpcyk/Uyh0aGlzKS5zaG93KCk6Uyh0aGlzKS5oaWRlKCl9KX19KTt2YXIgY2UsZmUscGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksZGU9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pLGhlPS9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7Y2U9RS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSwoZmU9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGZlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksZmUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxjZS5hcHBlbmRDaGlsZChmZSksdi5jaGVja0Nsb25lPWNlLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxjZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsdi5ub0Nsb25lQ2hlY2tlZD0hIWNlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZSxjZS5pbm5lckhUTUw9XCI8b3B0aW9uPjwvb3B0aW9uPlwiLHYub3B0aW9uPSEhY2UubGFzdENoaWxkO3ZhciBnZT17dGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07ZnVuY3Rpb24geWUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP1MubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24gdmUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspWS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8WS5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfWdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQsdi5vcHRpb258fChnZS5vcHRncm91cD1nZS5vcHRpb249WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0pO3ZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09dyhvKSlTLm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK1MuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDtTLm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiYtMTxTLmluQXJyYXkobyxyKSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPWllKG8pLGE9eWUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ2ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9dmFyIGJlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gd2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBUZSgpe3JldHVybiExfWZ1bmN0aW9uIENlKGUsdCl7cmV0dXJuIGU9PT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319KCk9PShcImZvY3VzXCI9PT10KX1mdW5jdGlvbiBFZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKHMgaW5cInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCksdClFZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPVRlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiBTKCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9Uy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9ZnVuY3Rpb24gU2UoZSxpLG8pe28/KFkuc2V0KGUsaSwhMSksUy5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9WS5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoUy5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxZLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1ZLmdldCh0aGlzLGkpKXx8dD9ZLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4mJm4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFkuc2V0KHRoaXMsaSx7dmFsdWU6Uy5ldmVudC50cmlnZ2VyKFMuZXh0ZW5kKHJbMF0sUy5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09WS5nZXQoZSxpKSYmUy5ldmVudC5hZGQoZSxpLHdlKX1TLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx5PVkuZ2V0KHQpO2lmKFYodCkpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IocmUsaSksbi5ndWlkfHwobi5ndWlkPVMuZ3VpZCsrKSwodT15LmV2ZW50cyl8fCh1PXkuZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCkpLChhPXkuaGFuZGxlKXx8KGE9eS5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPWJlLmV4ZWMoZVtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1TLmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZTLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKHQscixoLGEpfHx0LmFkZEV2ZW50TGlzdGVuZXImJnQuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwodCxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksUy5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx5PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYoeSYmKHU9eS5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGQ9Zz0ocz1iZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgseS5oYW5kbGUpfHxTLnJlbW92ZUV2ZW50KGUsZCx5LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSlTLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO1MuaXNFbXB0eU9iamVjdCh1KSYmWS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksdT1TLmV2ZW50LmZpeChlKSxsPShZLmdldCh0aGlzLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVt1LnR5cGVdfHxbXSxjPVMuZXZlbnQuc3BlY2lhbFt1LnR5cGVdfHx7fTtmb3Ioc1swXT11LHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXNbdF09YXJndW1lbnRzW3RdO2lmKHUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx1KSl7YT1TLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx1LGwpLHQ9MDt3aGlsZSgoaT1hW3QrK10pJiYhdS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt1LmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDt3aGlsZSgobz1pLmhhbmRsZXJzW24rK10pJiYhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXUucm5hbWVzcGFjZSYmITEhPT1vLm5hbWVzcGFjZSYmIXUucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KHUuaGFuZGxlT2JqPW8sdS5kYXRhPW8uZGF0YSx2b2lkIDAhPT0ocj0oKFMuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShpLmVsZW0scykpJiYhMT09PSh1LnJlc3VsdD1yKSYmKHUucHJldmVudERlZmF1bHQoKSx1LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdSksdS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiYxPD1lLmJ1dHRvbikpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD8tMTxTKGksdGhpcykuaW5kZXgobCk6Uy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KFMuRXZlbnQucHJvdG90eXBlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDptKGUpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBlKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbdF19LHNldDpmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTplfSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7c2V0dXA6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmU2UodCxcImNsaWNrXCIsd2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlNlKHQsXCJjbGlja1wiKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlkuZ2V0KHQsXCJjbGlja1wiKXx8QSh0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxTLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSxTLkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2YgUy5FdmVudCkpcmV0dXJuIG5ldyBTLkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/d2U6VGUsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmUy5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW1MuZXhwYW5kb109ITB9LFMuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpTLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpUZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpUZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpUZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LFMuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOiEwfSxTLmV2ZW50LmFkZFByb3ApLFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKHQsZSl7Uy5ldmVudC5zcGVjaWFsW3RdPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBTZSh0aGlzLHQsQ2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIFNlKHRoaXMsdCksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3JldHVybiBZLmdldChlLnRhcmdldCx0KX0sZGVsZWdhdGVUeXBlOmV9fSksUy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLFMuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRWUodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBFZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixTKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1UZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIga2U9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQWU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxOZT0vXlxccyo8IVxcW0NEQVRBXFxbfFxcXVxcXT5cXHMqJC9nO2Z1bmN0aW9uIGplKGUsdCl7cmV0dXJuIEEoZSxcInRhYmxlXCIpJiZBKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpJiZTKGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGV9ZnVuY3Rpb24gRGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gcWUoZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIExlKGUsdCl7dmFyIG4scixpLG8sYSxzO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihZLmhhc0RhdGEoZSkmJihzPVkuZ2V0KGUpLmV2ZW50cykpZm9yKGkgaW4gWS5yZW1vdmUodCxcImhhbmRsZSBldmVudHNcIikscylmb3Iobj0wLHI9c1tpXS5sZW5ndGg7bjxyO24rKylTLmV2ZW50LmFkZCh0LGksc1tpXVtuXSk7US5oYXNEYXRhKGUpJiYobz1RLmFjY2VzcyhlKSxhPVMuZXh0ZW5kKHt9LG8pLFEuc2V0KHQsYSkpfX1mdW5jdGlvbiBIZShuLHIsaSxvKXtyPWcocik7dmFyIGUsdCxhLHMsdSxsLGM9MCxmPW4ubGVuZ3RoLHA9Zi0xLGQ9clswXSxoPW0oZCk7aWYoaHx8MTxmJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmIXYuY2hlY2tDbG9uZSYmQWUudGVzdChkKSlyZXR1cm4gbi5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW4uZXEoZSk7aCYmKHJbMF09ZC5jYWxsKHRoaXMsZSx0Lmh0bWwoKSkpLEhlKHQscixpLG8pfSk7aWYoZiYmKHQ9KGU9eGUocixuWzBdLm93bmVyRG9jdW1lbnQsITEsbixvKSkuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9dCksdHx8bykpe2ZvcihzPShhPVMubWFwKHllKGUsXCJzY3JpcHRcIiksRGUpKS5sZW5ndGg7YzxmO2MrKyl1PWUsYyE9PXAmJih1PVMuY2xvbmUodSwhMCwhMCkscyYmUy5tZXJnZShhLHllKHUsXCJzY3JpcHRcIikpKSxpLmNhbGwobltjXSx1LGMpO2lmKHMpZm9yKGw9YVthLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LFMubWFwKGEscWUpLGM9MDtjPHM7YysrKXU9YVtjXSxoZS50ZXN0KHUudHlwZXx8XCJcIikmJiFZLmFjY2Vzcyh1LFwiZ2xvYmFsRXZhbFwiKSYmUy5jb250YWlucyhsLHUpJiYodS5zcmMmJlwibW9kdWxlXCIhPT0odS50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP1MuX2V2YWxVcmwmJiF1Lm5vTW9kdWxlJiZTLl9ldmFsVXJsKHUuc3JjLHtub25jZTp1Lm5vbmNlfHx1LmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpfSxsKTpiKHUudGV4dENvbnRlbnQucmVwbGFjZShOZSxcIlwiKSx1LGwpKX1yZXR1cm4gbn1mdW5jdGlvbiBPZShlLHQsbil7Zm9yKHZhciByLGk9dD9TLmZpbHRlcih0LGUpOmUsbz0wO251bGwhPShyPWlbb10pO28rKylufHwxIT09ci5ub2RlVHlwZXx8Uy5jbGVhbkRhdGEoeWUocikpLHIucGFyZW50Tm9kZSYmKG4mJmllKHIpJiZ2ZSh5ZShyLFwic2NyaXB0XCIpKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpO3JldHVybiBlfVMuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYz1lLmNsb25lTm9kZSghMCksZj1pZShlKTtpZighKHYubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fFMuaXNYTUxEb2MoZSkpKWZvcihhPXllKGMpLHI9MCxpPShvPXllKGUpKS5sZW5ndGg7cjxpO3IrKylzPW9bcl0sdT1hW3JdLHZvaWQgMCxcImlucHV0XCI9PT0obD11Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDpcImlucHV0XCIhPT1sJiZcInRleHRhcmVhXCIhPT1sfHwodS5kZWZhdWx0VmFsdWU9cy5kZWZhdWx0VmFsdWUpO2lmKHQpaWYobilmb3Iobz1vfHx5ZShlKSxhPWF8fHllKGMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspTGUob1tyXSxhW3JdKTtlbHNlIExlKGUsYyk7cmV0dXJuIDA8KGE9eWUoYyxcInNjcmlwdFwiKSkubGVuZ3RoJiZ2ZShhLCFmJiZ5ZShlLFwic2NyaXB0XCIpKSxjfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPVMuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFYobikpe2lmKHQ9bltZLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP1MuZXZlbnQucmVtb3ZlKG4scik6Uy5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bWS5leHBhbmRvXT12b2lkIDB9bltRLmV4cGFuZG9dJiYobltRLmV4cGFuZG9dPXZvaWQgMCl9fX0pLFMuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIE9lKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2UodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP1MudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8amUodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1qZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh5ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gUy5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIWtlLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPVMuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh5ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBuPVtdO3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7Uy5pbkFycmF5KHRoaXMsbik8MCYmKFMuY2xlYW5EYXRhKHllKHRoaXMpKSx0JiZ0LnJlcGxhY2VDaGlsZChlLHRoaXMpKX0sbil9fSksUy5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsYSl7Uy5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1bXSxyPVMoZSksaT1yLmxlbmd0aC0xLG89MDtvPD1pO28rKyl0PW89PT1pP3RoaXM6dGhpcy5jbG9uZSghMCksUyhyW29dKVthXSh0KSx1LmFwcGx5KG4sdC5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQZT1uZXcgUmVnRXhwKFwiXihcIitlZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxSZT0vXi0tLyxNZT1mdW5jdGlvbihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIHQmJnQub3BlbmVyfHwodD1DKSx0LmdldENvbXB1dGVkU3R5bGUoZSl9LEllPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e307Zm9yKGkgaW4gdClvW2ldPWUuc3R5bGVbaV0sZS5zdHlsZVtpXT10W2ldO2ZvcihpIGluIHI9bi5jYWxsKGUpLHQpZS5zdHlsZVtpXT1vW2ldO3JldHVybiByfSxXZT1uZXcgUmVnRXhwKG5lLmpvaW4oXCJ8XCIpLFwiaVwiKSxGZT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsJGU9bmV3IFJlZ0V4cChcIl5cIitGZStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrRmUrXCIrJFwiLFwiZ1wiKTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHIsaSxvLGEscz1SZS50ZXN0KHQpLHU9ZS5zdHlsZTtyZXR1cm4obj1ufHxNZShlKSkmJihhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSxzJiYoYT1hLnJlcGxhY2UoJGUsXCIkMVwiKSksXCJcIiE9PWF8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF2LnBpeGVsQm94U3R5bGVzKCkmJlBlLnRlc3QoYSkmJldlLnRlc3QodCkmJihyPXUud2lkdGgsaT11Lm1pbldpZHRoLG89dS5tYXhXaWR0aCx1Lm1pbldpZHRoPXUubWF4V2lkdGg9dS53aWR0aD1hLGE9bi53aWR0aCx1LndpZHRoPXIsdS5taW5XaWR0aD1pLHUubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gX2UoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsdi5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh2LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZVwiLHQuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjoxcHggc29saWRcIix0LnN0eWxlLmhlaWdodD1cIjFweFwiLG4uc3R5bGUuaGVpZ2h0PVwiOXB4XCIsbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPXBhcnNlSW50KHIuaGVpZ2h0LDEwKStwYXJzZUludChyLmJvcmRlclRvcFdpZHRoLDEwKStwYXJzZUludChyLmJvcmRlckJvdHRvbVdpZHRoLDEwKT09PXQub2Zmc2V0SGVpZ2h0LHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgemU9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFVlPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxYZT17fTtmdW5jdGlvbiBWZShlKXt2YXIgdD1TLmNzc1Byb3BzW2VdfHxYZVtlXTtyZXR1cm4gdHx8KGUgaW4gVWU/ZTpYZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPXplLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9emVbbl0rdClpbiBVZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBHZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sWWU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFFlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBLZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPVMuY3NzKGUsbituZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSk6cys9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gWmUoZSx0LG4pe3ZhciByPU1lKGUpLGk9KCF2LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1CZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKFBlLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF2LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF2LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSxcInRyXCIpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStLZShlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBldChlLHQsbixyLGkpe3JldHVybiBuZXcgZXQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1TLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUJlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PVJlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PVZlKHMpKSxhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT10ZS5leGVjKG4pKSYmaVsxXSYmKG49c2UoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KFMuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSksdi5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9WCh0KTtyZXR1cm4gUmUudGVzdCh0KXx8KHQ9VmUocykpLChhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9QmUoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBRZSYmKGk9UWVbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksUy5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtTLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIUdlLnRlc3QoUy5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP1plKGUsdSxuKTpJZShlLFllLGZ1bmN0aW9uKCl7cmV0dXJuIFplKGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9TWUoZSksbz0hdi5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9LZShlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLUtlKGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9Uy5jc3MoZSx1KSksSmUoMCx0LHMpfX19KSxTLmNzc0hvb2tzLm1hcmdpbkxlZnQ9X2Uodi5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEJlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LUllKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLFMuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7Uy5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKFMuY3NzSG9va3NbaStvXS5zZXQ9SmUpfSksUy5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9TWUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09Uy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP1Muc3R5bGUoZSx0LG4pOlMuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoUy5Ud2Vlbj1ldCkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpldCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxTLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KFMuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1TLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPWV0LnByb3RvdHlwZSwoZXQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9Uy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtTLmZ4LnN0ZXBbZS5wcm9wXT9TLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhUy5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbVmUoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6Uy5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1ldC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxTLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sUy5meD1ldC5wcm90b3R5cGUuaW5pdCxTLmZ4LnN0ZXA9e307dmFyIHR0LG50LHJ0LGl0LG90PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHN0KCl7bnQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk6Qy5zZXRUaW1lb3V0KHN0LFMuZnguaW50ZXJ2YWwpLFMuZngudGljaygpKX1mdW5jdGlvbiB1dCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dD12b2lkIDB9KSx0dD1EYXRlLm5vdygpfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gY3QoZSx0LG4pe2Zvcih2YXIgcixpPShmdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChmdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGZ0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWZ0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9dHR8fHV0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpTLmV4dGVuZCh7fSxlKSxvcHRzOlMuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpTLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOnR0fHx1dCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1TLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49ZnQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKFMuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gUy5tYXAoYyxjdCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksUy5meC50aW1lcihTLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfVMuQW5pbWF0aW9uPVMuZXh0ZW5kKGZ0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBzZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sZnQudHdlZW5lcnNbbl09ZnQudHdlZW5lcnNbbl18fFtdLGZ0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSkseT1ZLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1TLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sUy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLG90LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwheXx8dm9pZCAwPT09eVtyXSljb250aW51ZTtnPSEwfWRbcl09eSYmeVtyXXx8Uy5zdHlsZShlLHIpfWlmKCh1PSFTLmlzRW1wdHlPYmplY3QodCkpfHwhUy5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9eSYmeS5kaXNwbGF5KSYmKGw9WS5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9Uy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1TLmNzcyhlLFwiZGlzcGxheVwiKSxsZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh5P1wiaGlkZGVuXCJpbiB5JiYoZz15LmhpZGRlbik6eT1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih5LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxsZShbZV0pLFkucmVtb3ZlKGUsXCJmeHNob3dcIiksZClTLnN0eWxlKGUscixkW3JdKX0pKSx1PWN0KGc/eVtyXTowLHIscCksciBpbiB5fHwoeVtyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9mdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6ZnQucHJlZmlsdGVycy5wdXNoKGUpfX0pLFMuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP1MuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIFMuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gUy5meC5zcGVlZHM/ci5kdXJhdGlvbj1TLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPVMuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmUy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LFMuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPVMuaXNFbXB0eU9iamVjdCh0KSxvPVMuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1mdCh0aGlzLFMuZXh0ZW5kKHt9LHQpLG8pOyhpfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPVMudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmYXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8Uy5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9Uy50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLFMucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksUy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPVMuZm5bcl07Uy5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobHQociwhMCksZSx0LG4pfX0pLFMuZWFjaCh7c2xpZGVEb3duOmx0KFwic2hvd1wiKSxzbGlkZVVwOmx0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpsdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxTLnRpbWVycz1bXSxTLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1TLnRpbWVycztmb3IodHQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxTLmZ4LnN0b3AoKSx0dD12b2lkIDB9LFMuZngudGltZXI9ZnVuY3Rpb24oZSl7Uy50aW1lcnMucHVzaChlKSxTLmZ4LnN0YXJ0KCl9LFMuZnguaW50ZXJ2YWw9MTMsUy5meC5zdGFydD1mdW5jdGlvbigpe250fHwobnQ9ITAsc3QoKSl9LFMuZnguc3RvcD1mdW5jdGlvbigpe250PW51bGx9LFMuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LFMuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1TLmZ4JiZTLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0scnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaXQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkscnQudHlwZT1cImNoZWNrYm94XCIsdi5jaGVja09uPVwiXCIhPT1ydC52YWx1ZSx2Lm9wdFNlbGVjdGVkPWl0LnNlbGVjdGVkLChydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIscnQudHlwZT1cInJhZGlvXCIsdi5yYWRpb1ZhbHVlPVwidFwiPT09cnQudmFsdWU7dmFyIHB0LGR0PVMuZXhwci5hdHRySGFuZGxlO1MuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEIodGhpcyxTLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksUy5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP1MucHJvcChlLHQsbik6KDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwoaT1TLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoUy5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9wdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgUy5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1TLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXYucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFApO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLHB0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9TLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxTLmVhY2goUy5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZHRbdF18fFMuZmluZC5hdHRyO2R0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1kdFtvXSxkdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGR0W29dPWkpLHJ9fSk7dmFyIGh0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZ3Q9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIHl0KGUpe3JldHVybihlLm1hdGNoKFApfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24gdnQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIG10KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUCl8fFtdfVMuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEIodGhpcyxTLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW1MucHJvcEZpeFtlXXx8ZV19KX19KSxTLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJlMuaXNYTUxEb2MoZSl8fCh0PVMucHJvcEZpeFt0XXx8dCxpPVMucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmh0LnRlc3QoZS5ub2RlTmFtZSl8fGd0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksdi5vcHRTZWxlY3RlZHx8KFMucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxTLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7Uy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLFMuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGE7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSkpfSk6KGU9bXQodCkpLmxlbmd0aD90aGlzLmVhY2goZnVuY3Rpb24oKXtpZihyPXZ0KHRoaXMpLG49MT09PXRoaXMubm9kZVR5cGUmJlwiIFwiK3l0KHIpK1wiIFwiKXtmb3Iobz0wO288ZS5sZW5ndGg7bysrKWk9ZVtvXSxuLmluZGV4T2YoXCIgXCIraStcIiBcIik8MCYmKG4rPWkrXCIgXCIpO2E9eXQobiksciE9PWEmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19KTp0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGE7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSkpfSk6YXJndW1lbnRzLmxlbmd0aD8oZT1tdCh0KSkubGVuZ3RoP3RoaXMuZWFjaChmdW5jdGlvbigpe2lmKHI9dnQodGhpcyksbj0xPT09dGhpcy5ub2RlVHlwZSYmXCIgXCIreXQocikrXCIgXCIpe2ZvcihvPTA7bzxlLmxlbmd0aDtvKyspe2k9ZVtvXTt3aGlsZSgtMTxuLmluZGV4T2YoXCIgXCIraStcIiBcIikpbj1uLnJlcGxhY2UoXCIgXCIraStcIiBcIixcIiBcIil9YT15dChuKSxyIT09YSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfX0pOnRoaXM6dGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKX0sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24odCxuKXt2YXIgZSxyLGksbyxhPXR5cGVvZiB0LHM9XCJzdHJpbmdcIj09PWF8fEFycmF5LmlzQXJyYXkodCk7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykudG9nZ2xlQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSxuKSxuKX0pOlwiYm9vbGVhblwiPT10eXBlb2YgbiYmcz9uP3RoaXMuYWRkQ2xhc3ModCk6dGhpcy5yZW1vdmVDbGFzcyh0KTooZT1tdCh0KSx0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihzKWZvcihvPVModGhpcyksaT0wO2k8ZS5sZW5ndGg7aSsrKXI9ZVtpXSxvLmhhc0NsYXNzKHIpP28ucmVtb3ZlQ2xhc3Mocik6by5hZGRDbGFzcyhyKTtlbHNlIHZvaWQgMCE9PXQmJlwiYm9vbGVhblwiIT09YXx8KChyPXZ0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixyKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHJ8fCExPT09dD9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmLTE8KFwiIFwiK3l0KHZ0KG4pKStcIiBcIikuaW5kZXhPZih0KSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgeHQ9L1xcci9nO1MuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxTKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1TLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLChyPVMudmFsSG9va3NbdGhpcy50eXBlXXx8Uy52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT10KSl9KSk6dD8ocj1TLnZhbEhvb2tzW3QudHlwZV18fFMudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHh0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxTLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90Onl0KFMudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PVMobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1TLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8Uy5pbkFycmF5KFMudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLFMuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtTLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8Uy5pbkFycmF5KFMoZSkudmFsKCksdCl9fSx2LmNoZWNrT258fChTLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLHYuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gQzt2YXIgYnQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHd0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O1MuZXh0ZW5kKFMuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMsZixwPVtufHxFXSxkPXkuY2FsbChlLFwidHlwZVwiKT9lLnR5cGU6ZSxoPXkuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihvPWY9YT1uPW58fEUsMyE9PW4ubm9kZVR5cGUmJjghPT1uLm5vZGVUeXBlJiYhYnQudGVzdChkK1MuZXZlbnQudHJpZ2dlcmVkKSYmKC0xPGQuaW5kZXhPZihcIi5cIikmJihkPShoPWQuc3BsaXQoXCIuXCIpKS5zaGlmdCgpLGguc29ydCgpKSx1PWQuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK2QsKGU9ZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZCxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSkpLmlzVHJpZ2dlcj1yPzI6MyxlLm5hbWVzcGFjZT1oLmpvaW4oXCIuXCIpLGUucm5hbWVzcGFjZT1lLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOlMubWFrZUFycmF5KHQsW2VdKSxjPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLGJ0LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fEUpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSYmWS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmVihvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IVYobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLFMuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCx3dCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsd3QpLFMuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9Uy5leHRlbmQobmV3IFMuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7Uy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxTLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBTLmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHYuZm9jdXNpbnx8Uy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtTLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsUy5ldmVudC5maXgoZSkpfTtTLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxZLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUsciktMTt0P1kuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksWS5yZW1vdmUoZSxyKSl9fX0pO3ZhciBUdD1DLmxvY2F0aW9uLEN0PXtndWlkOkRhdGUubm93KCl9LEV0PS9cXD8vO1MucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQsbjtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBDLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXt9cmV0dXJuIG49dCYmdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLHQmJiFufHxTLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiKyhuP1MubWFwKG4uY2hpbGROb2RlcyxmdW5jdGlvbihlKXtyZXR1cm4gZS50ZXh0Q29udGVudH0pLmpvaW4oXCJcXG5cIik6ZSkpLHR9O3ZhciBTdD0vXFxbXFxdJC8sa3Q9L1xccj9cXG4vZyxBdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksTnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIGp0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpUy5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxTdC50ZXN0KG4pP2kobix0KTpqdChuK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dD9lOlwiXCIpK1wiXVwiLHQscixpKX0pO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlqdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfVMucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFTLmlzUGxhaW5PYmplY3QoZSkpUy5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlqdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0sUy5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBTLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9Uy5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9TLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFTKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZOdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhQXQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49Uyh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/Uy5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIER0PS8lMjAvZyxxdD0vIy4qJC8sTHQ9LyhbPyZdKV89W14mXSovLEh0PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sT3Q9L14oPzpHRVR8SEVBRCkkLyxQdD0vXlxcL1xcLy8sUnQ9e30sTXQ9e30sSXQ9XCIqL1wiLmNvbmNhdChcIipcIiksV3Q9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBGdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiKlwiKTt2YXIgbixyPTAsaT1lLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtdO2lmKG0odCkpd2hpbGUobj1pW3IrK10pXCIrXCI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fFwiKlwiLChvW25dPW9bbl18fFtdKS51bnNoaWZ0KHQpKToob1tuXT1vW25dfHxbXSkucHVzaCh0KX19ZnVuY3Rpb24gJHQodCxpLG8sYSl7dmFyIHM9e30sdT10PT09TXQ7ZnVuY3Rpb24gbChlKXt2YXIgcjtyZXR1cm4gc1tlXT0hMCxTLmVhY2godFtlXXx8W10sZnVuY3Rpb24oZSx0KXt2YXIgbj10KGksbyxhKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Ygbnx8dXx8c1tuXT91PyEocj1uKTp2b2lkIDA6KGkuZGF0YVR5cGVzLnVuc2hpZnQobiksbChuKSwhMSl9KSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiBCdChlLHQpe3ZhciBuLHIsaT1TLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZTLmV4dGVuZCghMCxlLHIpLGV9V3QuaHJlZj1UdC5ocmVmLFMuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpUdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoVHQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkl0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpTLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9CdChCdChlLFMuYWpheFNldHRpbmdzKSx0KTpCdChTLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChSdCksYWpheFRyYW5zcG9ydDpGdChNdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHk9Uy5hamF4U2V0dXAoe30sdCksdj15LmNvbnRleHR8fHksbT15LmNvbnRleHQmJih2Lm5vZGVUeXBlfHx2LmpxdWVyeSk/Uyh2KTpTLmV2ZW50LHg9Uy5EZWZlcnJlZCgpLGI9Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXkuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbil7bj17fTt3aGlsZSh0PUh0LmV4ZWMocCkpblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdPShuW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKStcIiBcIl19cmV0dXJuIG51bGw9PXQ/bnVsbDp0LmpvaW4oXCIsIFwiKX0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGg/cDpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWgmJihlPXNbZS50b0xvd2VyQ2FzZSgpXT1zW2UudG9Mb3dlckNhc2UoKV18fGUsYVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1oJiYoeS5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoaClULmFsd2F5cyhlW1Quc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXdbdF09W3dbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fHU7cmV0dXJuIGMmJmMuYWJvcnQodCksbCgwLHQpLHRoaXN9fTtpZih4LnByb21pc2UoVCkseS51cmw9KChlfHx5LnVybHx8VHQuaHJlZikrXCJcIikucmVwbGFjZShQdCxUdC5wcm90b2NvbCtcIi8vXCIpLHkudHlwZT10Lm1ldGhvZHx8dC50eXBlfHx5Lm1ldGhvZHx8eS50eXBlLHkuZGF0YVR5cGVzPSh5LmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W1wiXCJdLG51bGw9PXkuY3Jvc3NEb21haW4pe3I9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ci5ocmVmPXkudXJsLHIuaHJlZj1yLmhyZWYseS5jcm9zc0RvbWFpbj1XdC5wcm90b2NvbCtcIi8vXCIrV3QuaG9zdCE9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0fWNhdGNoKGUpe3kuY3Jvc3NEb21haW49ITB9fWlmKHkuZGF0YSYmeS5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHkuZGF0YSYmKHkuZGF0YT1TLnBhcmFtKHkuZGF0YSx5LnRyYWRpdGlvbmFsKSksJHQoUnQseSx0LFQpLGgpcmV0dXJuIFQ7Zm9yKGkgaW4oZz1TLmV2ZW50JiZ5Lmdsb2JhbCkmJjA9PVMuYWN0aXZlKysmJlMuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSx5LnR5cGU9eS50eXBlLnRvVXBwZXJDYXNlKCkseS5oYXNDb250ZW50PSFPdC50ZXN0KHkudHlwZSksZj15LnVybC5yZXBsYWNlKHF0LFwiXCIpLHkuaGFzQ29udGVudD95LmRhdGEmJnkucHJvY2Vzc0RhdGEmJjA9PT0oeS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKHkuZGF0YT15LmRhdGEucmVwbGFjZShEdCxcIitcIikpOihvPXkudXJsLnNsaWNlKGYubGVuZ3RoKSx5LmRhdGEmJih5LnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2YgeS5kYXRhKSYmKGYrPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKSt5LmRhdGEsZGVsZXRlIHkuZGF0YSksITE9PT15LmNhY2hlJiYoZj1mLnJlcGxhY2UoTHQsXCIkMVwiKSxvPShFdC50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrQ3QuZ3VpZCsrK28pLHkudXJsPWYrbykseS5pZk1vZGlmaWVkJiYoUy5sYXN0TW9kaWZpZWRbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsUy5sYXN0TW9kaWZpZWRbZl0pLFMuZXRhZ1tmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLFMuZXRhZ1tmXSkpLCh5LmRhdGEmJnkuaGFzQ29udGVudCYmITEhPT15LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIseS5jb250ZW50VHlwZSksVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIseS5kYXRhVHlwZXNbMF0mJnkuYWNjZXB0c1t5LmRhdGFUeXBlc1swXV0/eS5hY2NlcHRzW3kuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT15LmRhdGFUeXBlc1swXT9cIiwgXCIrSXQrXCI7IHE9MC4wMVwiOlwiXCIpOnkuYWNjZXB0c1tcIipcIl0pLHkuaGVhZGVycylULnNldFJlcXVlc3RIZWFkZXIoaSx5LmhlYWRlcnNbaV0pO2lmKHkuYmVmb3JlU2VuZCYmKCExPT09eS5iZWZvcmVTZW5kLmNhbGwodixULHkpfHxoKSlyZXR1cm4gVC5hYm9ydCgpO2lmKHU9XCJhYm9ydFwiLGIuYWRkKHkuY29tcGxldGUpLFQuZG9uZSh5LnN1Y2Nlc3MpLFQuZmFpbCh5LmVycm9yKSxjPSR0KE10LHksdCxUKSl7aWYoVC5yZWFkeVN0YXRlPTEsZyYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbVCx5XSksaClyZXR1cm4gVDt5LmFzeW5jJiYwPHkudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydChcInRpbWVvdXRcIil9LHkudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh5LFQsbikpLCFpJiYtMTxTLmluQXJyYXkoXCJzY3JpcHRcIix5LmRhdGFUeXBlcykmJlMuaW5BcnJheShcImpzb25cIix5LmRhdGFUeXBlcyk8MCYmKHkuY29udmVydGVyc1tcInRleHQgc2NyaXB0XCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh5LHMsVCxpKSxpPyh5LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihTLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihTLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09eS50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh2LFtvLGwsVF0pOngucmVqZWN0V2l0aCh2LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx5LGk/bzphXSksYi5maXJlV2l0aCh2LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1QseV0pLC0tUy5hY3RpdmV8fFMuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBTLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLFMuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxpKXtTW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksUy5hamF4KFMuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxTLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKVwiY29udGVudC10eXBlXCI9PT10LnRvTG93ZXJDYXNlKCkmJihlLmNvbnRlbnRUeXBlPWUuaGVhZGVyc1t0XXx8XCJcIil9KSxTLl9ldmFsVXJsPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKCl7fX0sZGF0YUZpbHRlcjpmdW5jdGlvbihlKXtTLmdsb2JhbEV2YWwoZSx0LG4pfX0pfSxTLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKG0oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1TKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihuKXtyZXR1cm4gbShuKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uyh0aGlzKSx0PWUuY29udGVudHMoKTt0Lmxlbmd0aD90LndyYXBBbGwobik6ZS5hcHBlbmQobil9KX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwQWxsKG4/dC5jYWxsKHRoaXMsZSk6dCl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLFMuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hUy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sUy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LFMuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIF90PXswOjIwMCwxMjIzOjIwNH0senQ9Uy5hamF4U2V0dGluZ3MueGhyKCk7di5jb3JzPSEhenQmJlwid2l0aENyZWRlbnRpYWxzXCJpbiB6dCx2LmFqYXg9enQ9ISF6dCxTLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oaSl7dmFyIG8sYTtpZih2LmNvcnN8fHp0JiYhaS5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS54aHIoKTtpZihyLm9wZW4oaS50eXBlLGkudXJsLGkuYXN5bmMsaS51c2VybmFtZSxpLnBhc3N3b3JkKSxpLnhockZpZWxkcylmb3IobiBpbiBpLnhockZpZWxkcylyW25dPWkueGhyRmllbGRzW25dO2ZvcihuIGluIGkubWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlKGkubWltZVR5cGUpLGkuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKSxlKXIuc2V0UmVxdWVzdEhlYWRlcihuLGVbbl0pO289ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7byYmKG89YT1yLm9ubG9hZD1yLm9uZXJyb3I9ci5vbmFib3J0PXIub250aW1lb3V0PXIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9yLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygci5zdGF0dXM/dCgwLFwiZXJyb3JcIik6dChyLnN0YXR1cyxyLnN0YXR1c1RleHQpOnQoX3Rbci5zdGF0dXNdfHxyLnN0YXR1cyxyLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHIucmVzcG9uc2VUZXh0P3tiaW5hcnk6ci5yZXNwb25zZX06e3RleHQ6ci5yZXNwb25zZVRleHR9LHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHIub25sb2FkPW8oKSxhPXIub25lcnJvcj1yLm9udGltZW91dD1vKFwiZXJyb3JcIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89byhcImFib3J0XCIpO3RyeXtyLnNlbmQoaS5oYXNDb250ZW50JiZpLmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG8pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7byYmbygpfX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLFMuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBTLmdsb2JhbEV2YWwoZSksZX19fSksUy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxTLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihuKXt2YXIgcixpO2lmKG4uY3Jvc3NEb21haW58fG4uc2NyaXB0QXR0cnMpcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXtyPVMoXCI8c2NyaXB0PlwiKS5hdHRyKG4uc2NyaXB0QXR0cnN8fHt9KS5wcm9wKHtjaGFyc2V0Om4uc2NyaXB0Q2hhcnNldCxzcmM6bi51cmx9KS5vbihcImxvYWQgZXJyb3JcIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLEUuaGVhZC5hcHBlbmRDaGlsZChyWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtpJiZpKCl9fX0pO3ZhciBVdCxYdD1bXSxWdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO1MuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPVh0LnBvcCgpfHxTLmV4cGFuZG8rXCJfXCIrQ3QuZ3VpZCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksUy5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihWdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVnQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShWdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShFdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxTLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1pP1MoQykucmVtb3ZlUHJvcChyKTpDW3JdPWksZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssWHQucHVzaChyKSksbyYmbShpKSYmaShvWzBdKSxvPWk9dm9pZCAwfSksXCJzY3JpcHRcIn0pLHYuY3JlYXRlSFRNTERvY3VtZW50PSgoVXQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VXQuY2hpbGROb2Rlcy5sZW5ndGgpLFMucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh2LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmUyhvKS5yZW1vdmUoKSxTLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LFMuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9eXQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZTLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP1MoXCI8ZGl2PlwiKS5hcHBlbmQoUy5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxTLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gUy5ncmVwKFMudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxTLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1TLmNzcyhlLFwicG9zaXRpb25cIiksYz1TKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89Uy5jc3MoZSxcInRvcFwiKSx1PVMuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLFMuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOmMuY3NzKGYpfX0sUy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1Mub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PVMuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9UyhlKS5vZmZzZXQoKSkudG9wKz1TLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1TLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLVMuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LVMuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8cmV9KX19KSxTLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLFMuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtTLmNzc0hvb2tzW25dPV9lKHYucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxQZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksUy5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe1MuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9TLmNzcyhlLHQsaSk6Uy5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksUy5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksUy5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0saG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksUy5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe1MuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3woW15cXHNcXHVGRUZGXFx4QTBdKVtcXHNcXHVGRUZGXFx4QTBdKyQvZztTLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Uy5ndWlkKyssaX0sUy5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9TLnJlYWR5V2FpdCsrOlMucmVhZHkoITApfSxTLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxTLnBhcnNlSlNPTj1KU09OLnBhcnNlLFMubm9kZU5hbWU9QSxTLmlzRnVuY3Rpb249bSxTLmlzV2luZG93PXgsUy5jYW1lbENhc2U9WCxTLnR5cGU9dyxTLm5vdz1EYXRlLm5vdyxTLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1TLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxTLnRyaW09ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKEd0LFwiJDFcIil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gU30pO3ZhciBZdD1DLmpRdWVyeSxRdD1DLiQ7cmV0dXJuIFMubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09UyYmKEMuJD1RdCksZSYmQy5qUXVlcnk9PT1TJiYoQy5qUXVlcnk9WXQpLFN9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoQy5qUXVlcnk9Qy4kPVMpLFN9KTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRzKSB7XG5cdGlmIChvcHRzLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRzLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcblx0XHR9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGlucHV0W2tleV07XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3Qoc3RyKSB7XG5cdHZhciBxdWVyeVN0YXJ0ID0gc3RyLmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBzdHIuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdHMpIHtcblx0b3B0cyA9IG9iamVjdEFzc2lnbih7YXJyYXlGb3JtYXQ6ICdub25lJ30sIG9wdHMpO1xuXG5cdHZhciBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL2lzc3Vlcy80N1xuXHR2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHRpZiAob3B0cy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdG9wdHMuc29ydCA9IGZ1bmN0aW9uICgpIHt9O1xuXHR9XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KG9wdHMuc29ydCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcblx0cmV0dXJuIHtcblx0XHR1cmw6IHN0ci5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHN0ciksIG9wdHMpXG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9dHx8c2VsZikuU3dlZXRhbGVydDI9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gYSh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLmtleSxvKX19ZnVuY3Rpb24gYyh0LGUsbil7cmV0dXJuIGUmJm8odC5wcm90b3R5cGUsZSksbiYmbyh0LG4pLHR9ZnVuY3Rpb24gcygpe3JldHVybihzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gdSh0KXtyZXR1cm4odT1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9ZnVuY3Rpb24gbCh0LGUpe3JldHVybihsPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBkKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLGZ1bmN0aW9uKCl7fSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBpKHQsZSxuKXtyZXR1cm4oaT1kKCk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPVtudWxsXTtvLnB1c2guYXBwbHkobyxlKTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseSh0LG8pKTtyZXR1cm4gbiYmbChpLG4ucHJvdG90eXBlKSxpfSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4hZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIHR9KHQpOmV9ZnVuY3Rpb24gZih0LGUsbil7cmV0dXJuKGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuZ2V0P1JlZmxlY3QuZ2V0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1mdW5jdGlvbih0LGUpe2Zvcig7IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpJiZudWxsIT09KHQ9dSh0KSk7KTtyZXR1cm4gdH0odCxlKTtpZihvKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sZSk7cmV0dXJuIGkuZ2V0P2kuZ2V0LmNhbGwobik6aS52YWx1ZX19KSh0LGUsbnx8dCl9ZnVuY3Rpb24gbShlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSl9ZnVuY3Rpb24gaCh0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCl9ZnVuY3Rpb24gZyh0LGUpe3ZhciBuO249J1wiJy5jb25jYXQodCwnXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXCInKS5jb25jYXQoZSwnXCIgaW5zdGVhZC4nKSwtMT09PXouaW5kZXhPZihuKSYmKHoucHVzaChuKSxfKG4pKX1mdW5jdGlvbiB2KHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvUHJvbWlzZX1mdW5jdGlvbiBiKHQpe3JldHVybiB2KHQpP3QudG9Qcm9taXNlKCk6UHJvbWlzZS5yZXNvbHZlKHQpfWZ1bmN0aW9uIHkodCl7cmV0dXJuIHQmJlByb21pc2UucmVzb2x2ZSh0KT09PXR9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fFwib2JqZWN0XCI9PT1yKGU9dCkmJmUuanF1ZXJ5O3ZhciBlfWZ1bmN0aW9uIHQodCl7dmFyIGU9e307Zm9yKHZhciBuIGluIHQpZVt0W25dXT1cInN3YWwyLVwiK3Rbbl07cmV0dXJuIGV9ZnVuY3Rpb24gQyh0KXt2YXIgZT1RKCk7cmV0dXJuIGU/ZS5xdWVyeVNlbGVjdG9yKHQpOm51bGx9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gQyhcIi5cIi5jb25jYXQodCkpfWZ1bmN0aW9uIG4oKXt2YXIgdD0kKCk7cmV0dXJuIGgodC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdChZLmljb24pKSl9ZnVuY3Rpb24gaygpe3ZhciB0PW4oKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHZ0KHQpfSk7cmV0dXJuIHQubGVuZ3RoP3RbMF06bnVsbH1mdW5jdGlvbiB4KCl7cmV0dXJuIGUoWS50aXRsZSl9ZnVuY3Rpb24gUCgpe3JldHVybiBlKFkuY29udGVudCl9ZnVuY3Rpb24gQSgpe3JldHVybiBlKFkuaW1hZ2UpfWZ1bmN0aW9uIEIoKXtyZXR1cm4gZShZW1wicHJvZ3Jlc3Mtc3RlcHNcIl0pfWZ1bmN0aW9uIFMoKXtyZXR1cm4gZShZW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKX1mdW5jdGlvbiBFKCl7cmV0dXJuIEMoXCIuXCIuY29uY2F0KFkuYWN0aW9ucyxcIiAuXCIpLmNvbmNhdChZLmNvbmZpcm0pKX1mdW5jdGlvbiBPKCl7cmV0dXJuIEMoXCIuXCIuY29uY2F0KFkuYWN0aW9ucyxcIiAuXCIpLmNvbmNhdChZLmNhbmNlbCkpfWZ1bmN0aW9uIFQoKXtyZXR1cm4gZShZLmFjdGlvbnMpfWZ1bmN0aW9uIEwoKXtyZXR1cm4gZShZLmhlYWRlcil9ZnVuY3Rpb24gaigpe3JldHVybiBlKFkuZm9vdGVyKX1mdW5jdGlvbiBxKCl7cmV0dXJuIGUoWVtcInRpbWVyLXByb2dyZXNzLWJhclwiXSl9ZnVuY3Rpb24gSSgpe3JldHVybiBlKFkuY2xvc2UpfWZ1bmN0aW9uIFYoKXt2YXIgdD1oKCQoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdD1wYXJzZUludCh0LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpKSwoZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpKSk8dD8xOnQ8ZT8tMTowfSksZT1oKCQoKS5xdWVyeVNlbGVjdG9yQWxsKCdcXG4gIGFbaHJlZl0sXFxuICBhcmVhW2hyZWZdLFxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxcbiAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXFxuICBpZnJhbWUsXFxuICBvYmplY3QsXFxuICBlbWJlZCxcXG4gIFt0YWJpbmRleD1cIjBcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG4nKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVyblwiLTFcIiE9PXQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIil9KTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLG49MDtuPHQubGVuZ3RoO24rKyktMT09PWUuaW5kZXhPZih0W25dKSYmZS5wdXNoKHRbbl0pO3JldHVybiBlfSh0LmNvbmNhdChlKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB2dCh0KX0pfWZ1bmN0aW9uIE0oKXtyZXR1cm4hSigpJiYhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoWVtcIm5vLWJhY2tkcm9wXCJdKX1mdW5jdGlvbiBSKCl7cmV0dXJuICQoKS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIil9ZnVuY3Rpb24gSChlLHQpe3ZhciBuO2UudGV4dENvbnRlbnQ9XCJcIix0JiYobj0obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L2h0bWxcIiksaChuLnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5hcHBlbmRDaGlsZCh0KX0pLGgobi5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuYXBwZW5kQ2hpbGQodCl9KSl9ZnVuY3Rpb24gRCh0LGUpe2lmKGUpe2Zvcih2YXIgbj1lLnNwbGl0KC9cXHMrLyksbz0wO288bi5sZW5ndGg7bysrKWlmKCF0LmNsYXNzTGlzdC5jb250YWlucyhuW29dKSlyZXR1cm47cmV0dXJuIDF9fWZ1bmN0aW9uIE4odCxlLG4pe3ZhciBvLGk7aWYoaT1lLGgoKG89dCkuY2xhc3NMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xPT09bShZKS5pbmRleE9mKHQpJiYtMT09PW0oWikuaW5kZXhPZih0KSYmLTE9PT1tKGkuc2hvd0NsYXNzKS5pbmRleE9mKHQpJiZvLmNsYXNzTGlzdC5yZW1vdmUodCl9KSxlLmN1c3RvbUNsYXNzJiZlLmN1c3RvbUNsYXNzW25dKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZS5jdXN0b21DbGFzc1tuXSYmIWUuY3VzdG9tQ2xhc3Nbbl0uZm9yRWFjaClyZXR1cm4gXyhcIkludmFsaWQgdHlwZSBvZiBjdXN0b21DbGFzcy5cIi5jb25jYXQobiwnISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXCInKS5jb25jYXQocihlLmN1c3RvbUNsYXNzW25dKSwnXCInKSk7bXQodCxlLmN1c3RvbUNsYXNzW25dKX19dmFyIFU9XCJTd2VldEFsZXJ0MjpcIixfPWZ1bmN0aW9uKHQpe2NvbnNvbGUud2FybihcIlwiLmNvbmNhdChVLFwiIFwiKS5jb25jYXQodCkpfSxGPWZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoVSxcIiBcIikuY29uY2F0KHQpKX0sej1bXSxXPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnR9LEs9T2JqZWN0LmZyZWV6ZSh7Y2FuY2VsOlwiY2FuY2VsXCIsYmFja2Ryb3A6XCJiYWNrZHJvcFwiLGNsb3NlOlwiY2xvc2VcIixlc2M6XCJlc2NcIix0aW1lcjpcInRpbWVyXCJ9KSxZPXQoW1wiY29udGFpbmVyXCIsXCJzaG93blwiLFwiaGVpZ2h0LWF1dG9cIixcImlvc2ZpeFwiLFwicG9wdXBcIixcIm1vZGFsXCIsXCJuby1iYWNrZHJvcFwiLFwibm8tdHJhbnNpdGlvblwiLFwidG9hc3RcIixcInRvYXN0LXNob3duXCIsXCJ0b2FzdC1jb2x1bW5cIixcInNob3dcIixcImhpZGVcIixcImNsb3NlXCIsXCJ0aXRsZVwiLFwiaGVhZGVyXCIsXCJjb250ZW50XCIsXCJodG1sLWNvbnRhaW5lclwiLFwiYWN0aW9uc1wiLFwiY29uZmlybVwiLFwiY2FuY2VsXCIsXCJmb290ZXJcIixcImljb25cIixcImljb24tY29udGVudFwiLFwiaW1hZ2VcIixcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcImxhYmVsXCIsXCJ0ZXh0YXJlYVwiLFwiaW5wdXRlcnJvclwiLFwidmFsaWRhdGlvbi1tZXNzYWdlXCIsXCJwcm9ncmVzcy1zdGVwc1wiLFwiYWN0aXZlLXByb2dyZXNzLXN0ZXBcIixcInByb2dyZXNzLXN0ZXBcIixcInByb2dyZXNzLXN0ZXAtbGluZVwiLFwibG9hZGluZ1wiLFwic3R5bGVkXCIsXCJ0b3BcIixcInRvcC1zdGFydFwiLFwidG9wLWVuZFwiLFwidG9wLWxlZnRcIixcInRvcC1yaWdodFwiLFwiY2VudGVyXCIsXCJjZW50ZXItc3RhcnRcIixcImNlbnRlci1lbmRcIixcImNlbnRlci1sZWZ0XCIsXCJjZW50ZXItcmlnaHRcIixcImJvdHRvbVwiLFwiYm90dG9tLXN0YXJ0XCIsXCJib3R0b20tZW5kXCIsXCJib3R0b20tbGVmdFwiLFwiYm90dG9tLXJpZ2h0XCIsXCJncm93LXJvd1wiLFwiZ3Jvdy1jb2x1bW5cIixcImdyb3ctZnVsbHNjcmVlblwiLFwicnRsXCIsXCJ0aW1lci1wcm9ncmVzcy1iYXJcIixcInRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJcIixcInNjcm9sbGJhci1tZWFzdXJlXCIsXCJpY29uLXN1Y2Nlc3NcIixcImljb24td2FybmluZ1wiLFwiaWNvbi1pbmZvXCIsXCJpY29uLXF1ZXN0aW9uXCIsXCJpY29uLWVycm9yXCJdKSxaPXQoW1wic3VjY2Vzc1wiLFwid2FybmluZ1wiLFwiaW5mb1wiLFwicXVlc3Rpb25cIixcImVycm9yXCJdKSxRPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5jb250YWluZXIpKX0sJD1mdW5jdGlvbigpe3JldHVybiBlKFkucG9wdXApfSxKPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFlbXCJ0b2FzdC1zaG93blwiXSl9LFg9e3ByZXZpb3VzQm9keVBhZGRpbmc6bnVsbH07ZnVuY3Rpb24gRyh0LGUpe2lmKCFlKXJldHVybiBudWxsO3N3aXRjaChlKXtjYXNlXCJzZWxlY3RcIjpjYXNlXCJ0ZXh0YXJlYVwiOmNhc2VcImZpbGVcIjpyZXR1cm4gZ3QodCxZW2VdKTtjYXNlXCJjaGVja2JveFwiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkuY2hlY2tib3gsXCIgaW5wdXRcIikpO2Nhc2VcInJhZGlvXCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5yYWRpbyxcIiBpbnB1dDpjaGVja2VkXCIpKXx8dC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLnJhZGlvLFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtjYXNlXCJyYW5nZVwiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkucmFuZ2UsXCIgaW5wdXRcIikpO2RlZmF1bHQ6cmV0dXJuIGd0KHQsWS5pbnB1dCl9fWZ1bmN0aW9uIHR0KHQpe3ZhciBlO3QuZm9jdXMoKSxcImZpbGVcIiE9PXQudHlwZSYmKGU9dC52YWx1ZSx0LnZhbHVlPVwiXCIsdC52YWx1ZT1lKX1mdW5jdGlvbiBldCh0LGUsbil7dCYmZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1lLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7dC5mb3JFYWNoP3QuZm9yRWFjaChmdW5jdGlvbih0KXtuP3QuY2xhc3NMaXN0LmFkZChlKTp0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KTpuP3QuY2xhc3NMaXN0LmFkZChlKTp0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KSl9ZnVuY3Rpb24gbnQodCxlLG4pe258fDA9PT1wYXJzZUludChuKT90LnN0eWxlW2VdPVwibnVtYmVyXCI9PXR5cGVvZiBuP1wiXCIuY29uY2F0KG4sXCJweFwiKTpuOnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZSl9ZnVuY3Rpb24gb3QodCxlKXt2YXIgbj0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWU/ZTpcImZsZXhcIjt0LnN0eWxlLm9wYWNpdHk9XCJcIix0LnN0eWxlLmRpc3BsYXk9bn1mdW5jdGlvbiBpdCh0KXt0LnN0eWxlLm9wYWNpdHk9XCJcIix0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9ZnVuY3Rpb24gcnQodCxlLG4pe2U/b3QodCxuKTppdCh0KX1mdW5jdGlvbiBhdCh0KXtyZXR1cm4hISh0LnNjcm9sbEhlaWdodD50LmNsaWVudEhlaWdodCl9ZnVuY3Rpb24gY3QodCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksbj1wYXJzZUZsb2F0KGUuZ2V0UHJvcGVydHlWYWx1ZShcImFuaW1hdGlvbi1kdXJhdGlvblwiKXx8XCIwXCIpLG89cGFyc2VGbG9hdChlLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpfHxcIjBcIik7cmV0dXJuIDA8bnx8MDxvfWZ1bmN0aW9uIHN0KHQsZSl7dmFyIG49MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1lJiZlLG89cSgpO3Z0KG8pJiYobiYmKG8uc3R5bGUudHJhbnNpdGlvbj1cIm5vbmVcIixvLnN0eWxlLndpZHRoPVwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by5zdHlsZS50cmFuc2l0aW9uPVwid2lkdGggXCIuY29uY2F0KHQvMWUzLFwicyBsaW5lYXJcIiksby5zdHlsZS53aWR0aD1cIjAlXCJ9LDEwKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnR9ZnVuY3Rpb24gbHQodCl7c24uaXNWaXNpYmxlKCkmJmZ0IT09dC50YXJnZXQudmFsdWUmJnNuLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxmdD10LnRhcmdldC52YWx1ZX1mdW5jdGlvbiBkdCh0LGUpe3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9lLmFwcGVuZENoaWxkKHQpOlwib2JqZWN0XCI9PT1yKHQpP3d0KHQsZSk6dCYmSChlLHQpfWZ1bmN0aW9uIHB0KHQsZSl7dmFyIG49VCgpLG89RSgpLGk9TygpO2Uuc2hvd0NvbmZpcm1CdXR0b258fGUuc2hvd0NhbmNlbEJ1dHRvbnx8aXQobiksTihuLGUsXCJhY3Rpb25zXCIpLHh0KG8sXCJjb25maXJtXCIsZSkseHQoaSxcImNhbmNlbFwiLGUpLGUuYnV0dG9uc1N0eWxpbmc/ZnVuY3Rpb24odCxlLG4pe210KFt0LGVdLFkuc3R5bGVkKSxuLmNvbmZpcm1CdXR0b25Db2xvciYmKHQuc3R5bGUuYmFja2dyb3VuZENvbG9yPW4uY29uZmlybUJ1dHRvbkNvbG9yKTtuLmNhbmNlbEJ1dHRvbkNvbG9yJiYoZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9bi5jYW5jZWxCdXR0b25Db2xvcik7e3ZhciBvO1IoKXx8KG89d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmQtY29sb3JcIiksdC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9byx0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3I9byl9fShvLGksZSk6KGh0KFtvLGldLFkuc3R5bGVkKSxvLnN0eWxlLmJhY2tncm91bmRDb2xvcj1vLnN0eWxlLmJvcmRlckxlZnRDb2xvcj1vLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3I9XCJcIixpLnN0eWxlLmJhY2tncm91bmRDb2xvcj1pLnN0eWxlLmJvcmRlckxlZnRDb2xvcj1pLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3I9XCJcIiksZS5yZXZlcnNlQnV0dG9ucyYmby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLG8pfXZhciBmdCxtdD1mdW5jdGlvbih0LGUpe2V0KHQsZSwhMCl9LGh0PWZ1bmN0aW9uKHQsZSl7ZXQodCxlLCExKX0sZ3Q9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MDtuPHQuY2hpbGROb2Rlcy5sZW5ndGg7bisrKWlmKEQodC5jaGlsZE5vZGVzW25dLGUpKXJldHVybiB0LmNoaWxkTm9kZXNbbl19LHZ0PWZ1bmN0aW9uKHQpe3JldHVybiEoIXR8fCEodC5vZmZzZXRXaWR0aHx8dC5vZmZzZXRIZWlnaHR8fHQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKX0sYnQ9J1xcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIicuY29uY2F0KFkudGl0bGUsJ1wiIGFyaWEtZGVzY3JpYmVkYnk9XCInKS5jb25jYXQoWS5jb250ZW50LCdcIiBjbGFzcz1cIicpLmNvbmNhdChZLnBvcHVwLCdcIiB0YWJpbmRleD1cIi0xXCI+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmhlYWRlciwnXCI+XFxuICAgICA8dWwgY2xhc3M9XCInKS5jb25jYXQoWVtcInByb2dyZXNzLXN0ZXBzXCJdLCdcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmljb24sXCIgXCIpLmNvbmNhdChaLmVycm9yLCdcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5pY29uLFwiIFwiKS5jb25jYXQoWi5xdWVzdGlvbiwnXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaWNvbixcIiBcIikuY29uY2F0KFoud2FybmluZywnXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaWNvbixcIiBcIikuY29uY2F0KFouaW5mbywnXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaWNvbixcIiBcIikuY29uY2F0KFouc3VjY2VzcywnXCI+PC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVwiJykuY29uY2F0KFkuaW1hZ2UsJ1wiIC8+XFxuICAgICA8aDIgY2xhc3M9XCInKS5jb25jYXQoWS50aXRsZSwnXCIgaWQ9XCInKS5jb25jYXQoWS50aXRsZSwnXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KFkuY2xvc2UsJ1wiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5jb250ZW50LCdcIj5cXG4gICAgIDxkaXYgaWQ9XCInKS5jb25jYXQoWS5jb250ZW50LCdcIiBjbGFzcz1cIicpLmNvbmNhdChZW1wiaHRtbC1jb250YWluZXJcIl0sJ1wiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVwiJykuY29uY2F0KFkuaW5wdXQsJ1wiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIicpLmNvbmNhdChZLmZpbGUsJ1wiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkucmFuZ2UsJ1wiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cIicpLmNvbmNhdChZLnNlbGVjdCwnXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkucmFkaW8sJ1wiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cIicpLmNvbmNhdChZLmNoZWNrYm94LCdcIiBjbGFzcz1cIicpLmNvbmNhdChZLmNoZWNrYm94LCdcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVwiJykuY29uY2F0KFkubGFiZWwsJ1wiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XCInKS5jb25jYXQoWS50ZXh0YXJlYSwnXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWVtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSwnXCIgaWQ9XCInKS5jb25jYXQoWVtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSwnXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmFjdGlvbnMsJ1wiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoWS5jb25maXJtLCdcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoWS5jYW5jZWwsJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5mb290ZXIsJ1wiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWVtcInRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJcIl0sJ1wiPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZW1widGltZXItcHJvZ3Jlc3MtYmFyXCJdLCdcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuJykucmVwbGFjZSgvKF58XFxuKVxccyovZyxcIlwiKSx5dD1mdW5jdGlvbih0KXt2YXIgZSxuLG8saSxyLGEsYyxzLHUsbCxkLHAsZixtLGgsZz0hIShlPVEoKSkmJihlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksaHQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxbWVtcIm5vLWJhY2tkcm9wXCJdLFlbXCJ0b2FzdC1zaG93blwiXSxZW1wiaGFzLWNvbHVtblwiXV0pLCEwKTt1dCgpP0YoXCJTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplXCIpOigobj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc05hbWU9WS5jb250YWluZXIsZyYmbXQobixZW1wibm8tdHJhbnNpdGlvblwiXSksSChuLGJ0KSwobz1cInN0cmluZ1wiPT10eXBlb2YoaT10LnRhcmdldCk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpKTppKS5hcHBlbmRDaGlsZChuKSxyPXQsKGE9JCgpKS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsci50b2FzdD9cImFsZXJ0XCI6XCJkaWFsb2dcIiksYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxpdmVcIixyLnRvYXN0P1wicG9saXRlXCI6XCJhc3NlcnRpdmVcIiksci50b2FzdHx8YS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIsXCJ0cnVlXCIpLGM9byxcInJ0bFwiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUoYykuZGlyZWN0aW9uJiZtdChRKCksWS5ydGwpLHM9UCgpLHU9Z3QocyxZLmlucHV0KSxsPWd0KHMsWS5maWxlKSxkPXMucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5yYW5nZSxcIiBpbnB1dFwiKSkscD1zLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkucmFuZ2UsXCIgb3V0cHV0XCIpKSxmPWd0KHMsWS5zZWxlY3QpLG09cy5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLmNoZWNrYm94LFwiIGlucHV0XCIpKSxoPWd0KHMsWS50ZXh0YXJlYSksdS5vbmlucHV0PWx0LGwub25jaGFuZ2U9bHQsZi5vbmNoYW5nZT1sdCxtLm9uY2hhbmdlPWx0LGgub25pbnB1dD1sdCxkLm9uaW5wdXQ9ZnVuY3Rpb24odCl7bHQodCkscC52YWx1ZT1kLnZhbHVlfSxkLm9uY2hhbmdlPWZ1bmN0aW9uKHQpe2x0KHQpLGQubmV4dFNpYmxpbmcudmFsdWU9ZC52YWx1ZX0pfSx3dD1mdW5jdGlvbih0LGUpe3QuanF1ZXJ5P0N0KGUsdCk6SChlLHQudG9TdHJpbmcoKSl9LEN0PWZ1bmN0aW9uKHQsZSl7aWYodC50ZXh0Q29udGVudD1cIlwiLDAgaW4gZSlmb3IodmFyIG49MDtuIGluIGU7bisrKXQuYXBwZW5kQ2hpbGQoZVtuXS5jbG9uZU5vZGUoITApKTtlbHNlIHQuYXBwZW5kQ2hpbGQoZS5jbG9uZU5vZGUoITApKX0sa3Q9ZnVuY3Rpb24oKXtpZih1dCgpKXJldHVybiExO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT17V2Via2l0QW5pbWF0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCIsT0FuaW1hdGlvbjpcIm9BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZFwiLGFuaW1hdGlvbjpcImFuaW1hdGlvbmVuZFwifTtmb3IodmFyIG4gaW4gZSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmdm9pZCAwIT09dC5zdHlsZVtuXSlyZXR1cm4gZVtuXTtyZXR1cm4hMX0oKTtmdW5jdGlvbiB4dCh0LGUsbil7dmFyIG87cnQodCxuW1wic2hvd1wiLmNvbmNhdCgobz1lKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStvLnNsaWNlKDEpLFwiQnV0dG9uXCIpXSxcImlubGluZS1ibG9ja1wiKSxIKHQsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uVGV4dFwiKV0pLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkFyaWFMYWJlbFwiKV0pLHQuY2xhc3NOYW1lPVlbZV0sTih0LG4sXCJcIi5jb25jYXQoZSxcIkJ1dHRvblwiKSksbXQodCxuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25DbGFzc1wiKV0pfWZ1bmN0aW9uIFB0KHQsZSl7dmFyIG4sbyxpLHIsYSxjLHMsdSxsPVEoKTtsJiYobj1sLFwic3RyaW5nXCI9PXR5cGVvZihvPWUuYmFja2Ryb3ApP24uc3R5bGUuYmFja2dyb3VuZD1vOm98fG10KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWVtcIm5vLWJhY2tkcm9wXCJdKSwhZS5iYWNrZHJvcCYmZS5hbGxvd091dHNpZGVDbGljayYmXygnXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyksaT1sLChyPWUucG9zaXRpb24paW4gWT9tdChpLFlbcl0pOihfKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpLG10KGksWS5jZW50ZXIpKSxhPWwsIShjPWUuZ3Jvdyl8fFwic3RyaW5nXCIhPXR5cGVvZiBjfHwocz1cImdyb3ctXCIuY29uY2F0KGMpKWluIFkmJm10KGEsWVtzXSksTihsLGUsXCJjb250YWluZXJcIiksKHU9ZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikpJiYobC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXF1ZXVlLXN0ZXBcIix1KSxkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSkpfWZ1bmN0aW9uIEF0KHQsZSl7dC5wbGFjZWhvbGRlciYmIWUuaW5wdXRQbGFjZWhvbGRlcnx8KHQucGxhY2Vob2xkZXI9ZS5pbnB1dFBsYWNlaG9sZGVyKX12YXIgQnQ9e3Byb21pc2U6bmV3IFdlYWtNYXAsaW5uZXJQYXJhbXM6bmV3IFdlYWtNYXAsZG9tQ2FjaGU6bmV3IFdlYWtNYXB9LFN0PVtcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcInRleHRhcmVhXCJdLEV0PWZ1bmN0aW9uKHQpe2lmKCFqdFt0LmlucHV0XSlyZXR1cm4gRignVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicuY29uY2F0KHQuaW5wdXQsJ1wiJykpO3ZhciBlPUx0KHQuaW5wdXQpLG49anRbdC5pbnB1dF0oZSx0KTtvdChuKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQobil9KX0sT3Q9ZnVuY3Rpb24odCxlKXt2YXIgbj1HKFAoKSx0KTtpZihuKWZvcih2YXIgbyBpbiFmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQuYXR0cmlidXRlcy5sZW5ndGg7ZSsrKXt2YXIgbj10LmF0dHJpYnV0ZXNbZV0ubmFtZTstMT09PVtcInR5cGVcIixcInZhbHVlXCIsXCJzdHlsZVwiXS5pbmRleE9mKG4pJiZ0LnJlbW92ZUF0dHJpYnV0ZShuKX19KG4pLGUpXCJyYW5nZVwiPT09dCYmXCJwbGFjZWhvbGRlclwiPT09b3x8bi5zZXRBdHRyaWJ1dGUobyxlW29dKX0sVHQ9ZnVuY3Rpb24odCl7dmFyIGU9THQodC5pbnB1dCk7dC5jdXN0b21DbGFzcyYmbXQoZSx0LmN1c3RvbUNsYXNzLmlucHV0KX0sTHQ9ZnVuY3Rpb24odCl7dmFyIGU9WVt0XT9ZW3RdOlkuaW5wdXQ7cmV0dXJuIGd0KFAoKSxlKX0sanQ9e307anQudGV4dD1qdC5lbWFpbD1qdC5wYXNzd29yZD1qdC5udW1iZXI9anQudGVsPWp0LnVybD1mdW5jdGlvbih0LGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmlucHV0VmFsdWV8fFwibnVtYmVyXCI9PXR5cGVvZiBlLmlucHV0VmFsdWU/dC52YWx1ZT1lLmlucHV0VmFsdWU6eShlLmlucHV0VmFsdWUpfHxfKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXCJzdHJpbmdcIiwgXCJudW1iZXJcIiBvciBcIlByb21pc2VcIiwgZ290IFwiJy5jb25jYXQocihlLmlucHV0VmFsdWUpLCdcIicpKSxBdCh0LGUpLHQudHlwZT1lLmlucHV0LHR9LGp0LmZpbGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gQXQodCxlKSx0fSxqdC5yYW5nZT1mdW5jdGlvbih0LGUpe3ZhciBuPXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLG89dC5xdWVyeVNlbGVjdG9yKFwib3V0cHV0XCIpO3JldHVybiBuLnZhbHVlPWUuaW5wdXRWYWx1ZSxuLnR5cGU9ZS5pbnB1dCxvLnZhbHVlPWUuaW5wdXRWYWx1ZSx0fSxqdC5zZWxlY3Q9ZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gdC50ZXh0Q29udGVudD1cIlwiLGUuaW5wdXRQbGFjZWhvbGRlciYmKG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSxIKG4sZS5pbnB1dFBsYWNlaG9sZGVyKSxuLnZhbHVlPVwiXCIsbi5kaXNhYmxlZD0hMCxuLnNlbGVjdGVkPSEwLHQuYXBwZW5kQ2hpbGQobikpLHR9LGp0LnJhZGlvPWZ1bmN0aW9uKHQpe3JldHVybiB0LnRleHRDb250ZW50PVwiXCIsdH0sanQuY2hlY2tib3g9ZnVuY3Rpb24odCxlKXt2YXIgbj1HKFAoKSxcImNoZWNrYm94XCIpO24udmFsdWU9MSxuLmlkPVkuY2hlY2tib3gsbi5jaGVja2VkPUJvb2xlYW4oZS5pbnB1dFZhbHVlKTt2YXIgbz10LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO3JldHVybiBIKG8sZS5pbnB1dFBsYWNlaG9sZGVyKSx0fSxqdC50ZXh0YXJlYT1mdW5jdGlvbihlLHQpe3ZhciBuLG87cmV0dXJuIGUudmFsdWU9dC5pbnB1dFZhbHVlLEF0KGUsdCksXCJNdXRhdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJihuPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCQoKSkud2lkdGgpLG89cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoJCgpKS5wYWRkaW5nTGVmdCkrcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoJCgpKS5wYWRkaW5nUmlnaHQpLG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7dmFyIHQ9ZS5vZmZzZXRXaWR0aCtvOyQoKS5zdHlsZS53aWR0aD1uPHQ/XCJcIi5jb25jYXQodCxcInB4XCIpOm51bGx9KS5vYnNlcnZlKGUse2F0dHJpYnV0ZXM6ITAsYXR0cmlidXRlRmlsdGVyOltcInN0eWxlXCJdfSkpLGV9O2Z1bmN0aW9uIHF0KHQsZSl7dmFyIG4sbyxpLHIsYSxjPVAoKS5xdWVyeVNlbGVjdG9yKFwiI1wiLmNvbmNhdChZLmNvbnRlbnQpKTtlLmh0bWw/KGR0KGUuaHRtbCxjKSxvdChjLFwiYmxvY2tcIikpOmUudGV4dD8oYy50ZXh0Q29udGVudD1lLnRleHQsb3QoYyxcImJsb2NrXCIpKTppdChjKSxuPXQsbz1lLGk9UCgpLHI9QnQuaW5uZXJQYXJhbXMuZ2V0KG4pLGE9IXJ8fG8uaW5wdXQhPT1yLmlucHV0LFN0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9WVt0XSxuPWd0KGksZSk7T3QodCxvLmlucHV0QXR0cmlidXRlcyksbi5jbGFzc05hbWU9ZSxhJiZpdChuKX0pLG8uaW5wdXQmJihhJiZFdChvKSxUdChvKSksTihQKCksZSxcImNvbnRlbnRcIil9ZnVuY3Rpb24gSXQoKXtyZXR1cm4gUSgpJiZRKCkuZ2V0QXR0cmlidXRlKFwiZGF0YS1xdWV1ZS1zdGVwXCIpfWZ1bmN0aW9uIFZ0KHQscyl7dmFyIHU9QigpO2lmKCFzLnByb2dyZXNzU3RlcHN8fDA9PT1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKXJldHVybiBpdCh1KSwwO290KHUpLHUudGV4dENvbnRlbnQ9XCJcIjt2YXIgbD1wYXJzZUludCh2b2lkIDA9PT1zLmN1cnJlbnRQcm9ncmVzc1N0ZXA/SXQoKTpzLmN1cnJlbnRQcm9ncmVzc1N0ZXApO2w+PXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgmJl8oXCJJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoIChjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApXCIpLHMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7dmFyIG4sbyxpLHIsYSxjPShuPXQsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiksbXQobyxZW1wicHJvZ3Jlc3Mtc3RlcFwiXSksSChvLG4pLG8pO3UuYXBwZW5kQ2hpbGQoYyksZT09PWwmJm10KGMsWVtcImFjdGl2ZS1wcm9ncmVzcy1zdGVwXCJdKSxlIT09cy5wcm9ncmVzc1N0ZXBzLmxlbmd0aC0xJiYocj1zLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLG10KGEsWVtcInByb2dyZXNzLXN0ZXAtbGluZVwiXSksci5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UmJihhLnN0eWxlLndpZHRoPXIucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSxpPWEsdS5hcHBlbmRDaGlsZChpKSl9KX1mdW5jdGlvbiBNdCh0LGUpe3ZhciBuLG8saSxyLGEsYyxzLHUsbD1MKCk7TihsLGUsXCJoZWFkZXJcIiksVnQoMCxlKSxuPXQsbz1lLChyPUJ0LmlubmVyUGFyYW1zLmdldChuKSkmJm8uaWNvbj09PXIuaWNvbiYmaygpP04oaygpLG8sXCJpY29uXCIpOihEdCgpLG8uaWNvbiYmKC0xIT09T2JqZWN0LmtleXMoWikuaW5kZXhPZihvLmljb24pPyhpPUMoXCIuXCIuY29uY2F0KFkuaWNvbixcIi5cIikuY29uY2F0KFpbby5pY29uXSkpLG90KGkpLFV0KGksbyksTnQoKSxOKGksbyxcImljb25cIiksbXQoaSxvLnNob3dDbGFzcy5pY29uKSk6RignVW5rbm93biBpY29uISBFeHBlY3RlZCBcInN1Y2Nlc3NcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIgb3IgXCJxdWVzdGlvblwiLCBnb3QgXCInLmNvbmNhdChvLmljb24sJ1wiJykpKSksZnVuY3Rpb24odCl7dmFyIGU9QSgpO2lmKCF0LmltYWdlVXJsKXJldHVybiBpdChlKTtvdChlLFwiXCIpLGUuc2V0QXR0cmlidXRlKFwic3JjXCIsdC5pbWFnZVVybCksZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIix0LmltYWdlQWx0KSxudChlLFwid2lkdGhcIix0LmltYWdlV2lkdGgpLG50KGUsXCJoZWlnaHRcIix0LmltYWdlSGVpZ2h0KSxlLmNsYXNzTmFtZT1ZLmltYWdlLE4oZSx0LFwiaW1hZ2VcIil9KGUpLGE9ZSxjPXgoKSxydChjLGEudGl0bGV8fGEudGl0bGVUZXh0KSxhLnRpdGxlJiZkdChhLnRpdGxlLGMpLGEudGl0bGVUZXh0JiYoYy5pbm5lclRleHQ9YS50aXRsZVRleHQpLE4oYyxhLFwidGl0bGVcIikscz1lLHU9SSgpLEgodSxzLmNsb3NlQnV0dG9uSHRtbCksTih1LHMsXCJjbG9zZUJ1dHRvblwiKSxydCh1LHMuc2hvd0Nsb3NlQnV0dG9uKSx1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixzLmNsb3NlQnV0dG9uQXJpYUxhYmVsKX1mdW5jdGlvbiBSdCh0LGUpe3ZhciBuLG8saSxyO249ZSxvPSQoKSxudChvLFwid2lkdGhcIixuLndpZHRoKSxudChvLFwicGFkZGluZ1wiLG4ucGFkZGluZyksbi5iYWNrZ3JvdW5kJiYoby5zdHlsZS5iYWNrZ3JvdW5kPW4uYmFja2dyb3VuZCksenQobyxuKSxQdCgwLGUpLE10KHQsZSkscXQodCxlKSxwdCgwLGUpLGk9ZSxyPWooKSxydChyLGkuZm9vdGVyKSxpLmZvb3RlciYmZHQoaS5mb290ZXIsciksTihyLGksXCJmb290ZXJcIiksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vblJlbmRlciYmZS5vblJlbmRlcigkKCkpfWZ1bmN0aW9uIEh0KCl7cmV0dXJuIEUoKSYmRSgpLmNsaWNrKCl9dmFyIER0PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PW4oKSxlPTA7ZTx0Lmxlbmd0aDtlKyspaXQodFtlXSl9LE50PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PSQoKSxlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLG49dC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXhcIiksbz0wO288bi5sZW5ndGg7bysrKW5bb10uc3R5bGUuYmFja2dyb3VuZENvbG9yPWV9LFV0PWZ1bmN0aW9uKHQsZSl7dC50ZXh0Q29udGVudD1cIlwiLGUuaWNvbkh0bWw/SCh0LF90KGUuaWNvbkh0bWwpKTpcInN1Y2Nlc3NcIj09PWUuaWNvbj9IKHQsJ1xcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxcbiAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiPjwvc3Bhbj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cXG4gICAgJyk6XCJlcnJvclwiPT09ZS5pY29uP0godCwnXFxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmtcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+XFxuICAgICAgPC9zcGFuPlxcbiAgICAnKTpIKHQsX3Qoe3F1ZXN0aW9uOlwiP1wiLHdhcm5pbmc6XCIhXCIsaW5mbzpcImlcIn1bZS5pY29uXSkpfSxfdD1mdW5jdGlvbih0KXtyZXR1cm4nPGRpdiBjbGFzcz1cIicuY29uY2F0KFlbXCJpY29uLWNvbnRlbnRcIl0sJ1wiPicpLmNvbmNhdCh0LFwiPC9kaXY+XCIpfSxGdD1bXSx6dD1mdW5jdGlvbih0LGUpe3QuY2xhc3NOYW1lPVwiXCIuY29uY2F0KFkucG9wdXAsXCIgXCIpLmNvbmNhdCh2dCh0KT9lLnNob3dDbGFzcy5wb3B1cDpcIlwiKSxlLnRvYXN0PyhtdChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFlbXCJ0b2FzdC1zaG93blwiXSksbXQodCxZLnRvYXN0KSk6bXQodCxZLm1vZGFsKSxOKHQsZSxcInBvcHVwXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBlLmN1c3RvbUNsYXNzJiZtdCh0LGUuY3VzdG9tQ2xhc3MpLGUuaWNvbiYmbXQodCxZW1wiaWNvbi1cIi5jb25jYXQoZS5pY29uKV0pfTtmdW5jdGlvbiBXdCgpe3ZhciB0PSQoKTt0fHxzbi5maXJlKCksdD0kKCk7dmFyIGU9VCgpLG49RSgpO290KGUpLG90KG4sXCJpbmxpbmUtYmxvY2tcIiksbXQoW3QsZV0sWS5sb2FkaW5nKSxuLmRpc2FibGVkPSEwLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIsITApLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsITApLHQuZm9jdXMoKX1mdW5jdGlvbiBLdCgpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXt2YXIgZT13aW5kb3cuc2Nyb2xsWCxuPXdpbmRvdy5zY3JvbGxZO1h0LnJlc3RvcmVGb2N1c1RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1h0LnByZXZpb3VzQWN0aXZlRWxlbWVudCYmWHQucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzPyhYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKSxYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnQ9bnVsbCk6ZG9jdW1lbnQuYm9keSYmZG9jdW1lbnQuYm9keS5mb2N1cygpLHQoKX0sMTAwKSx2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZ3aW5kb3cuc2Nyb2xsVG8oZSxuKX0pfWZ1bmN0aW9uIFl0KCl7aWYoWHQudGltZW91dClyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1xKCksZT1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS53aWR0aCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIiksdC5zdHlsZS53aWR0aD1cIjEwMCVcIjt2YXIgbj1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS53aWR0aCksbz1wYXJzZUludChlL24qMTAwKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKSx0LnN0eWxlLndpZHRoPVwiXCIuY29uY2F0KG8sXCIlXCIpfSgpLFh0LnRpbWVvdXQuc3RvcCgpfWZ1bmN0aW9uIFp0KCl7aWYoWHQudGltZW91dCl7dmFyIHQ9WHQudGltZW91dC5zdGFydCgpO3JldHVybiBzdCh0KSx0fX1mdW5jdGlvbiBRdCh0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEd0LHQpfWZ1bmN0aW9uICR0KHQpe3JldHVybiBlZVt0XX1mdW5jdGlvbiBKdCh0KXtmb3IodmFyIGUgaW4gdClRdChpPWUpfHxfKCdVbmtub3duIHBhcmFtZXRlciBcIicuY29uY2F0KGksJ1wiJykpLHQudG9hc3QmJihvPWUsLTEhPT1uZS5pbmRleE9mKG8pJiZfKCdUaGUgcGFyYW1ldGVyIFwiJy5jb25jYXQobywnXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzJykpKSwkdChuPWUpJiZnKG4sJHQobikpO3ZhciBuLG8saX12YXIgWHQ9e30sR3Q9e3RpdGxlOlwiXCIsdGl0bGVUZXh0OlwiXCIsdGV4dDpcIlwiLGh0bWw6XCJcIixmb290ZXI6XCJcIixpY29uOnZvaWQgMCxpY29uSHRtbDp2b2lkIDAsdG9hc3Q6ITEsYW5pbWF0aW9uOiEwLHNob3dDbGFzczp7cG9wdXA6XCJzd2FsMi1zaG93XCIsYmFja2Ryb3A6XCJzd2FsMi1iYWNrZHJvcC1zaG93XCIsaWNvbjpcInN3YWwyLWljb24tc2hvd1wifSxoaWRlQ2xhc3M6e3BvcHVwOlwic3dhbDItaGlkZVwiLGJhY2tkcm9wOlwic3dhbDItYmFja2Ryb3AtaGlkZVwiLGljb246XCJzd2FsMi1pY29uLWhpZGVcIn0sY3VzdG9tQ2xhc3M6dm9pZCAwLHRhcmdldDpcImJvZHlcIixiYWNrZHJvcDohMCxoZWlnaHRBdXRvOiEwLGFsbG93T3V0c2lkZUNsaWNrOiEwLGFsbG93RXNjYXBlS2V5OiEwLGFsbG93RW50ZXJLZXk6ITAsc3RvcEtleWRvd25Qcm9wYWdhdGlvbjohMCxrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiExLHNob3dDb25maXJtQnV0dG9uOiEwLHNob3dDYW5jZWxCdXR0b246ITEscHJlQ29uZmlybTp2b2lkIDAsY29uZmlybUJ1dHRvblRleHQ6XCJPS1wiLGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6XCJcIixjb25maXJtQnV0dG9uQ29sb3I6dm9pZCAwLGNhbmNlbEJ1dHRvblRleHQ6XCJDYW5jZWxcIixjYW5jZWxCdXR0b25BcmlhTGFiZWw6XCJcIixjYW5jZWxCdXR0b25Db2xvcjp2b2lkIDAsYnV0dG9uc1N0eWxpbmc6ITAscmV2ZXJzZUJ1dHRvbnM6ITEsZm9jdXNDb25maXJtOiEwLGZvY3VzQ2FuY2VsOiExLHNob3dDbG9zZUJ1dHRvbjohMSxjbG9zZUJ1dHRvbkh0bWw6XCImdGltZXM7XCIsY2xvc2VCdXR0b25BcmlhTGFiZWw6XCJDbG9zZSB0aGlzIGRpYWxvZ1wiLHNob3dMb2FkZXJPbkNvbmZpcm06ITEsaW1hZ2VVcmw6dm9pZCAwLGltYWdlV2lkdGg6dm9pZCAwLGltYWdlSGVpZ2h0OnZvaWQgMCxpbWFnZUFsdDpcIlwiLHRpbWVyOnZvaWQgMCx0aW1lclByb2dyZXNzQmFyOiExLHdpZHRoOnZvaWQgMCxwYWRkaW5nOnZvaWQgMCxiYWNrZ3JvdW5kOnZvaWQgMCxpbnB1dDp2b2lkIDAsaW5wdXRQbGFjZWhvbGRlcjpcIlwiLGlucHV0VmFsdWU6XCJcIixpbnB1dE9wdGlvbnM6e30saW5wdXRBdXRvVHJpbTohMCxpbnB1dEF0dHJpYnV0ZXM6e30saW5wdXRWYWxpZGF0b3I6dm9pZCAwLHZhbGlkYXRpb25NZXNzYWdlOnZvaWQgMCxncm93OiExLHBvc2l0aW9uOlwiY2VudGVyXCIscHJvZ3Jlc3NTdGVwczpbXSxjdXJyZW50UHJvZ3Jlc3NTdGVwOnZvaWQgMCxwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6dm9pZCAwLG9uQmVmb3JlT3Blbjp2b2lkIDAsb25PcGVuOnZvaWQgMCxvblJlbmRlcjp2b2lkIDAsb25DbG9zZTp2b2lkIDAsb25BZnRlckNsb3NlOnZvaWQgMCxvbkRlc3Ryb3k6dm9pZCAwLHNjcm9sbGJhclBhZGRpbmc6ITB9LHRlPVtcImFsbG93RXNjYXBlS2V5XCIsXCJhbGxvd091dHNpZGVDbGlja1wiLFwiYnV0dG9uc1N0eWxpbmdcIixcImNhbmNlbEJ1dHRvbkFyaWFMYWJlbFwiLFwiY2FuY2VsQnV0dG9uQ29sb3JcIixcImNhbmNlbEJ1dHRvblRleHRcIixcImNsb3NlQnV0dG9uQXJpYUxhYmVsXCIsXCJjbG9zZUJ1dHRvbkh0bWxcIixcImNvbmZpcm1CdXR0b25BcmlhTGFiZWxcIixcImNvbmZpcm1CdXR0b25Db2xvclwiLFwiY29uZmlybUJ1dHRvblRleHRcIixcImN1cnJlbnRQcm9ncmVzc1N0ZXBcIixcImN1c3RvbUNsYXNzXCIsXCJmb290ZXJcIixcImhpZGVDbGFzc1wiLFwiaHRtbFwiLFwiaWNvblwiLFwiaW1hZ2VBbHRcIixcImltYWdlSGVpZ2h0XCIsXCJpbWFnZVVybFwiLFwiaW1hZ2VXaWR0aFwiLFwib25BZnRlckNsb3NlXCIsXCJvbkNsb3NlXCIsXCJvbkRlc3Ryb3lcIixcInByb2dyZXNzU3RlcHNcIixcInJldmVyc2VCdXR0b25zXCIsXCJzaG93Q2FuY2VsQnV0dG9uXCIsXCJzaG93Q2xvc2VCdXR0b25cIixcInNob3dDb25maXJtQnV0dG9uXCIsXCJ0ZXh0XCIsXCJ0aXRsZVwiLFwidGl0bGVUZXh0XCJdLGVlPXthbmltYXRpb246J3Nob3dDbGFzc1wiIGFuZCBcImhpZGVDbGFzcyd9LG5lPVtcImFsbG93T3V0c2lkZUNsaWNrXCIsXCJhbGxvd0VudGVyS2V5XCIsXCJiYWNrZHJvcFwiLFwiZm9jdXNDb25maXJtXCIsXCJmb2N1c0NhbmNlbFwiLFwiaGVpZ2h0QXV0b1wiLFwia2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVwiXSxvZT1PYmplY3QuZnJlZXplKHtpc1ZhbGlkUGFyYW1ldGVyOlF0LGlzVXBkYXRhYmxlUGFyYW1ldGVyOmZ1bmN0aW9uKHQpe3JldHVybi0xIT09dGUuaW5kZXhPZih0KX0saXNEZXByZWNhdGVkUGFyYW1ldGVyOiR0LGFyZ3NUb1BhcmFtczpmdW5jdGlvbihvKXt2YXIgaT17fTtyZXR1cm5cIm9iamVjdFwiIT09cihvWzBdKXx8dyhvWzBdKT9bXCJ0aXRsZVwiLFwiaHRtbFwiLFwiaWNvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7dmFyIG49b1tlXTtcInN0cmluZ1wiPT10eXBlb2Ygbnx8dyhuKT9pW3RdPW46dm9pZCAwIT09biYmRihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQodCwnISBFeHBlY3RlZCBcInN0cmluZ1wiIG9yIFwiRWxlbWVudFwiLCBnb3QgJykuY29uY2F0KHIobikpKX0pOnMoaSxvWzBdKSxpfSxpc1Zpc2libGU6ZnVuY3Rpb24oKXtyZXR1cm4gdnQoJCgpKX0sY2xpY2tDb25maXJtOkh0LGNsaWNrQ2FuY2VsOmZ1bmN0aW9uKCl7cmV0dXJuIE8oKSYmTygpLmNsaWNrKCl9LGdldENvbnRhaW5lcjpRLGdldFBvcHVwOiQsZ2V0VGl0bGU6eCxnZXRDb250ZW50OlAsZ2V0SHRtbENvbnRhaW5lcjpmdW5jdGlvbigpe3JldHVybiBlKFlbXCJodG1sLWNvbnRhaW5lclwiXSl9LGdldEltYWdlOkEsZ2V0SWNvbjprLGdldEljb25zOm4sZ2V0Q2xvc2VCdXR0b246SSxnZXRBY3Rpb25zOlQsZ2V0Q29uZmlybUJ1dHRvbjpFLGdldENhbmNlbEJ1dHRvbjpPLGdldEhlYWRlcjpMLGdldEZvb3RlcjpqLGdldFRpbWVyUHJvZ3Jlc3NCYXI6cSxnZXRGb2N1c2FibGVFbGVtZW50czpWLGdldFZhbGlkYXRpb25NZXNzYWdlOlMsaXNMb2FkaW5nOlIsZmlyZTpmdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLG49MDtuPHQ7bisrKWVbbl09YXJndW1lbnRzW25dO3JldHVybiBpKHRoaXMsZSl9LG1peGluOmZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbih0KXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJmwodCxlKX0oaSx0KTt2YXIgbixvLGU9KG49aSxvPWQoKSxmdW5jdGlvbigpe3ZhciB0LGU9dShuKTtyZXR1cm4gcCh0aGlzLG8/KHQ9dSh0aGlzKS5jb25zdHJ1Y3RvcixSZWZsZWN0LmNvbnN0cnVjdChlLGFyZ3VtZW50cyx0KSk6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSk7ZnVuY3Rpb24gaSgpe3JldHVybiBhKHRoaXMsaSksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGMoaSxbe2tleTpcIl9tYWluXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGYodShpLnByb3RvdHlwZSksXCJfbWFpblwiLHRoaXMpLmNhbGwodGhpcyxzKHt9LHIsdCkpfX1dKSxpfSh0aGlzKX0scXVldWU6ZnVuY3Rpb24odCl7dmFyIHI9dGhpcztGdD10O2Z1bmN0aW9uIGEodCxlKXtGdD1bXSx0KGUpfXZhciBjPVtdO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpKXshZnVuY3Rpb24gZShuLG8pe248RnQubGVuZ3RoPyhkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiLG4pLHIuZmlyZShGdFtuXSkudGhlbihmdW5jdGlvbih0KXt2b2lkIDAhPT10LnZhbHVlPyhjLnB1c2godC52YWx1ZSksZShuKzEsbykpOmEoaSx7ZGlzbWlzczp0LmRpc21pc3N9KX0pKTphKGkse3ZhbHVlOmN9KX0oMCl9KX0sZ2V0UXVldWVTdGVwOkl0LGluc2VydFF1ZXVlU3RlcDpmdW5jdGlvbih0LGUpe3JldHVybiBlJiZlPEZ0Lmxlbmd0aD9GdC5zcGxpY2UoZSwwLHQpOkZ0LnB1c2godCl9LGRlbGV0ZVF1ZXVlU3RlcDpmdW5jdGlvbih0KXt2b2lkIDAhPT1GdFt0XSYmRnQuc3BsaWNlKHQsMSl9LHNob3dMb2FkaW5nOld0LGVuYWJsZUxvYWRpbmc6V3QsZ2V0VGltZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIFh0LnRpbWVvdXQmJlh0LnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCl9LHN0b3BUaW1lcjpZdCxyZXN1bWVUaW1lcjpadCx0b2dnbGVUaW1lcjpmdW5jdGlvbigpe3ZhciB0PVh0LnRpbWVvdXQ7cmV0dXJuIHQmJih0LnJ1bm5pbmc/WXQ6WnQpKCl9LGluY3JlYXNlVGltZXI6ZnVuY3Rpb24odCl7aWYoWHQudGltZW91dCl7dmFyIGU9WHQudGltZW91dC5pbmNyZWFzZSh0KTtyZXR1cm4gc3QoZSwhMCksZX19LGlzVGltZXJSdW5uaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIFh0LnRpbWVvdXQmJlh0LnRpbWVvdXQuaXNSdW5uaW5nKCl9fSk7ZnVuY3Rpb24gaWUoKXt2YXIgdCxlPUJ0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtlJiYodD1CdC5kb21DYWNoZS5nZXQodGhpcyksZS5zaG93Q29uZmlybUJ1dHRvbnx8KGl0KHQuY29uZmlybUJ1dHRvbiksZS5zaG93Q2FuY2VsQnV0dG9ufHxpdCh0LmFjdGlvbnMpKSxodChbdC5wb3B1cCx0LmFjdGlvbnNdLFkubG9hZGluZyksdC5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiksdC5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIiksdC5jb25maXJtQnV0dG9uLmRpc2FibGVkPSExLHQuY2FuY2VsQnV0dG9uLmRpc2FibGVkPSExKX1mdW5jdGlvbiByZSgpe251bGw9PT1YLnByZXZpb3VzQm9keVBhZGRpbmcmJmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0PndpbmRvdy5pbm5lckhlaWdodCYmKFgucHJldmlvdXNCb2R5UGFkZGluZz1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1yaWdodFwiKSksZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9XCJcIi5jb25jYXQoWC5wcmV2aW91c0JvZHlQYWRkaW5nK2Z1bmN0aW9uKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT1ZW1wic2Nyb2xsYmFyLW1lYXN1cmVcIl0sZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KTt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLXQuY2xpZW50V2lkdGg7cmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodCksZX0oKSxcInB4XCIpKX1mdW5jdGlvbiBhZSgpe3JldHVybiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZX1mdW5jdGlvbiBjZSgpe3ZhciB0PVEoKSxlPSQoKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYWxpZ24taXRlbXNcIiksZS5vZmZzZXRUb3A8MCYmKHQuc3R5bGUuYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIil9dmFyIHNlPWZ1bmN0aW9uKCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKENyaU9TfEZ4aU9TfEVkZ2lPU3xZYUJyb3dzZXJ8VUNCcm93c2VyKS9pKXx8JCgpLnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQtNDQmJihRKCkuc3R5bGUucGFkZGluZ0JvdHRvbT1cIlwiLmNvbmNhdCg0NCxcInB4XCIpKX0sdWU9ZnVuY3Rpb24oKXt2YXIgZSx0PVEoKTt0Lm9udG91Y2hzdGFydD1mdW5jdGlvbih0KXtlPWxlKHQudGFyZ2V0KX0sdC5vbnRvdWNobW92ZT1mdW5jdGlvbih0KXtlJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCkpfX0sbGU9ZnVuY3Rpb24odCl7dmFyIGU9USgpO3JldHVybiB0PT09ZXx8IShhdChlKXx8XCJJTlBVVFwiPT09dC50YWdOYW1lfHxhdChQKCkpJiZQKCkuY29udGFpbnModCkpfSxkZT17c3dhbFByb21pc2VSZXNvbHZlOm5ldyBXZWFrTWFwfTtmdW5jdGlvbiBwZSh0LGUsbixvKXt2YXIgaTtuP2hlKHQsbyk6KEt0KCkudGhlbihmdW5jdGlvbigpe3JldHVybiBoZSh0LG8pfSksWHQua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLFh0LmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOlh0LmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSxYdC5rZXlkb3duSGFuZGxlckFkZGVkPSExKSxlLnBhcmVudE5vZGUmJiFkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLE0oKSYmKG51bGwhPT1YLnByZXZpb3VzQm9keVBhZGRpbmcmJihkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodD1cIlwiLmNvbmNhdChYLnByZXZpb3VzQm9keVBhZGRpbmcsXCJweFwiKSxYLnByZXZpb3VzQm9keVBhZGRpbmc9bnVsbCksRChkb2N1bWVudC5ib2R5LFkuaW9zZml4KSYmKGk9cGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsMTApLGh0KGRvY3VtZW50LmJvZHksWS5pb3NmaXgpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIsZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A9LTEqaSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmYWUoKSYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixjZSksaChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKT8odC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSksdC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpKTp0LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpfSkpLGh0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sW1kuc2hvd24sWVtcImhlaWdodC1hdXRvXCJdLFlbXCJuby1iYWNrZHJvcFwiXSxZW1widG9hc3Qtc2hvd25cIl0sWVtcInRvYXN0LWNvbHVtblwiXV0pfWZ1bmN0aW9uIGZlKHQpe3ZhciBlLG4sbyxpPSQoKTtpJiYoZT1CdC5pbm5lclBhcmFtcy5nZXQodGhpcykpJiYhRChpLGUuaGlkZUNsYXNzLnBvcHVwKSYmKG49ZGUuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKSxodChpLGUuc2hvd0NsYXNzLnBvcHVwKSxtdChpLGUuaGlkZUNsYXNzLnBvcHVwKSxvPVEoKSxodChvLGUuc2hvd0NsYXNzLmJhY2tkcm9wKSxtdChvLGUuaGlkZUNsYXNzLmJhY2tkcm9wKSxmdW5jdGlvbih0LGUsbil7dmFyIG89USgpLGk9a3QmJmN0KGUpLHI9bi5vbkNsb3NlLGE9bi5vbkFmdGVyQ2xvc2U7aWYociE9PW51bGwmJnR5cGVvZiByPT09XCJmdW5jdGlvblwiKXtyKGUpfWlmKGkpe21lKHQsZSxvLGEpfWVsc2V7cGUodCxvLEooKSxhKX19KHRoaXMsaSxlKSx2b2lkIDAhPT10Pyh0LmlzRGlzbWlzc2VkPXZvaWQgMCE9PXQuZGlzbWlzcyx0LmlzQ29uZmlybWVkPXZvaWQgMD09PXQuZGlzbWlzcyk6dD17aXNEaXNtaXNzZWQ6ITAsaXNDb25maXJtZWQ6ITF9LG4odHx8e30pKX12YXIgbWU9ZnVuY3Rpb24odCxlLG4sbyl7WHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrPXBlLmJpbmQobnVsbCx0LG4sSigpLG8pLGUuYWRkRXZlbnRMaXN0ZW5lcihrdCxmdW5jdGlvbih0KXt0LnRhcmdldD09PWUmJihYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKSxkZWxldGUgWHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKX0pfSxoZT1mdW5jdGlvbih0LGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksdC5fZGVzdHJveSgpfSl9O2Z1bmN0aW9uIGdlKHQsZSxuKXt2YXIgbz1CdC5kb21DYWNoZS5nZXQodCk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe29bdF0uZGlzYWJsZWQ9bn0pfWZ1bmN0aW9uIHZlKHQsZSl7aWYoIXQpcmV0dXJuITE7aWYoXCJyYWRpb1wiPT09dC50eXBlKWZvcih2YXIgbj10LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksbz0wO288bi5sZW5ndGg7bysrKW5bb10uZGlzYWJsZWQ9ZTtlbHNlIHQuZGlzYWJsZWQ9ZX12YXIgYmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKHQsZSl7YSh0aGlzLG4pLHRoaXMuY2FsbGJhY2s9dCx0aGlzLnJlbWFpbmluZz1lLHRoaXMucnVubmluZz0hMSx0aGlzLnN0YXJ0KCl9cmV0dXJuIGMobixbe2tleTpcInN0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nfHwodGhpcy5ydW5uaW5nPSEwLHRoaXMuc3RhcnRlZD1uZXcgRGF0ZSx0aGlzLmlkPXNldFRpbWVvdXQodGhpcy5jYWxsYmFjayx0aGlzLnJlbWFpbmluZykpLHRoaXMucmVtYWluaW5nfX0se2tleTpcInN0b3BcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmcmJih0aGlzLnJ1bm5pbmc9ITEsY2xlYXJUaW1lb3V0KHRoaXMuaWQpLHRoaXMucmVtYWluaW5nLT1uZXcgRGF0ZS10aGlzLnN0YXJ0ZWQpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImluY3JlYXNlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5ydW5uaW5nO3JldHVybiBlJiZ0aGlzLnN0b3AoKSx0aGlzLnJlbWFpbmluZys9dCxlJiZ0aGlzLnN0YXJ0KCksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiZ2V0VGltZXJMZWZ0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nJiYodGhpcy5zdG9wKCksdGhpcy5zdGFydCgpKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJpc1J1bm5pbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmd9fV0pLG59KCkseWU9e2VtYWlsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdCh0KT9Qcm9taXNlLnJlc29sdmUoKTpQcm9taXNlLnJlc29sdmUoZXx8XCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIil9LHVybDpmdW5jdGlvbih0LGUpe3JldHVybi9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3QodCk/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZXNvbHZlKGV8fFwiSW52YWxpZCBVUkxcIil9fTtmdW5jdGlvbiB3ZSh0KXt2YXIgZSxuOyhlPXQpLmlucHV0VmFsaWRhdG9yfHxPYmplY3Qua2V5cyh5ZSkuZm9yRWFjaChmdW5jdGlvbih0KXtlLmlucHV0PT09dCYmKGUuaW5wdXRWYWxpZGF0b3I9eWVbdF0pfSksdC5zaG93TG9hZGVyT25Db25maXJtJiYhdC5wcmVDb25maXJtJiZfKFwic2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbmh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3RcIiksdC5hbmltYXRpb249Vyh0LmFuaW1hdGlvbiksKG49dCkudGFyZ2V0JiYoXCJzdHJpbmdcIiE9dHlwZW9mIG4udGFyZ2V0fHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG4udGFyZ2V0KSkmJihcInN0cmluZ1wiPT10eXBlb2Ygbi50YXJnZXR8fG4udGFyZ2V0LmFwcGVuZENoaWxkKXx8KF8oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyksbi50YXJnZXQ9XCJib2R5XCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0LnRpdGxlJiYodC50aXRsZT10LnRpdGxlLnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIgLz5cIikpLHl0KHQpfWZ1bmN0aW9uIENlKHQpe3ZhciBlPVEoKSxuPSQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uQmVmb3JlT3BlbiYmdC5vbkJlZm9yZU9wZW4obik7dmFyIG89d2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkub3ZlcmZsb3dZO2plKGUsbix0KSxUZShlLG4pLE0oKSYmKExlKGUsdC5zY3JvbGxiYXJQYWRkaW5nLG8pLGgoZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbih0KXt0PT09USgpfHxmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29udGFpbnMpcmV0dXJuIHQuY29udGFpbnMoZSl9KHQsUSgpKXx8KHQuaGFzQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikmJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiLHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpfSkpLEooKXx8WHQucHJldmlvdXNBY3RpdmVFbGVtZW50fHwoWHQucHJldmlvdXNBY3RpdmVFbGVtZW50PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQub25PcGVuJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQub25PcGVuKG4pfSksaHQoZSxZW1wibm8tdHJhbnNpdGlvblwiXSl9ZnVuY3Rpb24ga2UodCl7dmFyIGUsbj0kKCk7dC50YXJnZXQ9PT1uJiYoZT1RKCksbi5yZW1vdmVFdmVudExpc3RlbmVyKGt0LGtlKSxlLnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIil9ZnVuY3Rpb24geGUodCxlKXtcInNlbGVjdFwiPT09ZS5pbnB1dHx8XCJyYWRpb1wiPT09ZS5pbnB1dD9NZSh0LGUpOi0xIT09W1widGV4dFwiLFwiZW1haWxcIixcIm51bWJlclwiLFwidGVsXCIsXCJ0ZXh0YXJlYVwiXS5pbmRleE9mKGUuaW5wdXQpJiYodihlLmlucHV0VmFsdWUpfHx5KGUuaW5wdXRWYWx1ZSkpJiZSZSh0LGUpfWZ1bmN0aW9uIFBlKHQsZSl7dC5kaXNhYmxlQnV0dG9ucygpLGUuaW5wdXQ/TmUodCxlKTpVZSh0LGUsITApfWZ1bmN0aW9uIEFlKHQsZSl7dC5kaXNhYmxlQnV0dG9ucygpLGUoSy5jYW5jZWwpfWZ1bmN0aW9uIEJlKHQsZSl7dC5jbG9zZVBvcHVwKHt2YWx1ZTplfSl9ZnVuY3Rpb24gU2UoZSx0LG4sbyl7dC5rZXlkb3duVGFyZ2V0JiZ0LmtleWRvd25IYW5kbGVyQWRkZWQmJih0LmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0LmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOnQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLHQua2V5ZG93bkhhbmRsZXJBZGRlZD0hMSksbi50b2FzdHx8KHQua2V5ZG93bkhhbmRsZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHplKGUsdCxvKX0sdC5rZXlkb3duVGFyZ2V0PW4ua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZT93aW5kb3c6JCgpLHQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZT1uLmtleWRvd25MaXN0ZW5lckNhcHR1cmUsdC5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdC5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTp0LmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSx0LmtleWRvd25IYW5kbGVyQWRkZWQ9ITApfWZ1bmN0aW9uIEVlKHQsZSxuKXt2YXIgbz1WKCksaT0wO2lmKGk8by5sZW5ndGgpcmV0dXJuKGUrPW4pPT09by5sZW5ndGg/ZT0wOi0xPT09ZSYmKGU9by5sZW5ndGgtMSksb1tlXS5mb2N1cygpOyQoKS5mb2N1cygpfWZ1bmN0aW9uIE9lKHQsZSxuKXtCdC5pbm5lclBhcmFtcy5nZXQodCkudG9hc3Q/UWUodCxlLG4pOihKZShlKSxYZShlKSxHZSh0LGUsbikpfXZhciBUZT1mdW5jdGlvbih0LGUpe2t0JiZjdChlKT8odC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixlLmFkZEV2ZW50TGlzdGVuZXIoa3Qsa2UpKTp0LnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIn0sTGU9ZnVuY3Rpb24odCxlLG4pe3ZhciBvOygvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIXdpbmRvdy5NU1N0cmVhbXx8XCJNYWNJbnRlbFwiPT09bmF2aWdhdG9yLnBsYXRmb3JtJiYxPG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykmJiFEKGRvY3VtZW50LmJvZHksWS5pb3NmaXgpJiYobz1kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1cIlwiLmNvbmNhdCgtMSpvLFwicHhcIiksbXQoZG9jdW1lbnQuYm9keSxZLmlvc2ZpeCksdWUoKSxzZSgpKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZhZSgpJiYoY2UoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGNlKSksZSYmXCJoaWRkZW5cIiE9PW4mJnJlKCksc2V0VGltZW91dChmdW5jdGlvbigpe3Quc2Nyb2xsVG9wPTB9KX0samU9ZnVuY3Rpb24odCxlLG4pe210KHQsbi5zaG93Q2xhc3MuYmFja2Ryb3ApLG90KGUpLG10KGUsbi5zaG93Q2xhc3MucG9wdXApLG10KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWS5zaG93biksbi5oZWlnaHRBdXRvJiZuLmJhY2tkcm9wJiYhbi50b2FzdCYmbXQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxZW1wiaGVpZ2h0LWF1dG9cIl0pfSxxZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGVja2VkPzE6MH0sSWU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hlY2tlZD90LnZhbHVlOm51bGx9LFZlPWZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbGVzLmxlbmd0aD9udWxsIT09dC5nZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKT90LmZpbGVzOnQuZmlsZXNbMF06bnVsbH0sTWU9ZnVuY3Rpb24oZSxuKXtmdW5jdGlvbiBvKHQpe3JldHVybiBIZVtuLmlucHV0XShpLERlKHQpLG4pfXZhciBpPVAoKTt2KG4uaW5wdXRPcHRpb25zKXx8eShuLmlucHV0T3B0aW9ucyk/KFd0KCksYihuLmlucHV0T3B0aW9ucykudGhlbihmdW5jdGlvbih0KXtlLmhpZGVMb2FkaW5nKCksbyh0KX0pKTpcIm9iamVjdFwiPT09cihuLmlucHV0T3B0aW9ucyk/byhuLmlucHV0T3B0aW9ucyk6RihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQocihuLmlucHV0T3B0aW9ucykpKX0sUmU9ZnVuY3Rpb24oZSxuKXt2YXIgbz1lLmdldElucHV0KCk7aXQobyksYihuLmlucHV0VmFsdWUpLnRoZW4oZnVuY3Rpb24odCl7by52YWx1ZT1cIm51bWJlclwiPT09bi5pbnB1dD9wYXJzZUZsb2F0KHQpfHwwOlwiXCIuY29uY2F0KHQpLG90KG8pLG8uZm9jdXMoKSxlLmhpZGVMb2FkaW5nKCl9KS5jYXRjaChmdW5jdGlvbih0KXtGKFwiRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiBcIi5jb25jYXQodCkpLG8udmFsdWU9XCJcIixvdChvKSxvLmZvY3VzKCksZS5oaWRlTG9hZGluZygpfSl9LEhlPXtzZWxlY3Q6ZnVuY3Rpb24odCxlLGkpe2Z1bmN0aW9uIHIodCxlLG4pe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7by52YWx1ZT1uLEgobyxlKSxpLmlucHV0VmFsdWUudG9TdHJpbmcoKT09PW4udG9TdHJpbmcoKSYmKG8uc2VsZWN0ZWQ9ITApLHQuYXBwZW5kQ2hpbGQobyl9dmFyIGE9Z3QodCxZLnNlbGVjdCk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlLG49dFswXSxvPXRbMV07QXJyYXkuaXNBcnJheShvKT8oKGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKS5sYWJlbD1uLGUuZGlzYWJsZWQ9ITEsYS5hcHBlbmRDaGlsZChlKSxvLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHIoZSx0WzFdLHRbMF0pfSkpOnIoYSxvLG4pfSksYS5mb2N1cygpfSxyYWRpbzpmdW5jdGlvbih0LGUsYSl7dmFyIGM9Z3QodCxZLnJhZGlvKTtlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dFswXSxuPXRbMV0sbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7by50eXBlPVwicmFkaW9cIixvLm5hbWU9WS5yYWRpbyxvLnZhbHVlPWUsYS5pbnB1dFZhbHVlLnRvU3RyaW5nKCk9PT1lLnRvU3RyaW5nKCkmJihvLmNoZWNrZWQ9ITApO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO0gocixuKSxyLmNsYXNzTmFtZT1ZLmxhYmVsLGkuYXBwZW5kQ2hpbGQobyksaS5hcHBlbmRDaGlsZChyKSxjLmFwcGVuZENoaWxkKGkpfSk7dmFyIG49Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7bi5sZW5ndGgmJm5bMF0uZm9jdXMoKX19LERlPWZ1bmN0aW9uIG8obil7dmFyIGk9W107cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCYmbiBpbnN0YW5jZW9mIE1hcD9uLmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgbj10O1wib2JqZWN0XCI9PT1yKG4pJiYobj1vKG4pKSxpLnB1c2goW2Usbl0pfSk6T2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1uW3RdO1wib2JqZWN0XCI9PT1yKGUpJiYoZT1vKGUpKSxpLnB1c2goW3QsZV0pfSksaX0sTmU9ZnVuY3Rpb24oZSxuKXt2YXIgbz1mdW5jdGlvbih0LGUpe3ZhciBuPXQuZ2V0SW5wdXQoKTtpZighbilyZXR1cm4gbnVsbDtzd2l0Y2goZS5pbnB1dCl7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gcWUobik7Y2FzZVwicmFkaW9cIjpyZXR1cm4gSWUobik7Y2FzZVwiZmlsZVwiOnJldHVybiBWZShuKTtkZWZhdWx0OnJldHVybiBlLmlucHV0QXV0b1RyaW0/bi52YWx1ZS50cmltKCk6bi52YWx1ZX19KGUsbik7bi5pbnB1dFZhbGlkYXRvcj8oZS5kaXNhYmxlSW5wdXQoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIobi5pbnB1dFZhbGlkYXRvcihvLG4udmFsaWRhdGlvbk1lc3NhZ2UpKX0pLnRoZW4oZnVuY3Rpb24odCl7ZS5lbmFibGVCdXR0b25zKCksZS5lbmFibGVJbnB1dCgpLHQ/ZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodCk6VWUoZSxuLG8pfSkpOmUuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCk/VWUoZSxuLG8pOihlLmVuYWJsZUJ1dHRvbnMoKSxlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShuLnZhbGlkYXRpb25NZXNzYWdlKSl9LFVlPWZ1bmN0aW9uKGUsdCxuKXt0LnNob3dMb2FkZXJPbkNvbmZpcm0mJld0KCksdC5wcmVDb25maXJtPyhlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIodC5wcmVDb25maXJtKG4sdC52YWxpZGF0aW9uTWVzc2FnZSkpfSkudGhlbihmdW5jdGlvbih0KXt2dChTKCkpfHwhMT09PXQ/ZS5oaWRlTG9hZGluZygpOkJlKGUsdm9pZCAwPT09dD9uOnQpfSkpOkJlKGUsbil9LF9lPVtcIkFycm93TGVmdFwiLFwiQXJyb3dSaWdodFwiLFwiQXJyb3dVcFwiLFwiQXJyb3dEb3duXCIsXCJMZWZ0XCIsXCJSaWdodFwiLFwiVXBcIixcIkRvd25cIl0sRmU9W1wiRXNjYXBlXCIsXCJFc2NcIl0semU9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPUJ0LmlubmVyUGFyYW1zLmdldCh0KTtvLnN0b3BLZXlkb3duUHJvcGFnYXRpb24mJmUuc3RvcFByb3BhZ2F0aW9uKCksXCJFbnRlclwiPT09ZS5rZXk/V2UodCxlLG8pOlwiVGFiXCI9PT1lLmtleT9LZShlLG8pOi0xIT09X2UuaW5kZXhPZihlLmtleSk/WWUoKTotMSE9PUZlLmluZGV4T2YoZS5rZXkpJiZaZShlLG8sbil9LFdlPWZ1bmN0aW9uKHQsZSxuKXtpZighZS5pc0NvbXBvc2luZyYmZS50YXJnZXQmJnQuZ2V0SW5wdXQoKSYmZS50YXJnZXQub3V0ZXJIVE1MPT09dC5nZXRJbnB1dCgpLm91dGVySFRNTCl7aWYoLTEhPT1bXCJ0ZXh0YXJlYVwiLFwiZmlsZVwiXS5pbmRleE9mKG4uaW5wdXQpKXJldHVybjtIdCgpLGUucHJldmVudERlZmF1bHQoKX19LEtlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10LnRhcmdldCxuPVYoKSxvPS0xLGk9MDtpPG4ubGVuZ3RoO2krKylpZihlPT09bltpXSl7bz1pO2JyZWFrfXQuc2hpZnRLZXk/RWUoMCxvLC0xKTpFZSgwLG8sMSksdC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCl9LFllPWZ1bmN0aW9uKCl7dmFyIHQ9RSgpLGU9TygpO2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT10JiZ2dChlKT9lLmZvY3VzKCk6ZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PWUmJnZ0KHQpJiZ0LmZvY3VzKCl9LFplPWZ1bmN0aW9uKHQsZSxuKXtXKGUuYWxsb3dFc2NhcGVLZXkpJiYodC5wcmV2ZW50RGVmYXVsdCgpLG4oSy5lc2MpKX0sUWU9ZnVuY3Rpb24oZSx0LG4pe3QucG9wdXAub25jbGljaz1mdW5jdGlvbigpe3ZhciB0PUJ0LmlubmVyUGFyYW1zLmdldChlKTt0LnNob3dDb25maXJtQnV0dG9ufHx0LnNob3dDYW5jZWxCdXR0b258fHQuc2hvd0Nsb3NlQnV0dG9ufHx0LmlucHV0fHxuKEsuY2xvc2UpfX0sJGU9ITEsSmU9ZnVuY3Rpb24oZSl7ZS5wb3B1cC5vbm1vdXNlZG93bj1mdW5jdGlvbigpe2UuY29udGFpbmVyLm9ubW91c2V1cD1mdW5jdGlvbih0KXtlLmNvbnRhaW5lci5vbm1vdXNldXA9dm9pZCAwLHQudGFyZ2V0PT09ZS5jb250YWluZXImJigkZT0hMCl9fX0sWGU9ZnVuY3Rpb24oZSl7ZS5jb250YWluZXIub25tb3VzZWRvd249ZnVuY3Rpb24oKXtlLnBvcHVwLm9ubW91c2V1cD1mdW5jdGlvbih0KXtlLnBvcHVwLm9ubW91c2V1cD12b2lkIDAsdC50YXJnZXQhPT1lLnBvcHVwJiYhZS5wb3B1cC5jb250YWlucyh0LnRhcmdldCl8fCgkZT0hMCl9fX0sR2U9ZnVuY3Rpb24obixvLGkpe28uY29udGFpbmVyLm9uY2xpY2s9ZnVuY3Rpb24odCl7dmFyIGU9QnQuaW5uZXJQYXJhbXMuZ2V0KG4pOyRlPyRlPSExOnQudGFyZ2V0PT09by5jb250YWluZXImJlcoZS5hbGxvd091dHNpZGVDbGljaykmJmkoSy5iYWNrZHJvcCl9fTt2YXIgdG49ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXEoKTtpdChvKSxlLnRpbWVyJiYodC50aW1lb3V0PW5ldyBiZShmdW5jdGlvbigpe24oXCJ0aW1lclwiKSxkZWxldGUgdC50aW1lb3V0fSxlLnRpbWVyKSxlLnRpbWVyUHJvZ3Jlc3NCYXImJihvdChvKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC50aW1lb3V0LnJ1bm5pbmcmJnN0KGUudGltZXIpfSkpKX0sZW49ZnVuY3Rpb24odCxlKXtpZighZS50b2FzdClyZXR1cm4gVyhlLmFsbG93RW50ZXJLZXkpP2UuZm9jdXNDYW5jZWwmJnZ0KHQuY2FuY2VsQnV0dG9uKT90LmNhbmNlbEJ1dHRvbi5mb2N1cygpOmUuZm9jdXNDb25maXJtJiZ2dCh0LmNvbmZpcm1CdXR0b24pP3QuY29uZmlybUJ1dHRvbi5mb2N1cygpOnZvaWQgRWUoMCwtMSwxKTpubigpfSxubj1mdW5jdGlvbigpe2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCl9O3ZhciBvbixybj1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gdCl0W2VdPW5ldyBXZWFrTWFwfSxhbj1PYmplY3QuZnJlZXplKHtoaWRlTG9hZGluZzppZSxkaXNhYmxlTG9hZGluZzppZSxnZXRJbnB1dDpmdW5jdGlvbih0KXt2YXIgZT1CdC5pbm5lclBhcmFtcy5nZXQodHx8dGhpcyksbj1CdC5kb21DYWNoZS5nZXQodHx8dGhpcyk7cmV0dXJuIG4/RyhuLmNvbnRlbnQsZS5pbnB1dCk6bnVsbH0sY2xvc2U6ZmUsY2xvc2VQb3B1cDpmZSxjbG9zZU1vZGFsOmZlLGNsb3NlVG9hc3Q6ZmUsZW5hYmxlQnV0dG9uczpmdW5jdGlvbigpe2dlKHRoaXMsW1wiY29uZmlybUJ1dHRvblwiLFwiY2FuY2VsQnV0dG9uXCJdLCExKX0sZGlzYWJsZUJ1dHRvbnM6ZnVuY3Rpb24oKXtnZSh0aGlzLFtcImNvbmZpcm1CdXR0b25cIixcImNhbmNlbEJ1dHRvblwiXSwhMCl9LGVuYWJsZUlucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIHZlKHRoaXMuZ2V0SW5wdXQoKSwhMSl9LGRpc2FibGVJbnB1dDpmdW5jdGlvbigpe3JldHVybiB2ZSh0aGlzLmdldElucHV0KCksITApfSxzaG93VmFsaWRhdGlvbk1lc3NhZ2U6ZnVuY3Rpb24odCl7dmFyIGU9QnQuZG9tQ2FjaGUuZ2V0KHRoaXMpO0goZS52YWxpZGF0aW9uTWVzc2FnZSx0KTt2YXIgbj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLnBvcHVwKTtlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpbkxlZnQ9XCItXCIuY29uY2F0KG4uZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctbGVmdFwiKSksZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5SaWdodD1cIi1cIi5jb25jYXQobi5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1yaWdodFwiKSksb3QoZS52YWxpZGF0aW9uTWVzc2FnZSk7dmFyIG89dGhpcy5nZXRJbnB1dCgpO28mJihvLnNldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiLCEwKSxvLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkQnlcIixZW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdKSx0dChvKSxtdChvLFkuaW5wdXRlcnJvcikpfSxyZXNldFZhbGlkYXRpb25NZXNzYWdlOmZ1bmN0aW9uKCl7dmFyIHQ9QnQuZG9tQ2FjaGUuZ2V0KHRoaXMpO3QudmFsaWRhdGlvbk1lc3NhZ2UmJml0KHQudmFsaWRhdGlvbk1lc3NhZ2UpO3ZhciBlPXRoaXMuZ2V0SW5wdXQoKTtlJiYoZS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiksZS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZEJ5XCIpLGh0KGUsWS5pbnB1dGVycm9yKSl9LGdldFByb2dyZXNzU3RlcHM6ZnVuY3Rpb24oKXtyZXR1cm4gQnQuZG9tQ2FjaGUuZ2V0KHRoaXMpLnByb2dyZXNzU3RlcHN9LF9tYWluOmZ1bmN0aW9uKHQpe0p0KHQpLFh0LmN1cnJlbnRJbnN0YW5jZSYmWHQuY3VycmVudEluc3RhbmNlLl9kZXN0cm95KCksWHQuY3VycmVudEluc3RhbmNlPXRoaXM7dmFyIGU9ZnVuY3Rpb24odCl7dmFyIGU9cyh7fSxHdC5zaG93Q2xhc3MsdC5zaG93Q2xhc3MpLG49cyh7fSxHdC5oaWRlQ2xhc3MsdC5oaWRlQ2xhc3MpLG89cyh7fSxHdCx0KTtpZihvLnNob3dDbGFzcz1lLG8uaGlkZUNsYXNzPW4sdC5hbmltYXRpb249PT1mYWxzZSl7by5zaG93Q2xhc3M9e3BvcHVwOlwic3dhbDItbm9hbmltYXRpb25cIixiYWNrZHJvcDpcInN3YWwyLW5vYW5pbWF0aW9uXCJ9O28uaGlkZUNsYXNzPXt9fXJldHVybiBvfSh0KTt3ZShlKSxPYmplY3QuZnJlZXplKGUpLFh0LnRpbWVvdXQmJihYdC50aW1lb3V0LnN0b3AoKSxkZWxldGUgWHQudGltZW91dCksY2xlYXJUaW1lb3V0KFh0LnJlc3RvcmVGb2N1c1RpbWVvdXQpO3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciBlPXtwb3B1cDokKCksY29udGFpbmVyOlEoKSxjb250ZW50OlAoKSxhY3Rpb25zOlQoKSxjb25maXJtQnV0dG9uOkUoKSxjYW5jZWxCdXR0b246TygpLGNsb3NlQnV0dG9uOkkoKSx2YWxpZGF0aW9uTWVzc2FnZTpTKCkscHJvZ3Jlc3NTdGVwczpCKCl9O3JldHVybiBCdC5kb21DYWNoZS5zZXQodCxlKSxlfSh0aGlzKTtyZXR1cm4gUnQodGhpcyxlKSxCdC5pbm5lclBhcmFtcy5zZXQodGhpcyxlKSxmdW5jdGlvbihuLG8saSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uIHQoZSl7bi5jbG9zZVBvcHVwKHtkaXNtaXNzOmV9KX07ZGUuc3dhbFByb21pc2VSZXNvbHZlLnNldChuLHQpO28uY29uZmlybUJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIFBlKG4saSl9O28uY2FuY2VsQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gQWUobixlKX07by5jbG9zZUJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGUoSy5jbG9zZSl9O09lKG4sbyxlKTtTZShuLFh0LGksZSk7aWYoaS50b2FzdCYmKGkuaW5wdXR8fGkuZm9vdGVyfHxpLnNob3dDbG9zZUJ1dHRvbikpe210KGRvY3VtZW50LmJvZHksWVtcInRvYXN0LWNvbHVtblwiXSl9ZWxzZXtodChkb2N1bWVudC5ib2R5LFlbXCJ0b2FzdC1jb2x1bW5cIl0pfXhlKG4saSk7Q2UoaSk7dG4oWHQsaSxlKTtlbihvLGkpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtvLmNvbnRhaW5lci5zY3JvbGxUb3A9MH0pfSl9KHRoaXMsbixlKX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PSQoKSxuPUJ0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtpZighdHx8RCh0LG4uaGlkZUNsYXNzLnBvcHVwKSlyZXR1cm4gXyhcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTt2YXIgbz17fTtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3NuLmlzVXBkYXRhYmxlUGFyYW1ldGVyKHQpP29bdF09ZVt0XTpfKCdJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFwiJy5jb25jYXQodCwnXCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qcycpKX0pO3ZhciBpPXMoe30sbixvKTtSdCh0aGlzLGkpLEJ0LmlubmVyUGFyYW1zLnNldCh0aGlzLGkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3BhcmFtczp7dmFsdWU6cyh7fSx0aGlzLnBhcmFtcyxlKSx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwfX0pfSxfZGVzdHJveTpmdW5jdGlvbigpe3ZhciB0PUJ0LmRvbUNhY2hlLmdldCh0aGlzKSxlPUJ0LmlubmVyUGFyYW1zLmdldCh0aGlzKTtlJiYodC5wb3B1cCYmWHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrJiYoWHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCksZGVsZXRlIFh0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayksWHQuZGVmZXJEaXNwb3NhbFRpbWVyJiYoY2xlYXJUaW1lb3V0KFh0LmRlZmVyRGlzcG9zYWxUaW1lciksZGVsZXRlIFh0LmRlZmVyRGlzcG9zYWxUaW1lciksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbkRlc3Ryb3kmJmUub25EZXN0cm95KCksZGVsZXRlIHRoaXMucGFyYW1zLGRlbGV0ZSBYdC5rZXlkb3duSGFuZGxlcixkZWxldGUgWHQua2V5ZG93blRhcmdldCxybihCdCkscm4oZGUpKX19KSxjbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHIoKXtpZihhKHRoaXMsciksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIFByb21pc2UmJkYoXCJUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KVwiKSxvbj10aGlzO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLG49MDtuPHQ7bisrKWVbbl09YXJndW1lbnRzW25dO3ZhciBvPU9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoZSkpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMse3BhcmFtczp7dmFsdWU6byx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KTt2YXIgaT10aGlzLl9tYWluKHRoaXMucGFyYW1zKTtCdC5wcm9taXNlLnNldCh0aGlzLGkpfX1yZXR1cm4gYyhyLFt7a2V5OlwidGhlblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBCdC5wcm9taXNlLmdldCh0aGlzKS50aGVuKHQpfX0se2tleTpcImZpbmFsbHlcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gQnQucHJvbWlzZS5nZXQodGhpcykuZmluYWxseSh0KX19XSkscn0oKTtzKGNuLnByb3RvdHlwZSxhbikscyhjbixvZSksT2JqZWN0LmtleXMoYW4pLmZvckVhY2goZnVuY3Rpb24odCl7Y25bdF09ZnVuY3Rpb24oKXtpZihvbilyZXR1cm4gb25bdF0uYXBwbHkob24sYXJndW1lbnRzKX19KSxjbi5EaXNtaXNzUmVhc29uPUssY24udmVyc2lvbj1cIjkuMTcuMlwiO3ZhciBzbj1jbjtyZXR1cm4gc24uZGVmYXVsdD1zbn0pLHZvaWQgMCE9PXRoaXMmJnRoaXMuU3dlZXRhbGVydDImJih0aGlzLnN3YWw9dGhpcy5zd2VldEFsZXJ0PXRoaXMuU3dhbD10aGlzLlN3ZWV0QWxlcnQ9dGhpcy5Td2VldGFsZXJ0Mik7IiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
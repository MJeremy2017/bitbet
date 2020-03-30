webpackHotUpdate(5,{

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _factory = __webpack_require__(775);

var _factory2 = _interopRequireDefault(_factory);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(937);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(938);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jeremy.zhang/workspace/Github/bitbet/pages/index.js?entry";


var BetIndex = function (_Component) {
    (0, _inherits3.default)(BetIndex, _Component);

    function BetIndex() {
        (0, _classCallCheck3.default)(this, BetIndex);

        return (0, _possibleConstructorReturn3.default)(this, (BetIndex.__proto__ || (0, _getPrototypeOf2.default)(BetIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(BetIndex, [{
        key: "renderPropositions",
        value: function renderPropositions() {
            var items = this.props.propositionAddress.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, "View Proposition"),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.CardGroup, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement("link", { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, "Open Propositions"), this.renderPropositions(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'New',
                icon: 'add circle',
                labelPosition: 'right',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var propositionAddress;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedPropositions().call();

                            case 2:
                                propositionAddress = _context.sent;
                                return _context.abrupt("return", { propositionAddress: propositionAddress });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return BetIndex;
}(_react.Component);

exports.default = BetIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkNhcmRHcm91cCIsIkJldEluZGV4IiwiaXRlbXMiLCJwcm9wcyIsInByb3Bvc2l0aW9uQWRkcmVzcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyUHJvcG9zaXRpb25zIiwibWV0aG9kcyIsImdldERlcGxveWVkUHJvcG9zaXRpb25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFROzs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7NkNBUW1CLEFBQ2pCO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsbUJBQVgsQUFBOEIsSUFBSyxtQkFBVyxBQUN4RDs7NEJBQU8sQUFDSyxBQUNSO2lEQUFhLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZWLEFBRVUsQUFDYjsyQkFISixBQUFPLEFBR0ksQUFFZDtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBUWQsYUFSYzs7bUNBUVAsQUFBQyw0Q0FBVSxPQUFYLEFBQWtCOzhCQUFsQjtnQ0FBUCxBQUFPLEFBRVY7QUFGVTthQUFBOzs7O2lDQUlGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSx1REFDVSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNDLDJCQUhMLEFBR0ssQUFBSyxBQUNOLHNDQUFBLEFBQUM7eUJBQUQsQUFDYSxBQUNUO3NCQUZKLEFBRVUsQUFDTjsrQkFISixBQUdtQixBQUNmO3lCQUpKOzs4QkFBQTtnQ0FOWixBQUNJLEFBQ0ksQUFJSSxBQVNmO0FBVGU7QUFDSTs7Ozs7Ozs7Ozs7O3VDQTFCaUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLDBCLEFBQWhCLEFBQTBDOztpQ0FBckU7QTtpRUFFQyxFQUFDLG9CLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ2YsQSxBQXhDdUI7O2tCQXdDdkIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVyZW15LnpoYW5nL3dvcmtzcGFjZS9HaXRodWIvYml0YmV0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jeremy.zhang/workspace/Github/bitbet/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jeremy.zhang/workspace/Github/bitbet/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNjlkYzllMjZmYTAzYzY3ZWMwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzMzYzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHtCdXR0b24sIENhcmRHcm91cH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNsYXNzIEJldEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHByb3Bvc2l0aW9uQWRkcmVzcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZFByb3Bvc2l0aW9ucygpLmNhbGwoKTtcbiAgICAgICAgLy8gdmFsdWUgcGFzc2VkIHRvIHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIHtwcm9wb3NpdGlvbkFkZHJlc3N9XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvcG9zaXRpb25zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucHJvcG9zaXRpb25BZGRyZXNzLm1hcCggYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBQcm9wb3NpdGlvbjwvYT4sXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5PcGVuIFByb3Bvc2l0aW9uczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb3Bvc2l0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsnTmV3J31cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249eydhZGQgY2lyY2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249eydyaWdodCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJldEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQUtBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUpBOztBQUFBO0FBU0E7QUFUQTtBQUNBOzs7Ozs7Ozs7Ozs7QUExQkE7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
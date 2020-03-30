'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _PropositionFactory = require('./build/PropositionFactory');

var _PropositionFactory2 = _interopRequireDefault(_PropositionFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contractAddress = '0xA99ed7D4dC171691ccBe9129D3010d1D26624fa7';
var factory = _web2.default.eth.Contract(JSON.parse(_PropositionFactory2.default.interface), contractAddress);

exports.default = factory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIlByb3Bvc2l0aW9uRmFjdG9yeSIsImNvbnRyYWN0QWRkcmVzcyIsImZhY3RvcnkiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQStCLEFBQS9COzs7Ozs7QUFFQSxJQUFNLGtCQUFrQixBQUF4QjtBQUNBLElBQU0sVUFBVSxjQUFLLEFBQUwsSUFBUyxBQUFULFNBQWtCLEtBQUssQUFBTCxNQUFXLDZCQUFtQixBQUE5QixBQUFsQixZQUE0RCxBQUE1RCxBQUFoQixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2plcmVteS56aGFuZy93b3Jrc3BhY2UvR2l0aHViL2JpdGJldCJ9
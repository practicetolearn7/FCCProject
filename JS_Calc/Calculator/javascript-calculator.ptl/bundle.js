'use strict';
(function() {
  /**
   * @param {!AudioNode} Constructor
   * @param {!Function} instance
   * @return {undefined}
   */
  function _classCallCheck$jscomp$0(Constructor, instance) {
    if (!(Constructor instanceof instance)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} props
   * @param {string} obj
   * @return {undefined}
   */
  function _defineProperties$jscomp$0(props, obj) {
    /** @type {number} */
    var index = 0;
    for (; index < obj.length; index++) {
      var desc = obj[index];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(props, _toPropertyKey$jscomp$0(desc.key), desc);
    }
  }
  /**
   * @param {!Function} e
   * @param {!Function} t
   * @param {!Function} o
   * @return {?}
   */
  function _createClass$jscomp$0(e, t, o) {
    return t && _defineProperties$jscomp$0(e.prototype, t), o && _defineProperties$jscomp$0(e, o), Object.defineProperty(e, "prototype", {
      writable : false
    }), e;
  }
  /**
   * @param {string} object
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits$jscomp$0(object, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    object.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : object,
        writable : true,
        configurable : true
      }
    });
    Object.defineProperty(object, "prototype", {
      writable : false
    });
    if (superClass) {
      _setPrototypeOf$jscomp$0(object, superClass);
    }
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function _getPrototypeOf$jscomp$0(object) {
    return _getPrototypeOf$jscomp$0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, _getPrototypeOf$jscomp$0(object);
  }
  /**
   * @param {!Object} target
   * @param {!Object} parent
   * @return {?}
   */
  function _setPrototypeOf$jscomp$0(target, parent) {
    return _setPrototypeOf$jscomp$0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(result, source) {
      return result.__proto__ = source, result;
    }, _setPrototypeOf$jscomp$0(target, parent);
  }
  /**
   * @return {?}
   */
  function _isNativeReflectConstruct$jscomp$0() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {number} type
   * @return {?}
   */
  function _assertThisInitialized$jscomp$0(type) {
    if (void 0 === type) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return type;
  }
  /**
   * @param {undefined} call
   * @param {number} obj
   * @return {?}
   */
  function _possibleConstructorReturn$jscomp$0(call, obj) {
    if (obj && ("object" == typeof obj || "function" == typeof obj)) {
      return obj;
    }
    if (void 0 !== obj) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized$jscomp$0(call);
  }
  /**
   * @param {string} object
   * @return {?}
   */
  function _createSuper$jscomp$0(object) {
    var t = _isNativeReflectConstruct$jscomp$0();
    return function() {
      var _ret;
      var options = _getPrototypeOf$jscomp$0(object);
      if (t) {
        var ctor = _getPrototypeOf$jscomp$0(this).constructor;
        _ret = Reflect.construct(options, arguments, ctor);
      } else {
        _ret = options.apply(this, arguments);
      }
      return _possibleConstructorReturn$jscomp$0(this, _ret);
    };
  }
  /**
   * @param {!Object} obj
   * @param {string} type
   * @return {?}
   */
  function _toPrimitive$jscomp$0(obj, type) {
    if ("object" != typeof obj || null === obj) {
      return obj;
    }
    var self = obj[Symbol.toPrimitive];
    if (void 0 !== self) {
      var proto = self.call(obj, type || "default");
      if ("object" != typeof proto) {
        return proto;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === type ? String : Number)(obj);
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function _toPropertyKey$jscomp$0(e) {
    var x = _toPrimitive$jscomp$0(e, "string");
    return "symbol" == typeof x ? x : String(x);
  }
  /** @type {!RegExp} */
  var isOperator$jscomp$0 = /[x/+\u2011]/;
  /** @type {!RegExp} */
  var endsWithOperator$jscomp$0 = /[x+\u2011/]$/;
  /** @type {!RegExp} */
  var endsWithNegativeSign$jscomp$0 = /\d[x/+\u2011]{1}\u2011$/;
  var clearStyle$jscomp$0 = {
    background : "#ac3939"
  };
  var operatorStyle$jscomp$0 = {
    background : "#666666"
  };
  var equalsStyle$jscomp$0 = {
    background : "#004466",
    position : "absolute",
    height : 130,
    bottom : 5
  };
  var Calculator$jscomp$0 = function(_React$Component$jscomp$0) {
    /**
     * @param {?} value
     * @return {?}
     */
    function Calculator$jscomp$1(value) {
      var handler;
      return _classCallCheck$jscomp$0(this, Calculator$jscomp$1), (handler = _super$jscomp$0.call(this, value)).state = {
        currentVal : "0",
        prevVal : "0",
        formula : "",
        currentSign : "pos",
        lastClicked : ""
      }, handler.maxDigitWarning = handler.maxDigitWarning.bind(_assertThisInitialized$jscomp$0(handler)), handler.handleOperators = handler.handleOperators.bind(_assertThisInitialized$jscomp$0(handler)), handler.handleEvaluate = handler.handleEvaluate.bind(_assertThisInitialized$jscomp$0(handler)), handler.initialize = handler.initialize.bind(_assertThisInitialized$jscomp$0(handler)), handler.handleDecimal = handler.handleDecimal.bind(_assertThisInitialized$jscomp$0(handler)), handler.handleNumbers = 
      handler.handleNumbers.bind(_assertThisInitialized$jscomp$0(handler)), handler;
    }
    _inherits$jscomp$0(Calculator$jscomp$1, _React$Component$jscomp$0);
    var _super$jscomp$0 = _createSuper$jscomp$0(Calculator$jscomp$1);
    return _createClass$jscomp$0(Calculator$jscomp$1, [{
      key : "maxDigitWarning",
      value : function() {
        var that = this;
        this.setState({
          currentVal : "Digit Limit Met",
          prevVal : this.state.currentVal
        });
        setTimeout(function() {
          return that.setState({
            currentVal : that.state.prevVal
          });
        }, 1e3);
      }
    }, {
      key : "handleEvaluate",
      value : function handleEvaluate$jscomp$0() {
        if (!this.state.currentVal.includes("Limit")) {
          var expression$jscomp$2 = this.state.formula;
          for (; endsWithOperator$jscomp$0.test(expression$jscomp$2);) {
            expression$jscomp$2 = expression$jscomp$2.slice(0, -1);
          }
          expression$jscomp$2 = expression$jscomp$2.replace(/x/g, "*").replace(/\u2011/g, "-").replace("--", "+0+0+0+0+0+0+");
          /** @type {number} */
          var answer$jscomp$0 = Math.round(1e12 * eval(expression$jscomp$2)) / 1e12;
          this.setState({
            currentVal : answer$jscomp$0.toString(),
            formula : expression$jscomp$2.replace(/\*/g, "\u22c5").replace(/-/g, "\u2011").replace("+0+0+0+0+0+0+", "\u2011-").replace(/(x|\/|\+)\u2011/, "$1-").replace(/^\u2011/, "-") + "=" + answer$jscomp$0,
            prevVal : answer$jscomp$0,
            evaluated : true
          });
        }
      }
    }, {
      key : "handleOperators",
      value : function(e) {
        if (!this.state.currentVal.includes("Limit")) {
          var str = e.target.value;
          var obj = this.state;
          var value = obj.formula;
          var before = obj.prevVal;
          var context = obj.evaluated;
          this.setState({
            currentVal : str,
            evaluated : false
          });
          if (context) {
            this.setState({
              formula : before + str
            });
          } else {
            if (endsWithOperator$jscomp$0.test(value)) {
              if (endsWithNegativeSign$jscomp$0.test(value)) {
                if ("\u2011" !== str) {
                  this.setState({
                    formula : before + str
                  });
                }
              } else {
                this.setState({
                  formula : (endsWithNegativeSign$jscomp$0.test(value + str) ? value : before) + str
                });
              }
            } else {
              this.setState({
                prevVal : value,
                formula : value + str
              });
            }
          }
        }
      }
    }, {
      key : "handleNumbers",
      value : function(e) {
        if (!this.state.currentVal.includes("Limit")) {
          var obj = this.state;
          var ch = obj.currentVal;
          var val = obj.formula;
          var context = obj.evaluated;
          var px = e.target.value;
          this.setState({
            evaluated : false
          });
          if (ch.length > 21) {
            this.maxDigitWarning();
          } else {
            if (context) {
              this.setState({
                currentVal : px,
                formula : "0" !== px ? px : ""
              });
            } else {
              this.setState({
                currentVal : "0" === ch || isOperator$jscomp$0.test(ch) ? px : ch + px,
                formula : "0" === ch && "0" === px ? "" === val ? px : val : /([^.0-9]0|^0)$/.test(val) ? val.slice(0, -1) + px : val + px
              });
            }
          }
        }
      }
    }, {
      key : "handleDecimal",
      value : function() {
        if (true === this.state.evaluated) {
          this.setState({
            currentVal : "0.",
            formula : "0.",
            evaluated : false
          });
        } else {
          if (!(this.state.currentVal.includes(".") || this.state.currentVal.includes("Limit"))) {
            this.setState({
              evaluated : false
            });
            if (this.state.currentVal.length > 21) {
              this.maxDigitWarning();
            } else {
              if (endsWithOperator$jscomp$0.test(this.state.formula) || "0" === this.state.currentVal && "" === this.state.formula) {
                this.setState({
                  currentVal : "0.",
                  formula : this.state.formula + "0."
                });
              } else {
                this.setState({
                  currentVal : this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
                  formula : this.state.formula + "."
                });
              }
            }
          }
        }
      }
    }, {
      key : "initialize",
      value : function() {
        this.setState({
          currentVal : "0",
          prevVal : "0",
          formula : "",
          currentSign : "pos",
          lastClicked : "",
          evaluated : false
        });
      }
    }, {
      key : "render",
      value : function() {
        return React.createElement("div", null, React.createElement("div", {
          className : "calculator"
        }, React.createElement(Formula$jscomp$0, {
          formula : this.state.formula.replace(/x/g, "\u22c5")
        }), React.createElement(Output$jscomp$0, {
          currentValue : this.state.currentVal
        }), React.createElement(Buttons$jscomp$0, {
          decimal : this.handleDecimal,
          evaluate : this.handleEvaluate,
          initialize : this.initialize,
          numbers : this.handleNumbers,
          operators : this.handleOperators
        })), React.createElement("div", {
          className : "author"
        }, " ", "Copied by ", React.createElement("br", null), React.createElement("a", {
          href : "",
          target : "_blank"
        }, "PTL")));
      }
    }]), Calculator$jscomp$1;
  }(React.Component);
  var Buttons$jscomp$0 = function(canCreateDiscussions) {
    /**
     * @return {?}
     */
    function e() {
      return _classCallCheck$jscomp$0(this, e), t.apply(this, arguments);
    }
    _inherits$jscomp$0(e, React.Component);
    var t = _createSuper$jscomp$0(e);
    return _createClass$jscomp$0(e, [{
      key : "render",
      value : function() {
        return React.createElement("div", null, React.createElement("button", {
          className : "jumbo",
          id : "clear",
          onClick : this.props.initialize,
          style : clearStyle$jscomp$0,
          value : "AC"
        }, "AC"), React.createElement("button", {
          id : "divide",
          onClick : this.props.operators,
          style : operatorStyle$jscomp$0,
          value : "/"
        }, "/"), React.createElement("button", {
          id : "multiply",
          onClick : this.props.operators,
          style : operatorStyle$jscomp$0,
          value : "x"
        }, "x"), React.createElement("button", {
          id : "seven",
          onClick : this.props.numbers,
          value : "7"
        }, "7"), React.createElement("button", {
          id : "eight",
          onClick : this.props.numbers,
          value : "8"
        }, "8"), React.createElement("button", {
          id : "nine",
          onClick : this.props.numbers,
          value : "9"
        }, "9"), React.createElement("button", {
          id : "subtract",
          onClick : this.props.operators,
          style : operatorStyle$jscomp$0,
          value : "\u2011"
        }, "\u2011"), React.createElement("button", {
          id : "four",
          onClick : this.props.numbers,
          value : "4"
        }, "4"), React.createElement("button", {
          id : "five",
          onClick : this.props.numbers,
          value : "5"
        }, "5"), React.createElement("button", {
          id : "six",
          onClick : this.props.numbers,
          value : "6"
        }, "6"), React.createElement("button", {
          id : "add",
          onClick : this.props.operators,
          style : operatorStyle$jscomp$0,
          value : "+"
        }, "+"), React.createElement("button", {
          id : "one",
          onClick : this.props.numbers,
          value : "1"
        }, "1"), React.createElement("button", {
          id : "two",
          onClick : this.props.numbers,
          value : "2"
        }, "2"), React.createElement("button", {
          id : "three",
          onClick : this.props.numbers,
          value : "3"
        }, "3"), React.createElement("button", {
          className : "jumbo",
          id : "zero",
          onClick : this.props.numbers,
          value : "0"
        }, "0"), React.createElement("button", {
          id : "decimal",
          onClick : this.props.decimal,
          value : "."
        }, "."), React.createElement("button", {
          id : "equals",
          onClick : this.props.evaluate,
          style : equalsStyle$jscomp$0,
          value : "="
        }, "="));
      }
    }]), e;
  }();
  var Output$jscomp$0 = function(canCreateDiscussions) {
    /**
     * @return {?}
     */
    function e() {
      return _classCallCheck$jscomp$0(this, e), t.apply(this, arguments);
    }
    _inherits$jscomp$0(e, React.Component);
    var t = _createSuper$jscomp$0(e);
    return _createClass$jscomp$0(e, [{
      key : "render",
      value : function() {
        return React.createElement("div", {
          className : "outputScreen",
          id : "display"
        }, this.props.currentValue);
      }
    }]), e;
  }();
  var Formula$jscomp$0 = function(canCreateDiscussions) {
    /**
     * @return {?}
     */
    function e() {
      return _classCallCheck$jscomp$0(this, e), t.apply(this, arguments);
    }
    _inherits$jscomp$0(e, React.Component);
    var t = _createSuper$jscomp$0(e);
    return _createClass$jscomp$0(e, [{
      key : "render",
      value : function() {
        return React.createElement("div", {
          className : "formulaScreen"
        }, this.props.formula);
      }
    }]), e;
  }();
  ReactDOM.render(React.createElement(Calculator$jscomp$0, null), document.getElementById("app"));
})();


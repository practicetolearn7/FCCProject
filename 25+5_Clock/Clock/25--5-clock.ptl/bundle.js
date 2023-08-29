'use strict';
!function() {
  /**
   * @param {!AudioNode} x
   * @param {!Function} t
   * @return {undefined}
   */
  function e(x, t) {
    if (!(x instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} e
   * @param {string} input
   * @return {undefined}
   */
  function t(e, input) {
    /** @type {number} */
    var i = 0;
    for (; i < input.length; i++) {
      var d = input[i];
      d.enumerable = d.enumerable || false;
      /** @type {boolean} */
      d.configurable = true;
      if ("value" in d) {
        /** @type {boolean} */
        d.writable = true;
      }
      Object.defineProperty(e, parse(d.key), d);
    }
  }
  /**
   * @param {!Function} p
   * @param {!Function} n
   * @param {!Function} a
   * @return {?}
   */
  function i(p, n, a) {
    return n && t(p.prototype, n), a && t(p, a), Object.defineProperty(p, "prototype", {
      writable : false
    }), p;
  }
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {number} value
   * @return {?}
   */
  function set(obj, key, value) {
    return (key = parse(key)) in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @param {!Function} fn
   * @param {!Object} t
   * @return {undefined}
   */
  function factory(fn, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    fn.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : fn,
        writable : true,
        configurable : true
      }
    });
    Object.defineProperty(fn, "prototype", {
      writable : false
    });
    if (t) {
      f(fn, t);
    }
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function resolve(name) {
    return resolve = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(node) {
      return node.__proto__ || Object.getPrototypeOf(node);
    }, resolve(name);
  }
  /**
   * @param {!Array} t
   * @param {!Object} name
   * @return {?}
   */
  function f(t, name) {
    return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, source) {
      return e.__proto__ = source, e;
    }, f(t, name);
  }
  /**
   * @param {number} el
   * @return {?}
   */
  function $(el) {
    if (void 0 === el) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return el;
  }
  /**
   * @param {undefined} $el
   * @param {number} value
   * @return {?}
   */
  function filter($el, value) {
    if (value && ("object" == typeof value || "function" == typeof value)) {
      return value;
    }
    if (void 0 !== value) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return $($el);
  }
  /**
   * @param {string} source
   * @return {?}
   */
  function exec(source) {
    var t = function() {
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
    }();
    return function() {
      var error;
      var value = resolve(source);
      if (t) {
        var ctor = resolve(this).constructor;
        error = Reflect.construct(value, arguments, ctor);
      } else {
        error = value.apply(this, arguments);
      }
      return filter(this, error);
    };
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function parse(name) {
    var x = function(obj, type) {
      if ("object" != typeof obj || null === obj) {
        return obj;
      }
      var self = obj[Symbol.toPrimitive];
      if (void 0 !== self) {
        var value = self.call(obj, type || "default");
        if ("object" != typeof value) {
          return value;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === type ? String : Number)(obj);
    }(name, "string");
    return "symbol" == typeof x ? x : String(x);
  }
  var NumberPicker = function(canCreateDiscussions) {
    /**
     * @return {?}
     */
    function t() {
      return e(this, t), call.apply(this, arguments);
    }
    factory(t, React.Component);
    var call = exec(t);
    return i(t, [{
      key : "render",
      value : function() {
        return React.createElement("div", {
          className : "length-control"
        }, React.createElement("div", {
          id : this.props.titleID
        }, this.props.title), React.createElement("button", {
          className : "btn-level",
          id : this.props.minID,
          onClick : this.props.onClick,
          value : "-"
        }, React.createElement("i", {
          className : "fa fa-arrow-down fa-2x"
        })), React.createElement("div", {
          className : "btn-level",
          id : this.props.lengthID
        }, this.props.length), React.createElement("button", {
          className : "btn-level",
          id : this.props.addID,
          onClick : this.props.onClick,
          value : "+"
        }, React.createElement("i", {
          className : "fa fa-arrow-up fa-2x"
        })));
      }
    }]), t;
  }();
  var RedBox = function(canCreateDiscussions) {
    /**
     * @param {?} a
     * @return {?}
     */
    function callback(a) {
      var i;
      return e(this, callback), (i = ret.call(this, a)).state = {
        brkLength : 5,
        seshLength : 25,
        timerState : "stopped",
        timerType : "Session",
        timer : 1500,
        intervalID : "",
        alarmColor : {
          color : "white"
        }
      }, i.setBrkLength = i.setBrkLength.bind($(i)), i.setSeshLength = i.setSeshLength.bind($(i)), i.lengthControl = i.lengthControl.bind($(i)), i.timerControl = i.timerControl.bind($(i)), i.beginCountDown = i.beginCountDown.bind($(i)), i.decrementTimer = i.decrementTimer.bind($(i)), i.phaseControl = i.phaseControl.bind($(i)), i.warning = i.warning.bind($(i)), i.buzzer = i.buzzer.bind($(i)), i.switchTimer = i.switchTimer.bind($(i)), i.clockify = i.clockify.bind($(i)), i.reset = i.reset.bind($(i)), 
      i;
    }
    factory(callback, React.Component);
    var ret = exec(callback);
    return i(callback, [{
      key : "setBrkLength",
      value : function(event) {
        this.lengthControl("brkLength", event.currentTarget.value, this.state.brkLength, "Session");
      }
    }, {
      key : "setSeshLength",
      value : function(event) {
        this.lengthControl("seshLength", event.currentTarget.value, this.state.seshLength, "Break");
      }
    }, {
      key : "lengthControl",
      value : function(i, key, val, index) {
        if ("running" !== this.state.timerState) {
          if (this.state.timerType === index) {
            if ("-" === key && 1 !== val) {
              this.setState(set({}, i, val - 1));
            } else {
              if ("+" === key && 60 !== val) {
                this.setState(set({}, i, val + 1));
              }
            }
          } else {
            if ("-" === key && 1 !== val) {
              var d;
              this.setState((set(d = {}, i, val - 1), set(d, "timer", 60 * val - 60), d));
            } else {
              if ("+" === key && 60 !== val) {
                var d;
                this.setState((set(d = {}, i, val + 1), set(d, "timer", 60 * val + 60), d));
              }
            }
          }
        }
      }
    }, {
      key : "timerControl",
      value : function() {
        if ("stopped" === this.state.timerState) {
          this.beginCountDown();
          this.setState({
            timerState : "running"
          });
        } else {
          this.setState({
            timerState : "stopped"
          });
          if (this.state.intervalID) {
            this.state.intervalID.cancel();
          }
        }
      }
    }, {
      key : "beginCountDown",
      value : function() {
        var find;
        var dtsDiff;
        var runClearTimeout;
        var duration;
        var _takingTooLongTimeout;
        var gamesloaded;
        var o = this;
        this.setState({
          intervalID : (find = function() {
            o.decrementTimer();
            o.phaseControl();
          }, dtsDiff = 1E3, duration = (new Date).getTime() + dtsDiff, _takingTooLongTimeout = null, gamesloaded = function() {
            return duration = duration + dtsDiff, _takingTooLongTimeout = setTimeout(gamesloaded, duration - (new Date).getTime()), find();
          }, runClearTimeout = function() {
            return clearTimeout(_takingTooLongTimeout);
          }, _takingTooLongTimeout = setTimeout(gamesloaded, duration - (new Date).getTime()), {
            cancel : runClearTimeout
          })
        });
      }
    }, {
      key : "decrementTimer",
      value : function() {
        this.setState({
          timer : this.state.timer - 1
        });
      }
    }, {
      key : "phaseControl",
      value : function() {
        var msg = this.state.timer;
        this.warning(msg);
        this.buzzer(msg);
        if (msg < 0) {
          if (this.state.intervalID) {
            this.state.intervalID.cancel();
          }
          if ("Session" === this.state.timerType) {
            this.beginCountDown();
            this.switchTimer(60 * this.state.brkLength, "Break");
          } else {
            this.beginCountDown();
            this.switchTimer(60 * this.state.seshLength, "Session");
          }
        }
      }
    }, {
      key : "warning",
      value : function(recB) {
        if (recB < 61) {
          this.setState({
            alarmColor : {
              color : "#a50d0d"
            }
          });
        } else {
          this.setState({
            alarmColor : {
              color : "white"
            }
          });
        }
      }
    }, {
      key : "buzzer",
      value : function(recB) {
        if (0 === recB) {
          this.audioBeep.play();
        }
      }
    }, {
      key : "switchTimer",
      value : function(time, type) {
        this.setState({
          timer : time,
          timerType : type,
          alarmColor : {
            color : "white"
          }
        });
      }
    }, {
      key : "clockify",
      value : function() {
        if (this.state.timer < 0) {
          return "00:00";
        }
        /** @type {number} */
        var seconds = Math.floor(this.state.timer / 60);
        /** @type {number} */
        var d1 = this.state.timer - 60 * seconds;
        return (seconds = seconds < 10 ? "0" + seconds : seconds) + ":" + (d1 = d1 < 10 ? "0" + d1 : d1);
      }
    }, {
      key : "reset",
      value : function() {
        this.setState({
          brkLength : 5,
          seshLength : 25,
          timerState : "stopped",
          timerType : "Session",
          timer : 1500,
          intervalID : "",
          alarmColor : {
            color : "white"
          }
        });
        if (this.state.intervalID) {
          this.state.intervalID.cancel();
        }
        this.audioBeep.pause();
        /** @type {number} */
        this.audioBeep.currentTime = 0;
      }
    }, {
      key : "render",
      value : function() {
        var recompile_shader = this;
        return React.createElement("div", null, React.createElement("div", {
          className : "main-title"
        }, "25 + 5 Clock"), React.createElement(NumberPicker, {
          addID : "break-increment",
          length : this.state.brkLength,
          lengthID : "break-length",
          minID : "break-decrement",
          onClick : this.setBrkLength,
          title : "Break Length",
          titleID : "break-label"
        }), React.createElement(NumberPicker, {
          addID : "session-increment",
          length : this.state.seshLength,
          lengthID : "session-length",
          minID : "session-decrement",
          onClick : this.setSeshLength,
          title : "Session Length",
          titleID : "session-label"
        }), React.createElement("div", {
          className : "timer",
          style : this.state.alarmColor
        }, React.createElement("div", {
          className : "timer-wrapper"
        }, React.createElement("div", {
          id : "timer-label"
        }, this.state.timerType), React.createElement("div", {
          id : "time-left"
        }, this.clockify()))), React.createElement("div", {
          className : "timer-control"
        }, React.createElement("button", {
          id : "start_stop",
          onClick : this.timerControl
        }, React.createElement("i", {
          className : "fa fa-play fa-2x"
        }), React.createElement("i", {
          className : "fa fa-pause fa-2x"
        })), React.createElement("button", {
          id : "reset",
          onClick : this.reset
        }, React.createElement("i", {
          className : "fa fa-refresh fa-2x"
        }))), React.createElement("div", {
          className : "author"
        }, " ", "Designed and Coded by ", React.createElement("br", null), React.createElement("a", {
          href : "",
          target : ""
        }, "PTL")), React.createElement("audio", {
          id : "beep",
          preload : "auto",
          ref : function(name) {
            /** @type {!Object} */
            recompile_shader.audioBeep = name;
          },
          src : "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        }));
      }
    }]), callback;
  }();
  ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(RedBox, null));
}();


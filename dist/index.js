(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ReactPaint = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ReactPaint = function (_Component) {
    _inherits(ReactPaint, _Component);

    function ReactPaint() {
      var _ref;

      _classCallCheck(this, ReactPaint);

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactPaint.__proto__ || Object.getPrototypeOf(ReactPaint)).call.apply(_ref, [this].concat(props)));

      _this.mouseDown = function (e) {
        if (!_this.state.mouseDown) _this.setState({ mouseDown: true });

        _this.setState({
          mouseLoc: [e.pageX || e.touches[0].pageX, e.pageY || e.touches[0].pageY]
        });

        _this.context.moveTo((e.pageX || e.touches[0].pageX) - _this.bb.left, (e.pageY || e.touches[0].pageY) - _this.bb.top);
      };

      _this.mouseUp = function () {
        return _this.setState({ mouseDown: false });
      };

      _this.mouseMove = function (e) {
        if (_this.state.mouseDown) {
          // prevent IOS scroll when drawing
          if (e.touches) e.preventDefault();

          if ((e.pageX || e.touches[0].pageX) > 0 && (e.pageY || e.touches[0].pageY) < _this.props.height) {
            _this.context.lineTo((e.pageX || e.touches[0].pageX) - _this.bb.left, (e.pageY || e.touches[0].pageY) - _this.bb.top);

            _this.context.stroke();
          }
        }
      };

      _this.state = {
        mouseDown: false,
        mouseLoc: [0, 0]
      };
      return _this;
    }

    _createClass(ReactPaint, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props;
        var brushCol = _props.brushCol;
        var lineWidth = _props.lineWidth;


        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = brushCol;
        this.context.lineJoin = this.context.lineCap = 'round';

        this.bb = this.canvas.getBoundingClientRect();
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        var _props2 = this.props;
        var brushCol = _props2.brushCol;
        var lineWidth = _props2.lineWidth;


        if (brushCol !== nextProps.brushCol || lineWidth !== nextProps.lineWidth) {
          this.context.lineWidth = nextProps.lineWidth;
          this.context.strokeStyle = nextProps.brushCol;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props;
        var width = _props3.width;
        var height = _props3.height;
        var onDraw = _props3.onDraw;
        var style = _props3.style;
        var className = _props3.className;


        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement('canvas', {
            ref: function ref(c) {
              return _this2.canvas = c;
            },
            className: className + '__canvas',

            width: width,
            height: height,

            onClick: onDraw,

            style: Object.assign({}, style, {
              width: this.props.width,
              height: this.props.height
            }),

            onMouseDown: this.mouseDown,
            onTouchStart: this.mouseDown,

            onMouseUp: this.mouseUp,
            onTouchEnd: this.mouseUp,

            onMouseMove: this.mouseMove,
            onTouchMove: this.mouseMove
          })
        );
      }
    }]);

    return ReactPaint;
  }(_react.Component);

  ReactPaint.propTypes = {
    className: _react.PropTypes.string,
    style: _react.PropTypes.object.isRequired,
    height: _react.PropTypes.number,
    width: _react.PropTypes.number,
    brushCol: _react.PropTypes.string,
    lineWidth: _react.PropTypes.number,
    onDraw: _react.PropTypes.func
  };
  ReactPaint.defaultProps = {
    className: 'react-paint',
    style: {},
    height: 500,
    width: 500,
    brushCol: '#ff6347',
    lineWidth: 10,
    onDraw: function onDraw() {}
  };
  exports.default = ReactPaint;
  exports.ReactPaint = ReactPaint;
});
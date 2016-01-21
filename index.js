'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6*/
/**
 * @AUTHORS oliviercolonna@gmail.com
 * Copyright(c) 2016 Olivier Colonna
 * MIT Licensed
 */

var ReactContainer = function (_React$Component) {
  _inherits(ReactContainer, _React$Component);

  function ReactContainer(props) {
    _classCallCheck(this, ReactContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactContainer).call(this, props));

    var _this$props = _this.props;
    var scrollable = _this$props.scrollable;
    var config = _this$props.config;
    var direction = _this$props.direction;
    var hidden = _this$props.hidden;
    var floating = _this$props.floating;
    var height = _this$props.height;
    var width = _this$props.width;

    _this.applyScroll(config, direction, scrollable);
    _this.applyHidden(config, hidden);
    _this.setSize(config, height, width);
    _this.applyFloating(config, floating);

    _this.state = {};
    return _this;
  }

  /**
   * Make this container floatable, position absolute.
   * @param {object} config
   * @param {object} floating
   */

  _createClass(ReactContainer, [{
    key: 'applyFloating',
    value: function applyFloating(config, floating) {
      if (typeof floating !== 'undefined') {
        config.position = 'absolute';
        config.top = floating.top;
        config.bottom = floating.bottom;
        config.left = floating.left;
        config.right = floating.right;
      }
    }

    /**
     * Make the container scrollable.
     * @param {object} config
     * @param {string} direction
     * @param {boolean} scrollable
     */

  }, {
    key: 'applyScroll',
    value: function applyScroll(config, direction, scrollable) {
      var y = 'overflowY';
      var x = 'overflowX';

      if (scrollable) {
        if (direction === 'vertical') {
          config[y] = 'scroll';
          config[x] = 'hidden';
        } else if (direction === 'horizontal') {
          config[y] = 'hidden';
          config[x] = 'scroll';
        } else if (direction === 'both') {
          config[y] = 'scroll';
          config[x] = 'scroll';
        }
      }

      config.position = 'relative';
    }

    /**
     * Hide the container, apply a css display: none.
     * @param {object} config
     * @param {boolean} hidden
     */

  }, {
    key: 'applyHidden',
    value: function applyHidden(config, hidden) {
      config.display = hidden ? 'none' : 'block';
    }

    /**
     * Define height and width of the container by default both are 100%.
     * @param {object} config
     * @param {number} h
     * @param {number} w
     */

  }, {
    key: 'setSize',
    value: function setSize(config, h, w) {
      if (h || w) {
        config.height = h;
        config.width = w;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var config = _props.config;
      var cls = _props.cls;
      var children = _props.children;
      var id = _props.id;

      return _react2.default.createElement(
        'div',
        { id: id, ref: cls, className: 'container ' + cls, style: config },
        children
      );
    }
  }]);

  return ReactContainer;
}(_react2.default.Component);

;

/**
 * Default properties of the container.
 */
ReactContainer.defaultProps = {
  hidden: false,
  id: void 0,
  cls: ''
};

/**
 * Properties types
 */
ReactContainer.propTypes = {
  cls: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  scrollable: _react2.default.PropTypes.bool,
  direction: _react2.default.PropTypes.oneOf(['vertical', 'horizontal', 'both']),
  config: _react2.default.PropTypes.object,
  hidden: _react2.default.PropTypes.bool,
  height: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.number,
  floating: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.object])
};

exports.default = ReactContainer;
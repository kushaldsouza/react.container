/*jshint esversion:6*/
/**
 * @AUTHORS oliviercolonna@gmail.com
 * Copyright(c) 2016 Olivier Colonna
 * MIT Licensed
 * @class ReactContainer
 */
import React from 'react';

class ReactContainer extends React.Component {

  constructor (props) {
    super(props);
    let { scrollable, config, direction, hidden, floating, height, width} = this.props;

    this.applyScroll(config, direction, scrollable);
    this.applyHidden(config, hidden);
    this.setSize(config, height, width);
    this.applyFloating(config, floating);

    this.state = {};
  }

  /**
   * Make this container floatable, position absolute.
   * @param {object} config
   * @param {object} floating
   */
  applyFloating (config, floating) {
    if(typeof floating !== 'undefined') {
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
  applyScroll (config, direction, scrollable) {
    let scrolling = (direction === 'vertical') ? 'overflowY' : 'overflowX';
    config[scrolling] = scrollable ? 'scroll' : 'visible';
    config.position = 'relative';
  }

  /**
   * Hide the container, apply a css display: none.
   * @param {object} config
   * @param {boolean} hidden
   */
  applyHidden (config, hidden) {
    config.display = hidden ? 'none' : 'block';
  }

  /**
   * Define height and width of the container by default both are 100%.
   * @param {object} config
   * @param {number} h
   * @param {number} w
   */
  setSize (config, h, w) {
    config.height = h;
    config.width = w;
  }

  render () {
    const { config, cls, children, id } = this.props;

    return (
      <div id={id} ref={cls} className={'container ' + cls} style={config}>
        {children}
      </div>
    );
  }

};

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
  cls: React.PropTypes.string,
  children: React.PropTypes.node,
  scrollable: React.PropTypes.bool,
  direction: React.PropTypes.oneOf(['vertical', 'horizontal']),
  style: React.PropTypes.object,
  hidden: React.PropTypes.bool,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  floating: React.PropTypes.bool
};

export default ReactContainer;

/**
 *
 * <Container scrollable direction={'vertical'} />
 *
 */
import React from 'react';

class Container extends React.Component {

  constructor (props) {
    super(props);
    this.props.direction === 'veritcal' ? this.style.overflowY : this.style.overflowX;
    this.style.overflowY = scrollable ? 'scroll' : 'visible';
    this.state = {};
  }

  render () {
    const { config, style, cls, children, scrollable } = this.props;
    Object.assign(style, config);

    return (
      <div ref={cls} className={cls} style={style}>
        {children}
      </div>
    );
  }

};

Container.defaultProps = {
  hidden: false,
  id: void 0,
  cls: 'container',
  style: {
    padding: 10,
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'block'
  }
};

Container.propTypes = {
  cls: React.PropTypes.string
};

export default Container;

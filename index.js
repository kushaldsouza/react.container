import React from 'react';

class Container extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const items = this.props.children((item) => {
      return item;
    });
    return {
      <div className={this.props.cls}>
        {items}
      </div>
    };
  }

}

Container.defaultProps = {
  height: null,
  width: null,
  hidden: false,
  id: void 0,
  cls: 'container',
  padding: null,
  style: null
};

Container.propTypes = {
  cls: React.PropTypes.string
};

export default Container;

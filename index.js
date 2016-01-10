import React from 'react';

class Container extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return {
      <div></div>
    };
  }

}

Container.defaultProps = {
  height: null,
  width: null,
  hidden: false,
  id: void 0,
  cls: null,
  padding: null,
  style: null
};

Container.propTypes = {};

export default Container;

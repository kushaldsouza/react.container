 /*jshint esversion:6*/
 /**
  * <ReactContainer scrollable direction={'vertical'} style={config}/>
  * @class ReactContainer
  */
 import React from 'react';

 class ReactContainer extends React.Component {

   constructor (props) {
     super(props);
     let { style, scrollable, config, direction, hidden } = this.props;
     let scrolling = (direction === 'vertical') ? 'overflowY' : 'overflowX';
     style[scrolling] = scrollable ? 'scroll' : 'visible';
     style.display = hidden ? 'none' : 'block';
     Object.assign(style, config);
     this.state = {};
   }

   render () {
     const { config, style, cls, children, id } = this.props;

     return (
       <div id={id} ref={cls} className={cls} style={style}>
         {children}
       </div>
     );
   }

 };

 ReactContainer.defaultProps = {
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

 ReactContainer.propTypes = {
   cls: React.PropTypes.string,
   children: React.PropTypes.node,
   scrollable: React.PropTypes.bool,
   direction: React.PropTypes.oneOf(['vertical', 'horizontal']),
   style: React.PropTypes.object
 };

 export default ReactContainer;

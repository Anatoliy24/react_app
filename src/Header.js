import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component{
  static propTypes = {
    items: PropTypes.array.isRequired
  };
  render(){
    console.log('items', this.props.items);
    return(
      <div className="link">
        {this.props.items.map((item, index) =>
          <a href="{item.link}" key={index}>{item.label}</a>
        )}
      </div>
    );

  }
}

export default Header;


// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
//
//
// class Header extends Component{
//   static propTypes = {
//     items: propTypes.array.isRequired
//   };
//
//
//
//   render() {
//     console.log(this.props.items);
//
//     return (
//       <div>
//         {this.props.items.map((item, index)=>
//         <a href={item.link} key={index}>{item.label}</a>
//         )}
//
//       </div>
//     )
//
//   }
// }
//
//
// export default Header;


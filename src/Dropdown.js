import React, {Component} from 'react';

class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {isOpenend: false}
  }

  toggleState(){
    this.setState({isOpenend:!this.state.isOpenend});
  }

  render() {
    console.log(this.state.isOpenend);
    let dropdownText;
    if (this.state.isOpenend) {
      dropdownText = <div>Here Dropdown</div>;
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
        Its dropdown, baby
        {dropdownText}
      </div>
    )
  }
}


export default Dropdown;
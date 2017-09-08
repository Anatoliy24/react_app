import React, {Component} from 'react';
import './RegistrationForm.css'


class RegistrationForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
    handleSubmit(event){
      event.preventDefault();
      console.log('Отправка формы');
    }
    handleChangeEmail(event){
      console.log('Изменения input', event.target.value);
      this.setState({email:event.target.value});
    }


  render(){
    return(
        <form  onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className="emailField"
          />
          <button className="submitBtn">Save</button>
        </form>
    );

  }
}

export default RegistrationForm;


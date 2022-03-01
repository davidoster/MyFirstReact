'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
        <button>Submit</button>
    );
  }
}

class UserNameInput extends React.Component {
    render() {
        return (
            <div>
                <label for="username">Username</label>
                <input id="username" />
            </div>
            
        );
    }
}


class EmailInput extends React.Component {

    render() {
        return(
            <input />
        );
    }
}

class GenericInput extends React.Component {
    constructor(props) {
        // { id: "username", label: "Username", type: "text" }
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}: </label>
                <input id={this.props.id} type={this.props.type} />
            </div>
        );
    };
}

class LoginForm extends React.Component {

}

const username = document.getElementById("myinput2");
ReactDOM.render(
    React.createElement( GenericInput, { id: "username", label: "Username", type: "text" } ), 
    username
); 

const password = document.getElementById("myinput");
ReactDOM.render(
    e( GenericInput, { id: "password", label: "Password", type: "password" } ), 
    password
); 

// const userNameInput = document.getElementById("myinput2");
// ReactDOM.render(e(UserNameInput), userNameInput);

// const emailInputContainer = document.querySelector("#myinput");
// ReactDOM.render(e(EmailInput), emailInputContainer);

const domContainer = document.getElementById("like_button_container");
ReactDOM.render(e(LikeButton), domContainer);


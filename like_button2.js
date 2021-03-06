'use strict';

const e = React.createElement;

function myAlert() { alert("Hello"); }
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
        <button onClick={myAlert}>{ this.props.a.textEN } </button>
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
        // console.log(props);
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.a.id}>{this.props.a.label}: </label>
                <input id={this.props.a.id} type={this.props.a.type} />
            </div>
        );
    };
}

function IAmNobody(props) {
    console.log(props);
    return(
        <div>{props.a.someText}</div>
    );
}

class LoginForm extends React.Component {
    constructor(props) {
        // console.log(props);
        super(props);
    }

    render() {
        if(this.props.b.someBool) {
            return (<IAmNobody a={this.props.b}/>);
        } else {
            return (
                <form id={this.props.form.id} method={this.props.form.method} action={this.props.form.action} >
                    <GenericInput a={this.props.input1} b={this.props.b} /> 
                    <GenericInput a={this.props.input2} />
                    <LikeButton a={this.props.button} />    
                </form>
            );
        }
        
    }
}

ReactDOM.render(
    React.createElement(LoginForm, { 
        form: { id: 'myloginform', method: 'GET', action: '#'},
        input1: { id: "username", label: "Username", type: "text" }, 
        input2: { id: "password", label: "Password", type: "password" },  
        button: { textGR: '??????????????', textEN: 'Login' },
        b: { someText: 'Hello', anInt: 100, someBool: false}
    }),
    document.getElementById('content')
);

// const username = document.getElementById("myinput2");
// ReactDOM.render(
//     React.createElement( GenericInput, { id: "username", label: "Username", type: "text" } ), 
//     document.getElementById("myinput2")
// ); 

// const password = document.getElementById("myinput");
// ReactDOM.render(
//     e( GenericInput, { id: "password", label: "Password", type: "password" } ), 
//     password
// ); 

// const userNameInput = document.getElementById("myinput2");
// ReactDOM.render(e(UserNameInput), userNameInput);

// const emailInputContainer = document.querySelector("#myinput");
// ReactDOM.render(e(EmailInput), emailInputContainer);

// const domContainer = document.getElementById("like_button_container");
// ReactDOM.render(e(LikeButton), domContainer);


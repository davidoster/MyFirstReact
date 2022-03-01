'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }; 
    }

    render() {
        return e("input", { type: 'email', placeholder: "your email" } );
    }

}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

const inputContainer = document.getElementById('myinput');
ReactDOM.render(e(EmailInput), inputContainer);
